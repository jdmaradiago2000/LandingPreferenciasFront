import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { nextQuestionUpdated } from 'src/app/services/url';
import { ContainerSurveyComponent } from '../../survey/container-survey/container-survey.component';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { SharedService } from 'src/app/services/sharedService/shared.service';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})

export class ModalConfirmComponent implements OnInit {
  @ViewChild(ContainerSurveyComponent) containerSurveyComponent;
  @Input() message:string;
  @Input() datosRespuestas:any;
  public image:string="entidad-no-registra-pagos";
  public textButton: string="Cancelar";
  public show: boolean = false;
  public nextQuestionUpdated: any[];

  constructor(
    private modalConfirm: NgbModal, private questionsService: QuestionsService,private sharedService:SharedService
  ) { }

  ngOnInit() {
    this.image = "ic_warning.png";
    this.textButton = "Cancelar";
    this.show= true;
    this.datosRespuestas = JSON.parse(localStorage.getItem('datos_respuestas'));
    this.nextQuestionUpdated = JSON.parse(localStorage.getItem('question'));
  }

  aceptarCambios(){
    localStorage.setItem('CONFIRMACION_ACTUALIZACION', 'SI');
    this.sharedService.sendClickEvent();
    this.modalConfirm.dismissAll();
  }

  cancelarCambios(){
    localStorage.setItem('CONFIRMACION_ACTUALIZACION', 'NO');
    this.sharedService.sendClickEvent();
    this.modalConfirm.dismissAll();
  }
/*
  guardarCambios(){
    this.questionsService.sendAnswersToUpdate(this.datosRespuestas).subscribe(
      next => {
        this.updateInfo(terminar);
      }, error => {
        alert("En este momento no es posible realizar la solicitud intentelo más tarde, Gracias!");
      }); 
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
  */
}
