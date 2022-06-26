import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../shared/data-models/userDataModel';
import { NavigationService } from "../services/navigation.service";

@Component({
             selector: 'app-edit-user',
             templateUrl: './edit-user.page.html',
             styleUrls: ['./edit-user.page.scss'],
           })
export class EditUserPage implements OnInit {

  user: User;

  firstname: string;
  lastname: string;
  career: string;
  date: Date;
  location: string;
  profileImage: string;
  imageFile: File;

  constructor(private router: Router,
              private userService: UserService,
              private navigation: NavigationService) { }

  ngOnInit() {
    this.user = this.userService.getUser().getValue();
    this.firstname = this.user.firstname;
    this.lastname = this.user.lastname;
    this.career = this.user.career;
    this.date = this.user.birthdate;
    this.location = this.user.city;
  }

  onFileChange(fileChangeEvent) {
    if (fileChangeEvent.target.id === 'image') {
      this.imageFile = fileChangeEvent.target.files[0];
      if (typeof (FileReader) !== 'undefined') {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.profileImage = e.target.result;
        };

        reader.readAsDataURL(this.imageFile);
      }
    }
  }

  async submitForm() {
    this.userService.editUser({
                                id: this.user.id,
                                firstname: this.firstname,
                                lastname: this.lastname,
                                birthdate: this.date,
                                profileImage: this.profileImage,
                                email: this.user.email,
                                password: this.user.password,
                                city: this.location,
                                isFriend: true
                              });
    this.userService.getUsers().subscribe((games) => console.log(games));
    await this.router.navigate(['/home/tabs/profile']);
  }

  onBack() {
    this.navigation.back();
  }

}
