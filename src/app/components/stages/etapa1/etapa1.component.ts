import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-etapa1',
  templateUrl: './etapa1.component.html',
  styleUrls: ['./etapa1.component.css']
})
export class Etapa1Component implements OnInit {
  @Input() stage: any;
  constructor() { }

  ngOnInit() {
  }

}
