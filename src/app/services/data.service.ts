import { Injectable } from '@angular/core';

export interface Cont {
  account: string;
  currency: string;
  sum: number;
  id: number;
}
export interface Card {
  name: string;
  type: string;
  account: string;
  sum: number;
  currency: string;
  standard: string;
  id: number;
}
export interface Credit {
  account: string;
  currency: string;
  sum: number;
  id: number;
}

export interface Transaction {
  name: string;
  description: string;
  currency: string;
  sign: string;
  sum: number;
  date: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public conturi: Cont[] = [
    {
      account: 'MD10EC0000000224123155',
      currency: 'MDL',
      sum: 1000.67,
      id: 0,
    },
    {
      account: 'MD10EC0000000224123156',
      currency: 'MDL',
      sum: 1000.67,
      id: 1,
    },
  ];
  public cards: Card[] = [
    {
      name: 'Visa',
      type: 'Debit',
      account: '2244',
      sum: 19349.67,
      currency: 'MDL',
      standard: 'Visa',
      id: 0,
    },
    {
      name: 'Mastercard',
      type: 'Debit',
      account: '2244',
      sum: 100.67,
      currency: '$',
      standard: 'Standard',
      id: 1,
    },
  ];
  public credits: Credit[] = [
    {
      account: 'MD10EC0000000224123155',
      sum: 123.67,
      currency: 'MDL',
      id: 0,
    }
  ];

  public transactions: Transaction[] = [
    {
      name: '(R) SRL M-Crisco',
      description: 'Plata pentru osb onform cont fn din 26.10.20',
      currency: 'MDL',
      sign: '+',
      sum: 1003.67,
      date: '2020-12-13',
      id: 1,
    },
    {
      name: '(R) SC AGRODOR-SUCCES SRL',
      description: 'Executarea ordinului de plata in mod obisnuit prin sistemul ECB-Online',
      currency: 'MDL',
      sign: '-',
      sum: 1345.67,
      date: '2020-12-13',
      id: 2,
    },
    {
      name: '(R) SC SUCCES SRL',
      description: 'Executarea ordinului de plata in mod obisnuit prin sistemul ECB-Online',
      currency: 'MDL',
      sign: '+',
      sum: 2223.67,
      date: '2020-12-14',
      id: 3,
    },
    {
      name: '(R) SC DOR SRL',
      description: 'Executarea ordinului de plata in mod obisnuit prin sistemul ECB-Online',
      currency: 'MDL',
      sign: '-',
      sum: 523.67,
      date: '2020-12-14',
      id: 4,
    },
    {
      name: '(R) SC AGRO-SERVICE SRL',
      description: 'Executarea ordinului de plata in mod obisnuit prin sistemul ECB-Online',
      currency: 'MDL',
      sign: '-',
      sum: 2723.67,
      date: '2020-12-14',
      id: 5,
    },
  ];

  constructor() { }

  public getTransactions(): Transaction[] {
    return this.transactions;
  }
  public getCredits(): Credit[] {
    return this.credits;
  }
  public getCreditById(id: number): Credit {
    return this.credits[id];
  }
  public getCards(): Card[] {
    return this.cards;
  }
  public getCardById(id: number): Card {
    return this.cards[id];
  }

  public getConts(): Cont[] {
    return this.conturi;
  }

  public getContById(id: number): Cont {
    return this.conturi[id];
  }
}
