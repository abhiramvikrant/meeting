import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { MeetingComponent } from './meeting/meeting.component';
import { MeetinglistComponent } from './meetinglist/meetinglist.component';
import { AngularmaterialModule } from './material/angularmaterial/angularmaterial.module';
import { MeetlinglistService } from './_services/meetlinglist.service';
import { MeetingService } from './_services/meeting.service';
import { AttendeeComponent } from './attendee/attendee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import {
  MatButtonModule, MatMenuModule, MatDatepickerModule,
  MatNativeDateModule, MatIconModule, MatCardModule, MatSidenavModule, MatFormFieldModule,
  MatInputModule, MatTooltipModule, MatToolbarModule
} from '@angular/material';
import { AttendeeService } from './_services/attendee.service';
import { EditmeetingComponent } from './editmeeting/editmeeting.component';
import { TimedataService } from './_services/timedata.service';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      MeetingComponent,
      MeetinglistComponent,
      AttendeeComponent,
      EditmeetingComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatMenuModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatIconModule,
      MatRadioModule,
      MatCardModule,
      MatSidenavModule,
      MatFormFieldModule,
      MatInputModule,
      MatTooltipModule,
      MatToolbarModule,
      AppRoutingModule
   ],
   providers: [
      HttpClient,
      AuthService,
      MeetlinglistService,
      MeetingService,
      AttendeeService,
      TimedataService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
