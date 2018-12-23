import { Component, OnInit, ViewChild } from '@angular/core';
import { Snake } from '~/app/models/snake.model';
import { Food } from '~/app/models/food.model';

import { removeCallback, start, stop, addCallback } from "tns-core-modules/fps-meter";
import { CanvasComponent } from '../canvas/canvas.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'ns-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  moduleId: module.id,
})
export class MainComponent implements OnInit {
  
  @ViewChild('canvasListener') canvasListener: CanvasComponent;
  @ViewChild('headerListener') headerListener: HeaderComponent;

  snakeOptions = {
    canvasWidth: 300,
    canvasHeight: 300,
    startPosX: 150,
    startPosY: 150,
    radius: 10
  }

  foodOptions = {
    canvasWidth: 300,
    canvasHeight: 300,
    radius: 10,
  };

  snake: Snake;
  food: Food;

  constructor() { }

  ngOnInit() {
    this.snake = new Snake(this.snakeOptions);
    this.food = new Food(this.foodOptions);
  }

  changeDirection(direction) {
    this.canvasListener.changeDirection(direction);
  }

  onChangeLength(length) {
    this.headerListener.updateLength(length);
  }

}
