import {Component, OnInit} from '@angular/core';
import {MessageService} from './message/message.service';
import {Message} from './message/message';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  title = 'app';
  lastMessage: Message;

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.messageService.newMessages.subscribe(message => this.lastMessage = message);

  }

  test1(): void {

    this.messageService.addMessage(new Message({text: 'hello ' + (Math.random() * 100 | 0)}))
  }
}
