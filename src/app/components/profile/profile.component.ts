import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    @Output() userEvent   : EventEmitter<User>;

    public user        : User;

    constructor(private userService: UserService) {

      this.userEvent  = new EventEmitter<User>();
      this.user       = new User();      
    }

    ngOnInit() {
      this.getUser();
    }

    getUser(){
      this.userService.getLoggedUser().subscribe(
        (user) => this.setUser(user)
      );
    }

    setUser(user) {
      this.user = user;
      this.userEvent.emit(this.user);
    }

    saveUserFromChild(user) {
      this.userService.updateUser(this.user).subscribe(
        (user) => {
          this.user = user;
          this.userEvent.emit(this.user);
        }
      );
    }

}
