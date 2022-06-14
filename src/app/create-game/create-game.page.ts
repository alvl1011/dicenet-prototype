import { Component, OnInit } from '@angular/core';
import { GameService } from "../services/game.service";
import { NavigationService } from "../services/navigation.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.page.html',
  styleUrls: ['./create-game.page.scss'],
})
export class CreateGamePage implements OnInit {

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
  }

  onBack() {
    this.navigation.back();
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
    let previousId = this.gameService.getLastIndex();
    this.gameService.addGame({
        id: ++previousId,
        title: this.title,
        description: this.description,
        longDescription: this.description,
        createdAt: new Date(),
        imagePreview: this.imagePreview,
        logoPreview: this.logoPreview
    });
    this.gameService.getGames().subscribe((games) => console.log(games));
    await this.router.navigate(['/home/tabs/collection']);
  }

}
