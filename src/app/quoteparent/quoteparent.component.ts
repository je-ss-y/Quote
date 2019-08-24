import { Component, OnInit } from '@angular/core';
import { Quotelines } from '../quotelines';


@Component({
  selector: 'app-quoteparent',
  templateUrl: './quoteparent.component.html',
  styleUrls: ['./quoteparent.component.css']
})
export class QuoteparentComponent implements OnInit {
  quotes:Quotelines [] = [
    new Quotelines(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    new Quotelines(2,'Buy Cookies','I have to buy cookies for the parrot'),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;

  }

  constructor() { }

  ngOnInit() {
  }

}
