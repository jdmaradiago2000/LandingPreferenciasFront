
import { Component, Input, OnInit, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';

import { TokenService } from 'src/app/services/token.service';

import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';


@Component({
  selector: 'app-modal-token',
  templateUrl: './modal-token.component.html',
  styleUrls: ['./modal-token.component.css']
})
export class ModalTokenComponent implements OnInit {
  @Input() numero: string;
  @Input() message: string;
  @Input() cedula: string;

  @Input() timer: NodeJS.Timer;

  @Output()
  messageEvent = new EventEmitter<boolean>();

  Form: FormGroup;

  public image: string = "entidad-no-registra-pagos";
  public textButton: string = "Cancelar";
  public show: boolean = false;
  public Intentos: number = 2;
  public tryTokenUntyped: number;
  public tryToken: number;
  public durationTokenUntyped: number;
  public durationToken: number;
  public durationFirstToken: number;
  coountChanges: number = 0;
  trysFails: number = 3;
  inputView = true;
  countSentTokens : number = 0 ;
  // timers
  public TimerFirstToken: NodeJS.Timer;
  public fechaDesactivacion: Date;


  @ViewChild('openInfo')
  private openInfo: TemplateRef<any>;



  constructor(private modalConfirm: NgbModal, private fb: FormBuilder, private TokenSvc: TokenService, private router: Router, private loaderService: LoaderService,) {
    this.Form = this.fb.group({
      'InToken': ["", Validators.required]
    });
    
  }


  ngOnInit(): void {
    //loading parametrics values trys and times in minutes.
    // crear el tiempo de espera 
    this.image = "ic_warning.png";
    this.textButton = "Cancelar";
    this.show = true;
    // validar primeras indicaciones cuando no ingrese nada.
    this.validTimeFirstToken(this.openInfo);

    this.txtToken.valueChanges.subscribe((token: string) => {
      clearTimeout(this.TimerFirstToken);      
      // aqui lo del constructor
      this.getTrysTokenParametric(this.openInfo).subscribe((x)=>{
        this.coountChanges = x;
      });
      if (token.length == 4) {
        // me cierra el modal.
      
        // validar token y hacer la logica
        var data = {
          Destinatario: this.numero,
          Token: token
        }
        this.loaderService.show();
        this.delay(500);
        if (this.trysFails > 0) {
          this.trysFails -= 1;
          this.validationTokens(data, this.trysFails, this.openInfo).subscribe((x => {
            if (x) {
              //redireccionar a la pagina que esta haciendo david
                            
              this.message ="token correcto redireccionar aqui"; 
              // crear data nueva;
              
              var datas = {
                Accion: "El usuario ha ingresado un token correcto",
                CedulaCliente : this.cedula
              }
              this.addLogToken(datas);
              this.loaderService.hide();
              location.reload();
            } else {
              // enviar mensaje de token invalido.     
              this.message = "El código ingresado está errado, por favor ingresa de nuevo el código aquí:"
              var datas = {
                Accion: "El usuario ha ingresado un token incorrecto",
                CedulaCliente : this.cedula
              }
              this.addLogToken(datas);

              this.loaderService.hide();
              if (this.trysFails == 0) {
                this.trysFails = 3 ; 
                this.message = "Has superado el máximo número de intentos para ingresar el código de seguridad, se ha enviado un nuevo código a tu línea móvil, por favor ingresa el código enviado aquí:";
                this.countSentTokens += 1 ;
                console.log("aumenta el envio de tonkesn");
                console.log(this.countSentTokens);
                if( this.countSentTokens<=this.coountChanges){
                  
                  var datas = {
                    Accion: "El usuario ha superado el maximo de intentos para ingresar el codigo de seguridad y se ha generado un nuevo token",
                    CedulaCliente : this.cedula
                  }
                  this.addLogToken(datas);
                  // permitir enviar y remover
                  var data = {
                    Destinatario: this.numero
                  }
                  this.disableTokensNUmber(data);
                  this.generateTokenParametric(data,this.openInfo);

                }else{
                  // innsert service de bloqueo cedula.
                  
                  var datas = {
                    Accion: "El usuario ha superado el maximo de envio de token y se ha bloqueado el ingreso a la landing",
                    CedulaCliente : this.cedula
                  }
                  this.addLogToken(datas);
                  
                  this.addBlock(this.cedula);
                  this.openModalBloqueo(this.openInfo);
                  
                }
                
                this.loaderService.hide();

              }
            }
          }));
        }
      }
    });
  }
  validationTokens(data: any, trys: number, openInfo): Observable<boolean> {
    // usar trys para validar la cantidad.                    
    let value: boolean;
    var subject = new Subject<boolean>();
    this.TokenSvc.validateToken(data).subscribe(
      result => {
        value = result;
        subject.next(value);
      }, error => {
        this.message = "Ha ocurrido un error";
        this.modalConfirm.open(openInfo, { centered: true });
      });
    return subject.asObservable();

  }


  get txtToken(): FormArray {
    return this.Form.get('InToken') as FormArray // NOSONAR
  }


  generateTokenParametric(data: any, openInfo: any) {
    this.TokenSvc.generateToken(data).subscribe(
      result => {
        this.fechaDesactivacion = result;

      }, error => {
        this.message = "En este momento no es posible generar su token de seguridad";
        this.modalConfirm.open(openInfo, { centered: true });
      });
  }


  generateTokenParametricUmtyped(data: any, openInfo: any) {
    this.TokenSvc.generateTokenUntyped(data).subscribe(
      result => {
        this.fechaDesactivacion = result;
      }, error => {
        this.message = "En este momento no es posible generar su token de seguridad";
        this.modalConfirm.open(openInfo, { centered: true });
      });
  }

  disableTokensNUmber(data: any) {
    this.TokenSvc.desactiveToken(data).subscribe(
      result => {
        return true;
      });
  }

  getTrysTokenParametricUmtyped(openInfo: any): Observable<number> {
    let value: number;
    var subject = new Subject<number>();

    this.TokenSvc.getAmountTryTokenUntyped().subscribe(
      result => {
        this.tryTokenUntyped = result;
        value = result;
        subject.next(value);
      }, error => {
        this.message = "Ha ocurrido un error";
        this.modalConfirm.open(openInfo, { centered: true });
        this.cancel();
      });
    return subject.asObservable();
  }


  getTrysTokenParametric(openInfo: any): Observable<number> {
    let value: number;
    var subject = new Subject<number>();
    this.TokenSvc.getAmountTryToken().subscribe(
      result => {
        this.tryToken = result;
        value = result;
        subject.next(value);
      }, error => {
        this.cancel();
        this.message = "Ha ocurrido un error";
        this.modalConfirm.open(openInfo, { centered: true });
      }
    );
    return subject.asObservable();
  }

  getTimeDurationTokenParametricUntyped(openInfo: any): Observable<number> {

    let value: number;
    var subject = new Subject<number>();

    this.TokenSvc.getTimeTokenUntyped().subscribe(
      result => {
        this.durationTokenUntyped = result;
        value = result;
        subject.next(value);

      }, error => {
        this.message = "Ha ocurrido un error";
        this.modalConfirm.open(openInfo, { centered: true });
      });
    return subject.asObservable();
  }

  getTimeDurationTokenFirstTime(openInfo: any): Observable<number> {
    // use to promise 
    let value: number;
    var subject = new Subject<number>();
    this.TokenSvc.getTimeFirstToken().subscribe(
      result => {
        value = result;
        subject.next(value);
        this.durationFirstToken = result;
      }, error => {
        this.message = "Ha ocurrido un error";
        this.modalConfirm.open(openInfo, { centered: true });
      });
    return subject.asObservable();
  }




  metodoTest() {
    console.log("entra");
  }

  validTimeFirstToken(openInfo: any) {
    this.getTimeDurationTokenFirstTime(openInfo).subscribe((r) =>
      this.TimerFirstToken = setTimeout(() => {
        //this.openModalInfo(openInfo);
        
        this.generatedUntypedTokens(r);
      }, 60000 * r)
    );
  }

  generatedUntypedTokens(r: number) {
    this.getTrysTokenParametricUmtyped(this.openInfo).subscribe((x) => {
      for (let i = 1; i <= x; i++) {
        this.getTimeDurationTokenParametricUntyped(this.openInfo).subscribe((y) => {
          this.TimerFirstToken = setTimeout(() => {
            this.openModalInfo(this.openInfo);
          }, (60000 * (y * i)));

          if (i = x) {
            this.TimerFirstToken = setTimeout(() => {
              this.openModalFinal(this.openInfo);
            }, (60000 * (y * i + 1)));
          }
        });
      }
    });
  }


  openModalInfo(openInfo) {

    
    var datas = {
      Accion: "El usuario no ha realizado la validacion de un token y se ha enviado uno nuevo",
      CedulaCliente : this.cedula
    }
    this.addLogToken(datas);
    
    var data = {
      Destinatario: this.numero
    }
    this.disableTokensNUmber(data);

    this.generateTokenParametricUmtyped(data, openInfo);

    this.message = "Hemos enviado un ultimo código de seguridad a tu linea móvil, por favor ingresa el código aqui : ";

  }

  async openModalFinal(openInfo) {

    var data = {
      Destinatario: this.numero
    }

    this.inputView = false;

    this.messageEvent.emit(true);
    var datas = {
      Accion: "El usuario no ha realizado la validacion del token final y se ha cerrado su sesión",
      CedulaCliente : this.cedula
    }
    this.addLogToken(datas);
    this.modalConfirm.dismissAll();
    this.message = "Su sesión ha expirado, por favor ingrese los datos de nuevo.";

    //this.router.navigate(['/contentss']);
    this.modalConfirm.open(openInfo, { centered: true });
    // enviar al login.
    await this.delay(1500);
    location.reload();

  }

  async openModalBloqueo(openInfo) {

    var data = {
      Destinatario: this.numero
    }

    this.inputView = false;

    this.messageEvent.emit(true);

    this.modalConfirm.dismissAll();
    this.message = "Has superado el número máximo de intentod del dia. por favor intentalo mañana.";

    this.modalConfirm.open(openInfo, { centered: true });
    await this.delay(1500);
    location.reload();
  }


  addBlock(cedula  : any){
    var data = {
      cedula: cedula
    }
    this.TokenSvc.addBlockUser(data).subscribe(result=>{

    },erorr=>{
      console.log("ha ocurrido un error");
      this.modalConfirm.open(this.openInfo, { centered: true });
    }
    );


  }

   addLogToken(data : any){
    this.TokenSvc.addLogToken(data).subscribe(result=>{
    },error=>{
      this.message = "Ha ocurrido un error inesperado";
      this.modalConfirm.open(this.openInfo, { centered: true });
      location.reload();
    });

  }


  cancel() {
    this.modalConfirm.dismissAll();
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
