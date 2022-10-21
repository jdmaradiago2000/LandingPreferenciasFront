import { Component, OnInit } from '@angular/core';
import { FormIndexService } from 'src/app/services/form-index.service';
import { QuestionsService } from 'src/app/services/questions/questions.service';


@Component({
  selector: 'app-container-survey',
  templateUrl: './container-survey.component.html',
  styleUrls: ['./container-survey.component.css']
})
export class ContainerSurveyComponent implements OnInit {
  formIndex: number = 1;
  firstQuestion: any = [];
  secondQuestion: any = [];
  thirdQuestion: any = [];
  completedQuestions: any = [];
  formData: any = {}

  constructor(private questionsService: QuestionsService, private formIndexService: FormIndexService){
    console.log("El componente se ha creado");
  }

  ngOnInit(): void {
    console.log("El componente se ha inicializado");
    this.questionsService.getQuestions1()
      .subscribe(response => this.firstQuestion = response);
    this.questionsService.getQuestions2()
      .subscribe(response => this.secondQuestion = response);
    this.questionsService.getQuestions3()
      .subscribe(response => this.thirdQuestion = response);
  }

  nextStep() {
    this.questionsService.getQuestionsNext()
      .subscribe(response => this.firstQuestion = response);
    this.formIndex = this.firstQuestion[0].etapa;
    console.log('Variable: ');
    this.formIndexService.disparadorFormIndex.emit(this.formIndex)
  }

  previousStep() {
    this.questionsService.getQuestionsPrevious()
      .subscribe(response => this.firstQuestion = response);

    
    this.formIndexService.disparadorFormIndex.emit(this.formIndex)
  }
  
  setFormData(value) {
    this.formData = {...this.formData, ...value}
  }

}
