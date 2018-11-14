import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router";
import * as appSettings from "tns-core-modules/application-settings";
import { RouterExtensions } from 'nativescript-angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private routerExtensions: RouterExtensions
  ) {
  }

  canActivate() {
    let token = appSettings.getString("token");
    if (token !== undefined && token !== '') {
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
