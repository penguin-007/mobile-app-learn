import { Component, OnInit } from '@angular/core';
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { ReportsService } from "~/app/shared/reports/reports.service";
import { switchMap } from "rxjs/operators";
import { Report } from "~/app/shared/reports/reports.model";
import * as appSettings from "tns-core-modules/application-settings";

@Component({
  selector: 'ns-reports-setting',
  templateUrl: './reports-setting.component.html',
  styleUrls: ['./reports-setting.component.css'],
  moduleId: module.id
})

export class ReportsSettingComponent implements OnInit {

  report: Report;

  // router data
  projectId;
  reportID;
  processing: boolean;
  token: any;

  constructor(
    private pageRoute: PageRoute,
    private routerExtensions: RouterExtensions,
    private reportsService: ReportsService
  ) {
    // use switchMap to get the latest activatedRoute instance
    this.pageRoute.activatedRoute.pipe(
      switchMap((activatedRoute) => activatedRoute.params)
    ).forEach((params) => {
      this.projectId = +params.id;
      this.reportID = +params.reportID;
    });
  }

  ngOnInit() {
    this.report = new Report();
    this.processing = true;

    this.token = appSettings.getString("token");
    if (this.token !== undefined && this.token !== "") {
      this.getReport(this.token, this.projectId, this.reportID);
    }
  }

  getReport(token, projectId, reportID) {
    this.reportsService.getReport(token, projectId, reportID).subscribe((result) => {
      if (result.body.results !== undefined) {
        this.report = result.body.results;
        console.log("report", this.report);
      }
    }, (error) => {
        console.error("getProjects", error);
    });
  }

}
