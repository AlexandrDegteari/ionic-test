import { Component } from '@angular/core';
import {DataService, Cont, Card, Credit} from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'conturi.page.html',
  styleUrls: ['conturi.page.scss'],
})
export class ConturiPage {
  constructor(private data: DataService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }
  getConts(): Cont[] {
    return this.data.getConts();
  }
  getCredits(): Credit[] {
    return this.data.getCredits();
  }
  getCards(): Card[] {
    return this.data.getCards();
  }


}
