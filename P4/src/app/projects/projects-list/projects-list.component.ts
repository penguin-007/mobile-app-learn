import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { Router } from "@angular/router";

import * as appSettings from "tns-core-modules/application-settings";

import { ProjectsService } from "~/app/shared/projects/projects.service";

import { registerElement } from "nativescript-angular/element-registry";
registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);

@Component({
  selector: "ns-projects-list",
  templateUrl: "./projects-list.component.html",
  styleUrls: ["./projects-list.component.css"],
  moduleId: module.id
})
export class ProjectsListComponent implements OnInit {

  projectsArray = [];
  // todo добавить модель проекта
  token;

  isLoading = false;

  constructor(
    private projectsService: ProjectsService,
    private router: Router
  ) { }
  

  ngOnInit() {
    this.isLoading = true;

    this.token = appSettings.getString("token");
    // console.log('token project', token);
    if (this.token !== undefined && this.token !== "") {
      this.getProjects(this.token);
    }
  }

  onDrawerButtonTap(): void {
      const sideDrawer = <RadSideDrawer>app.getRootView();
      sideDrawer.showDrawer();
  }

  getProjects(token, pullRefresh?) {
    this.projectsService.getProjects(token).subscribe((result) => {
      if (result.body.results !== undefined) {
        // console.log("getProjects", result['body'].results);
        this.projectsArray = result.body.results;
        
        setTimeout(() => {
          this.isLoading = false;
        }, 500);

        if (pullRefresh) {
          pullRefresh.refreshing = false;
        }
      }
    }, (error) => {
        console.error("getProjects", error);
    });
  }

  projectTap(item) {
    // console.log('item', item);
    if (item.id !== undefined) {
      this.router.navigate(["projects/project", item.id]);
    }
  }

  refreshList(args) {
      let pullRefresh = args.object;
      this.getProjects(this.token, pullRefresh);
  }
  
}
