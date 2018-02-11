import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { urls } from '../../../environments/urls';
import { User } from '../../models/user';
import 'rxjs/Rx';

@Injectable()
export class AuthService {

	  private token: string;	

  	constructor(private http: Http) {
  		this.token = localStorage.getItem('token');
  	}

  	login(username: string, password: string): Observable<any> {
      let params = new URLSearchParams();
      params.set("email", username);
      params.set("password", password);
  		return this.http.post(urls.login, params)
        .map(response => response.json())
        .catch(this.handleError);
  	}

  	logout(): void {
        this.token = null;
        localStorage.removeItem('token');
    }

    signup(user: User): Observable<any> {
      let params = new URLSearchParams();
      params.set("user", JSON.stringify(user));
    	return this.http.post(urls.signup, params)
        .map(response => response.json())
        .catch(this.handleError);
    }

    secret(password: string) : Observable<any> {
      let params = new URLSearchParams();
      params.set("secret", password);
      return this.http.post(urls.secret, params)
        .map(response => response.json())
        .catch(this.handleError);
    }

    private handleError(error: any) { 
      let errMsg = 'Ha ocurrido un error inesperado';
      return Observable.throw(error);
    }


}
