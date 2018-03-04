import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PushService {
  private url = 'http://localhost:3000';
  private socket;   

  constructor() { 
    this.socket = io(this.url);
  }

  public sendMessage(message) {
    this.socket.emit('new-message', message);
  }
  public getMessages = () => {
    console.log("new msg");
    return Observable.create((observer) => {
        this.socket.on('new-message', (message) => {
            observer.next(message);
            console.log(message);
        });
    });
  }

}
