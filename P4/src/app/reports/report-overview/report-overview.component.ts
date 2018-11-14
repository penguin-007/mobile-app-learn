import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import * as appSettings from "tns-core-modules/application-settings";
import { ReportsService } from "~/app/shared/reports/reports.service";

import { Report } from "~/app/shared/reports/reports.model";

@Component({
  selector: "ns-report-overview",
  templateUrl: "./report-overview.component.html",
  styleUrls: ["./report-overview.component.css"],
  moduleId: module.id
})
export class ReportOverviewComponent implements OnInit {

  token;

  // router data
  projectId;
  reportID;

  report: Report;

  averageData;
  avgROI: string;

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

    this.token = appSettings.getString("token");
    if (this.token !== undefined && this.token !== "") {
      this.getReport(this.token, this.projectId, this.reportID);
    }
  }

  goBack() {
    this.routerExtensions.back();
  }

  getReport(token, projectId, reportID) {
    this.reportsService.getReport(token, projectId, reportID).subscribe((result) => {
      if (result.body.results !== undefined) {
        this.report = result.body.results;
        // console.log("report", this.report);
        this.renderReportStat(this.token, this.report);
      }
    }, (error) => {
        console.error("getProjects", error);
    });
  }

  renderReportStat(token, report) {
    this.reportsService.renderReportStat(token, report).subscribe((result) => {
      this.averageData = result.body.avg;
      console.log("renderReportStat", this.averageData);
      this.avgROI = ((this.averageData.ProfitLost / this.averageData.Cost)).toFixed(2);
    }, (error) => {
      console.error("renderReportStat", error);
    });
  }

}
