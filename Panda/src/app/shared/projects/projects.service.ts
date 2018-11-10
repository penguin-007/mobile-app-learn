import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from "@angular/http";
import { catchError, map, tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private http: Http
  ) {
  }

  getProjects(token): any {
    let params = new URLSearchParams();
    params.append("token", token);

    return this.http.get(
      'https://api.showsite.xyz/projects/list',
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
