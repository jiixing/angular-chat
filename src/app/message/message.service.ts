/* tslint:disable:no-debugger */
import {Injectable} from '@angular/core';
import {Message} from './message';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/scan'

interface IMessagesOperation extends Function {
  (messages: Message[]): Message[];
}
const initialMessages: Message[] = [];

@Injectable()
export class MessageService {
  // a stream that publishes new messages only once
  newMessages: Subject<Message> = new Subject<Message>();
  messages: Observable<Message[]>;  // a stream of all messages

  // `updates` receives _operations_ to be applied to our `messages`
  // it's a way we can perform changes on *all* messages (that are currently
  // stored in `messages`)
  updates: Subject<any> = new Subject<any>();

  // action streams
  create: Subject<Message> = new Subject<Message>();

  constructor() {
    this.messages = this.updates
    // watch the updates and accumulate operations on the messages
      .scan((messages: Message[],
             operation: IMessagesOperation) => {
          return operation(messages);
        },
        initialMessages)

    this.create
      .map(function (message: Message): IMessagesOperation {
        debugger
        return (messages: Message[]) => {
          return messages.concat(message);
        };
      })
      .subscribe(this.updates);
    debugger
    this.newMessages
      .subscribe(this.create);

    this.newMessages.subscribe(val => console.log(val))
    this.messages.subscribe(val => console.log(val))

  }

  addMessage(message: Message): void {
    this.newMessages.next(message);
    debugger;
  }

}
