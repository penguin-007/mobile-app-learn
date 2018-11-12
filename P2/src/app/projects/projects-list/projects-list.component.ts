import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Router } from "@angular/router";

import { ProjectsService } from '~/app/shared/projects/projects.service';

@Component({
  selector: 'ns-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css'],
  moduleId: module.id,
})
export class ProjectsListComponent implements OnInit {

  protected token = '5602021ae760ac1f3b3307f74f5ff522';

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
    this.getProjects(this.token);
  }

  onDrawerButtonTap(): void {
      const sideDrawer = <RadSideDrawer>app.getRootView();
      sideDrawer.showDrawer();
  }

  getProjects(token) {
    this.projectsService.getProjects(token).subscribe(result => {
      if (result['body'].results !== undefined) {
        // console.log("getProjects", result['body'].results);
        this.projectsArray = result['body'].results;
        setTimeout(() => {
          this.isLoading = false;
          this.listLoaded = true;
        }, 500);
      }
    }, error => {
        console.error("getProjects", error);
    });
  }

  public onItemTap(args) {
    // console.log("projectsArray", this.projectsArray[args.index]);
    let id = this.projectsArray[args.index].id;
    if (id !== undefined) {
      this.router.navigate(["projects/project", id]);
    }
  }

}
