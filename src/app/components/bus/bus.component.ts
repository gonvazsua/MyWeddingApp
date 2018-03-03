import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent {

  @Input() user         : User;
  @Output() userEvent   : EventEmitter<any>;

  constructor(
    private modalService: NgbModal,
    private userService: UserService) {

    this.userEvent = new EventEmitter<User>();
  }

  showBusModal(busModal) {
    this.modalService.open(busModal).result.then(
      (res) => {
        if(res) this.user.useBus = true;
        else this.user.useBus = false;
        this.userEvent.emit(this.user);
      },
      (dismiss) => {}
    );
  }

}
