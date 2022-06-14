import { Component, Input, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { UserService } from '../services/user.service';
import { User } from '../shared/data-models/userDataModel';
import { NavigationExtras, Router } from '@angular/router';
import { RentsService } from "../services/rents.service";
import { Game } from "../shared/data-models/gameModel";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() game: Game;

  users: User[] = [];

  constructor(public modalCtrl: ModalController,
              private userService: UserService,
              private router: Router,
              private rentService: RentsService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  onClick(user: User) {
    this.rentService.addRent(this.game, user, 'OK');
    this.router.navigate(['/home/tabs/collection/rents']);
    this.dismiss();
  }

}
