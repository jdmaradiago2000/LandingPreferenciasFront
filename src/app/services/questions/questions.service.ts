import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadedRouterConfig } from '@angular/router/src/config';
import { previousQuestion, getLog } from '../url';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) {}

  getHttpOptions() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
        //'Authorization': 'Bearer ' + this.obj_Authentication.token        
      })
    };
    return httpOptions;
  }

  sendAnswers(data: any) {
    return this.http.post<any>("https://localhost:44366/Question/addRespuestas/1", data, this.getHttpOptions()).pipe();
  }

  sendAnswersToUpdate(data: any) {
    return this.http.post<any>("https://localhost:44366/Question/updateRespuestas/1", data, this.getHttpOptions()).pipe();
  }

  sendLog(data: any) {
    return this.http.post<any>("https://localhost:44366/Question/addLogInteracciones/1", data, this.getHttpOptions()).pipe();
  }


  getQuestionsPrevious(data: any): any{
    return this.http.get(previousQuestion + data, this.getHttpOptions()).pipe();
  }

  getQuestionsNext(): any{
    return this.http.get("https://localhost:44366/Question/getQuestion/1", this.getHttpOptions()).pipe();
  }

  getQuestions1(): any{
    return this.http.get("https://localhost:44366/Question/getQuestion/1");
  }

  getQuestions2(): any{
    return this.http.get("https://localhost:44366/Question/getQuestion/2");
  }

  getQuestions3(): any{
    return this.http.get("https://localhost:44366/Question/getQuestion/3");
  } 
  
  getLog(data: any): any{
    return this.http.get(getLog + data, this.getHttpOptions()).pipe();
  }
}
