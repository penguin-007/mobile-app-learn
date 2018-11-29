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

    foodYCord = 50;
    foodXCord = 50;

    step = 20;

    fps = 1000 / 60;
    deltaX: number;
    deltaY: number;

    intervalId;

    constructor() {
        console.log('ngOnInit');
        // Use the component constructor to inject providers.
    }
    
    ngOnInit(): void {
        // Init your component properties here.
        console.log('ngOnInit');
    }

    start() {
        this.startAccelerometr();
        this.startGame();
    }

    startAccelerometr() {
        accelerometer.startAccelerometerUpdates((data) => {
            this.deltaX = data.x;
            this.deltaY = data.y;
        }, { sensorDelay: "ui" });
    }

    startGame() {
        this.intervalId = setInterval(() => {
            this.moveSnake(this.deltaX, this.deltaY);
        }, this.fps);
    }

    getBoundariesFood(x, y) {
    }

    moveSnake(deltaX, deltaY) {
        const xTemp = this.xCord + this.step * deltaX;
        const yTemp = this.yCord + this.step * -deltaY;

        if (xTemp >= 270) {
            this.xCord = 270;
        } else if (xTemp <= 0) {
            this.xCord = 0;
        } else {
            this.xCord = xTemp;
        }
        
        if (yTemp >= 270) {
            this.yCord = 270;
        } else if (yTemp <= 0) {
            this.yCord = 0;
        } else {
            this.yCord = yTemp;
        }
    }
}
