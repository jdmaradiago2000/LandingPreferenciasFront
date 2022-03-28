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
export const CreatedToken= prefix + 'Tokens/GenerarToken/';
export const ValidationToken= prefix + 'Tokens/ValidationToken/';
export const ValidateUserInfoExpiredToken= prefix + 'User/ValidateUserInfoExpiredToken/';
export const ValidateUserInfoRestartTries= prefix + 'User/ValidateUserInfoRestartTries/';
export const MensajeTiempoExpirado= prefix + 'User/MensajeTiempoExpirado/';
export const MensajeIntentoErroneo= prefix + 'User/MensajeIntentoErroneo/';