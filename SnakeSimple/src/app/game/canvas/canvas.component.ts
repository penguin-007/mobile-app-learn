import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Snake } from '~/app/models/snake.model';

import { removeCallback, start, stop, addCallback } from "tns-core-modules/fps-meter";

@Component({
  selector: 'ns-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  moduleId: module.id,
})
export class CanvasComponent implements OnInit, OnDestroy {

  @Input()
  snake: Snake;

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
    this.addPartLength();
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

  addPartLength() {
    this.snake.tail.addPart();
    this.onChangeLengthEmit();
  }

  onChangeLengthEmit() {
    this.onChangeLength.emit(this.snake.tail.length);
  }

}
