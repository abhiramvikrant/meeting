using MeetingWebAPI.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingWebAPI.Data
{
    public interface IAuthRepository
    {
        Task<Users> Authenticate(string username, string password);
    }
}
