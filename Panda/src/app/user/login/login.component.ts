import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";
import { Router } from "@angular/router";
import { alert, prompt } from "tns-core-modules/ui/dialogs";

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

  processing = false;
  
  @ViewChild("password") password: ElementRef;

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
    if (!this.user.email || !this.user.password) {
      this.alert("Заполните все поля.");
      return;
    }
    
    this.processing = true;

    this.userServise.login(this.user).subscribe(result => {
      let token = result['body']['token'].token;
      // console.log('token', token);
      if (token !== undefined && token !== '') {
        appSettings.setString("token", this.user.email);
        this.router.navigate(["/home"]);
      } else {
        this.alert('Ошибка ответа от сервера');
      }
      this.processing = false;
    }, error => {
      console.error('login', error);
      this.processing = false;
      this.alert('Ошибка авторизации');
    });
  }

  focusPassword() {
    this.password.nativeElement.focus();
  }

  alert(message: string) {
    return alert({
        title: "PANDA",
        okButtonText: "OK",
        message: message
    });
  }

  forgotPassword() {
    prompt({
        title: "Forgot Password",
        message: "Введие email указанный при регистрации в Panda.",
        inputType: "email",
        defaultText: "",
        okButtonText: "Ok",
        cancelButtonText: "Cancel"
    }).then((data) => {
      console.log('forgotPassword', data.text.trim());
    });
}

}
