using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingWebAPI.Model
{
    public class meetings
    {
        public int MeetingId { get; set; }
        public string Name { get; set; }
        public string Agenda { get; set; }
        public DateTime MeetingDate { get; set; }
        public string StartTime { get; set; }

        public meetings(int MeetingId_, string Name_, string Agenda_, DateTime MeetingDate_, string StartTime_)
        {
            this.MeetingId = MeetingId_;
            this.Name = Name_;
            this.Agenda = Agenda_;
            this.MeetingDate = MeetingDate_;
            this.StartTime = StartTime_;
        }
    }
}
