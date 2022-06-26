import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageViewPageRoutingModule } from './message-view-routing.module';

import { MessageViewPage } from './message-view.page';
import { SharedModule } from "../shared/shared.module";

@NgModule({
			  imports: [
				  CommonModule,
				  FormsModule,
				  IonicModule,
				  MessageViewPageRoutingModule,
				  SharedModule
			  ],
  declarations: [MessageViewPage]
})
export class MessageViewPageModule {}
