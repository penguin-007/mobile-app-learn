import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule, COMPONENTS } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        AppComponent,
        ...COMPONENTS
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
