import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsViewPageRoutingModule } from './news-view-routing.module';

import { NewsViewPage } from './news-view.page';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NewsViewPageRoutingModule,
        SharedModule
    ],
  declarations: [NewsViewPage]
})
export class NewsViewPageModule {}
