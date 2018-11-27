import { Component, OnInit, ViewChild } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import * as appSettings from "tns-core-modules/application-settings";
import { Report } from "~/app/shared/reports/reports.model";
import { ReportsService } from "~/app/shared/reports/reports.service";
import { RadDataFormComponent } from "nativescript-ui-dataform/angular";

const DATA_RANGE = [
  "TODAY",
  "YESTERDAY",
  "LAST_7_DAYS",
  "LAST_WEEK",
  "LAST_BUSINESS_WEEK",
  "THIS_MONTH",
  "LAST_MONTH",
  "ALL_TIME",
  "LAST_14_DAYS",
  "LAST_30_DAYS",
  "THIS_WEEK_SUN_TODAY",
  "THIS_WEEK_MON_TODAY",
  "LAST_WEEK_SUN_SAT",
  "CUSTOM_DATE"
]

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
          displayName: "Название отчета:",
          index: 1,
          required: true,
          editor: "Text",
          validators: [
              { "name": "NonEmpty" },
              { "name": "MaximumLength", "params": { "length": 10 } }
          ],
          groupName: "Общие данные",
      },
      {
          name: "description",
          displayName: "Описание:",
          index: 2,
          editor: "MultilineText",
          groupName: "Общие данные",
      },
      {
          name: "email_notify",
          displayName: "Email for Notify",
          index: 1,
          editor: "Email",
          groupName: "Обновления"
      },
      {
          name: "date_range",
          displayName: "Date Range",
          index: 2,
          editor: "Picker",
          valuesProvider: DATA_RANGE,
          groupName: "Обновления",
      },
      {
          name: "date_min",
          displayName: "Date Min",
          index: 3,
          editor: "DatePicker",
          groupName: "Обновления"
      },
      {
          name: "date_max",
          displayName: "Date Max",
          index: 4,
          editor: "DatePicker",
          groupName: "Обновления"
      },
      {
          name: "is_notify",
          displayName: "Отправлять оповещения?",
          index: 5,
          editor: "Switch",
          groupName: "Обновления"
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
      email_notify: report.email_notify,
      date_range: report.date_range,
      date_min: this.modifyDataToNormalFormat(report.date_min),
      date_max: this.modifyDataToNormalFormat(report.date_max),
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

    // date save
    this.isLoading = true;

    const data: any = {};
    data.token = this.token;
    data.projects_id = this.projectId;
    data.reports_id = this.reportID;
    data.title = this.dataForEdit["title"];
    data.description = this.dataForEdit["description"];
    data.is_notify = this.dataForEdit["is_notify"];
    data.email_notify = this.dataForEdit["email_notify"];
    data.date_range = this.dataForEdit["date_range"];
    data.date_min = this.modifyDataToStringFormat(this.dataForEdit['date_min']);
    data.date_max = this.modifyDataToStringFormat(this.dataForEdit['date_max']);

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

  // from "20180521" to timestamp(sec)
  modifyDataToNormalFormat(dateNum) {
    const year  = dateNum.slice(0, 4);
    const month = dateNum.slice(4, 6);
    const day   = dateNum.slice(6, 8);
    const dateSec = Date.parse(`${year}-${month}-${day}`);
    return dateSec;
  }

  // from timestamp(sec) to "20180521"
  modifyDataToStringFormat(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + (date.getDate())).slice(-2);
    return `${year}${month}${day}`;
  }

}
