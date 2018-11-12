import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from "@angular/http";
import { catchError, map, tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Config } from "../config";

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(
    private http: Http
  ) {
  }
  
  getReports(token, projectId): any {
    let params = new URLSearchParams();
    params.append("token", token);
    params.append("projects_id", projectId);

    return this.http.get(
      Config.apiUrl + 'report/list',
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
