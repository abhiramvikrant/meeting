import { Component, OnInit, ViewChild, Pipe } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MeetingService } from '../_services/meeting.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { MeetingList } from '../_models/MeetingList';
import { TimedataService } from '../_services/timedata.service';

@Component({
  selector: 'app-editmeeting',
  templateUrl: './editmeeting.component.html',
  styleUrls: ['./editmeeting.component.css']
})
export class EditmeetingComponent implements OnInit {
  @ViewChild('editForm', {static: false}) editForm: NgForm;
   hours: string[];
  minutes: string[];
  dayTypes: string[];
  meetingList: MeetingList;
  model: any  = {};
  shr: any;
  smin: any;
  sdt: any;
  sdate: any;

  constructor( private router: Router, private ms: MeetingService, private timedata: TimedataService) { }
mid: any;
  ngOnInit() {
    this.populateData();
    this.mid = window.localStorage.getItem('meetingid');
    this.getMeetingByID(this.mid);


    }

    populateData(){
      this.hours = this.timedata.hours;
      this.minutes = this.timedata.minutes;
      this.dayTypes = this.timedata.dayTypes;
    }


  getMeetingByID(meetingid){
     this.ms.getMeeting(meetingid).subscribe( data => {
      this.meetingList = data;
      this.shr = this.meetingList.startTime.substring(0, 1);
      this.smin = this.meetingList.startTime.substring(2, 4);
      this.sdt = this.meetingList.startTime.substring(5, 7);
      this.sdate = new Date(this.meetingList.meetingDate).toISOString().split('T')[0];

          });

  }
    onSubmit() {
      console.log(this.meetingList);
      this.meetingList.startTime = this.shr + ':' + this.smin + ' ' + this.sdt;
      this.ms.updateMeeting(this.meetingList).subscribe(next => {}, error => console.log('Update failed'));

  }

}
