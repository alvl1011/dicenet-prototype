import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameViewPageRoutingModule } from './game-view-routing.module';

import { GameViewPage } from './game-view.page';
import { SharedModule } from "../shared/shared.module";
import { ModalComponent } from "../modal/modal.component";

@NgModule({
            imports: [
              CommonModule,
              FormsModule,
              IonicModule,
              GameViewPageRoutingModule,
              SharedModule
            ],
            declarations: [GameViewPage, ModalComponent],
  providers: [DatePipe]
})
export class GameViewPageModule {}
