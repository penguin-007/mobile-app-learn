import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { ReportsService } from "~/app/shared/reports/reports.service";

import * as appSettings from "tns-core-modules/application-settings";

@Component({
  selector: "ns-reports-list",
  templateUrl: "./reports-list.component.html",
  styleUrls: ["./reports-list.component.css"],
  moduleId: module.id
})
export class ReportsListComponent implements OnInit {

  reportsArray = [];
  // todo добавить модель проекта

  isLoading = false;
  listLoaded = false;

  projectId: number;

  constructor(
    private pageRoute: PageRoute,
    private reportsService: ReportsService,
    private routerExtensions: RouterExtensions
  ) {
    // use switchMap to get the latest activatedRoute instance
    this.pageRoute.activatedRoute.pipe(
      switchMap((activatedRoute) => activatedRoute.params)
    ).forEach((params) => { this.projectId = +params.id; });
  }

  ngOnInit() {
    this.isLoading = true;

    const token = appSettings.getString("token");
    // console.log('token report', token);
    if (token !== undefined && token !== "") {
      this.getReports(token, this.projectId);
    }
  }

  getReports(token, projectId) {
    this.reportsService.getReports(token, projectId).subscribe((result) => {
      if (result.body.results !== undefined) {
        // console.log("getProjects", result['body'].results);
        this.reportsArray = result.body.results;
        // console.log('this.reportsArray', this.reportsArray);
        setTimeout(() => {
          this.isLoading = false;
          this.listLoaded = true;
        }, 500);
      }
    }, (error) => {
        console.error("getProjects", error);
    });
  }

  goBack() {
    this.routerExtensions.back();
  }

  onItemTap(args) {
    const reportId = this.reportsArray[args.index].id;
    this.routerExtensions.navigate(["projects/project", this.projectId, "report", reportId], {
      transition: {
          name: "fade"
      }
    });
  }

}
