import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Http, Headers, RequestOptions } from '@angular/http';
import { urls } from '../../../environments/urls';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  private getOptions() : RequestOptions {
    let headers = new Headers();
    headers.append('x-access-token', localStorage.getItem("token"));
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({headers: headers});
  }

  private handleError(error: any) { 
    let errMsg = 'Ha ocurrido un error inesperado';
    return Observable.throw(error);
  }

  updateUser(user: User): Observable<any> {
    let headers = new Headers();
    headers.append('x-access-token', localStorage.getItem("token"));
    headers.append('Content-Type', 'application/json');
    return this.http.put(urls.users + '/' + user._id, JSON.stringify(user), this.getOptions())
      .map(response => response.json())
      .catch(this.handleError);
  }

}