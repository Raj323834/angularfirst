import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Target1Component } from './target1/target1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CurrencyComponent } from './currency/currency.component';
import { Target2Component } from './target2/target2.component';

@NgModule({
  declarations: [
    AppComponent,
    Target1Component,
    BootstrapComponent,
    CalculatorComponent,
    CurrencyComponent,
    Target2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
