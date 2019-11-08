using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace MeetingWebAPI.Model
{
    public class meetings
    {[Key]
        public int MeetingId { get; set; }
        public string Name { get; set; }
        public string Agenda { get; set; }
        public DateTime MeetingDate { get; set; }
        public string StartTime { get; set; }

            public int CreatedBy { get; set; }

        public ICollection<MeetingAttendees>MeetingAttendeesLink { get; set; }

        
    }
}
