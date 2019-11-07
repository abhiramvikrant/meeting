using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace MeetingWebAPI.Model
{
    public class Users
    {
        [Key]
        public int id { get; set; }
        public string Username { get; set; }
        public string password { get; set; }

      
    }
}
