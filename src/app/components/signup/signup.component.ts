import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class SignupComponent implements OnInit {

  private signupForm					: FormGroup;
  private signupError         : string;
  private loading             : boolean;

  constructor(
    private router				: Router, 
    private authService		: AuthService,
    private fb						: FormBuilder) {

    this.signupError = null;
    this.loading = false;
    this.signupForm = this.fb.group({
      'email'     : ['', [Validators.required, Validators.maxLength(50), Validators.email]],
      'password'  : ['', [Validators.required, Validators.maxLength(50), Validators.minLength(6)]],
      'name'      : ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
      'lastname'  : ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]]
    });

  }

  ngOnInit() {}

  submit() {
    this.signupError = null;
    if(this.signupForm.valid){
      let user = this.buildUser();
      this.sendForm(user);
    }
  }

  buildUser(): User {
    let user = new User();
    user.email = this.signupForm.get('email').value;
    user.password = this.signupForm.get('password').value;
    user.name = this.signupForm.get('name').value;
    user.lastname = this.signupForm.get('lastname').value;
    user.isActive = true;
    user.isConfirmed = false;
    return user;
  }

  sendForm(user: User){
    this.loading = true;
    this.authService.signup(user).subscribe(
      (response) => {
        this.loading = false;
        if(!response.success) this.signupError = response.message;
        else {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
          this.router.navigate(['/profile']);
        }
      },
      (error) => {this.signupError = error.message}
    );
  }

}
