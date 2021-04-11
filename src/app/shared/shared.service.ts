import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  message= [] as any;
  constructor() { }

  setMessage(data){
    this.message=data;
  }

  getMessage() {
    return this.message;
  }
}
