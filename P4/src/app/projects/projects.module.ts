import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ProjectsListComponent } from "./projects-list/projects-list.component";

import { ProjectsRoutingModule } from "./projects-routing.module";

import { ReportsListComponent } from "../reports/reports-list/reports-list.component";

import { ReportOverviewComponent } from "../reports/report-overview/report-overview.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    ProjectsRoutingModule
  ],
  declarations: [
    ProjectsListComponent,
    ReportsListComponent,
    ReportOverviewComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProjectsModule { }
