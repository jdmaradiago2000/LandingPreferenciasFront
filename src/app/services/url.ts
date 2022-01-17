import {environment} from '../../environments/environment';
// _____________________________________________________________
// *************************PROFILE****************************
// _____________________________________________________________
let prefix=environment.urlBase ;

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// AUTHENTICATION
export const generateCaptcha= 'https://10.80.2.89/WCF_RONAN/Captcha.svc/generarCaptcha/';
export const validateCaptcha= 'https://10.80.2.89/WCF_RONAN/Captcha.svc/validateCaptcha/';