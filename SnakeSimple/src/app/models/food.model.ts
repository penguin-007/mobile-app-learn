import { Injectable } from '@angular/core';

@Injectable()
export class Food {

  canvasHeight: number;
  canvasWidth: number;

  radius: number;

  posX: number;
  posY: number;

  constructor(
    options: any
  ) {
    this.canvasHeight = options.canvasWidth;
    this.canvasWidth = options.canvasHeight;

    this.radius = options.radius;

    this.setNewPosition();
  }

  private getRandomCoordinates(min, max) {
    const random = Math.floor(Math.random() * max) + min;
    return random - (random % (this.radius * 2));
  }

  setNewPosition(tail?) {
    const posX = this.getRandomCoordinates(0, this.canvasWidth);
    const posY = this.getRandomCoordinates(0, this.canvasHeight);

    if (tail) {
      const findResult = tail.find((item) => {
        return item.x === posX && item.y === posY;
      });
      if (findResult) {
        this.setNewPosition(tail);
        return;
      }
    } 

    this.posX = posX;
    this.posY = posY;

    console.log('getRandomCoordinates', this.posX, this.posY);
  }


}