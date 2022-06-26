import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  ActionPerformed,
  PushNotificationActionPerformed,
  PushNotifications,
  PushNotificationSchema,
  Token
} from '@capacitor/push-notifications';
import { Capacitor } from '@capacitor/core';


@Injectable({
  providedIn: 'root'
})
export class FcmService {

  token = '';

  constructor(private router: Router) { }

  initPush() {
    if (Capacitor.platform !== 'web') {
      this.registerPush();
    }
  }

  private registerPush() {
    PushNotifications.requestPermissions().then((permission) => {
      if (permission.receive) {
        PushNotifications.register();
      }
    });

    PushNotifications.addListener(
      'registration',
      (token: Token) => {
        this.token = JSON.stringify(token);
        console.log('My token: ' + JSON.stringify(token));
      }
    );

    PushNotifications.addListener(
      'registrationError',
      (error: any) => {
        console.log('Error: ' + JSON.stringify(error));
      }
    );

    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotificationSchema) => {
        console.log('Push received: ' + JSON.stringify(notification));
      }
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      async (notification: ActionPerformed) => {
        const data = notification.notification.data;
        console.log('Action performed: ' + JSON.stringify(notification.notification));
        await this.router.navigateByUrl('/home');
      }
    );
  }
}
