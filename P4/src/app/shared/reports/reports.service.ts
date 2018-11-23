import { Injectable } from "@angular/core";
import { Headers, Http, Response, URLSearchParams } from "@angular/http";
import { catchError, map, tap } from "rxjs/operators";

import { Observable } from "rxjs";

import { Config } from "../config";

@Injectable({
  providedIn: "root"
})
export class ReportsService {

  constructor(
    private http: Http
  ) {
  }

  getReports(token, projectId): any {
    const params = new URLSearchParams();
    params.append("token", token);
    params.append("projects_id", projectId);

    return this.http.get(
      Config.apiUrl + "report/list",
      {headers: this.getCommonHeaders(), params}
    ).pipe(
      map((response) => response.json())
    );
  }

  getReport(token, projectId, reportId) {
    const params = new URLSearchParams();
    params.append("token", token);
    params.append("projects_id", projectId);
    params.append("reports_id", reportId);

    return this.http.get(
      Config.apiUrl + "report/get",
      {headers: this.getCommonHeaders(), params}
    ).pipe(
      map((response) => response.json())
    );
  }

  renderReportStat(token, report) {
    const params = new URLSearchParams();
    params.append("token", token);
    params.append("reports_id", report.id);
    params.append("projects_id", report.project_id);
    params.append("report_type", report.report_type);
    params.append("metrics", report.metrics);

    return this.http.get(
      Config.apiUrl + "report/stats",
      {headers: this.getCommonHeaders(), params}
    ).pipe(
      map((response) => response.json())
    );
  }

  updateReport(report) {
    return this.http.put(
      Config.apiUrl + "report", report,
      { headers: this.getCommonHeaders() }
    ).pipe(
        map((response) => response.json())
    );
  }

  getCommonHeaders() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    return headers;
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));

    return Observable.throw(error);
  }

}
