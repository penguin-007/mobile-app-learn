import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LoginComponent } from './login/login.component';
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { UserRoutingModule } from "./user-routing.module";


@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    UserRoutingModule
  ],
  declarations: [LoginComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UserModule { }
