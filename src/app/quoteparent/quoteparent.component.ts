import { Component, OnInit } from '@angular/core';
import { Quotelines } from '../quotelines';


@Component({
  selector: 'app-quoteparent',
  templateUrl: './quoteparent.component.html',
  styleUrls: ['./quoteparent.component.css']
})
export class QuoteparentComponent implements OnInit {
  quotes:Quotelines [] = [
    new Quotelines(1, 'When you’re experiencing difficulties in life and it feels like you’re going backwards', 'An arrow can only be shot by pulling it backward. When life is dragging your back with difficulties, it means it’s going to launch you into something great. So just focus, and keep aiming',new Date(2019,3,14)),
    new Quotelines(2,'When you want to grow a more positive and abundant attitude…','A great attitude becomes a grea tday which becomes a great month which becomes a great year which becomes a great life”',new Date(2019,3,14)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;

  }
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
