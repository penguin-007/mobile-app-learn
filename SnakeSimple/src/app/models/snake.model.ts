import { Injectable } from '@angular/core';

@Injectable()
export class Snake {

    radius: number;
    length: number;

    headX;
    headY;

    startPositionX: number;
    startPositionY: number;

    direction: String;
    step: number;

    constructor() {
        this.length = 0;
        this.radius = 10;

        this.setStartPosition(150, 150);

        this.headX = this.startPositionX;
        this.headY = this.startPositionY;

        this.direction = 'left';
        this.step = this.radius * 2;
    }

    // 
    move(): void {
        switch (this.direction) {
            case 'left':
                this.headX += this.step;
                break;
            default:
                break;
        }
    }

    // 
    moveEnd(): void {
        this.headX = this.startPositionX;
        this.headY = this.startPositionY;
    }

    moveDirection(direstion: String): void {

    }

    setStartPosition(x, y) {
        this.startPositionX = x - this.radius;
        this.startPositionY = y - this.radius;
    }


}