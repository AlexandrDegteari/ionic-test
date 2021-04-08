import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService, Message, Transaction} from '../services/data.service';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  public message: Message;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }
  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }
  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.message = this.data.getMessageById(parseInt(id, 10));
  }
  getTransactions(): Transaction[] {
    return this.data.getTransactions();
  }
  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? '' : '';
  }
}

