import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormIndexService } from 'src/app/services/form-index.service';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { LoaderService } from 'src/app/services/loader.service';
import { AllQuestionsComponent } from '../all-questions/all-questions.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-container-survey',
  templateUrl: './container-survey.component.html',
  styleUrls: ['./container-survey.component.css']
})

export class ContainerSurveyComponent implements OnInit {
  @ViewChild(AllQuestionsComponent) allQuestionsComponent;
  formIndex: number = 1;
  completedQuestions: any = [];
  nextQuestion: any [];
  nextQuestionUpdated: any[];
  previousQuestion: any [];
  formData: any = {};
  etapaActual: any = 1;
  etapaAnterior: any = 0;
  interaccion: any;
  validPreviousQuestion: any [];
  validNextQuestion: any [];

  private codigoCliente: bigint;
  private codigoCuenta: bigint;
  private numeroServicio: string;
  
  previousQuestionAEvaluar: any [];

  myForm: FormGroup;

  constructor(private questionsService: QuestionsService, private formIndexService: FormIndexService,
    private loaderService: LoaderService,public fb: FormBuilder,
    ){
      this.myForm = this.fb.group({
        name: ['', [Validators.required]],
      });
  }

  ngOnInit(): void 
  {
    //Recuperar datos del cliente del localStorage
    this.codigoCliente = JSON.parse(localStorage.getItem('CODIGO_CLIENTE'));
    this.codigoCuenta = JSON.parse(localStorage.getItem('CODIGO_CUENTA'));
    this.numeroServicio = JSON.parse(localStorage.getItem('NUMERO_SERVICIO'));

    this.questionsService.getQuestionsNextUpdated(this.codigoCliente+'-'+this.codigoCuenta)
      .subscribe(response => this.nextQuestionUpdated = response);
    this.formIndex = parseInt(this.nextQuestionUpdated[0].etapa); 
    this.formIndexService.disparadorFormIndex.emit(parseInt(this.nextQuestionUpdated[0].etapa));
    localStorage.setItem('CODIGO_PREGUNTA', JSON.stringify(this.nextQuestionUpdated[0].codigo_pregunta));
  }

  nextStep() {
    //Recuperar datos del cliente del localStorage
    this.codigoCliente = JSON.parse(localStorage.getItem('CODIGO_CLIENTE'));
    this.codigoCuenta = JSON.parse(localStorage.getItem('CODIGO_CUENTA'));
    this.numeroServicio = JSON.parse(localStorage.getItem('NUMERO_SERVICIO'));
    
   //Armar la data
    this.loaderService.show();
    let datosRespuestas: any = {
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

    console.log(datosRespuestas);
    
    if(this.nextQuestionUpdated[0].id==0)
    {      
     //Enviar los parametros al servicio
     this.questionsService.sendAnswers(datosRespuestas)
       .subscribe(
         next => {
          this.etapaActual = this.nextQuestionUpdated[0].etapa;
          this.updateInfo();
         }, error => {
           alert("En este momento no es posible realizar la solicitud intentelo más tarde, Gracias!");
         });
    }
    else{
      if(confirm('¿Está seguro de actualizar la respuesta?')) {
         //Enviar los parametros al servicio
         this.questionsService.sendAnswersToUpdate(datosRespuestas).subscribe(
          next => {
            this.updateInfo();
          }, error => {
            alert("En este momento no es posible realizar la solicitud intentelo más tarde, Gracias!");
          });
      }     
    }
  }

  previousStep() {
    this.questionsService.getQuestionsPrevious(this.nextQuestionUpdated[0].codigo_pregunta+'-'+this.codigoCliente+'-'+this.codigoCuenta).subscribe(response => this.nextQuestionUpdated = response);
    this.formIndex = parseInt(this.nextQuestionUpdated[0].etapa); 
    this.formIndexService.disparadorFormIndex.emit(this.nextQuestionUpdated[0].etapa)
    localStorage.setItem('CODIGO_PREGUNTA', JSON.stringify(this.nextQuestionUpdated[0].codigo_pregunta));
    localStorage.setItem('CONTADORA', JSON.stringify(this.nextQuestionUpdated[0].contadora));
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
    //Consulte la proxima pregunta
    this.questionsService.getQuestionsNextUpdated(this.codigoCliente+'-'+this.codigoCuenta)
      .subscribe(response => this.nextQuestionUpdated = response);
    this.etapaActual = this.nextQuestionUpdated[0].etapa;
    this.formIndex = parseInt(this.etapaActual);
    this.formIndexService.disparadorFormIndex.emit(this.etapaActual);
  }

}
