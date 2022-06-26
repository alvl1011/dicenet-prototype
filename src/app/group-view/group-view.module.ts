import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupViewPageRoutingModule } from './group-view-routing.module';

import { GroupViewPage } from './group-view.page';
import { SharedModule } from "../shared/shared.module";

@NgModule({
            imports: [
              CommonModule,
              FormsModule,
              IonicModule,
              GroupViewPageRoutingModule,
              SharedModule,
            ],
  declarations: [GroupViewPage]
})
export class GroupViewPageModule {}
