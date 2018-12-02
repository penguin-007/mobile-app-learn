import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
  moduleId: module.id,
})
export class KeyBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /* CHANGE DIRECTION */

  directionUp() {
    console.log('directionUp');
  }

  directionLeft() {
    console.log('directionLeft');
  }

  directionRight() {
    console.log('directionRight');
  }

  directionDown() {
    console.log('directionDown');
  }

}
