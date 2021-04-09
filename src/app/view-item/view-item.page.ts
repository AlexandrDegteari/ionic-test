import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService, Cont, Transaction} from '../services/data.service';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-item.page.html',
  styleUrls: ['./view-item.page.scss'],
})
export class ViewItemPage implements OnInit {
  public cont: Cont;
  public state: string;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) {}
  public changeTab(tab) {
    this.state = tab;
  }
  ngOnInit() {
    this.state = 'all'
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.cont = this.data.getContById(parseInt(id, 10));
  }
  getTransactionsbyDate(date): Transaction[] {
    const filteredTransaction = this.data.getTransactions().filter(transaction => transaction.date === date);
    if (this.state === 'minus'){
      return filteredTransaction.filter(transaction => transaction.sign === '-');
    } else if (this.state === 'plus'){
      return filteredTransaction.filter(transaction => transaction.sign === '+');
    } else {
      return filteredTransaction;
    }
  }
}

