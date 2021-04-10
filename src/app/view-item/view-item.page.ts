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
    this.state = 'all';
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.cont = this.data.getContById(parseInt(id, 10));
  }
//   getTransactions(): Transaction[] {
//     const filteredTransaction = this.data.getTransactions();
//     const result = filteredTransaction.reduce((acc, item) => {
//       const date = item.date.split(' ')[0];
//       if (acc[date]) {
//         acc[date].push(item);
//       } else {
//         acc[date] = [item];
//       }
//       return acc;
//     }, []);
//
//     console.log(result);
// // или, если ключи не нужны
// //     console.log(Object.values(result));
//     // let dates = this.data.getTransactions().map(transaction =>  transaction.date);
//     // dates = dates.reverse().filter((e, i, arr) => arr.indexOf(e, i + 1) === -1).reverse();
//     // console.log(dates);
//     // const filteredTransaction = this.data.getTransactions().filter(transaction => transaction.date === date);
//     // if (this.state === 'minus'){
//     //   return filteredTransaction.filter(transaction => transaction.sign === '-');
//     // } else if (this.state === 'plus'){
//     //   return filteredTransaction.filter(transaction => transaction.sign === '+');
//     // } else {
//     // return result;
//     return result;
//     // }
//   }
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

