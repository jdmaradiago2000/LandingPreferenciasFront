import { LEAVE_SELECTOR } from '@angular/animations/browser/src/util';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { AlertPromise } from 'selenium-webdriver';
import { FormIndexService } from 'src/app/services/form-index.service';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})

export class AllQuestionsComponent implements OnInit {
  formIndex: number = 1;
  //myVar1 = false;
  respuestaAbierta: string;
  multipleRespuesta1 = true;
  multipleRespuesta2 = false;
  multipleRespuesta3 = false;
  multipleRespuesta4 = false;
  multipleRespuesta5 = false;
  etapa = '';
  @Input() question: any;
  @Input() questions: any;
  public respuesta1: string = 'FALSE';
  public respuesta2: string = 'FALSE';
  public respuesta3: string = 'FALSE';
  public respuesta4: string = 'FALSE';
  public respuesta5: string = 'FALSE';
  form: FormGroup;
  nextQuestion: any [];

  constructor(private questionsService: QuestionsService, public fb: FormBuilder, private formIndexService: FormIndexService,) {
  }
  

  ngOnInit() {
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

  evaluarMultiple1(myValue, item) {  
    var boolItem = 'FALSE';
    if(myValue==true)
    {
      boolItem = 'TRUE';
    }
    switch(item)
    {
      case 1: this.respuesta1 = boolItem; break;
      case 2: this.respuesta2 = boolItem; break;
      case 3: this.respuesta3 = boolItem; break;
      case 4: this.respuesta4 = boolItem; break;
      case 5: this.respuesta5 = boolItem; break;
      default: break;
    }
  }

  evaluarAbierta(myValue) {
    this.respuesta2 = 'FALSE';
    this.respuesta3 = 'FALSE';
    this.respuesta4 = 'FALSE';
    this.respuesta5 = 'FALSE';
    this.respuesta1 = myValue;
  }

  evaluarAbierta1(myValue) {
    this.respuesta2 = 'FALSE';
    this.respuesta3 = 'FALSE';
    this.respuesta4 = 'FALSE';
    this.respuesta5 = 'FALSE';
    this.respuesta1 = myValue;
}

  reiniciarVariables(){
    this.respuestaAbierta = '';
    this.multipleRespuesta1 = true;
    this.multipleRespuesta2 = false;
    this.multipleRespuesta3 = false;
    this.multipleRespuesta4 = false;
    this.multipleRespuesta5 = false;
    this.respuesta1 = 'TRUE'; 
    this.respuesta2 = 'FALSE'; 
    this.respuesta3 = 'FALSE'; 
    this.respuesta4 = 'FALSE'; 
    this.respuesta5 = 'FALSE';
  }
}