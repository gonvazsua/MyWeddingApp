import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-confirm-presence',
  templateUrl: './confirm-presence.component.html',
  styleUrls: ['./confirm-presence.component.css']
})
export class ConfirmPresenceComponent {

  @Input() user         : User;
  @Output() userEvent   : EventEmitter<any>;

  private hasCompanion  : boolean;
  
  constructor(
    private modalService: NgbModal,
    private userService: UserService) {

    this.hasCompanion = false;
    this.userEvent = new EventEmitter<User>();
  }

  showModalPresence(presenceModal) {
    this.hasCompanion = this.user.companion != null;
    this.modalService.open(presenceModal).result.then(
      (result) => { 
        this.user.isConfirmed = result;
        if(!result) {
          this.user.companion = null;
          this.hasCompanion = false;
        }
        this.userEvent.emit(this.user);
      },
      (dismiss) => {}
    );
  }

}
