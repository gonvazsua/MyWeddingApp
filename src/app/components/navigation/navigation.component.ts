import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  private user     : User;

  constructor(
    private authService : AuthService,
    private userService : UserService,
    private router      : Router) { }

  ngOnInit() {
    this.user = this.userService.getUserLocalStorage();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
