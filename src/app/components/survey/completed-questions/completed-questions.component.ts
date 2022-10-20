import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-completed-questions',
  templateUrl: './completed-questions.component.html',
  styleUrls: ['./completed-questions.component.css']
})
export class CompletedQuestionsComponent implements OnInit {
  @Input() question: any;
  constructor() { }

  ngOnInit() {
  }

}
