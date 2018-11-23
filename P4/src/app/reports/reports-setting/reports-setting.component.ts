import { Component, OnInit, ViewChild } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import * as appSettings from "tns-core-modules/application-settings";
import { Report } from "~/app/shared/reports/reports.model";
import { ReportsService } from "~/app/shared/reports/reports.service";
import { RadDataFormComponent } from "nativescript-ui-dataform/angular";

@Component({
  selector: "ns-reports-setting",
  templateUrl: "./reports-setting.component.html",
  styleUrls: ["./reports-setting.component.css"],
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

  dataForEdit = {};

  @ViewChild("myCommitDataForm") myCommitDataFormComp: RadDataFormComponent;

  // personMetadata
  reportSettingMetadata = {
    commitMode: "Immediate",
    propertyAnnotations:
    [
        {
            name: "date_max",
            displayName: "Date Max",
            editor: "DatePicker"
        },
        {
            name: "is_notify",
            displayName: "Email Notify",
            editor: "Switch"
        },
        {
            name: "title",
            displayName: "Title",
            required: true,
            validators: [
                { "name": "NonEmpty" },
                { "name": "MaximumLength", "params": { "length": 10 } }
            ]
        }
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
      this.getingReportData(this.token, this.projectId, this.reportID);
    }
  }

  goBack() {
    this.routerExtensions.back();
  }

  getingReportData(token, projectId, reportID) {
    this.reportsService.getReport(token, projectId, reportID).subscribe((result) => {
      if (result.body.results !== undefined) {
        this.report = result.body.results;
        // console.log("report", this.report);
        this.setValueOnDataForm(this.report);
        this.isLoading = false;
      }
    }, (error) => {
        console.error("getProjects", error);
    });
  }

  setValueOnDataForm(report): void {
    // prepare data for editing
    this.dataForEdit = {
      title: report.title,
      description: report.description,
      date_range: report.date_range,
      date_max: report.date_max,
      date_min: report.date_min,
      is_notify: !!+report.is_notify
    };
  }

  dfPropertyCommit(args) {
    console.log('dfPropertyCommit', args.propertyName);
    // args.returnValue = false;
  }

  dfPropertyCommitted(args) {
    // console.log('dfPropertyCommitted', this.myCommitDataFormComp.dataForm.editedObject);
  }

  saveSettings() {
    console.log('dataForEdit', this.dataForEdit);
    // this.myCommitDataFormComp.dataForm.commitAll();
  }

}
