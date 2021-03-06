import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteparentComponent } from './quoteparent/quoteparent.component';
import { QuotedetailsComponent } from './quotedetails/quotedetails.component';



@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuoteparentComponent,
    QuotedetailsComponent,
   
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
