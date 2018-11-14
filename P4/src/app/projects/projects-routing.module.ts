import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ProjectsListComponent } from "./projects-list/projects-list.component";

import { ReportsListComponent } from "~/app/reports/reports-list/reports-list.component";

import { ReportOverviewComponent } from "~/app/reports/report-overview/report-overview.component";

const routes: Routes = [
    { path: "", component: ProjectsListComponent },
    { path: "project/:id", component: ReportsListComponent },
    { path: "project/:id/report/:reportID", component: ReportOverviewComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ProjectsRoutingModule { }