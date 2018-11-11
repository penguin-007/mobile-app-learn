import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from "@angular/http";
import { catchError, map, tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: Http
  ) {
  }

  login() {
    return this.http.post(
      Config.apiUrl + 'user/login',
      JSON.stringify({
          email: 'myworkbucket@gmail.com',
          password: 'penguin'
      }),
      { headers: this.getCommonHeaders() }
    ).pipe(
        map(response => response.json()),
        catchError(this.handleErrors)
    );
  }

  userGetData(token) {
    let params = new URLSearchParams();
    params.append("token", token);

    return this.http.get(
      Config.apiUrl + 'user',
      {headers: this.getCommonHeaders(), params: params}
    ).pipe(
      map(response => response.json()),
      catchError(this.handleErrors)
    );
  }

  getCommonHeaders() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return headers;
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}
