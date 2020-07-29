import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// angular material to handle making it look nice in a reasonable time
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';

// routes
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { AddNumberComponent } from './add-number/add-number.component';
import { ViewNumbersComponent } from './view-numbers/view-numbers.component';
import { HomeComponent } from './home/home.component';

// services
import { NumberService } from './services/number.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AddNumberComponent,
    HomeComponent,
    ViewNumbersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // angular-mat
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [
    NumberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
