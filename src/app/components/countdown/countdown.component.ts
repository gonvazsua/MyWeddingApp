import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Observable} from 'rxjs/Rx';

export const weddingDate : Date = new Date('2018-09-15T18:30:00');

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  days        : number;
  hours       : number;
  mins        : number;
  seconds     : number;
  timer       : Observable<any>;

  constructor() {
    this.days = null;
    this.hours = null;
    this.mins = null;
    this.seconds = null;
    this.timer = Observable.timer(0, 1000);
  }

  ngOnInit() {
    this.setTimer(null);
    this.timer.subscribe(t => this.setTimer(t));
  }

  setTimer(t) {
    let oneDay = 24*60*60*1000;
    let today = new Date();
    let diffDays = Math.round(Math.abs((today.getTime() - weddingDate.getTime())/(oneDay)));
    this.days = diffDays;

    this.hours = weddingDate.getHours() - today.getHours();
    if(this.hours <= 0){
      this.hours = 24 + this.hours;
      this.days--;
    }

    this.mins = weddingDate.getMinutes() - today.getMinutes();
    if(this.mins < 0){
      this.hours--;
      this.mins = 60 + this.mins;
    }

    this.seconds = 59 - today.getSeconds();
  }


}
