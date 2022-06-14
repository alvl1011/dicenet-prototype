import { Component, OnInit } from '@angular/core';
import { GameService } from "../services/game.service";
import { NavigationService } from "../services/navigation.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.page.html',
  styleUrls: ['./edit-game.page.scss'],
})
export class EditGamePage implements OnInit {

  id: number;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  logo?: string;
  createdAt: Date;
  imageFile?: File;
  logoFile?: File;

  imagePreview: string;
  logoPreview: string;


  constructor(private gameService: GameService,
              private navigation: NavigationService,
              private router: Router) { }

  ngOnInit() {
    this.getNavigationExtras();
  }

  getNavigationExtras() {
    if (this.router.getCurrentNavigation().extras.state) {
      this.id = this.router.getCurrentNavigation().extras.state.game.id;
      this.title = this.router.getCurrentNavigation().extras.state.game.title;
      this.description = this.router.getCurrentNavigation().extras.state.game.description;
      this.longDescription = this.router.getCurrentNavigation().extras.state.game.longDescription;
      this.image = this.router.getCurrentNavigation().extras.state.game.image;
      this.logo = this.router.getCurrentNavigation().extras.state.game.logo;
      this.createdAt = this.router.getCurrentNavigation().extras.state.game.createdAt;
      this.imageFile = this.router.getCurrentNavigation().extras.state.game.imageFile;
      this.logoFile = this.router.getCurrentNavigation().extras.state.game.logoFile;
      this.imagePreview = this.router.getCurrentNavigation().extras.state.game.imagePreview;
      this.logoPreview = this.router.getCurrentNavigation().extras.state.game.logoPreview;
    }
  }

  onFileChange(fileChangeEvent) {
    if(fileChangeEvent.target.id === 'image') {
      this.imageFile = fileChangeEvent.target.files[0];
      if (typeof (FileReader) !== 'undefined') {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.imagePreview = e.target.result;
        };

        reader.readAsDataURL(this.imageFile);
      }
    } else {
      this.logoFile = fileChangeEvent.target.files[0];
      if (typeof (FileReader) !== 'undefined') {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.logoPreview = e.target.result;
        };

        reader.readAsDataURL(this.logoFile);
      }
    }
  }

  async submitForm() {
    this.gameService.editGame({
                               id: this.id,
                               title: this.title,
                               description: this.description,
                               longDescription: this.description,
                               createdAt: new Date(),
                               imagePreview: this.imagePreview,
                               logoPreview: this.logoPreview,
                               image: this.image,
                               logo: this.logo
                             });
    this.gameService.getGames().subscribe((games) => console.log(games));
    await this.router.navigate(['/home/tabs/collection']);
  }

  onBack() {
    this.navigation.back();
  }

}
