import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})
export class CentralComponent {

  @Input() user: User;

  constructor(private router: Router) { }

  goToHotels() {
    this.router.navigate(['/hotels']);
  }

}
