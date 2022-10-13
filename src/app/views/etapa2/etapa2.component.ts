import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-etapa2',
  templateUrl: './etapa2.component.html',
  styleUrls: ['./etapa2.component.css']
})
export class Etapa2Component implements OnInit {
  title = 'LandingPreferencias';
  questionList: any = [];
  constructor(private questionsService: QuestionsService){
    console.log("El componente se ha creado");
  }

  ngOnInit(): void {
    console.log("El componente se ha inicializado");
    this.questionsService.getQuestions2()
      .subscribe(response => this.questionList = response);
  }
}
