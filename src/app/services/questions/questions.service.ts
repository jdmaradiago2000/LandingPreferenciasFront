import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadedRouterConfig } from '@angular/router/src/config';
import { previousLastQuestion, previousQuestion, getLog, nextQuestionUpdated, sendAnswers } from '../url';

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
    return this.http.post<any>(sendAnswers, data, this.getHttpOptions()).pipe();
    //return this.http.post<any>("https://localhost:44366/Question/addRespuestas/1", data, this.getHttpOptions()).pipe();
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

  getLastQuestionsPrevious(data: any): any{
    return this.http.get(previousLastQuestion + data, this.getHttpOptions()).pipe();
  }

  getQuestionsNextUpdated(data: any): any{

    console.log(data)
    return this.http.get(nextQuestionUpdated + data, this.getHttpOptions()).pipe();
  }
  
  getLog(data: any): any{
    return this.http.get(getLog + data, this.getHttpOptions()).pipe();
  }
}
