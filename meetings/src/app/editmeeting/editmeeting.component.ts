import { Component, OnInit, ViewChild, Pipe } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MeetingService } from '../_services/meeting.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { MeetingList } from '../_models/MeetingList';

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
  shr: any;
  smin: any;
  sdt: any;
  sdate: any;

  constructor( private router: Router, private ms: MeetingService) { }
mid: any;
  ngOnInit() {
    this.populateData();
    this.mid = window.localStorage.getItem('meetingid');
    this.getMeetingByID(this.mid);


    }
  populateData(){
    this.hours = ['00', '1', '2', '3', '4' , '5', '6', '7', '8', '9', '10', '11', '12'];
    this.minutes = ['00', '15', '30', '45'];
    this.dayTypes = ['AM', 'PM'];
  }

  getMeetingByID(meetingid){
     this.ms.getMeeting(meetingid).subscribe( data => {
      this.meetingList = data;
      console.log(this.meetingList);
      console.log(this.meetingList.startTime);
      this.shr = this.meetingList.startTime.substring(0, 1);
      this.smin = this.meetingList.startTime.substring(2, 4);
      this.sdt = this.meetingList.startTime.substring(5, 7);
      this.sdate = new Date(this.meetingList.meetingDate).toISOString().split('T')[0];

          });

  }
    onSubmit() {
    console.log('inside submit');
  }

}
