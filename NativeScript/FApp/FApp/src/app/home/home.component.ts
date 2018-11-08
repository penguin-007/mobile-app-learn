import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { UserService } from "../shared/user/user.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    providers: [UserService],
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    protected token;


    constructor(private UserService: UserService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    login() {
        this.UserService.login().subscribe(result => {
            console.log("token", result['body'].token);
            this.token = result['body'].token.token;
        }, error => {

        });
    }

    showToken() {
        this.UserService.userGetData(this.token).subscribe(result => {
            console.log("token", result['body']);
            alert(result['body'].results.name);
        }, error => {
            console.log("showToken error", error);
        });
    }
}
