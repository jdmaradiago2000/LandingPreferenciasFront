import { Component, OnInit } from '@angular/core';
import { FormIndexService } from 'src/app/services/form-index.service';

@Component({
  selector: 'app-stage-container',
  templateUrl: './stage-container.component.html',
  styleUrls: ['./stage-container.component.css']
})
export class StageContainerComponent implements OnInit {
  constructor(private formIndexService: FormIndexService) {}

  public stageIndex: number = 1;
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
      this.stageIndex = data;
    })
  }

}
