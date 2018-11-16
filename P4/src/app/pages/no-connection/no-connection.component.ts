import { Component, OnInit } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-no-connection',
  templateUrl: './no-connection.component.html',
  styleUrls: ['./no-connection.component.css'],
  moduleId: module.id
})
export class NoConnectionComponent implements OnInit {

  constructor(
    private page: Page,
    private routerExtensions: RouterExtensions
  ) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  reload() {
    this.routerExtensions.navigate(["home"], {
        transition: {
            name: "fade"
        },
        clearHistory: true
    });
  }

}
