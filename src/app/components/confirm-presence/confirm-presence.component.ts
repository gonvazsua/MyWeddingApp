import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-confirm-presence',
  templateUrl: './confirm-presence.component.html',
  styleUrls: ['./confirm-presence.component.css']
})
export class ConfirmPresenceComponent {

  @Input() user     : User;
  
  constructor() { }


}
