import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject<string>("");
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {

    // console.log("from service"+message);
    
    this.messageSource.next(message)
  }

}