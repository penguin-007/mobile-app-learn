import { Component, OnInit } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";
import { Router } from "@angular/router";

import * as appSettings from "tns-core-modules/application-settings";
import { User } from '~/app/shared/user/user.model';
import { UserService } from '~/app/shared/user/user.service';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {
  
  user: User;

  constructor(
    private page: Page,
    private router: Router,
    private userServise: UserService
  ) {
  }

  ngOnInit() {
    this.page.actionBarHidden = true;

    this.user = new User();

    // settings
    // this.user.email = appSettings.getString("email");
    // if (this.user.email !== undefined) {
    //   this.router.navigate(["/home"]);
    // }
    // console.log('this.email', this.user.email);
    this.user.email = 'myworkbucket@gmail.com';
    this.user.password = 'penguin';
  }

  login() {
    this.userServise.login(this.user).subscribe(result => {
      let token = result['body']['token'].token;
      console.log('token', token);
      if (token !== undefined && token !== '') {
        appSettings.setString("email", this.user.email);
        this.router.navigate(["/home"]);
      }
    }, error => {
      console.error('login', error);
      alert('Ошибка авторизации');
    });
  }

}
