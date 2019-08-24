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
    {id:1, name:'Watch ....'},
    {id:2,name:'Buy Cookies'},
  ]

}
