import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import * as appSettings from "tns-core-modules/application-settings";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {

  constructor(
    private routerExtensions: RouterExtensions
  ) {
  }

  canActivate() {
    const token = appSettings.getString("token");
    if (token !== undefined && token !== "") {
      return true;
    } else {
      this.routerExtensions.navigate(["/user"], {
        transition: {
            name: "fade"
        },
        clearHistory: true
      });

      return false;
    }
  }

}
