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

  goToTourisme() {
    window.open("http://turismoarcos.com/index.php/es/", "_blank");
  }

  goToCelebration() {
    window.open("http://www.elrosalejo.com/", "_blank");
  }

  goToPlans() {
    window.open("https://www.tripadvisor.es/Restaurants-g229461-Arcos_de_la_Frontera_Costa_de_la_Luz_Andalucia.html", "_blank");
  }

}
