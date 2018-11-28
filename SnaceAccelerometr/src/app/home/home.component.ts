import { Component, OnInit } from "@angular/core";

// var accelerometer = require("nativescript-accelerometer");

// import * as accelerometer from "nativescript-accelerometer";
import * as accelerometer from "nativescript-accelerometer-advanced";


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        console.log('ngOnInit');

        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        console.log('ngOnInit');

        // accelerometer.startAccelerometerUpdates(function(data) {
        //     console.log("x: " + data.x + "y: " + data.y + "z: " + data.z);
        // }, { sensorDelay: "ui" });

        accelerometer.startAccelerometerUpdates(function(data) {
            console.log(" X: " + data.x + " Y: " + data.y + " Z: " + data.z + " Sensor Type: " + data.sensortype + " Time in milliseconds : " + data.timemilli);
        }, { sensorDelay: "ui" });

    }
}
