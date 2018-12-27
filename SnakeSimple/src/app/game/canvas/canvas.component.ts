import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import { Snake } from '~/app/models/snake.model';
import { Food } from '~/app/models/food.model';

import { removeCallback, start, stop, addCallback } from "tns-core-modules/fps-meter";

@Component({
  selector: 'ns-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  moduleId: module.id,
})
export class CanvasComponent implements OnInit, OnDestroy {

  @Input() snake: Snake;
  @Input() food: Food;

  @Output() onChangeLength: EventEmitter<any> = new EventEmitter();

  fps = 1000 / 5; // frame per second
  intervalId;

  canvasWidth = 300;
  canvasHeight = 300;

  gameRuned: Boolean;

  constructor() {
    this.gameRuned = false;
  }

  ngOnInit() {
    this.onChangeLengthEmit();
  }

  ngOnDestroy() {
    this.canvasEnd();
  }

  startGame() {
    if (!this.gameRuned) {
      this.canvasStart();
      this.gameRuned = true;
    }
  }

  endGame() {
    this.canvasEnd();
    this.gameRuned = false;
  }

  canvasStart() {
    this.intervalId = setInterval(() => {
      this.snake.move();
      this.ifHeadEatFood(this.snake.headX, this.snake.headY, this.food.posX, this.food.posY);
    }, this.fps);
  }

  canvasEnd() {
    clearInterval(this.intervalId);
  }

  changeDirection(direction: String) {
    this.snake.setDirection(direction);
  }

  addPartLength() {
    this.snake.tail.addPart();
    this.onChangeLengthEmit();
  } 

  onChangeLengthEmit() {
    this.onChangeLength.emit(this.snake.tail.length);
  }

  ifHeadEatFood(snakeHeadX, snakeHeadY, foodX, foodY) {
    // console.log(snakeHeadX, snakeHeadY, foodX, foodY);
    if (snakeHeadX === foodX && snakeHeadY === foodY) {
      this.food.setNewPosition(this.snake.tail.tail);
      this.addPartLength();
    }
  }

}
