import { Component, OnInit } from "@angular/core";

// var accelerometer = require("nativescript-accelerometer");

import * as accelerometer from "nativescript-accelerometer";


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    xCord = 135;
    yCord = 135;

    speed = 50;

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
            // x
            const xTemp = this.xCord + data.x * this.speed;

            if (xTemp >= 270) {
                this.xCord = 270;
            } else if (xTemp <= 0) {
                this.xCord = 0;
            } else {
                this.xCord = xTemp;
            }

            // y
            const yTemp = this.yCord + -data.y * this.speed;

            if (yTemp >= 270) {
                this.yCord = 270;
            } else if (yTemp <= 0) {
                this.yCord = 0;
            } else {
                this.yCord = yTemp;
            }

            // console.log('this.xCord', xTemp);
            // console.log("x: " + data.x + "y: " + data.y + "z: " + data.z);
        }, { sensorDelay: "ui" });
    }
}
