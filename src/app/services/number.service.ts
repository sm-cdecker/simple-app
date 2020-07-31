import { Injectable } from '@angular/core';

import { FormattedNumber, Shorthand } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NumberService {
  private LOCALSTORE_KEY: string = 'storedNumbers';

  public numberList: Array<FormattedNumber> = [];

  // written in a way that is theoretically expandable
  public shorthands: Array<Shorthand> = [
    { // thousand
      character: 'k',
      multiplier: 1000
    },
    { // million
      character: 'm',
      multiplier: 1000000
    },
    { // billion
      character: 'b',
      multiplier: 1000000000
    },
    { // trillion
      character: 't',
      multiplier: 1000000000000
    }
  ];

  public get regexPattern(): RegExp {
    return new RegExp(`^\\d+(.\\d+)?[${ this.shortHandChars }]?$`, 'i');
  }

  private get shortHandChars(): string {
    return this.shorthands.map(x => x.character).join('');
  }

  constructor() {
    const storedList = window.localStorage.getItem(this.LOCALSTORE_KEY);
    if (!!storedList) {
      this.numberList = JSON.parse(storedList);
    }
  }

  public addNumber(input: string): void {
    // create object here
    this.numberList.push({
      originalValue: input,
      output: this.getOutput(input),
      createDate: new Date()
    });
    window.localStorage.setItem(this.LOCALSTORE_KEY, JSON.stringify(this.numberList));
  }

  public clearNumbers(): void {
    this.numberList = [];
    window.localStorage.removeItem(this.LOCALSTORE_KEY);
  }

  private getOutput(input: string): number {
    // getting the right 'shorthand'
    const shorthand: Shorthand = this.shorthands.find(s => input.toLowerCase().includes(s.character.toLowerCase()));

    if (!!shorthand) {
      // getting the raw numerical value
      const num = +(input.toLowerCase().replace(shorthand.character, ''));

      return num * shorthand.multiplier;

    }

    return +input;
  }
}
