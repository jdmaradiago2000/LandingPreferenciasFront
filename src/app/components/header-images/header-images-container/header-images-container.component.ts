import { Component, OnInit } from '@angular/core';
import { FormIndexService } from 'src/app/services/form-index.service';

@Component({
  selector: 'app-header-images-container',
  templateUrl: './header-images-container.component.html',
  styleUrls: ['./header-images-container.component.css']
})
export class HeaderImagesContainerComponent implements OnInit {
  constructor(private formIndexService: FormIndexService) {}

  public headerIndex: number = 1;
  ngOnInit(): void {
    this.formIndexService.disparadorFormIndex.subscribe(data => {
      console.log("Recibiendo Data....", data)
      this.headerIndex = data;
    })
  }
}
