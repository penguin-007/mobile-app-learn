import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ns-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  moduleId: module.id,
})
export class HeaderComponent implements OnInit {
  
  score: number;
  level: number;
  length: number;

  constructor() {
    this.score = 0;
    this.level = 1;
    this.length = 0;
  }

  ngOnInit() {
  }

  updateLength(length) {
    this.length = length + 1;
  }

}
