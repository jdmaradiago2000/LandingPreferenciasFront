import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Stepper from 'bs-stepper'

@Component({
  selector: 'app-landing-movistar',
  templateUrl: './landing-movistar.component.html',
  styleUrls: ['./landing-movistar.component.css']
})
export class LandingMovistarComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  constructor(private _formBuilder: FormBuilder) {}

  // btnDisabled = true;
  // Question1 = true;
  // Question2 = true;
  // Question3 = true;


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  Escenario1(){
    var onestep = document.getElementById("step1");
    var twostep = document.getElementById("step2");
    var threestep = document.getElementById("step3");
    var x = document.getElementById("Questions1");
    var y = document.getElementById("Questions2");
    var z = document.getElementById("Questions3");
    var btnBack = document.getElementById("BtnBack");
    var btnNext = document.getElementById("BtnNext");
    var btnBack2 = document.getElementById("BtnBack2");
    var btnNext2 = document.getElementById("BtnNext2");
    var btnSend = document.getElementById("BtnSend");
    onestep.style.backgroundColor = "#B0B6CA";
    twostep.style.backgroundColor = "#FFFFFF";
    threestep.style.backgroundColor = "#FFFFFF";
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
    btnBack.style.display = "none";
    btnNext.style.display = "block";
    btnBack2.style.display = "none";
    btnNext2.style.display = "none";
    btnSend.style.display = "none";
  }



  Escenario2(){
    var onestep = document.getElementById("step1");
    var twostep = document.getElementById("step2");
    var threestep = document.getElementById("step3");
    var x = document.getElementById("Questions1");
    var y = document.getElementById("Questions2");
    var z = document.getElementById("Questions3");
    var btnBack = document.getElementById("BtnBack");
    var btnNext = document.getElementById("BtnNext");
    var btnBack2 = document.getElementById("BtnBack2");
    var btnNext2 = document.getElementById("BtnNext2");
    var btnSend = document.getElementById("BtnSend");
    onestep.style.backgroundColor = "#FFFFFF";
    twostep.style.backgroundColor = "#B0B6CA";
    threestep.style.backgroundColor = "#FFFFFF";
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
    btnBack.style.display = "block";
    btnNext.style.display = "none";
    btnBack2.style.display = "none";
    btnNext2.style.display = "block";
    btnSend.style.display = "none";
  }

  Escenario3(){
    var onestep = document.getElementById("step1");
    var twostep = document.getElementById("step2");
    var threestep = document.getElementById("step3");
    var x = document.getElementById("Questions1");
    var y = document.getElementById("Questions2");
    var z = document.getElementById("Questions3");
    var btnBack = document.getElementById("BtnBack");
    var btnNext = document.getElementById("BtnNext");
    var btnBack2 = document.getElementById("BtnBack2");
    var btnNext2 = document.getElementById("BtnNext2");
    var btnSend = document.getElementById("BtnSend");
    onestep.style.backgroundColor = "#FFFFFF";
    twostep.style.backgroundColor = "#FFFFFF";
    threestep.style.backgroundColor = "#B0B6CA";
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
    btnBack.style.display = "none";
    btnNext.style.display = "none";
    btnBack2.style.display = "block";
    btnNext2.style.display = "none";
    btnSend.style.display = "block";
  }

  // mifuncion() {
  //   this.btnDisabled = !this.btnDisabled;
  // }

  ShowHide1() {
    var x = document.getElementById("Questions1");
    var y = document.getElementById("Questions2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}
