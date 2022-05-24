import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { TableComponent } from './table/table.component';
import { TwowayComponent } from './twoway/twoway.component';
import { CurrencyCalculatorComponent } from './currency-calculator/currency-calculator.component';
import { TestingComponent } from './testing/testing.component';
import { CheckComponent } from './check/check.component';
import { LelseifComponent } from './lelseif/lelseif.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    TableComponent,
    TwowayComponent,
    CurrencyCalculatorComponent,
    TestingComponent,
    CheckComponent,
    LelseifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
