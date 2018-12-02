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

    canvasWidth;
    canvasHeight;

    // проход через стену возвращяет на другой конец поля
    infinite = true;

    constructor(canvasWidth, canvasHeight) {
        this.length = 0;
        this.radius = 10;

        this.setStartPosition(150, 150);

        this.headX = this.startPositionX;
        this.headY = this.startPositionY;

        this.direction = 'right';
        this.step = this.radius * 2;

        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
    }

    // 
    move(): void {
        const nextCoordinates = this.nextStep(this.headX, this.headY);
        this.checkBoundaries(nextCoordinates);
    }

    // 
    restart(): void {
        this.headX = this.startPositionX;
        this.headY = this.startPositionY;
    }

    setDirection(direction: String): void {
        this.direction = direction;
    }

    setStartPosition(x, y) {
        this.startPositionX = x - this.radius;
        this.startPositionY = y - this.radius;
    }

    checkBoundaries(nextCoordinates) {
        if (nextCoordinates.x >= 0 && nextCoordinates.x <= this.canvasWidth - this.radius * 2) {
            this.headX = nextCoordinates.x;
        } else {
            if (this.infinite) {
                if (nextCoordinates.x < 0) {
                    this.headX = this.canvasWidth - this.radius * 2;
                } else {
                    this.headX = 0;
                }
            }
        }

        if (nextCoordinates.y >= 0 && nextCoordinates.y <= this.canvasHeight - this.radius * 2) {
            this.headY = nextCoordinates.y;
        } else {
            if (this.infinite) {
                if (nextCoordinates.y < 0) {
                    this.headY = this.canvasHeight - this.radius * 2;
                } else {
                    this.headY = 0;
                }
            }
        }
    }

    nextStep(x, y): Object {
        switch (this.direction) {
            case 'left':
                x -= this.step;
                break;
            case 'right':
                x += this.step;
                break;
            case 'up':
                y -= this.step;
                break;
            case 'down':
                y += this.step;
                break;
            default:
                break;
        }
        return {x, y};
    }


}