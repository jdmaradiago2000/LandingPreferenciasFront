import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { LoaderService } from 'src/app/services/loader.service';
import { LoginService } from 'src/app/services/login.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formLogin:FormGroup;
  public imgCaptcha: any;
  public captchaValid:boolean = false;
  public message: string = '';
  documentTypeList: any = [{'id':1, 'name':'Cédula de Ciudadania'}, {'id':2, 'name':'Cédula de Extranjería'},
  {'id':3, 'name':'Pasaporte'}, {'id':4, 'name':'Tarjeta de Identidad'}]
  submitted = false;
  submittedCaptcha = false;

  constructor(private loginService : LoginService, 
              private _sanitizer: DomSanitizer,
              private loaderService: LoaderService,
              private modalConfirm: NgbModal,) { }

  ngOnInit() {
    this.formLogin = new FormGroup({
      PhoneNumber:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      IdentificationDocument:new FormControl('',[Validators.required,Validators.minLength(4), Validators.maxLength(10),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      DocumentType:new FormControl('',[Validators.required]),
      textCaptcha: new FormControl('', [Validators.required]),
    });
    
    this.getCaptcha();
  }

  // convenience getter for easy access to form fields
  get form() { return this.formLogin.controls; }

  generateCaptcha()
  {
    this.getCaptcha();
  }

  getCaptcha() {
    this.loaderService.show();
    this.form.textCaptcha.setValue("");
    this.imgCaptcha = this._sanitizer.bypassSecurityTrustResourceUrl("data:image/png;base64, " + "iVBORw0KGgoAAAANSUhEUgAAAIEAAAAvCAYAAADEtqnOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAZqSURBVHhe7Zy\/Tx1HEMf5jyJFkaxIUaTYUhQpihwjIywsHDtGRgiEhfEPYoz5IQoKkCgoKCgoKCgoKCgokCgoKCgoKCgoKCgoKCgoKCjW\/r68fZ5bdnZn9\/buvYfvI63Eu5vZXW7nduZm3r2O2dlZNTU1VWvr6+vq6OhI3dzcqIq7yfHxsdrY2FB03TsODw\/V6upq4wDa3Nyc2tzcVKenp3XVinbm\/PxcbW1tqfn5+cw6Ly8vq4ODA9VRl1OXl5dqb29PLS0tZQShuL29rS4uLuqSFe0A1nN3d1ctLi5m1hOfd3Z2MuvZMAIKZzkwkP39fXV1dVWXrGglrq+va3f2yspKZt18O7vVCCjwIeiA+hC0tbU1BVdSxQ\/NB3Ec\/DxdHzQck8R4XiPQoCMsOhafDgTjwGAwlorywF2NmxN3OV0P7ALYDbArSBEbAQXuAG7BFj\/AjcCdVKQHfhz+3Obn4f8RB8QQZQQUTAyBozkxGAgCzdiJVfwPbjjc2Yjk6fXVN9zZ2VldMp7cRkDhtig8goZuUd8z2vUib0OvY1GuN6kRaPBPICAx\/wk0HaxU3Obk5MQahOMmglEUdRMVYgQUbjvDbpFqO2tntDu1PY6X5U4LNwKKK4GB499LQgrXgQusm5GYK9UIKNgBsBOY8YNOZd61hBS2cluKHls\/XABcQbOwGsEPDx82Wigxun8+f676Xr\/OXBy0\/pGR2jlXsiNmPMDpccdDoH3YCjZoqZJteecK2J2A\/iNSQnSorG4\/dXaqv168UENv32Yu2PjEhPp3eNia9qT6Ibj0Yvqj\/PrkifpnaOiWn0+1y9G5550rKN0IqIxLFn4TgdHo2FjmQpp+09cPh0vPdY5DxzvvP37MzBfxjlmwiYHOydby4IwJQgaRyFIZl5wJMpC2OwuBVWdfn7r3+HFQf8A1D9c5Clewce1csdA52VoekhiBRI7KuOR8cAWtgTdvgnysby6u866CDWKYHx89qkumwzYP1xxDcBoBkAyUSiYEnVXD4tOFkGbVfPMxz0sKNqZO0aQaL7cR+M4DiUws6BPuAG4hpKDlmxOO\/9LdrXoGBti8hpnI8fWZmlTjeY0AuAZzndNIZGIx+9YZOHPhzAycqaeJLdhw\/XHHOULkQ2Rd5DIC7jhFIpMHV\/+ugtbfL1\/WHkmhp12LWeuY+Py5lr\/449mzeo88rnlwx23EyErlOURGAMwB6Wd9zIZEJg+S\/rHIXEELj3QzMzOZY7pgo41EMneXnD7n60cqpwmV50hiBC6kcrHQ\/iXt\/tOnanB0VE1OTmYWfnp6uhbkmQEl1eXwyfjOa6RymlB5DrERADqodPBYWVuzYZMz289dXbXA0Uw8\/ffpkxp+904tLCxkjtOCFu2HI0TGhUSGouVDdGzcKSOg+Ao2v\/f2ZvRcBS3ED3gC4bCNb6JlODnfeRsxOjaCjACEDhwqb+LTN89LCzamHoVLBqGghXM0IeXqh+KTk\/Rh4utTitUIaOft0HTBZmx8PLNoIx8+NO5im56v+QpaD77GFza9VmoS2tYI4Oe7+\/tvFWzwGQkeJHpserEN43W9enUrroDh9Q4OJh8vVZNQuDsAMToaqpuyYEP7lUDl9Rta5s6DhJTvDS3bmLZjErRejC6ldCMI0QOQ5750Qgs2Mf2GzMcmj7+RSLIVtLgvjdj6MI9JyaNLKcUIQKiezvbhLqcX13zDJrRfTYwe1aEN6Kyj7w0tU4\/+HYrZVyylGQHw6eK53PaGDfw8\/L9ZsAG+Pjli9KgObSZwB643tBDIaj2uDwlaN1ZfU6oRAKqP5irYIOL\/raenIWuD9hVCCj2JLlfQQoCJghYCztA5aELm4aJ0IwDw4Xj0wnM3vTC0YEPHcY3nO8+RQi9U11XQoi7OhjmupEkp1Qi4N2zwHA6joAUb6RghspQUeqG6GsQPCGjNmwAN8YPtDS1zXEmTEmwEoejt0Pb9wOqF1dZ4Q6sQI8DCttIbNu0Crlsz3tBKZgS+gk0z37BpR8p8Qyu3EUgLNhXxcAWtVD85GGUE3A9bFWGlFd\/gdlvsFthtQ9LmFLERuPxVijdsKsLAeiCwThF3OY2AK9jktbyKtHA7s6SgBaxGwPkg\/Qxb+fnWBTGaLRfjitEaRsBls8yCTUV7gMWWFLRARxE\/iVbRWsAduApajV851wfKyFBVNA+dwf1240+pL4rNcbM+\/xj4AAAAAElFTkSuQmCC");
    this.loginService.getCaptcha()
    .subscribe(
      result => {
        this.loaderService.hide();
        this.imgCaptcha = this._sanitizer.bypassSecurityTrustResourceUrl("data:image/png;base64, " + result["data"]);
      }
    );
  }

  validateCaptcha() {
    this.loaderService.show();
    this.submittedCaptcha = true;
    this.loginService.validateCaptcha(this.form.textCaptcha.value)
    .subscribe(
      result => {
        this.loaderService.hide();
        if(result)
        {
          this.captchaValid = true;
        }
        else
        {
          this.form.textCaptcha.setValue("");
          this.getCaptcha();
        }
      }
    );
  }

  validate(openInfo:any){
    this.submitted = true;
    if(this.formLogin.invalid)
    {
      this.message = 'Faltan campos por diligenciar, por favor revisa.';
      this.modalConfirm.open(openInfo, {centered:true});
    }
    else
    {
      this.validateData(openInfo);
    }
  }

  validateData(openInfo:any) {
    this.loaderService.show();
    let userInfo: any = { 
      DocumentType: this.form.DocumentType.value, 
      Document: this.form.IdentificationDocument.value,
      MobilePhone: this.form.PhoneNumber.value,
      Captcha: this.form.textCaptcha.value,
     }; 

    this.loginService.ValidateUserInfo(userInfo)
    .subscribe(
      result => {
        this.loaderService.hide();
        this.message = result["msg"].toString();
        this.modalConfirm.open(openInfo, {centered:true});
      }
    );
  }
}
