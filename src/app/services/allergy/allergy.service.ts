import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { urls } from '../../../environments/urls';

@Injectable()
export class AllergyService {

  constructor(private http: Http) { }

  private getOptions() : RequestOptions {
    let headers = new Headers();
    headers.append('x-access-token', localStorage.getItem("token"));
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({headers: headers});
  }

  findAll() : Observable<any> {
    return this.http.get(urls.allergy, this.getOptions())
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) { 
    let errMsg = 'Ha ocurrido un error inesperado';
    return Observable.throw(error);
  }

}
