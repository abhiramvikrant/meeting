using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeetingWebAPI.Model;
using Microsoft.EntityFrameworkCore;
using System.Net.Http;


namespace MeetingWebAPI.Data
{
    public class MeetingRepository : IMeetingRepository<meetings>
    
    {

        private MeetingDbContext db = null;
            public MeetingRepository(MeetingDbContext db)
        {
            this.db = db;
       
        }
        public async void Delete(int meetingid)
           
        {

            var m = await db.Meetings.FindAsync(meetingid);
            if( m!= null)
            {
                db.Meetings.Remove(m);
                db.SaveChanges();
            }
        }

        public meetings GetByID(int meetingid)
        {
            throw new NotImplementedException();
        }

        public  IEnumerable<meetings> GetMeetingByUserID(int userid, string datetime)
        {
            var lmeetings =  db.Meetings.Where(x => x.CreatedBy == userid && x.MeetingDate >= DateTime.Parse(datetime))
                .Include(x =>x.MeetingAttendeesLink).ToList<meetings>();
            if (lmeetings != null)
                return lmeetings;
            else
                return null;
        }

        public async void Insert(  meetings t)
        {
          
                await  db.AddAsync(t);
            db.SaveChanges();
        }

        public void AddAttendees(int meetingid, int attendeeid)
        {
            var meet = db.Meetings.Include(x => x.MeetingAttendeesLink).First();
            MeetingAttendees ma = new MeetingAttendees {MeetingID=meetingid, AttendeeID = attendeeid };
            meet.MeetingAttendeesLink.Add(ma);
            db.SaveChanges();
        }

        public  void Update(meetings t)
        {
            db.Update(t);
            db.SaveChanges();
        }
    }
}
