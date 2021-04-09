import { Component, OnInit, Input } from '@angular/core';
import {Cont, Transaction} from '../services/data.service';
import { Credit } from '../services/data.service';
import { Card } from '../services/data.service';

@Component({
  selector: 'app-message',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() cont: Cont;
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
