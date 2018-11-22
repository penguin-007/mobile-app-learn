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

  isLoading = true;

  // personMetadata
  personMetadata = {
    "propertyAnnotations":
    [
        {
            "name": "created_at",
            "displayName": "Created At",
            "editor": "DatePicker"
        },
        {
            "name": "campaign_ids",
            "displayName": "Campaign Ids",
            "editor": "Picker",
            "valuesProvider": [631068619, 631189199,632036150,631184837,632170047,631132025,632067263]
        },
        {
            "name": "id",
            "displayName": "Id",
            "editor": "Stepper"
        },
    ]
};

  testDataJson;

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

  goBack() {
    this.routerExtensions.back();
  }

  getReport(token, projectId, reportID) {
    this.reportsService.getReport(token, projectId, reportID).subscribe((result) => {
      if (result.body.results !== undefined) {
        this.report = result.body.results;
        // console.log("report", this.report);
        this.isLoading = false;
      }
    }, (error) => {
        console.error("getProjects", error);
    });
  }


}
