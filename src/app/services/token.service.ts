import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreatedToken, MensajeIntentoErroneo, ValidationToken,generateToken,validateToken,desactiveToken,timeTokenUntyped,timeToken ,amountTryTokenUntyped,amountTryToken,generateTokenUntyped,timeFirstToken,generateFirstToken,addBlock ,logToken} from './url';
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

  // propios
  
  generateTokenUntyped(data:any){

    return this.http.post<any>(generateTokenUntyped ,data,this.parent.getHttpOptions());
  }
  
  generateToken(data : any){
    return this.http.post<any>(generateToken ,data,this.parent.getHttpOptions());

  }


  generateFirstToken(data : any){
    return this.http.post<any>(generateFirstToken ,data,this.parent.getHttpOptions());

  }

  validateToken(data:any){
    return this.http.post<any>(validateToken,data,this.parent.getHttpOptions());

  }

  desactiveToken(data:any){
    return this.http.post<any>(desactiveToken,data,this.parent.getHttpOptions());

  }

  
  getTimeTokenUntyped(){
    return this.http.get<any>(timeTokenUntyped,this.parent.getHttpOptions());

  }

  getTimeToken(){
    return this.http.get<any>(timeToken,this.parent.getHttpOptions());
    
  }

  
  getTimeFirstToken(){
    return this.http.get<any>(timeFirstToken,this.parent.getHttpOptions());    
  }

  getAmountTryTokenUntyped(){
    return this.http.get<any>(amountTryTokenUntyped,this.parent.getHttpOptions());

  }

  getAmountTryToken(){
    return this.http.get<any>(amountTryToken,this.parent.getHttpOptions());
  }


  addBlockUser(data:any){
    return this.http.post<any>(addBlock,data,this.parent.getHttpOptions());

  }

  addLogToken(data:any){
    return this.http.post<any>(logToken,data,this.parent.getHttpOptions());
  }

}
