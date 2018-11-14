import { Component, OnInit } from "@angular/core";
import { PageRoute } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import * as appSettings from "tns-core-modules/application-settings";

@Component({
  selector: "ns-report-overview",
  templateUrl: "./report-overview.component.html",
  styleUrls: ["./report-overview.component.css"],
  moduleId: module.id
})
export class ReportOverviewComponent implements OnInit {

  projectId;
  reportID;

  constructor(
    private pageRoute: PageRoute
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
      console.log(token, this.projectId, this.reportID);
    }
  }

}
