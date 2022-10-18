import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-etapa1',
  templateUrl: './etapa1.component.html',
  styleUrls: ['./etapa1.component.css']
})
export class Etapa1Component implements OnInit {
  title = 'LandingPreferencias';
  questionList: any = [];
  constructor(private questionsService: QuestionsService){
    console.log("El componente se ha creado");
  }

  ngOnInit(): void {
    console.log("El componente se ha inicializado");
    this.questionsService.getQuestions1()
      .subscribe(response => this.questionList = response);
  }
}
