using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingWebAPI.Model
{
    public class MeetingAttendees
    {
        public int MeetingID { get; set; }
        public int AttendeeID { get; set; }

        public MeetingAttendees(int MeetingID_, int AttendeeID_)
        {
            this.MeetingID = MeetingID_;
            this.AttendeeID = AttendeeID_;
        }
    }
}
