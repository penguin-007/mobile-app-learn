import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {

  email = '1';
  password = '2';

  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log('BTN CLICK', this.email, this.password);
  }

}
