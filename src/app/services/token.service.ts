import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreatedToken, MensajeIntentoErroneo, ValidationToken } from './url';
import { LoginService } from 'src/app/services/login.service';
import { ValidarToken } from '../components/modals/modal-token/ValidarToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient, private parent:LoginService) { }

  
  CreatedToken(data: any) {
    return this.http.post<any>(CreatedToken, data, this.parent.getHttpOptions()).pipe();
  }

  ValidationToken(data: ValidarToken) {
    return this.http.post<any>(ValidationToken, data, this.parent.getHttpOptions()).pipe();
  }

  MensajeError() {
    return this.http.get(MensajeIntentoErroneo, this.parent.getHttpOptions());
  }
}
