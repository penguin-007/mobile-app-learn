import { Injectable } from '@angular/core';

@Injectable()
export class Food {

  canvasHeight: number;
  canvasWidth: number;

  radius: number;

  posX: number;
  posY: number;

  constructor(options: any) {
    this.canvasHeight = options.canvasWidth;
    this.canvasWidth = options.canvasHeight;

    this.radius = options.radius;

    this.setNewPosition();
  }

  protected getRandomCoordinates(min, max) {
    const random = Math.floor(Math.random() * max) + min;
    return random - (random % (this.radius * 2));
  }

  setNewPosition() {
    this.posX = this.getRandomCoordinates(0, this.canvasWidth);
    this.posY = this.getRandomCoordinates(0, this.canvasHeight);
    console.log('getRandomCoordinates', this.posX, this.posY);
  }


}