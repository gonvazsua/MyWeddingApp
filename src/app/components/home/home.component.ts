import { Component, OnInit }      from '@angular/core';
import { Router } 								from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private loginForm					: FormGroup;
	private customLoginError	: string;
  private loading						: boolean;
  private activeModal       : NgbModalRef;
  private secretForm        : FormGroup;
  private customSecretError : string;

  constructor(
    private router				: Router, 
    private authService		: AuthService,
    private fb						: FormBuilder,
    private modalService  : NgbModal) {

    this.customSecretError = null;
    this.customLoginError = null;
    this.loading = false;
    this.loginForm = this.fb.group({
      'email'     : ['', [Validators.required, Validators.maxLength(50), Validators.email]],
      'password'  : ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]]
    });
    this.secretForm = this.fb.group({
      'password'  : ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]]
    });
  }

  openLogin(loginModal) {
    this.activeModal = this.modalService.open(loginModal);
  }

  openSecret(secretModal) {
    this.activeModal = this.modalService.open(secretModal);
  }

  submitLogin(){
    this.customLoginError = null;
    this.loading = true;
    if(this.loginForm.valid){
      this.authService
        .login(this.loginForm.get('email').value, this.loginForm.get('password').value)
        .subscribe(
          (response) => {
            if(!response.success) this.customLoginError = response.message;
            else {
              this.activeModal.close();
              localStorage.setItem('token', response.token);
              localStorage.setItem('user', JSON.stringify(response.user));
              this.router.navigate(['/profile']);
            } 
            this.loading = false;	
          }
        );
    }
  }

  submitSecret(){
    this.customSecretError = null;
    this.loading = true;
    if(this.secretForm.valid){
      this.authService
        .secret(this.secretForm.get('password').value)
        .subscribe(
          (response) => {
            if(response.success){
              this.activeModal.dismiss();
              this.router.navigate(['/signup']);
            } else {
              this.customSecretError = response.message;
            }
            this.loading = false;
          }
        );
    }
  }

}
