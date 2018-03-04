import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { PushService } from '../services/push.service';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.css']
})
export class PushComponent implements OnInit {
  message: string;
  messages: string[] = [];

  constructor(private pushService: PushService) { }

  ngOnInit() {
    this.pushService
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message);
      });
  }

  sendMessage() {
    this.pushService.sendMessage(this.message);
    this.message = '';
  }
}
