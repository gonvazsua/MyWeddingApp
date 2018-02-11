import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allergies',
  templateUrl: './allergies.component.html',
  styleUrls: ['./allergies.component.css']
})
export class AllergiesComponent implements OnInit {

    private user      : User;

    constructor(
      private router  : Router) {

      this.user = new User();
    }

    ngOnInit() {
      this.getUser();
      //this.loadAllergies();
    }

    getUser() {
      let jsonUser = localStorage.getItem("user");
      if(jsonUser) this.user = JSON.parse(jsonUser);
      else this.router.navigate(['/home']); 
    }

}
