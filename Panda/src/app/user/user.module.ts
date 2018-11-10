import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    NativeScriptCommonModule
  ],
  declarations: [LoginComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UserModule { }
