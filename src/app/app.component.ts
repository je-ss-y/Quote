import { Component } from '@angular/core';
import { Quotelines } from './quotelines';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quoted';
  quotes:Quotelines [] = [
    new Quotelines(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    new Quotelines(2,'Buy Cookies','I have to buy cookies for the parrot'),

  ]

}
