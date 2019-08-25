import { Component, OnInit } from '@angular/core';
import { Quotelines } from '../quotelines';


@Component({
  selector: 'app-quoteparent',
  templateUrl: './quoteparent.component.html',
  styleUrls: ['./quoteparent.component.css']
})
export class QuoteparentComponent implements OnInit {
  quotes:Quotelines [] = [
    new Quotelines(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2019,3,14)),
    new Quotelines(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,3,14)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;

  }
  completeGoal(isComplete, index){
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
