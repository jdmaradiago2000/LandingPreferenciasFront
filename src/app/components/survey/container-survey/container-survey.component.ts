import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges, Injectable } from '@angular/core';
import { FormIndexService } from 'src/app/services/form-index.service';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { LoaderService } from 'src/app/services/loader.service';
import { AllQuestionsComponent } from '../all-questions/all-questions.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LOCALE_DATA } from '@angular/common/src/i18n/locale_data';
import { LOCALE_ID, Inject } from "@angular/core";
import { formatDate } from "@angular/common";
import { of, Subscription  } from "rxjs";
import { SharedService } from 'src/app/services/sharedService/shared.service';

import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "src/app/components/dialogo-confirmacion/dialogo-confirmacion.component"
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-container-survey',
  templateUrl: './container-survey.component.html',
  styleUrls: ['./container-survey.component.css']
})

export class ContainerSurveyComponent implements OnInit {
  clickEventsubscription:Subscription;

  @ViewChild(AllQuestionsComponent) allQuestionsComponent;
  public formIndex: number = 1;
  public completedQuestions: any = [];
  public nextQuestion: any [];
  public nextQuestionUpdated: any[];
  public previousQuestion: any [];
  public formData: any = {};
  public etapaActual: any = 1;
  public etapaAnterior: any = 0;
  public etapaSiguiente: any;
  public interaccion: any;
  //validPreviousQuestion: any [];
  //validNextQuestion: any [];
  public pregunta_anterior: any;

  public codigoCliente: number;
  public codigoCuenta: number;
  public numeroServicio: number;

  public message: string = '';

  public confirmacion_actualizacion: string = '';

  public datosRespuestas: any;

  public terminar: number;

  constructor(@Inject(LOCALE_ID) public locale: string, 
  private questionsService: QuestionsService, private formIndexService: FormIndexService,
    private loaderService: LoaderService,public dialogo: MatDialog,
    private modalConfirm: NgbModal,private sharedService:SharedService){
      this.clickEventsubscription = this.sharedService.getClickEvent().subscribe(()=>{
        this.actualizarModal();
        })
    }

  ngOnInit(): void 
  {
    //Recuperar datos del cliente del localStorage
    this.codigoCliente = JSON.parse(localStorage.getItem('CODIGO_CLIENTE'));
    this.codigoCuenta = JSON.parse(localStorage.getItem('CODIGO_CUENTA'));
    this.numeroServicio = JSON.parse(localStorage.getItem('NUMERO_SERVICIO'));
  
    this.questionsService.getQuestionsNextUpdated(this.codigoCliente+'-'+this.codigoCuenta)
      .subscribe((response) => this.dataLoad(response)); 
  }

  dataLoad(response: any) {
    console.log("servicio -> ", response)
    this.nextQuestionUpdated = response;
    if(this.nextQuestionUpdated[0].contadora_anterior<1){
      this.etapaActual = 0;
    }else{
      this.etapaActual = this.nextQuestionUpdated[0].etapa;
    }

    if(this.nextQuestionUpdated[0].contadora_siguiente==0){
      this.etapaActual = 31;
      this.etapaSiguiente = 100;
    }

    if(this.nextQuestionUpdated[0].contadora_siguiente==null){
      this.etapaActual = 100;
      this.etapaSiguiente = 100;
    }

    /*if(this.etapaSiguiente===100)
    {
      this.construirConfirmacion();
      this.etapaActual = 100;
    }*/

    localStorage.setItem('CODIGO_PREGUNTA', JSON.stringify(this.nextQuestionUpdated[0].codigo_pregunta));
    this.formIndex = parseInt(this.etapaActual); 
    this.formIndexService.disparadorFormIndex.emit(parseInt(this.etapaActual));
  }

  dataLoadTerminar(response: any) {
    this.nextQuestionUpdated = response;
    if(this.etapaSiguiente===100)
    {
      this.construirConfirmacion();
      this.etapaActual = 100;
    }

    console.log(this.etapaActual);
    localStorage.setItem('CODIGO_PREGUNTA', JSON.stringify(this.nextQuestionUpdated[0].codigo_pregunta));
    this.formIndex = parseInt(this.etapaActual); 
    this.formIndexService.disparadorFormIndex.emit(parseInt(this.etapaActual));

  }

  
  nextStep(terminar: number, openInfo: any) {
    this.confirmacion_actualizacion = '';
    //Recuperar datos del cliente del localStorage
    this.codigoCliente = JSON.parse(localStorage.getItem('CODIGO_CLIENTE'));
    this.codigoCuenta = JSON.parse(localStorage.getItem('CODIGO_CUENTA'));
    this.numeroServicio = JSON.parse(localStorage.getItem('NUMERO_SERVICIO'));
    this.terminar = terminar;
    
   //Armar la data
    this.loaderService.show();
    this.datosRespuestas = {
      ID: this.nextQuestionUpdated[0].id,
      CODIGO_CLIENTE: this.codigoCliente,
      CODIGO_CUENTA: this.codigoCuenta,
      CODIGO_PREGUNTA: this.nextQuestionUpdated[0].codigo_pregunta,
      CODIGO_RESPUESTA: this.nextQuestionUpdated[0].codigo_respuesta,
      RESPUESTA_1: this.allQuestionsComponent.respuesta1,
      RESPUESTA_2: this.allQuestionsComponent.respuesta2,
      RESPUESTA_3: this.allQuestionsComponent.respuesta3,
      RESPUESTA_4: this.allQuestionsComponent.respuesta4,
      RESPUESTA_5: this.allQuestionsComponent.respuesta5,
      FECHA_HORA: new Date()
    };

    localStorage.setItem('datos_respuestas', JSON.stringify(this.datosRespuestas));
    localStorage.setItem('question', JSON.stringify(this.nextQuestionUpdated));
    
    if(this.nextQuestionUpdated[0].id==0)
    {      
     //Enviar los parametros al servicio
     this.questionsService.sendAnswers(this.datosRespuestas)
       .subscribe(
         next => {
          this.etapaActual = this.nextQuestionUpdated[0].etapa;
          this.updateInfo(terminar);
         }, error => {
           alert("En este momento no es posible realizar la solicitud intentelo más tarde, Gracias!");
         });
    }
    else{
      /* CON MODAL*/
      localStorage.setItem('CONFIRMACION_ACTUALIZACION', '');

      this.message ='¿Está seguro de actualizar la respuesta?';
      this.abrirModalConfirmacion(openInfo, this.datosRespuestas, this.nextQuestionUpdated);
      
     
      /* CON CONFIRM POR DEFECTO 
      if(confirm('¿Está seguro de actualizar la respuesta?')) {
         //Enviar los parametros al servicio 
         this.questionsService.sendAnswersToUpdate(this.datosRespuestas).subscribe(
          next => {
            this.updateInfo(terminar);
          }, error => {
            alert("En este momento no es posible realizar la solicitud intentelo más tarde, Gracias!");
          });        
      }else{
        //Revertir los cambios
        this.revertirCambiosPregunta();
      }
      */
    }
  }

