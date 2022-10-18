import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-third-question',
  templateUrl: './third-question.component.html',
  styleUrls: ['./third-question.component.css']
})
export class ThirdQuestionComponent implements OnInit {
  @Input() question: any;
  constructor() { }

  ngOnInit() {
  }
}
