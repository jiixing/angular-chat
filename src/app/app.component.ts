import {Component} from '@angular/core';
import {MessageService} from './message/message.service';
import {Message} from './message/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'app';

  constructor(private messageService: MessageService) {
  }

  test1(): void {
    this.messageService.addMessage(new Message({text: 'hello'}))
  }
}
