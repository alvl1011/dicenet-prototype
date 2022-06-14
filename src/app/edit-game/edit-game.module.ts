import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditGamePageRoutingModule } from './edit-game-routing.module';

import { EditGamePage } from './edit-game.page';
import { SharedModule } from "../shared/shared.module";

@NgModule({
			  imports: [
				  CommonModule,
				  FormsModule,
				  IonicModule,
				  EditGamePageRoutingModule,
				  SharedModule
			  ],
  declarations: [EditGamePage]
})
export class EditGamePageModule {}
