import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { MeetingComponent } from './meeting/meeting.component';
import { MeetinglistComponent } from './meetinglist/meetinglist.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      MeetingComponent,
      MeetinglistComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
