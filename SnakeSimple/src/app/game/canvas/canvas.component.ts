import { Component, OnInit, OnDestroy } from '@angular/core';
import { Snake } from '~/app/models/snake.model';

import { removeCallback, start, stop, addCallback } from "tns-core-modules/fps-meter";

@Component({
  selector: 'ns-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  moduleId: module.id,
})
export class CanvasComponent implements OnInit, OnDestroy {

  snake: Snake;

  fps = 1000 / 5; // frame per second
  intervalId;

  canvasWidth = 300;
  canvasHeight = 300;

  gameRuned: Boolean;

  options = {
    canvasWidth: this.canvasWidth,
    canvasHeight: this.canvasHeight,
    startPosX: 150,
    startPosY: 150,
  }

  constructor() {
    this.gameRuned = false;
  }

  ngOnInit() {
    this.snake = new Snake(this.options);
  }

  ngOnDestroy() {
    this.canvasEnd();
  }

  startGame() {
    if (!this.gameRuned) {
      this.canvasStart();
      this.gameRuned = true;
    }
    this.snake.tail.addPart();
  }

  endGame() {
    this.canvasEnd();
    this.gameRuned = false;
  }

  canvasStart() {
    this.intervalId = setInterval(() => {
      this.snake.move();
    }, this.fps);
  }

  canvasEnd() {
    clearInterval(this.intervalId);
  }

  changeDirection(direction: String) {
    this.snake.setDirection(direction);
  }

}
