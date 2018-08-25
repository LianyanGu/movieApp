import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {HomeService} from "./home/home.service";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "./app.component";
import { ApiKeyComponent } from './api-key/api-key.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApiKeyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    HttpClientModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
