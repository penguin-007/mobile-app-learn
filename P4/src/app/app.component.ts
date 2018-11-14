import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";
// import {exit} from 'nativescript-exit';

import * as appSettings from "tns-core-modules/application-settings";

import { UserService } from "./shared/user/user.service";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

    // user data
    name;
    email;

    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(
        private router: Router,
        private routerExtensions: RouterExtensions,
        private userService: UserService
    ) {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);

        // get token
        // let token = appSettings.getString("token");
        // this.getUserData(token);
        // console.log('app comp on init', token);
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

    // get user data by token
    getUserData(token) {
        this.userService.userGetData(token).subscribe(result => {
            if (result['body'] !== undefined) {
                // console.log("getUserData", result['body']);
                this.name  = result['body'].results.name ? result['body'].results.name : '';
                this.email = result['body'].results.email ? result['body'].results.email : '';
            } else {
                console.warn("getUserData", 'noData');
            }
        }, error => {
            console.error("getUserData", error);
            alert('Ошибка токена');
        });
    }
}
