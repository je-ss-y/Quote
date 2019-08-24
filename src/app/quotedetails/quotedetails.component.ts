import { Component, OnInit,Input } from '@angular/core';
import { Quotelines } from '../quotelines';

@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {
  @Input() quote: Quotelines;

  constructor() { }

  ngOnInit() {
  }


}
