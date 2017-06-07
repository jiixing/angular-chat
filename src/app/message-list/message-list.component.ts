import {Component, OnInit} from '@angular/core';
import {Message} from '../message/message'
import {MessageService} from '../message/message.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  // messages: Message[];
  messages: Observable<Message[]>;
  constructor(private messageService: MessageService) {
    // this.messages = [new Message({text: 'hola'}), new Message({text: 'holad2'}), new Message({text: 'agas'})];
  }


  ngOnInit() {
    this.messages = this.messageService.messages;

  }

}
