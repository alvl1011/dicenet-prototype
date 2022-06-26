import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ModalAddFriendComponent } from '../modal-add-friend/modal-add-friend.component';
import { SideSwipeDirective } from './directives/side-swipe.directive';



@NgModule({
  declarations: [HeaderComponent, ModalAddFriendComponent, SideSwipeDirective],
  exports: [
    HeaderComponent, ModalAddFriendComponent, SideSwipeDirective
  ],
            imports: [
              CommonModule,
              IonicModule
            ],
  providers: []
          })
export class SharedModule { }
