import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MeetingComponent} from 'src/app/meeting/meeting.component';
import { MeetinglistComponent } from './meetinglist/meetinglist.component';
import { AttendeeComponent } from './attendee/attendee.component';
import { EditmeetingComponent } from './editmeeting/editmeeting.component';



const routes: Routes = [
  {path: 'meetings', component: MeetingComponent},
  {path: 'meetinglist', component: MeetinglistComponent},
  {path: 'attendee', component: AttendeeComponent},
  {path: 'editmeeting', component: EditmeetingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
