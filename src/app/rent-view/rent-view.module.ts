import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentViewPageRoutingModule } from './rent-view-routing.module';

import { RentViewPage } from './rent-view.page';
import { SharedModule } from "../shared/shared.module";

@NgModule({
			  imports: [
				  CommonModule,
				  FormsModule,
				  IonicModule,
				  RentViewPageRoutingModule,
				  SharedModule
			  ],
  declarations: [RentViewPage]
})
export class RentViewPageModule {}
