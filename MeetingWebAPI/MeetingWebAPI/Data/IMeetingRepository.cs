using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingWebAPI.Data
{
    public interface IMeetingRepository<T> where T: class
    {
         T GetByID(int meetingid);
    IEnumerable<T> GetMeetingByUserID(int userid, string datetime);
    void Delete(    int meetingid);

    void Update(T t);

    void Insert(T t);
}
}
