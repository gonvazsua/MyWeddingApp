import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { urls } from '../../../environments/urls';

@Injectable()
export class CommentService {

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

  findAll() : Observable<any> {
    return this.http.get(urls.comments, this.getOptions())
      .map(response => response.json())
      .catch(this.handleError);
  }

  delete(commentId) : Observable<any> {
    return this.http.delete(urls.comments + '/' + commentId, this.getOptions())
      .map(response => response.json())
      .catch(this.handleError);
  }

  save(comment) : Observable<any> {
    return this.http.post(urls.comments, JSON.stringify(comment), this.getOptions())
      .map(response => response.json())
      .catch(this.handleError);
  }

}
