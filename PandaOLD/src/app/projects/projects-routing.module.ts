import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ProjectsListComponent } from "./projects-list/projects-list.component";
import { ReportsListComponent } from "../reports/reports-list/reports-list.component";

const routes: Routes = [
    { path: "", component: ProjectsListComponent },
    { path: "project/:id", component: ReportsListComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ProjectsRoutingModule { }
