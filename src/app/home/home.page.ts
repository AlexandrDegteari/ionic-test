import { Component } from '@angular/core';
import {DataService, Message, Card, Credit, Transaction} from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }
  getMessages(): Message[] {
    return this.data.getMessages();
  }
  getCredits(): Credit[] {
    return this.data.getCredits();
  }
  getCards(): Card[] {
    return this.data.getCards();
  }


}
