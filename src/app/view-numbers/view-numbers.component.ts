import { Component, OnInit } from '@angular/core';
import { NumberService } from '../services/number.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sa-view-numbers',
  templateUrl: './view-numbers.component.html'
})
export class ViewNumbersComponent implements OnInit {
  public displayedColumns: Array<string> = [
    'Input',
    'Output',
    'Created On'
  ];
  constructor(public numberSvc: NumberService, private router: Router) {}

  public clearEntries(): void {
    this.numberSvc.clearNumbers();
    this.router.navigateByUrl('add');
  }

  ngOnInit(): void {
    if (this.numberSvc.numberList.length === 0) {
      this.router.navigateByUrl('add');
    }
  }
}
