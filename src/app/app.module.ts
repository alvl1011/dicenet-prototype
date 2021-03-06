import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@NgModule({
            declarations: [AppComponent],
            entryComponents: [],
            imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
            providers: [{
              provide: RouteReuseStrategy,
              useClass: IonicRouteStrategy
            }, DatePipe, SplashScreen, StatusBar],
            bootstrap: [AppComponent]
          })
export class AppModule {}
