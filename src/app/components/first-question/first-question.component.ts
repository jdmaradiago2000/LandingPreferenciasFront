import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.css']
})
export class FirstQuestionComponent implements OnInit {
  @Input() question: any;
  constructor() { }

  ngOnInit() {
    console.log(this.question)
  }

}
