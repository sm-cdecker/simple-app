import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';

import { NumberService } from '../services/number.service';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'sa-add-number',
  templateUrl: './add-number.component.html'
})
export class AddNumberComponent {

  public numberForm: FormGroup;
  public matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private numberSvc: NumberService) {

    this.numberForm = new FormGroup({
      newNumber: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern(this.numberSvc.regexPattern)
        ])
      });
  }

  public addAndRedirect(): void {
    this.numberSvc.addNumber(this.numberForm.controls.newNumber.value);
    this.router.navigateByUrl('/view');
  }
}
