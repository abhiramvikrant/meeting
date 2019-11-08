using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace MeetingWebAPI.Model
{
    public class Attendees
    {[Key]
        public int AttendeeID { get; set; }
        public string Name { get; set; }

        public int CreatedBy { get; set; }


    }
}
