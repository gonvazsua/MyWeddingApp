import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent {

  @Input() user         : User;
  @Output() userEvent   : EventEmitter<any>;

  private send          : boolean;

  constructor(
    private modalService: NgbModal,
    private userService: UserService) {

    this.userEvent = new EventEmitter<User>();
    this.send = false;
  }

  toogleAddress() {
    this.send = !this.send;
    if(!this.send){
      this.user.address = null;
      this.user.city = null;
      this.user.postalCode = null;
    }
  }

  showInvitationModal(invitationModal) {
    this.send = this.user.address != null;
    this.modalService.open(invitationModal).result.then(
      (res) => {
        this.updateUserAddress(res);
      },
      (dismiss) => {}
    ); 
  }

  updateUserAddress(send) {
    if(!send){
      this.user.address = null;
      this.user.city = null;
      this.user.postalCode = null;
    }
    this.userEvent.emit(this.user);
  }

}
