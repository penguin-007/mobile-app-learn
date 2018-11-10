import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/user", pathMatch: "full" },
    { path: "user", loadChildren: "~/app/user/user.module#UserModule" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "projects", loadChildren: "~/app/projects/projects.module#ProjectsModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
