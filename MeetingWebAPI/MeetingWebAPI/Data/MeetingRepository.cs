using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeetingWebAPI.Model;
using Microsoft.EntityFrameworkCore;


namespace MeetingWebAPI.Data
{
    public class MeetingRepository : IMeetingRepository<meetings>
    
    {

        private  MeetingDbContext db = null;
            public MeetingRepository(MeetingDbContext _db)
        {
            this.db = _db;
       
        }
        public void Delete(int meetingid)
        {
            var m = db.Meetings.Find(meetingid);
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

        public IEnumerable<meetings> GetMeetingByUserID(int userid, string datetime)
        {
            var lmeetings = db.Meetings.Where(x => x.CreatedBy == userid && x.MeetingDate >= DateTime.Parse(datetime)).ToList<meetings>();
            if (lmeetings != null)
                return lmeetings;
            else
                return null;
        }

        public void Insert(meetings t)
        { db.Add(t);
            db.SaveChanges();
        }

        public void Update(meetings t)
        {
            db.Update(t);
            db.SaveChanges();
        }
    }
}
