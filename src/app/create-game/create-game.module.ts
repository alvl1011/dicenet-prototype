import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateGamePageRoutingModule } from './create-game-routing.module';

import { CreateGamePage } from './create-game.page';
import { SharedModule } from "../shared/shared.module";

@NgModule({
            imports: [
              CommonModule,
              FormsModule,
              IonicModule,
              CreateGamePageRoutingModule,
              SharedModule
            ],
  declarations: [CreateGamePage]
})
export class CreateGamePageModule {}
