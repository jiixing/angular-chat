/* tslint:disable:no-debugger */
import { Injectable } from '@angular/core';
import { Message } from './message';
import { Subject} from 'rxjs/Subject';

@Injectable()
export class MessageService {
  // a stream that publishes new messages only once
  newMessages: Subject<Message> = new Subject<Message>();

  constructor() { }
  addMessage(message: Message): void {
    this.newMessages.next(message);
  debugger;
  }

}
