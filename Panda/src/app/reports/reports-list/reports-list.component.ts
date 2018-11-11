import { Component, OnInit } from '@angular/core';
import { PageRoute } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { ReportsService } from '~/app/shared/reports/reports.service';

@Component({
  selector: 'ns-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css'],
  moduleId: module.id,
})
export class ReportsListComponent implements OnInit {

  protected token = '5602021ae760ac1f3b3307f74f5ff522';

  reportsArray = [];
  // todo добавить модель проекта

  isLoading = false;
  listLoaded = false;

  projectId: number;

  constructor(
    private pageRoute: PageRoute,
    private reportsService: ReportsService
  ) {
    // use switchMap to get the latest activatedRoute instance
    this.pageRoute.activatedRoute.pipe(
      switchMap(activatedRoute => activatedRoute.params)
    ).forEach((params) => { this.projectId = +params["id"]; });
  }

  ngOnInit() {
    this.getReports(this.token, this.projectId);
  }

  getReports(token, projectId) {
    this.reportsService.getReports(token, projectId).subscribe(result => {
      if (result['body'].results !== undefined) {
        // console.log("getProjects", result['body'].results);
        this.reportsArray = result['body'].results;
        // console.log('this.reportsArray', this.reportsArray);
        setTimeout(() => {
          this.isLoading = false;
          this.listLoaded = true;
        }, 500);
      }
    }, error => {
        console.error("getProjects", error);
    });
  }

}
