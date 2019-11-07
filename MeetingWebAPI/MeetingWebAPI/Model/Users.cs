using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingWebAPI.Model
{
    public class Users
    {
        public int id { get; set; }
        public string Username { get; set; }
        public string password { get; set; }

        public Users(int id_, string Username_, string password_)
        {
            this.id = id_;
            this.Username = Username_;
            this.password = password_;
        }
    }
}
