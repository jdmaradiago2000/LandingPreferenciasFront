import { prependListener } from 'process';
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

//TOKEN SERVICES 
export const generateFirstToken = prefix + 'Tokens/generarPrimerToken';
export const generateToken = prefix + 'Tokens/generarToken';
export const generateTokenUntyped = prefix +'Tokens/generarTokenUntyped'
export const validateToken = prefix + 'Tokens/validarToken';
export const desactiveToken = prefix + 'Tokens/deshabilitarToken';

export const timeTokenUntyped = prefix+ 'Tokens/tiempoDuracionTokenSinDigitar';

export const timeFirstToken = prefix+ 'Tokens/tiempoDuracionPrimerToken';

export const timeToken = prefix + 'Tokens/tiempoDuracionToken';
export const amountTryTokenUntyped = prefix + 'Tokens/cantidadIntentosTokenSinDigitar';
export const amountTryToken = prefix +'Tokens/cantidadIntentosToken';
export const addBlock = prefix + 'Bloqueo/blockUser';

export const logToken = prefix+ 'Tokens/logToken';

// PREGUNTAS Y RESPUESTAS
export const previousQuestion = prefix + 'Question/getQuestionPrevious/';
export const nextQuestionUpdated = prefix + 'Question/getQuestionUpdated/';

// LOGS
export const getLog = prefix + 'Question/getLog/';