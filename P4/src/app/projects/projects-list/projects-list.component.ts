import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { Router } from "@angular/router";

import * as appSettings from "tns-core-modules/application-settings";

import { ProjectsService } from "~/app/shared/projects/projects.service";

@Component({
  selector: "ns-projects-list",
  templateUrl: "./projects-list.component.html",
  styleUrls: ["./projects-list.component.css"],
  moduleId: module.id
})
export class ProjectsListComponent implements OnInit {

  projectsArray = [];
  // todo добавить модель проекта

  isLoading = false;
  listLoaded = false;

  constructor(
    private projectsService: ProjectsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isLoading = true;

    const token = appSettings.getString("token");
    // console.log('token project', token);
    if (token !== undefined && token !== "") {
      this.getProjects(token);
    }
  }

  onDrawerButtonTap(): void {
      const sideDrawer = <RadSideDrawer>app.getRootView();
      sideDrawer.showDrawer();
  }

  getProjects(token) {
    this.projectsService.getProjects(token).subscribe((result) => {
      if (result.body.results !== undefined) {
        // console.log("getProjects", result['body'].results);
        this.projectsArray = result.body.results;
        setTimeout(() => {
          this.isLoading = false;
          this.listLoaded = true;
        }, 500);
      }
    }, (error) => {
        console.error("getProjects", error);
    });
  }

  onItemTap(args) {
    // console.log("projectsArray", this.projectsArray[args.index]);
    const id = this.projectsArray[args.index].id;
    if (id !== undefined) {
      this.router.navigate(["projects/project", id]);
    }
  }

}
