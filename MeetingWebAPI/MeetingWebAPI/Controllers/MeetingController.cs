using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MeetingWebAPI.Data;
using MeetingWebAPI.Model;
using Newtonsoft.Json;

namespace MeetingWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MeetingController : ControllerBase
    {

        private readonly IMeetingRepository<meetings> rep = null;
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

        [HttpPost("addmeeting")]
        public ActionResult Insert([FromBody] meetings m)
        {
            rep.Insert(m);
            return Ok();

        }
        [HttpGet("GetMeetingByUserId/{userid}")]
        public ActionResult GetMeetingByUserID(int userid)
        {
            var meetings = rep.GetMeetingByUserID(userid);
            return Ok(meetings);

        }
        [HttpPut("Updatemeeting")]
        public ActionResult Update([FromBody]meetings m)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(m);
            }
            rep.Update(m);
            return Ok();
        }


        [HttpDelete("DeleteMeeting/{meetingid}")]
        public ActionResult Delete(int meetingid)
        {
            rep.Delete(meetingid);
            return Ok();
        }
        [HttpGet("GetMeeting/{meetingid}")]

        public ActionResult GetMeetingByID( int meetingid)
        {
            var meeting = rep.GetByID(meetingid);
            return Ok(JsonConvert.SerializeObject(meeting));
            

        }


    }
}