import { Component, OnInit } from "@angular/core";

var accelerometer = require("nativescript-accelerometer");


@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
        console.log('2');
    }

    awdawdawd() {
        
        console.log('2fthft');
        accelerometer.startAccelerometerUpdates(function(data) {
            console.log("x: " + data.x + "y: " + data.y + "z: " + data.z);
        }, { sensorDelay: "ui" });
    }
}
