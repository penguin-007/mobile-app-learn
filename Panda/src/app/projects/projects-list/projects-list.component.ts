import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
  selector: 'ns-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css'],
  moduleId: module.id,
})
export class ProjectsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onDrawerButtonTap(): void {
      const sideDrawer = <RadSideDrawer>app.getRootView();
      sideDrawer.showDrawer();
  }

}
