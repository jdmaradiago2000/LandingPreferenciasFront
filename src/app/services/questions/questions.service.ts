import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) {

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
}
