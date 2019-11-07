using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingWebAPI.Model
{
    public class Attendees
    {
        public int AttendeeID { get; set; }
        public string Name { get; set; }

        public Attendees(int AttendeeID_, string Name_)
        {
            this.AttendeeID = AttendeeID_;
            this.Name = Name_;
        }
    }
}
