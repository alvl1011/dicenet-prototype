import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameCollectionPageRoutingModule } from './game-collection-routing.module';

import { GameCollectionPage } from './game-collection.page';
import { SharedModule } from '../shared/shared.module';
import { GameComponent } from '../game/game.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameCollectionPageRoutingModule,
    SharedModule
  ],
			  declarations: [GameCollectionPage, GameComponent]
		  })
export class GameCollectionPageModule {}
