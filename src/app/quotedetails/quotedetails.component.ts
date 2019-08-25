import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { Quotelines } from '../quotelines';

@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {
  @Input() quote: Quotelines;
  @Output() isComplete = new EventEmitter<boolean>();
 
  like=0;
  upvote(){
    this.like++;
  }
  Dislike=0;
  downvote(){
    this.Dislike++;
  }
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }


}

