import { Component, OnInit, Input } from '@angular/core';
import {Message, Transaction} from '../services/data.service';
import { Credit } from '../services/data.service';
import { Card } from '../services/data.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  @Input() credit: Credit;
  @Input() card: Card;
  @Input() transaction: Transaction;

  constructor() { }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
