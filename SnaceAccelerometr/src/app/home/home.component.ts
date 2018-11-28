import { Component, OnInit } from "@angular/core";

// var accelerometer = require("nativescript-accelerometer");

import * as accelerometer from "nativescript-accelerometer";


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    xCord = 0;
    yCord;

    constructor() {
        console.log('ngOnInit');
        // Use the component constructor to inject providers.
    }
    

    ngOnInit(): void {
        // Init your component properties here.
        console.log('ngOnInit');
    }

    start() {
        this.xCord++;
        accelerometer.startAccelerometerUpdates((data) => {
            this.xCord = data.x;
            console.log('this.xCord', this.xCord);
            // console.log("x: " + data.x + "y: " + data.y + "z: " + data.z);
        }, { sensorDelay: "ui" });
    }
}
