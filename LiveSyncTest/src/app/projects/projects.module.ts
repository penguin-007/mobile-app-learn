import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ProjectsListComponent } from './projects-list/projects-list.component';

import { ProjectsRoutingModule } from "./projects-routing.module";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    ProjectsRoutingModule
  ],
  declarations: [ProjectsListComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProjectsModule { }
