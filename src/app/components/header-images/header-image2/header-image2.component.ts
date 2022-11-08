import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-image2',
  templateUrl: './header-image2.component.html',
  styleUrls: ['./header-image2.component.css']
})
export class HeaderImage2Component implements OnInit {
  @Input() headerImage: any;
  constructor() { }

  ngOnInit() {
  }

}
