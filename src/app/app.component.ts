import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public title: string = 'simple-app';
}
