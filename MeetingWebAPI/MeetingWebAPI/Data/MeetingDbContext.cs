using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MeetingWebAPI.Model;

namespace MeetingWebAPI.Data
{
    public class MeetingDbContext : DbContext
    {
        public MeetingDbContext()
        {

        }
        public DbSet<Users> Users { get; set; }
        public DbSet<meetings> Meetings  { get; set; }

        public DbSet<Attendees> Attendees { get; set; }
        public DbSet<MeetingAttendees>  MeetingAttendees { get; set; }
        public MeetingDbContext(DbContextOptions options) : base(options) { }



    }
}
