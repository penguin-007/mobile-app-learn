import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { CanvasComponent } from './canvas/canvas.component';
import { GameRoutingModule } from './game.routing.module';

@NgModule({
  declarations: [CanvasComponent],
  imports: [
    NativeScriptCommonModule,
    GameRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GameModule { }
