import { Component, OnInit } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";
import { Router } from "@angular/router";

import * as appSettings from "tns-core-modules/application-settings";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(
    private page: Page,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.page.actionBarHidden = true;

    // settings
    this.email = appSettings.getString("email");
    if (this.email !== undefined) {
      this.router.navigate(["/home"]);
    }
    console.log('this.email', this.email);
  }

  submit() {
    console.log('btn login click', this.email, this.password);
    appSettings.setString("email", this.email);
    this.router.navigate(["/home"]);
  }

}
