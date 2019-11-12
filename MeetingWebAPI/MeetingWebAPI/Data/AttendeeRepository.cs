using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeetingWebAPI.Model;
namespace MeetingWebAPI.Data
{
    public class AttendeeRepository : IAttendeeRepository<Attendees>
      
    {
        private readonly MeetingDbContext db = null;
        public AttendeeRepository()
        {

        }
        public AttendeeRepository(MeetingDbContext db)
        {
            this.db = db;
        }
        public void Delete(int attendeeid)
        {
            var att = db.MeetingAttendees.Where(x => x.AttendeeID == attendeeid).ToList();
            db.MeetingAttendees.RemoveRange(att);
            db.SaveChanges();
            var a = db.Attendees.Where(x => x.AttendeeID == attendeeid).First();
            db.Attendees.Remove(a);
            db.SaveChanges();
         
        }

        public IEnumerable<Attendees> GetAttendees(int CreatedBy)
        {
            var latt = db.Attendees.Where(x => x.CreatedBy == CreatedBy).ToList<Attendees>();
            return latt;
        }

        public void Insert(Attendees a)
        {
            db.Add(a);
            db.SaveChanges();
        }
    }
}
