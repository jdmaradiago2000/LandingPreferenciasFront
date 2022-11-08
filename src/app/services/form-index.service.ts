import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormIndexService {
  @Output() disparadorFormIndex: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
