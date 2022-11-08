import { Component, OnInit } from '@angular/core';
import { FormIndexService } from 'src/app/services/form-index.service';

@Component({
  selector: 'app-header-survey',
  templateUrl: './header-survey.component.html',
  styleUrls: ['./header-survey.component.css']
})
export class HeaderSurveyComponent implements OnInit {
  constructor(private formIndexService: FormIndexService) {}

  public headerIndex: number = 1;
  ngOnInit(): void {
    this.formIndexService.disparadorFormIndex.subscribe(data => {
      console.log("Recibiendo Data....", data)
      if(data===0){
        data=1;
      }
      if(data===31){
        data=3;
      }
      if(data===100){
        data=4;
      }
      this.headerIndex = data;
    })
  }

}
