import { Component, OnInit } from '@angular/core';
import { PageRoute } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'ns-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css'],
  moduleId: module.id,
})
export class ReportsListComponent implements OnInit {

  projectId: number;

  constructor(
    private pageRoute: PageRoute
  ) {
    // use switchMap to get the latest activatedRoute instance
    this.pageRoute.activatedRoute.pipe(
      switchMap(activatedRoute => activatedRoute.params)
    ).forEach((params) => { this.projectId = +params["id"]; });
  }

  ngOnInit() {
    this.getReports(this.projectId);
  }

  getReports(id) {
    console.log('id', this.projectId);
  }

}
