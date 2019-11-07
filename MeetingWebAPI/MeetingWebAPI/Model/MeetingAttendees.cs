using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace MeetingWebAPI.Model
{
    public class MeetingAttendees
    {
        [Key]
        public int MeetingAttendeeID { get; set; }
        public int MeetingID { get; set; }
        public int AttendeeID { get; set; }

      
    }
}
