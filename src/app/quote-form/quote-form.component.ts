import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import { Quotelines } from '../quotelines';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote= new Quotelines (0,"","","",new Date());
  @Output() addQuote = new EventEmitter<Quotelines >();
  submitForm(){
    this.addQuote.emit(this.newQuote);
      }

  constructor() { }

  ngOnInit() {
  }

}
