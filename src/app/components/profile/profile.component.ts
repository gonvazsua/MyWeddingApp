import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    @Output() userEvent   : EventEmitter<User>;

    private user        : User;

    constructor() {

      this.userEvent  = new EventEmitter<User>();
      this.user       = new User();      
    }

    ngOnInit() {
      this.getUser();
    }

    getUser(){
      let unparsedUser = localStorage.getItem("user");
      this.user = JSON.parse(unparsedUser);
      this.userEvent.emit(this.user);
      console.log("emited: " + this.user);
    }

}
