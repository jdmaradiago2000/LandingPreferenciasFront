import {environment} from '../../environments/environment';
// _____________________________________________________________
// *************************PROFILE****************************
// _____________________________________________________________
let prefix=environment.urlBase ;

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// AUTHENTICATION
export const generateCaptcha= prefix + 'Captcha/generarCaptcha/';
export const validateCaptcha= prefix + 'Captcha/validateCaptcha/';
export const validateUserInfo= prefix + 'User/ValidateUserInfo/';