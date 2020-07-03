import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import {FormsModule} from '@angular/forms'; 
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { MainServiceService } from './main-service.service';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [AppComponent,MainPageComponent,RecipeDetailsComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,RouterModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MainServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
