import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-etapa3',
  templateUrl: './etapa3.component.html',
  styleUrls: ['./etapa3.component.css']
})
export class Etapa3Component implements OnInit {
  title = 'LandingPreferencias';
  questionList: any = [];
  constructor(private questionsService: QuestionsService){
    console.log("El componente se ha creado");
  }

  ngOnInit(): void {
    console.log("El componente se ha inicializado");
    this.questionsService.getQuestions3()
      .subscribe(response => this.questionList = response);
  }
}
