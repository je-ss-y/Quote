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
    new Quotelines(1, 'When you’re experiencing difficulties in life and it feels like you’re going backwards', 'An arrow can only be shot by pulling it backward. When life is dragging your back with difficulties, it means it’s going to launch you into something great. So just focus, and keep aiming',new Date(2019,3,14)),
    new Quotelines(2,'When you want to grow a more positive and abundant attitude…','A great attitude becomes a grea tday which becomes a great month which becomes a great year which becomes a great life',new Date(2019,3,14)),

  ]

}
