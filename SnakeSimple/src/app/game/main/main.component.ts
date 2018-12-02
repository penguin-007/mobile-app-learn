import { Component, OnInit } from '@angular/core';
import { Snake } from '~/app/models/snake.model';

import { removeCallback, start, stop, addCallback } from "tns-core-modules/fps-meter";

@Component({
  selector: 'ns-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  moduleId: module.id,
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('main load');
  }

  changeDirection(event) {
    console.log('changeDirection', event);
  }

}
