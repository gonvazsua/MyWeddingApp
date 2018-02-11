import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() user     : User;

  constructor(
    private authService : AuthService,
    private router      : Router) { }

  ngOnInit() {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
