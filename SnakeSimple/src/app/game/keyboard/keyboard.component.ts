import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ns-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
  moduleId: module.id,
})
export class KeyBoardComponent implements OnInit {

  constructor() { }

  @Output() changeDirection: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  /* CHANGE DIRECTION */

  directionUp() {
    this.changeDirection.emit('up');
  }

  directionLeft() {
    this.changeDirection.emit('left');
  }

  directionRight() {
    this.changeDirection.emit('right');
  }

  directionDown() {
    this.changeDirection.emit('down');
  }

}
