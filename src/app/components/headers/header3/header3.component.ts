import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header3',
  templateUrl: './header3.component.html',
  styleUrls: ['./header3.component.css']
})
export class Header3Component implements OnInit {
  @Input() header: any;
  constructor() { }

  ngOnInit() {
  }

}
