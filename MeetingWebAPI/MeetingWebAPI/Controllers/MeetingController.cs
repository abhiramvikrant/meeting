using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MeetingWebAPI.Data;
using MeetingWebAPI.Model;

namespace MeetingWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MeetingController : ControllerBase
    {
       
        private readonly IMeetingRepository<meetings>    rep = null;
        public MeetingController(IMeetingRepository<meetings> rep)
        {
            this.rep = rep;
        }
        [HttpPost("addattendee")]
        public ActionResult AddAttendee([FromBody]MeetingAttendees ma)
        {
     rep.AddAttendees(ma.MeetingID, ma.AttendeeID);
            return Ok();

        }

        [HttpPatch("addmeeting")]
        public ActionResult Insert([FromBody] meetings m)
        {
            rep.Insert(m);
            return Ok();

        }
    }
}