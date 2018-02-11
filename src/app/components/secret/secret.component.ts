import { Component, OnInit, Input }             from '@angular/core';
import { FormGroup, FormBuilder, Validators }   from '@angular/forms';
import { AuthService }                          from '../../services/auth/auth.service';
import { Router }                               from '@angular/router';
import { NgbModalRef }                          from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {

  @Input()
	private activeModal			      : NgbModalRef;

  private secretForm            : FormGroup;
  private customSecretError     : string;
  private loading               : boolean;

  constructor(
    private router              : Router,
    private fb						      : FormBuilder,
    private authService         : AuthService) { 

    this.customSecretError = null;
    this.loading = false;
    this.secretForm = this.fb.group({
      'password'  : ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]]
    });
  }

  ngOnInit() {
  }

  gotoSignup(){
    this.router.navigate(['/signup']);
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
