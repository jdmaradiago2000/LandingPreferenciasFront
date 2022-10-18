import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ContentComponent } from './components/content/content.component';
import { ModalInformativeComponent } from './components/modals/modal-informative/modal-informative.component';
import { ModalTokenComponent } from './components/modals/modal-token/modal-token.component';
import { LandingMovistarComponent } from './components/landing-movistar/landing-movistar.component';
import { app_routing } from './app.routes';
import { Header1Component } from './components/header1/header1.component';
import { Header2Component } from './components/header2/header2.component';
import { Header3Component } from './components/header3/header3.component';
import { SurveyComponent } from './views/survey.component';
import { ContainerSurveyComponent } from './components/container-survey/container-survey.component';
import { FirstQuestionComponent } from './components/first-question/first-question.component';
import { SecondQuestionComponent } from './components/second-question/second-question.component';
import { ThirdQuestionComponent } from './components/third-question/third-question.component';
import { CompletedQuestionsComponent } from './components/completed-questions/completed-questions.component';
import { HeaderSurveyComponent } from './components/header-survey/header-survey.component';
import { Etapa1Component } from './components/etapas/etapa1/etapa1.component';
import { Etapa2Component } from './components/etapas/etapa2/etapa2.component';
import { Etapa3Component } from './components/etapas/etapa3/etapa3.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    LoaderComponent,
    ContentComponent,
    ModalInformativeComponent,
    ModalTokenComponent,
    LandingMovistarComponent,
    Header1Component,
    Header2Component,
    Header3Component,
    SurveyComponent,
    ContainerSurveyComponent,
    FirstQuestionComponent,
    SecondQuestionComponent,
    ThirdQuestionComponent,
    CompletedQuestionsComponent,
    HeaderSurveyComponent,
    Etapa1Component,
    Etapa2Component,
    Etapa3Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatStepperModule,
    app_routing,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
