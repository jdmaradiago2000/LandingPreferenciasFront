import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-container-survey',
  templateUrl: './container-survey.component.html',
  styleUrls: ['./container-survey.component.css']
})
export class ContainerSurveyComponent implements OnInit {
  formIndex: number = 0;
  firstQuestion: any = [];
  secondQuestion: any = [];
  formData: any = {}

  constructor(private questionsService: QuestionsService){
    console.log("El componente se ha creado");
  }

  ngOnInit(): void {
    console.log("El componente se ha inicializado");
    this.questionsService.getQuestions1()
      .subscribe(response => this.firstQuestion = response);
      this.questionsService.getQuestions2()
      .subscribe(response => this.secondQuestion = response);
  }

  nextStep() {
    this.formIndex = this.formIndex + 1
  }

  previousStep() {
    this.formIndex = this.formIndex - 1
  }

  setFormData(value) {
    this.formData = {...this.formData, ...value}
  }

}
