import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import * as appSettings from "tns-core-modules/application-settings";
import { ReportsService } from "~/app/shared/reports/reports.service";

@Component({
  selector: "ns-report-overview",
  templateUrl: "./report-overview.component.html",
  styleUrls: ["./report-overview.component.css"],
  moduleId: module.id
})
export class ReportOverviewComponent implements OnInit {

  projectId;
  reportID;
  reportData;

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
    const token = appSettings.getString("token");
    // console.log('token report', token);
    if (token !== undefined && token !== "") {
      // console.log(token, this.projectId, this.reportID);
      this.getReport(token, this.projectId, this.reportID);
    }
  }

  goBack() {
    this.routerExtensions.back();
  }

  getReport(token, projectId, reportID) {
    this.reportsService.getReport(token, projectId, reportID).subscribe((result) => {
      if (result.body.results !== undefined) {
        this.reportData = result.body.results;
        console.log("reportData", this.reportData);
      }
    }, (error) => {
        console.error("getProjects", error);
    });
  }

}
