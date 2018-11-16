import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NoConnectionComponent } from "./no-connection/no-connection.component";
import { PageRoutingModule } from '~/app/pages/pages-routing';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    PageRoutingModule
  ],
  declarations: [
    NoConnectionComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PagesModule { }
