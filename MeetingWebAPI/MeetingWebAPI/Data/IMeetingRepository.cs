using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeetingWebAPI.Model;

namespace MeetingWebAPI.Data
{
    public interface IMeetingRepository<T>
    {
         meetings GetByID(int meetingid);
    IEnumerable<T> GetMeetingByUserID(int userid, string datetime);
    void Delete(    int meetingid);

    void Update(T t);

    void Insert(T  t);
        void AddAttendees(int meetingid, int attendeeid);
}
}
