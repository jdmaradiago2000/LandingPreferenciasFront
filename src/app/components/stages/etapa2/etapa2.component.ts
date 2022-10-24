import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-etapa2',
  templateUrl: './etapa2.component.html',
  styleUrls: ['./etapa2.component.css']
})
export class Etapa2Component implements OnInit {
  @Input() stage: any;
  constructor() { }

  ngOnInit() {
  }

}
