import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token.service';
import { ValidarToken } from './ValidarToken';

@Component({
  selector: 'app-modal-token',
  templateUrl: './modal-token.component.html',
  styleUrls: ['./modal-token.component.css']
})
export class ModalTokenComponent implements OnInit {
  @Input() numero: string;
  @Input() message: string;
  @Input() timer: NodeJS.Timer;
  Form: FormGroup;
  public image: string = "entidad-no-registra-pagos";
  public textButton: string = "Cancelar";
  public show: boolean = false;
  public Intentos: number = 2;
  constructor(private modalConfirm: NgbModal, private fb: FormBuilder, private TokenSvc: TokenService, private Login: LoginService) {
    this.Form = this.fb.group({
      'InToken': ["", Validators.required]
    });
  }

  ngOnInit() {
    this.image = "ic_warning.png";
    this.textButton = "Cancelar";
    this.show = true;

    this.txtToken.valueChanges.subscribe((token: string) => {
      if (token.length == 4) {
        let arg = new ValidarToken();
        arg.Destinatario = this.numero;
        arg.Token = parseInt(token);
        this.ValidationToken(arg);
      }
    });
  }

  get txtToken(): FormArray {
    return this.Form.get('InToken') as FormArray // NOSONAR
  }

  ValidationToken(arg: ValidarToken) {
    this.TokenSvc.ValidationToken(arg).subscribe(result => {
      if (result) {
        console.log("Redirigir a la pagina");
        this.cancel();
      } else {

        if (this.Intentos > 0) {
          this.TokenSvc.MensajeError().subscribe((mensaje: string) => {
            this.Intentos--;
            this.message = mensaje;
            this.Form.patchValue({ InToken: "" });
          });
        } else {
          clearInterval(this.timer);
          this.Login.Intentos--;
          this.cancel();
        }

      }
    });
  }

  cancel() {
    this.modalConfirm.dismissAll();
  }

}
