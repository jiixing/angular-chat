import {Component, OnInit} from '@angular/core';
import {Message} from '../message/message'
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[];

  constructor() {
    this.messages = [new Message({text: 'hola'}), new Message({text: 'holad2'}), new Message({text: 'agas'})];
  }

  ngOnInit() {
  }

}
