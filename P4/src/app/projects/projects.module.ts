import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ProjectsListComponent } from "./projects-list/projects-list.component";
import { ProjectsRoutingModule } from "./projects-routing.module";

import { ReportOverviewComponent } from "../reports/report-overview/report-overview.component";
import { ReportsListComponent } from "../reports/reports-list/reports-list.component";
import { ReportsSettingComponent } from "../reports/reports-setting/reports-setting.component";

import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";

import { registerElement } from "nativescript-angular/element-registry";
registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);

@NgModule({
  imports: [
    NativeScriptCommonModule,
    ProjectsRoutingModule,
    NativeScriptUIListViewModule,
    NativeScriptUIDataFormModule
  ],
  declarations: [
    ProjectsListComponent,
    ReportsListComponent,
    ReportOverviewComponent,
    ReportsSettingComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProjectsModule { }
