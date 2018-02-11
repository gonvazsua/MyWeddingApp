import { Component, OnInit, Input }								from '@angular/core';
import { FormBuilder, FormGroup, Validators } 		from '@angular/forms';
import { AuthService } 														from '../../services/auth/auth.service';
import { Router } 																from '@angular/router';
import { NgbModal, NgbModalRef } 									from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	@Input()
	private activeModal			: NgbModalRef;

	private loginForm					: FormGroup;
	private customLoginError	: string;
	private loading						: boolean;

  	constructor(
  		private router				: Router, 
    	private authService		: AuthService,
    	private fb						: FormBuilder) {

			this.customLoginError = null;
			this.loading = false;
  		this.loginForm = this.fb.group({
	      'email'     : ['', [Validators.required, Validators.maxLength(50), Validators.email]],
	      'password'  : ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]]
	    });
  	}

	ngOnInit() {
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
	          }
					);
				this.loading = false;	
	    }
	}

}
