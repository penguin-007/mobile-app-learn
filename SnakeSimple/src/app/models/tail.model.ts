import { Injectable } from '@angular/core';

@Injectable()
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

    addPart() {
        this.tail.push({
            i: this.tail.length + 1,
            x: this.tail[this.tail.length - 1].x,
            y: this.tail[this.tail.length - 1].y
        });
        this.length++;
    }

}