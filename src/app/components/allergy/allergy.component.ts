import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Allergy from '../../models/allergy';
import { AllergyService } from '../../services/allergy/allergy.service';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../models/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-allergy',
  templateUrl: './allergy.component.html',
  styleUrls: ['./allergy.component.css']
})
export class AllergyComponent implements OnInit {

  @Input() user           : User;
  @Output() userEvent     : EventEmitter<User>;

  private isCollapsed     : boolean;
  private allergies       : Array<Allergy>;
  private allergyError    : string;
  private saving          : boolean;

  constructor(
      private allergyService: AllergyService,
      private modalService: NgbModal,
      private userService: UserService) {

    this.isCollapsed = true;
    this.allergies = new Array<Allergy>();
    this.allergyError = null;
    this.saving = false;
    this.userEvent = new EventEmitter<User>();
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
    if(this.user.allergies && this.user.allergies.find(a => a._id == allergy._id))
      return true;
    else return false;
  }

  selectAllergy(allergy) {
    if(!this.user.allergies) this.user.allergies = new Array<Allergy>();
    if(this.user.allergies.find(a => a._id == allergy._id)) 
      this.user.allergies = this.user.allergies.filter(a => a._id !== allergy._id) //Remove
    else 
      this.user.allergies.push(allergy);
    
    this.userService.updateUser(this.user).subscribe(
      success => { this.setUser(success) },
      error => { this.user.allergies.splice(allergy, 1) }
    );
  }

  setUser(user){
    this.user = user;
    localStorage.setItem("user", JSON.stringify(this.user));
    this.userEvent.emit(this.user);
  }

}
