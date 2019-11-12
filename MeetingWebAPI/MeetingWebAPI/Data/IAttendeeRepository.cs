using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingWebAPI.Data
{
    public interface IAttendeeRepository<Attendees>
    {
        void Insert(Attendees a);
        void Delete(int attendeeid);
        IEnumerable<Attendees> GetAttendees(int CreatedBy);
    }
}
