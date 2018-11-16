import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NoConnectionComponent } from "~/app/pages/no-connection/no-connection.component";

const routes: Routes = [
    { path: "no-connection", component: NoConnectionComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PageRoutingModule { }
