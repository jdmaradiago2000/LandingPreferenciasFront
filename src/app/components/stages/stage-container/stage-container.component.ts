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
      this.stageIndex = data;
    })
  }

}
