import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAutocompleteTrigger, MatDatepickerToggle } from '@angular/material';
import { FormIndexService } from 'src/app/services/form-index.service';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { FirstQuestionComponent } from '../first-question/first-question.component';
import { SecondQuestionComponent } from '../second-question/second-question.component';
import { ThirdQuestionComponent } from '../third-question/third-question.component';
import { LoaderService } from 'src/app/services/loader.service';
import { AllQuestionsComponent } from '../all-questions/all-questions.component';
import { ThrowStmt } from '@angular/compiler';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-container-survey',
  templateUrl: './container-survey.component.html',
  styleUrls: ['./container-survey.component.css']
})
export class ContainerSurveyComponent implements OnInit {
  @ViewChild(AllQuestionsComponent) allQuestionsComponent;
  @ViewChild(FirstQuestionComponent) firstQuestionComponent;
  formIndex: number = 1;
  firstQuestion: any = [];
  secondQuestion: any = [];
  thirdQuestion: any = [];
  completedQuestions: any = [];
  nextQuestion: any [];
  previousQuestion: any [];
  formData: any = {};
  etapaActual: any = 1;
  etapaAnterior: any = 0;
  interaccion: any;
  
  previousQuestionAEvaluar: any [];

  constructor(private questionsService: QuestionsService, private formIndexService: FormIndexService,
    private loaderService: LoaderService,){
    //console.log("El componente se ha creado");
  }

  ngOnInit(): void 
  {
    this.questionsService.getQuestionsNext().subscribe((response) => this.nextQuestion = response);
    this.formIndex = parseInt(this.nextQuestion[0].etapa); 
    this.formIndexService.disparadorFormIndex.emit(parseInt(this.nextQuestion[0].etapa));
  }

  nextStep() {
   //Armar la data
    this.loaderService.show();
    let datosRespuestas: any = {
      ID: this.nextQuestion[0].id,
      CODIGO_CLIENTE: '1111',
      CODIGO_CUENTA: '2222',
      CODIGO_PREGUNTA: this.nextQuestion[0].codigo_pregunta,
      CODIGO_RESPUESTA: this.nextQuestion[0].codigo_respuesta,
      RESPUESTA_1: this.allQuestionsComponent.respuesta1,
      RESPUESTA_2: this.allQuestionsComponent.respuesta2,
      RESPUESTA_3: this.allQuestionsComponent.respuesta3,
      RESPUESTA_4: this.allQuestionsComponent.respuesta4,
      RESPUESTA_5: this.allQuestionsComponent.respuesta5,
      FECHA_HORA: new Date()
    };
    
    if(this.nextQuestion[0].id==0)
    {
      this.questionsService.getQuestionsPrevious(this.nextQuestion[0].codigo_pregunta).subscribe(response => {this.previousQuestionAEvaluar = response});
      
     //Enviar los parametros al servicio
     this.questionsService.sendAnswers(datosRespuestas)
       .subscribe(
         next => {
          this.etapaActual = this.nextQuestion[0].etapa;
          this.updateInfo();
         }, error => {
           alert("En este momento no es posible realizar la solicitud intentelo más tarde, Gracias!");
         });
    }
    else{
      //Enviar los parametros al servicio
     this.questionsService.sendAnswersToUpdate(datosRespuestas)
     .subscribe(
       next => {
        this.updateInfo();

       }, error => {
         alert("En este momento no es posible realizar la solicitud intentelo más tarde, Gracias!");
       });
    }
  }

  previousStep() {
    this.questionsService.getQuestionsPrevious(this.nextQuestion[0].codigo_pregunta).subscribe(response => this.nextQuestion = response);
    this.formIndex = parseInt(this.nextQuestion[0].etapa); 
    this.formIndexService.disparadorFormIndex.emit(this.nextQuestion[0].etapa)
  }
  
  setFormData(value) {
    this.formData = {...this.formData, ...value}
  }

  updateInfo()
  {
    if(this.etapaActual > this.etapaAnterior)
    {
      switch (this.etapaActual){
        case 0: this.interaccion = 'LOGIN'; break;
        case 1: this.interaccion = 'ETAPA 1 - PREGUNTAS'; break;
        case 2: this.interaccion = 'ETAPA 2 - PREGUNTAS'; break;
        case 3: this.interaccion = 'ETAPA 3 - PREGUNTAS'; break;
        case 4: this.interaccion = 'ETAPA 4 - PREGUNTAS'; break;
        default: break;
      }

      let datosLogs: any = {
        ID: this.nextQuestion[0].id,
        INTERACCION: this.interaccion,
        CODIGO_CLIENTE: '1111',
        CODIGO_CUENTA: '2222',
        NUMERO_SERVICIO: '3333',
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
    //Consulte la proxima pregunta

    this.questionsService.getQuestionsNext().subscribe(response => this.nextQuestion = response);  
    /*
    if(this.etapaActual>this.etapaAnterior)
    {
      //Actualizar log si etapaAnterior > 0
      if(this.etapaAnterior > 0)
      {

      }

      alert('cambio etapa');
      //Actualizar variable etapaAnterior
      this.etapaAnterior++;
      //Insertar log para etapa
      switch(this.etapaAnterior)
      {
        case 0: this.interaccion ='ETAPA LOGIN'; break;
        case 1: this.interaccion ='ETAPA 1 - PREGUNTAS'; break;
        case 2: this.interaccion ='ETAPA 2 - PREGUNTAS'; break;
        case 3: this.interaccion ='ETAPA 3 - PREGUNTAS'; break;
        case 4: this.interaccion ='ETAPA CONFIRMACION'; break;
        default: break;
      }
      //Insertar LOG


    }*/

    this.etapaActual = this.nextQuestion[0].etapa;
    this.formIndex = parseInt(this.etapaActual);
    this.formIndexService.disparadorFormIndex.emit(this.etapaActual);
    //this.formIndex = parseInt(this.nextQuestion[0].etapa);
    //this.formIndexService.disparadorFormIndex.emit(parseInt(this.nextQuestion[0].etapa));
  }

  registrarLog(){
    this.questionsService.getQuestionsNext().subscribe(response => this.nextQuestion = response);

  }

}
