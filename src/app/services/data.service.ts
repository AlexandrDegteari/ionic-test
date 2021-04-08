import { Injectable } from '@angular/core';

export interface Message {
  account: string;
  sum: number;
  id: number;
}
export interface Card {
  name: string;
  type: string;
  account: string;
  sum: number;
  id: number;
}
export interface Credit {
  account: string;
  sum: number;
  id: number;
}

export interface Transaction {
  name: string;
  description: string;
  sum: number;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      account: 'MD10EC0000000224123155',
      sum: 0.00,
      id: 0,
    },
    {
      account: 'MD10EC0000000224123156',
      sum: 0.00,
      id: 1,
    },
  ];
  public cards: Card[] = [
    {
      name: 'Visa',
      type: 'Debit',
      account: '2244',
      sum: 0.00,
      id: 0,
    },
    {
      name: 'Mastercard',
      type: 'Debit',
      account: '2245',
      sum: 0.00,
      id: 1,
    },
  ];
  public credits: Credit[] = [
    {
      account: 'MD10EC0000000224123155',
      sum: 123.00,
      id: 0,
    }
  ];

  public transactions: Transaction[] = [
    {
      name: '(R) SRL M-Crisco',
      description: 'Plata pentru osb onform cont fn din 26.10.20',
      sum: 1003.67,
      id: 0,
    },
    {
      name: '(R) SC AGRODOR-SUCCES SRL',
      description: 'Executarea ordinului de plata in mod obisnuit prin sistemul ECB-Online',
      sum: -19345.00,
      id: 2,
    },
    {
      name: '(R) SC AGRODOR-SUCCES SRL',
      description: 'Executarea ordinului de plata in mod obisnuit prin sistemul ECB-Online <br> Miercuri, 15 Decembrie 2020',
      sum: -723.00,
      id: 3,
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

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
