import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NoConnectionComponent } from "./no-connection/no-connection.component";

@NgModule({
  declarations: [
    NoConnectionComponent
  ],
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PagesModule { }
