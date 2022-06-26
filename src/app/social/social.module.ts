import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialPageRoutingModule } from './social-routing.module';

import { SocialPage } from './social.page';
import { SharedModule } from "../shared/shared.module";
import { GameViewPageModule } from "../game-view/game-view.module";

@NgModule({
			  imports: [
				  CommonModule,
				  FormsModule,
				  IonicModule,
				  SocialPageRoutingModule,
				  SharedModule,
				  GameViewPageModule
			  ],
  declarations: [SocialPage]
})
export class SocialPageModule {}
