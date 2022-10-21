import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswersServiceService {
  @Output() disparadorAnswersService: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
