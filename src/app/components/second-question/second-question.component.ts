import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second-question',
  templateUrl: './second-question.component.html',
  styleUrls: ['./second-question.component.css']
})
export class SecondQuestionComponent implements OnInit {
  @Input() question: any;
  constructor() { }

  ngOnInit() {
  }

}
