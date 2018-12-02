import { Component, OnInit, ViewChild } from '@angular/core';
import { Snake } from '~/app/models/snake.model';

import { removeCallback, start, stop, addCallback } from "tns-core-modules/fps-meter";
import { CanvasComponent } from '../canvas/canvas.component';

@Component({
  selector: 'ns-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  moduleId: module.id,
})
export class MainComponent implements OnInit {
  
  @ViewChild('canvasListener') canvasListener: CanvasComponent;

  constructor() { }

  ngOnInit() {
    console.log('main load');
  }

  changeDirection(direction) {
    this.canvasListener.changeDirection(direction);
  }

}
