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

  @ViewChild("myRuntimeDataFormComp") myRuntimeDataFormComp: RadDataFormComponent;

  // personMetadata
  reportSettingMetadata = {
    commitMode: "Immediate",
    propertyAnnotations:
    [
      {
          name: "title",
          displayName: "Title",
          index: 0,
          required: true,
          editor: "Text",
          validators: [
              { "name": "NonEmpty" },
              { "name": "MaximumLength", "params": { "length": 10 } }
          ]
      },
      {
          name: "description",
          displayName: "Description",
          index: 1,
          editor: "MultilineText",
      },
      {
          name: "date_range",
          displayName: "date_range",
          index: 2,
          editor: "Text",
      },
      {
          name: "date_min",
          displayName: "Date Min",
          index: 3,
          editor: "DatePicker"
      },
      {
          name: "date_max",
          displayName: "Date Max",
          index: 4,
          editor: "DatePicker"
      },
      {
          name: "is_notify",
          displayName: "Email Notify",
          index: 5,
          editor: "Switch"
      },
    ]
  };

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

  getingReportData(token, projectId, reportID, pullRefresh?) {
    this.reportsService.getReport(token, projectId, reportID).subscribe((result) => {
      if (result.body.results !== undefined) {
        this.report = result.body.results;
        // console.log("report", this.report);
        this.setValueOnDataForm(this.report);
        this.isLoading = false;
        
        if (pullRefresh) {
          pullRefresh.refreshing = false;
        }
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
    console.log("dfPropertyCommit", args.propertyName);
    // args.returnValue = false;
  }

  dfPropertyCommitted(args) {
    // console.log('dfPropertyCommitted', this.myCommitDataFormComp.dataForm.editedObject);
  }

  saveSettings() {
    // const property = this.myRuntimeDataFormComp.dataForm.getPropertyByName("description");

    // if (res !== undefined) {
    //   this.hiddenField = !this.hiddenField;
    //   res['hidden'] = this.hiddenField;
    // }

    this.isLoading = true;

    const data: any = {};
    data.token = this.token;
    data.projects_id = this.projectId;
    data.reports_id = this.reportID;
    data.title = this.dataForEdit["title"];
    data.description = this.dataForEdit["description"];
    data.is_notify = this.dataForEdit["is_notify"];

    // this.myCommitDataFormComp.dataForm.commitAll();
    this.reportsService.updateReport(data).subscribe((result) => {
      // console.log("saveSettings", result);
      this.isLoading = false;
    }, (error) => {
      console.error("saveSettings", error);
    });
  }

  pullToRefreshSettings(args) {
    const pullRefresh = args.object;
    this.getingReportData(this.token, this.projectId, this.reportID, pullRefresh);
  }

}
