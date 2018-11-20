import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import * as appSettings from "tns-core-modules/application-settings";
import { UserService } from "~/app/shared/user/user.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    user;

    xTranslate = 0;

    constructor(
        private userService: UserService
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        // console.log('home ngOnInit');

        // get token
        const token = appSettings.getString("token");
        this.getUserData(token);
        // console.log("app comp on init", token);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    // get user data by token
    getUserData(token) {
        this.userService.userGetData(token).subscribe((result) => {
            if (result.body !== undefined) {
                // console.log("getUserData", result['body']);
                this.user = result.body.results;
            } else {
                console.warn("getUserData", "noData");
            }
        }, (error) => {
            console.error("getUserData", error);
            alert("Ошибка токена");
        });
    }

    onSwipe(args) {
        if (args.direction === 2) {
            this.xTranslate -= 50;
        } else if (args.direction === 1) {
            this.xTranslate += 50;
        }
    
        let grid = args.object;
        grid.animate({
            translate: { x: this.xTranslate, y: 0 },
            duration: 200
        });
    }
}
