import { Component, OnInit, ViewChild } from '@angular/core';
import { Snake } from '~/app/models/snake.model';

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

  options = {
    canvasWidth: 300,
    canvasHeight: 300,
    startPosX: 150,
    startPosY: 150,
  }

  snake: Snake;

  constructor() { }

  ngOnInit() {
    this.snake = new Snake(this.options);
  }

  changeDirection(direction) {
    this.canvasListener.changeDirection(direction);
  }

  onChangeLength(length) {
    this.headerListener.updateLength(length);
  }

}
