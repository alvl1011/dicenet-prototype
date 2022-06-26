import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateNewsPageRoutingModule } from './create-news-routing.module';

import { CreateNewsPage } from './create-news.page';
import { SharedModule } from "../shared/shared.module";

@NgModule({
			  imports: [
				  CommonModule,
				  FormsModule,
				  IonicModule,
				  CreateNewsPageRoutingModule,
				  SharedModule
			  ],
  declarations: [CreateNewsPage]
})
export class CreateNewsPageModule {}
