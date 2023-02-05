import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputComComponent } from './header/input-com/input-com.component';
import { DisplayComponent } from './display/display.component';
import { FormsModule } from '@angular/forms';
console.log("module");
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log("appmoduleclass");
  }
 }
