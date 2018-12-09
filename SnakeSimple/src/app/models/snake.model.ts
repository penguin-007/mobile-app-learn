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

    tail: Tail;
    tailParts;

    // проход через стену возвращяет на другой конец поля
    infinite = true;

    constructor(canvasWidth, canvasHeight) {
        this.length = 10;
        this.radius = 6;

        this.setStartPosition(150, 150);

        this.headX = this.startPositionX;
        this.headY = this.startPositionY;

        this.tail = new Tail(this.length, this.radius);
        this.tailParts = this.tail.renderTall(this.headX, this.headY);

        this.direction = 'right';
        this.step = this.radius * 2;

        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
    }

    // 
    move(): void {
        const nextCoordinates = this.nextStep(this.headX, this.headY);
        this.tailParts = this.tail.replaceTail(this.headX, this.headY);

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


export class Tail {

    length;
    radius;

    tail = [];

    constructor(length, radius) {
        this.length = length;
        this.radius = radius;
    }

    renderTall(headX, headY) {
        for (let i = 0; i < this.length; i++) {
            if (i === 0) {
                this.tail.push({
                    i: i,
                    x: headX - this.radius * 2,
                    y: headY
                });
            } else {
                this.tail.push({
                    i: i,
                    x: this.tail[i-1].x - this.radius * 2,
                    y: headY
                });
            }
        }
        return this.tail;
    }

    replaceTail(headX, headY) {
        for (let i = this.tail.length - 1; i >= 0; i--) {
            if (i === 0) {
                this.tail[i].x = headX;
                this.tail[i].y = headY;
            } else {
                this.tail[i].x = this.tail[i-1].x;
                this.tail[i].y = this.tail[i-1].y;
            }
        }
        return this.tail;
    }

}