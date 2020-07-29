
import { Router } from '@angular/router';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { NumberService } from '../services/number.service';
import { AppModule } from '../app.module';

import { AddNumberComponent } from './add-number.component';
import { DebugElement } from '@angular/core';

describe('InputTest', () => {
  let router: Router;
  let fixture: ComponentFixture<AddNumberComponent>;
  let submitEl: DebugElement;

  beforeEach(() => {

      TestBed.configureTestingModule({
          imports: [ AppModule ],
      }).compileComponents();

      fixture = TestBed.createComponent(AddNumberComponent);
      router = TestBed.inject(Router);
      submitEl = fixture.debugElement;

  });

  it('submit button enabled with simple number', () => {
    const comp = fixture.componentInstance;

    comp.numberForm.controls.newNumber.setValue('123');

    expect(submitEl.nativeElement.querySelector('button').disabled).toBeFalsy();
  });

  it('submit button enabled with shorthand k number', () => {
    const comp = fixture.componentInstance;

    comp.numberForm.controls.newNumber.setValue('123k');

    expect(submitEl.nativeElement.querySelector('button').disabled).toBeFalsy();
  });

  it('submit button enabled with shorthand b number', () => {
    const comp = fixture.componentInstance;

    comp.numberForm.controls.newNumber.setValue('123b');

    expect(submitEl.nativeElement.querySelector('button').disabled).toBeFalsy();
  });

  it('submit button enabled with shorthand t number', () => {
    const comp = fixture.componentInstance;

    comp.numberForm.controls.newNumber.setValue('123t');

    expect(submitEl.nativeElement.querySelector('button').disabled).toBeFalsy();
  });

  it('submit button disabled with no input', () => {
    const comp = fixture.componentInstance;

    comp.numberForm.controls.newNumber.setValue('');

    expect(submitEl.nativeElement.querySelector('button').disabled).toBeTruthy();
  });

  it('submit button disabled with invalid input', () => {
    const comp = fixture.componentInstance;

    comp.numberForm.controls.newNumber.setValue('awdasg');

    expect(submitEl.nativeElement.querySelector('button').disabled).toBeTruthy();
  });

  it('submit button disabled with invalid shorthand input', () => {
    const comp = fixture.componentInstance;

    comp.numberForm.controls.newNumber.setValue('123h');

    expect(submitEl.nativeElement.querySelector('button').disabled).toBeTruthy();
  });
});
