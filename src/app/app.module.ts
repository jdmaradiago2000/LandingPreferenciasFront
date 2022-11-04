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
import { Header1Component } from './components/headers/header1/header1.component';
import { Header2Component } from './components/headers/header2/header2.component';
import { Header3Component } from './components/headers/header3/header3.component';
import { SurveyComponent } from './views/survey.component';
import { ContainerSurveyComponent } from './components/survey/container-survey/container-survey.component';
import { FirstQuestionComponent } from './components/survey/first-question/first-question.component';
import { SecondQuestionComponent } from './components/survey/second-question/second-question.component';
import { ThirdQuestionComponent } from './components/survey/third-question/third-question.component';
import { CompletedQuestionsComponent } from './components/survey/completed-questions/completed-questions.component';
import { HeaderSurveyComponent } from './components/headers/header-survey/header-survey.component';
import { Etapa1Component } from './components/stages/etapa1/etapa1.component';
import { Etapa2Component } from './components/stages/etapa2/etapa2.component';
import { Etapa3Component } from './components/stages/etapa3/etapa3.component';
import { HeaderImage1Component } from './components/header-images/header-image1/header-image1.component';
import { HeaderImage2Component } from './components/header-images/header-image2/header-image2.component';
import { HeaderImage3Component } from './components/header-images/header-image3/header-image3.component';
import { StageContainerComponent } from './components/stages/stage-container/stage-container.component';
import { HeaderImagesContainerComponent } from './components/header-images/header-images-container/header-images-container.component';
import { AllQuestionsComponent } from './components/survey/all-questions/all-questions.component';
import { DialogoConfirmacionComponent } from './components/dialogo-confirmacion/dialogo-confirmacion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ModalConfirmComponent } from './components/modals/modal-confirm/modal-confirm.component';

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
    HeaderImage1Component,
    HeaderImage2Component,
    HeaderImage3Component,
    StageContainerComponent,
    HeaderImagesContainerComponent,
    AllQuestionsComponent,
    DialogoConfirmacionComponent,
    ModalConfirmComponent,
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
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogoConfirmacionComponent]
})
export class AppModule { }
