import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { NgForm } from '@angular/forms';
import { ThirdQuestionComponent } from '../third-question/third-question.component';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.css']
})

export class FirstQuestionComponent implements OnInit {
  @Input() question: any;
  @Input() questions: any;
  respuesta1: string = '';
  respuesta2: string = '';
  respuesta3: string = '';
  respuesta4: string = '';
  respuesta5: string = '';
  form: FormGroup;
  constructor(public fb: FormBuilder) {
  }


  ngOnInit() {
    console.log(this.question);
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
    alert(this.respuesta1+'-'+this.respuesta2+'-'+this.respuesta3+'-'+this.respuesta4+'-'+this.respuesta5);
  }

  evaluarMultiple(myValue) {  
    
    
    // switch(myValue)
    // {
    //   case '1' : this.respuesta1 = 'TRUE'; this.respuesta2 = 'FALSE'; this.respuesta3 = 'FALSE'; this.respuesta4 = 'FALSE'; this.respuesta5 = 'FALSE'; break;
    //   case '2' : this.respuesta1 = 'FALSE'; this.respuesta2 = 'TRUE'; this.respuesta3 = 'FALSE'; this.respuesta4 = 'FALSE'; this.respuesta5 = 'FALSE'; break;
    //   case '3' : this.respuesta1 = 'FALSE'; this.respuesta2 = 'FALSE'; this.respuesta3 = 'TRUE'; this.respuesta4 = 'FALSE'; this.respuesta5 = 'FALSE'; break;
    //   case '4' : this.respuesta1 = 'FALSE'; this.respuesta2 = 'FALSE'; this.respuesta3 = 'FALSE'; this.respuesta4 = 'TRUE'; this.respuesta5 = 'FALSE'; break;
    //   case '5' : this.respuesta1 = 'FALSE'; this.respuesta2 = 'FALSE'; this.respuesta3 = 'FALSE'; this.respuesta4 = 'FALSE'; this.respuesta5 = 'TRUE'; break;
    //   default: this.respuesta1 = 'FALSE'; this.respuesta2 = 'FALSE'; this.respuesta3 = 'FALSE'; this.respuesta4 = 'FALSE'; this.respuesta5 = 'FALSE'; break;
    // }
    // alert(this.respuesta1+'-'+this.respuesta2+'-'+this.respuesta3+'-'+this.respuesta4+'-'+this.respuesta5);
  }

  onChange(name: string, isChecked: boolean) {

    // const cartoons = (this.form.controls.name as FormArray);

    // if (isChecked) {
    //   cartoons.push(new FormControl(name));
    // } else {
    //   const index = cartoons.controls.findIndex(x => x.value === name);
    //   cartoons.removeAt(index);
    // }
  }
}
