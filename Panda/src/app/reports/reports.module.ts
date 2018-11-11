import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ReportsListComponent } from './reports-list/reports-list.component';

@NgModule({
  imports: [
    NativeScriptCommonModule
  ],
  declarations: [ReportsListComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ReportsModule { }
