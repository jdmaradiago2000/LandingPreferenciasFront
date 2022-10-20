import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-etapa3',
  templateUrl: './etapa3.component.html',
  styleUrls: ['./etapa3.component.css']
})
export class Etapa3Component implements OnInit {
  @Input() stage: any;
  constructor() { }

  ngOnInit() {
  }

}
