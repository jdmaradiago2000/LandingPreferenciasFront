import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { generateCaptcha, validateCaptcha, validateUserInfo, ValidateUserInfoExpiredToken, ValidateUserInfoRestartTries, MensajeTiempoExpirado } from './url';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public Intentos: number = 2;
  constructor(private http: HttpClient) { }

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

  getCaptcha() {
    return this.http.get(generateCaptcha, this.getHttpOptions());
  }

  MensajeTiempoExpirado() {
    return this.http.get(MensajeTiempoExpirado, this.getHttpOptions());
  }

  validateCaptcha(data: any) {
    return this.http.get(validateCaptcha + data, this.getHttpOptions()).pipe();
  }

  ValidateUserInfo(data: any) {
    return this.http.post<any>(validateUserInfo, data, this.getHttpOptions()).pipe();
  }

  ValidateUserInfoExpiredToken(data: any) {
    return this.http.post<any>(ValidateUserInfoExpiredToken, data, this.getHttpOptions()).pipe();
  }

  ValidateUserInfoRestartTries(data: any) {
    return this.http.post<any>(ValidateUserInfoRestartTries, data, this.getHttpOptions()).pipe();
  }
}