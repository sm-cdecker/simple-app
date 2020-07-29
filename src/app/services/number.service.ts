import { Injectable } from '@angular/core';

import { FormattedNumber, Shorthand } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NumberService {
  public numberList: Array<FormattedNumber> = [];

  public shorthands: Array<Shorthand> = [

    // thousand
    {
      character: 'k',
      multiplier: 1000
    },
    // million
    {
      character: 'm',
      multiplier: 1000000
    },
    // million
    {
      character: 'b',
      multiplier: 1000000000
    },
    // trillion
    {
      character: 't',
      multiplier: 1000000000000
    }
  ];

  public addNumber(input: string): void {
    // create object here
    this.numberList.push({
      originalValue: input,
      output: this.getOutput(input),
      createDate: new Date()
    });
  }

  public get regexPattern(): RegExp {
    return new RegExp(`^\\d+[${ this.shortHandChars }]?$`, 'i');
  }

  private get shortHandChars(): string {
    return this.shorthands.map(x => x.character).join('');
  }

  private getOutput(input: string): number {
    // getting the right 'shorthand'
    const shorthand: Shorthand = this.shorthands.find(s => input.toLowerCase().includes(s.character.toLowerCase()));
    // getting the raw numerical value
    const num = +(input.toLowerCase().replace(shorthand.character, ''));

    return num * shorthand.multiplier;
  }
}
