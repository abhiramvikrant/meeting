import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MeetingComponent} from 'src/app/meeting/meeting.component';
import { MeetinglistComponent } from './meetinglist/meetinglist.component';


const routes: Routes = [
  {path: 'meetings', component: MeetingComponent},
  {path: 'meetinglist', component: MeetinglistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
