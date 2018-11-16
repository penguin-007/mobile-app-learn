import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router";
import { RouterExtensions } from 'nativescript-angular/router';
import { connectionType, getConnectionType, startMonitoring, stopMonitoring } from "tns-core-modules/connectivity";

@Injectable({
  providedIn: 'root'
})
export class ConnectTypeService implements CanActivate {

  constructor(
    private routerExtensions: RouterExtensions
  ) {
  }

  canActivate() {
    const myConnectionType = getConnectionType();
    switch (myConnectionType) {
        case connectionType.none:
            // Denotes no Internet connection.
            console.log("No connection");
            return false;
            break;
        case connectionType.wifi:
            // Denotes a WiFi connection.
            console.log("WiFi connection");
            return true;
            break;
        case connectionType.mobile:
            // Denotes a mobile connection, i.e. cellular network or WAN.
            console.log("Mobile connection");
            return true;
            break;
        case connectionType.ethernet:
            // Denotes a ethernet connection.
            console.log("Ethernet connection");
            return true;
            break;
        // Bluetooth functionality in master branch (to be released with 5.0.0)
        // case connectionType.bluetooth:
        //     // Denotes a ethernet connection.
        //     console.log("Bluetooth connection");
        //    //     break;
        default:
            break;
    }
  }

}
