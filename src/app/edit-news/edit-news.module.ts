import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditNewsPageRoutingModule } from './edit-news-routing.module';

import { EditNewsPage } from './edit-news.page';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EditNewsPageRoutingModule,
        SharedModule
    ],
  declarations: [EditNewsPage]
})
export class EditNewsPageModule {}
