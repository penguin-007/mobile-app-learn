import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ProjectsListComponent } from "./projects-list/projects-list.component";

const routes: Routes = [
    { path: "", component: ProjectsListComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ProjectsRoutingModule { }
