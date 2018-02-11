import { Component, OnInit }      from '@angular/core';
import { Router } 								from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(){

    /*
    if(localStorage.getItem("token")){
      this.router.navigate(['/profile']);
    }*/

  }

}
