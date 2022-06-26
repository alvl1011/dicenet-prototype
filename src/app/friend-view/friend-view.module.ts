import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FriendViewPageRoutingModule } from './friend-view-routing.module';

import { FriendViewPage } from './friend-view.page';
import { SharedModule } from "../shared/shared.module";

@NgModule({
			  imports: [
				  CommonModule,
				  FormsModule,
				  IonicModule,
				  FriendViewPageRoutingModule,
				  SharedModule
			  ],
  declarations: [FriendViewPage]
})
export class FriendViewPageModule {}
