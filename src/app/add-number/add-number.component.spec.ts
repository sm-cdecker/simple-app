
import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { NumberService } from '../services/number.service';
import { AppModule } from '../app.module';

import { AddNumberComponent } from './add-number.component';
import { DebugElement } from '@angular/core';
import { AppRoutes } from '../app-routing.module';
import { RouterTestingModule, setupTestingRouter } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

describe('InputTest', () => {
  let fixture: ComponentFixture<AddNumberComponent>;
  let submitEl: DebugElement;

  beforeEach(() => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(AppRoutes)
        ],
        declarations: [
          AppComponent,
          AddNumberComponent
        ],
        providers: [{
            provide: Router,
            useFactory: setupTestingRouter
          }
        ]
      }).compileComponents();
    }));

    fixture = TestBed.createComponent(AddNumberComponent);
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
