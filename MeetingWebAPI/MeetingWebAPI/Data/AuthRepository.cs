using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingWebAPI.Data
{
    public class AuthRepository : IAuthRepository
    {
        private MeetingDbContext db = null;

        public AuthRepository(MeetingDbContext _db)
        {
            this.db = _db;
        }
        public bool Authenticate(string username, string password)
        {
            var result = db.Users.Where(x => x.Username == username && x.password == password).FirstOrDefault();
            if (result != null)
                return true;
            return false;

        }
    }
}
