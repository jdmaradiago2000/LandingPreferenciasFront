import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-image1',
  templateUrl: './header-image1.component.html',
  styleUrls: ['./header-image1.component.css']
})
export class HeaderImage1Component implements OnInit {
  @Input() headerImage: any;
  constructor() { }

  ngOnInit() {
  }

}
