import { Component, Input, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { UserService } from '../services/user.service';
import { User } from '../shared/data-models/userDataModel';
import { NavigationExtras, Router } from '@angular/router';
import { RentsService } from "../services/rents.service";
import { Game } from "../shared/data-models/gameModel";
import { MessageService } from "../services/message.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() game?: Game;
  @Input() title = '';
  @Input() isMessage = false;

  users: User[] = [];

  constructor(public modalCtrl: ModalController,
              private userService: UserService,
              private router: Router,
              private rentService: RentsService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users.filter((user) => user.id !== this.userService.getUser().getValue().id);
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  onClick(user: User, isMessage: boolean) {
    if(isMessage) {
      let previousId = this.messageService.getLastIndex();
      const dialog = this.messageService.addDialog({
        id: ++previousId,
        userId: this.userService.getUser().getValue().id,
        companionId: user.id,
        messages: []
                                    });
      this.messageService.onChangeDialog(dialog);
      this.router.navigate(['/home/tabs/social/message-view']);
    } else {
      this.rentService.addRent(this.game, user, 'OK');
      this.router.navigate(['/home/tabs/collection/rents']);
    }
    this.dismiss();
  }

}
