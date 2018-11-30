import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { GameRoutingModule } from './game.routing.module';

import { CanvasComponent } from './canvas/canvas.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    CanvasComponent,
    MainComponent
  ],
  imports: [
    NativeScriptCommonModule,
    GameRoutingModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GameModule { }