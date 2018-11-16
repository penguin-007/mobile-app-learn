import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ConnectTypeService } from "~/app/shared/connect/connect-type.service";
import { AuthGuardService } from "./shared/auth-guard.service";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "user", loadChildren: "~/app/user/user.module#UserModule" },
    { path: "home",
      loadChildren: "~/app/home/home.module#HomeModule",
      canActivate: [ConnectTypeService, AuthGuardService]
    },
    { path: "projects",
      loadChildren: "~/app/projects/projects.module#ProjectsModule",
      canActivate: [AuthGuardService]
    },
    { path: "settings",
      loadChildren: "~/app/settings/settings.module#SettingsModule",
      canActivate: [AuthGuardService]
    },
    { path: "page",
      loadChildren: "~/app/pages/pages.module#PagesModule"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
