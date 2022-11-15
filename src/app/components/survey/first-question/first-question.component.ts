import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.css']
})

export class FirstQuestionComponent implements OnInit {
  //myVar1 = false;
  respuestaAbierta = '';
  multipleRespuesta1 = true;
  multipleRespuesta2 = false;
  multipleRespuesta3 = false;
  multipleRespuesta4 = false;
  multipleRespuesta5 = false;
  @Input() question: any;
  @Input() questions: any;
  public respuesta1: string = '';
  public respuesta2: string = '';
  public respuesta3: string = '';
  public respuesta4: string = '';
  public respuesta5: string = '';
  form: FormGroup;
  constructor(public fb: FormBuilder) {
  }
  

  ngOnInit() {
    //console.log(this.question);
  }

  evaluarUnica(myValue) {  
    switch(myValue)
    {
      case '1' : this.respuesta1 = 'TRUE'; this.respuesta2 = 'FALSE'; this.respuesta3 = 'FALSE'; this.respuesta4 = 'FALSE'; this.respuesta5 = 'FALSE'; break;
      case '2' : this.respuesta1 = 'FALSE'; this.respuesta2 = 'TRUE'; this.respuesta3 = 'FALSE'; this.respuesta4 = 'FALSE'; this.respuesta5 = 'FALSE'; break;
      case '3' : this.respuesta1 = 'FALSE'; this.respuesta2 = 'FALSE'; this.respuesta3 = 'TRUE'; this.respuesta4 = 'FALSE'; this.respuesta5 = 'FALSE'; break;
      case '4' : this.respuesta1 = 'FALSE'; this.respuesta2 = 'FALSE'; this.respuesta3 = 'FALSE'; this.respuesta4 = 'TRUE'; this.respuesta5 = 'FALSE'; break;
      case '5' : this.respuesta1 = 'FALSE'; this.respuesta2 = 'FALSE'; this.respuesta3 = 'FALSE'; this.respuesta4 = 'FALSE'; this.respuesta5 = 'TRUE'; break;
      default: this.respuesta1 = 'FALSE'; this.respuesta2 = 'FALSE'; this.respuesta3 = 'FALSE'; this.respuesta4 = 'FALSE'; this.respuesta5 = 'FALSE'; break;
    }
  }

  evaluarMultiple() {  
    this.respuesta1 = 'FALSE';
    this.respuesta2 = 'FALSE';
    this.respuesta3 = 'FALSE';
    this.respuesta4 = 'FALSE';
    this.respuesta5 = 'FALSE';
    
    if(this.multipleRespuesta1==true)
    {
      this.respuesta1 = 'TRUE';
    }
    if(this.multipleRespuesta2==true)
    {
      this.respuesta2 = 'TRUE';
    }
    if(this.multipleRespuesta3==true)
    {
      this.respuesta3 = 'TRUE';
    }
    if(this.multipleRespuesta4==true)
    {
      this.respuesta4 = 'TRUE';
    }
    if(this.multipleRespuesta5==true)
    {
      this.respuesta5 = 'TRUE';
    }
  }

  evaluarAbierta() {
    this.respuesta2 = 'FALSE';
    this.respuesta3 = '';
    this.respuesta4 = '';
    this.respuesta5 = '';
    this.respuesta1 = this.respuestaAbierta;
  }
}
