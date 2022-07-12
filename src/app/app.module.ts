import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
    LandingMovistarComponent
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
    MatStepperModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
