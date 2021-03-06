import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";

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
  token;

  isLoading = false;

  constructor(
    private projectsService: ProjectsService,
    private routerExtensions: RouterExtensions
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
    this.routerExtensions.navigate(["projects/project", item.id], {
      transition: {
        name: "slideLeft",
        duration: 300,
        curve: "ease"
      }
    });
  }

  refreshList(args) {
      let pullRefresh = args.object;
      this.getProjects(this.token, pullRefresh);
  }
  
}
