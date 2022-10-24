import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-image3',
  templateUrl: './header-image3.component.html',
  styleUrls: ['./header-image3.component.css']
})
export class HeaderImage3Component implements OnInit {
  @Input() headerImage: any;
  constructor() { }
  
  ngOnInit() {
  }

}
