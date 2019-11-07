using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingWebAPI.Data
{
    public interface IAuthRepository
    {
        bool Authenticate(string username, string password);
    }
}
