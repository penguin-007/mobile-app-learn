import { Component, OnInit, ViewChild } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { ReportsService } from "~/app/shared/reports/reports.service";

import * as appSettings from "tns-core-modules/application-settings";
import { ListViewEventData } from "nativescript-ui-listview";
import { View } from "tns-core-modules/ui/page/page";
import { RadListViewComponent } from "nativescript-ui-listview/angular/listview-directives";

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
  token;
  projectId: number;

  @ViewChild("myListView") listViewComponent: RadListViewComponent;

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

    this.token = appSettings.getString("token");
    // console.log('token report', token);
    if (this.token !== undefined && this.token !== "") {
      this.getReports(this.token, this.projectId);
    }
  }

  getReports(token, projectId, pullRefresh?) {
    this.reportsService.getReports(token, projectId).subscribe((result) => {
      if (result.body.results !== undefined) {
        // console.log("getProjects", result['body'].results);
        this.reportsArray = result.body.results;
        // console.log('this.reportsArray', this.reportsArray);

        setTimeout(() => {
          this.isLoading = false;
        }, 500);

        if (pullRefresh) {
          pullRefresh.notifyPullToRefreshFinished();
        }
      }
    }, (error) => {
        console.error("getProjects", error);
    });
  }

  goBack() {
    this.routerExtensions.back();
  }

  onPullToRefreshInitiated(args: ListViewEventData) {
    const pullRefresh = args.object;
    this.getReports(this.token, this.projectId, pullRefresh);
  }

  onSwipeCellStarted(args: ListViewEventData) {
    const swipeLimits = args.data.swipeLimits;
    const swipeView = args.object;
    const rightItem = swipeView.getViewById<View>('setting-view');
    swipeLimits.right = rightItem.getMeasuredWidth();
    swipeLimits.threshold = rightItem.getMeasuredWidth() / 2;
  }

  onRightSwipeClick(args: ListViewEventData) {
    const item = args.object.bindingContext;
    const reportId = item.id;
    this.routerExtensions.navigate(["projects/project", this.projectId, "report", reportId, "setting"], {
      transition: {
          name: "fade"
      }
    });
    this.listViewComponent.listView.notifySwipeToExecuteFinished();
  }

  reportTap(item) {
    const reportId = this.reportsArray[item.index].id;
    this.routerExtensions.navigate(["projects/project", this.projectId, "report", reportId], {
      transition: {
          name: "fade"
      }
    });
  }

  getReportTypeIco(item) {
    if (item.report_type === 'shopping') {
      //return "&#xf290;";
      return '';
    } else if (item.report_type === 'mixed') {
      //return '&#xf0f6;';
      return '';
    } else {
      // return '&#xf29c';
      return '';
    }
  }

}
