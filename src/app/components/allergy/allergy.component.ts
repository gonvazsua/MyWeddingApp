import { Component, OnInit, Input } from '@angular/core';
import Allergy from '../../models/allergy';
import { AllergyService } from '../../services/allergy/allergy.service';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../models/user';

@Component({
  selector: 'app-allergy',
  templateUrl: './allergy.component.html',
  styleUrls: ['./allergy.component.css']
})
export class AllergyComponent implements OnInit {

  @Input() user           : User;

  private isCollapsed     : boolean;
  private allergies       : Array<Allergy>;
  private allergyError    : string;
  private saving          : boolean;

  constructor(
      private allergyService: AllergyService,
      private modalService: NgbModal) {

    this.isCollapsed = true;
    this.allergies = new Array<Allergy>();
    this.allergyError = null;
    this.saving = false;
  }

  ngOnInit() {
    this.loadAllergies();
  }

  loadAllergies() {
    this.allergyService.findAll().subscribe(
      (response) => { this.allergies = response },
      (error) => { this.allergyError = error }
    );
  }

  showModalAllergies(allergiesModal) {
    this.modalService.open(allergiesModal);
  }

  userHasAllergy(allergy) : boolean {
    if(!this.user.allergies) return false;
    else {
      return this.user.allergies.includes(allergy);
    }
  }

  selectAllergy(allergy) {
    if(!this.user.allergies) this.user.allergies = new Array<Allergy>();
    this.user.allergies.push(allergy);
  }

}
