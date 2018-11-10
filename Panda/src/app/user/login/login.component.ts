import { Component, OnInit } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";
import { Router } from "@angular/router";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {

  email = '1';
  password = '2';

  constructor(
    private page: Page,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  submit() {
    console.log('btn login click', this.email, this.password);
    this.router.navigate(["/home"]);
  }

}
