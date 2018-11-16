import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";
// import {exit} from 'nativescript-exit';

import * as appSettings from "tns-core-modules/application-settings";

import * as connectivity from "connectivity";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit, OnDestroy {

    // user data
    name;
    email;

    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(
        private router: Router,
        private routerExtensions: RouterExtensions
    ) {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);

        this.monitorNetworkStart();
    }

    ngOnDestroy(): void {
        this.monitorNetworkStop();
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    exitFromApp() {
        // Removes all values.
        appSettings.clear();
        // exit();
    }

    monitorNetworkStart() {
        connectivity.startMonitoring((newConnectionType) => {
            if (newConnectionType === connectivity.connectionType.none) {
                // console.log("No network connection available!");
                this.routerExtensions.navigate(["page/no-connection"], {
                    transition: {
                        name: "fade"
                    },
                    clearHistory: true
                });
            }
        });
    }

    monitorNetworkStop() {
        connectivity.stopMonitoring();
        // console.log("No longer monitoring network connection changes.");
    }

}
