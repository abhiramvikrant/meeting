using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IdentityModel.Tokens.Jwt;
using System.Net.Http;
using Microsoft.EntityFrameworkCore;
using MeetingWebAPI.Model;

namespace MeetingWebAPI.Data
{
    public class AuthRepository : IAuthRepository
    {
        private MeetingDbContext _db = null;

        public AuthRepository(MeetingDbContext db)
        {
            this._db = db;
        }
        public  async Task<Users> Authenticate(string username, string password)
        {
            var result = await _db.Users.FirstOrDefaultAsync(x => x.Username == username && x.password == password);
            if (result == null)
                return null;
            return result;

        }
    }
}