  previousStep() {
    this.questionsService.getQuestionsPrevious(this.nextQuestionUpdated[0].codigo_pregunta+'-'+this.codigoCliente+'-'+this.codigoCuenta)
    .subscribe((response) => this.dataLoad(response));
  }
  
  setFormData(value) {
    this.formData = {...this.formData, ...value}
  }

  updateInfo(valor: number)
  {
    if((this.etapaActual > this.etapaAnterior) && (this.etapaActual<100))
    {
      switch (this.etapaActual){
        case 0: this.interaccion = 'LOGIN'; break;
        case 1: this.interaccion = 'ETAPA 1 - PREGUNTAS'; break;
        case 2: this.interaccion = 'ETAPA 2 - PREGUNTAS'; break;
        case 3: this.interaccion = 'ETAPA 3 - PREGUNTAS'; break;
        case 4: this.interaccion = 'ETAPA CONFIRMACION'; break;
        case 31: this.interaccion = 'ETAPA 3 - PREGUNTAS'; break;
        default: break;
      }

      let datosLogs: any = {
        ID: this.nextQuestionUpdated[0].id,
        INTERACCION: this.interaccion,
        CODIGO_CLIENTE: this.codigoCliente,
        CODIGO_CUENTA: this.codigoCuenta,
        NUMERO_SERVICIO: this.numeroServicio,
        FECHA_INICIO: new Date(),
        FECHA_FIN: new Date()
      };
      //Agregar log
      this.questionsService.sendLog(datosLogs)
       .subscribe(
         next => {
         }, error => {
           alert("En este momento no es posible realizar la solicitud intentelo más tarde, Gracias!");
         });
    }

    if(valor===0){
      this.questionsService.getQuestionsNextUpdated(this.codigoCliente+'-'+this.codigoCuenta)
      .subscribe((response) => this.dataLoad(response));    
    } else{
      if(valor===1){
        this.questionsService.getQuestionsNextUpdated(this.codigoCliente+'-'+this.codigoCuenta)
        .subscribe((response) => this.dataLoadTerminar(response));    
      }
    }
  }

  construirConfirmacion()
  {
    this.interaccion = 'ETAPA CONFIRMACION';
    
    let datosLogs: any = {
      ID: this.nextQuestionUpdated[0].id,
      INTERACCION: this.interaccion,
      CODIGO_CLIENTE: this.codigoCliente,
      CODIGO_CUENTA: this.codigoCuenta,
      NUMERO_SERVICIO: this.numeroServicio,
      FECHA_INICIO: new Date(),
      FECHA_FIN: new Date()
    };

    //Agregar log
    this.questionsService.sendLog(datosLogs).subscribe(next => { }, 
      error => {
        alert("En este momento no es posible realizar la solicitud intentelo más tarde, Gracias!");
      });
  }

  mostrarDialogo(): void {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Te gusta programar en TypeScript?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          alert("¡A mí también!");
        } else {
          alert("Deberías probarlo, a mí me gusta :)");
        }
      });
  }

  revertirCambiosPregunta(){
    this.questionsService.getLastQuestionsPrevious(this.nextQuestionUpdated[0].codigo_pregunta+'-'+this.codigoCliente+'-'+this.codigoCuenta)
    .subscribe((response) => this.dataLoad(response));
  }

  abrirModalConfirmacion(openInfo: any, datosRespuestas: any, nextQuestionUpdated: any){
    this.modalConfirm.open(openInfo, { keyboard : false, centered : true ,backdrop : 'static' });
    this.actualizarModal();
  }

  actualizarModal(){
    if(localStorage.getItem('CONFIRMACION_ACTUALIZACION')=='SI'){
      this.questionsService.sendAnswersToUpdate(this.datosRespuestas).subscribe(
        next => {
          this.updateInfo(this.terminar);
        }, error => {
          alert("En este momento no es posible realizar la solicitud intentelo más tarde, Gracias!");
        }); 

    }else{
      if(localStorage.getItem('CONFIRMACION_ACTUALIZACION')=='NO')
      {
        this.revertirCambiosPregunta();
      }      
    }
  }

  public refrescarModal(){
    alert('Refrescar Modal');
  }
}
