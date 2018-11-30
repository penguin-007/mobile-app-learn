import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CanvasComponent } from "./canvas/canvas.component";


const routes: Routes = [
    { path: "", component: CanvasComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class GameRoutingModule { }
