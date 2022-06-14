import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentsPageRoutingModule } from './rents-routing.module';

import { RentsPage } from './rents.page';
import { SharedModule } from "../shared/shared.module";

@NgModule({
			  imports: [
				  CommonModule,
				  FormsModule,
				  IonicModule,
				  RentsPageRoutingModule,
				  SharedModule
			  ],
  declarations: [RentsPage]
})
export class RentsPageModule {}
