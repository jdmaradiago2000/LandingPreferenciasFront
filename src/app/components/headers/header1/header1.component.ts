import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {
  @Input() header: any;
  constructor() { }

  ngOnInit() {
  }

}
