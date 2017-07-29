import {Component, OnInit, Input} from '@angular/core';
import {Message} from '../message/message'
@Component({
  selector: 'app-message-line',
  templateUrl: './message-line.component.html',
  styleUrls: ['./message-line.component.css']
})
export class MessageLineComponent implements OnInit {
  @Input() message: Message;

  constructor() {
  }

  ngOnInit() {
  }

}
