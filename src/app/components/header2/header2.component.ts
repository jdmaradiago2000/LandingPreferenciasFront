import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {
  @Input() header: any;
  constructor() { }

  ngOnInit() {
  }

}
