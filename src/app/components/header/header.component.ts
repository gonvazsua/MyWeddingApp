import { Component, OnInit, Output, EventEmitter, Input } 		from '@angular/core';
import { NgbModal, NgbModalRef } 						from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	@Output()
	private modalEvent		: EventEmitter<any>;

	@Input()
	private showLogo		: boolean;

	private activeModal: 	NgbModalRef;

  	constructor(
		private modalService: NgbModal) {

		this.modalEvent = new EventEmitter<any>();
	}

  	ngOnInit() {
  
  	}

	openLogin(id){
		this.activeModal = this.modalService.open(id);
		this.modalEvent.emit(this.activeModal);
	}

	openSecret(id){
		this.activeModal = this.modalService.open(id);
		this.modalEvent.emit(this.activeModal);
	}

}
