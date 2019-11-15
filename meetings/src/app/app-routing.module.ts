import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MeetingComponent} from 'src/app/meeting/meeting.component';


const routes: Routes = [
  {path: 'meetings', component: MeetingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
