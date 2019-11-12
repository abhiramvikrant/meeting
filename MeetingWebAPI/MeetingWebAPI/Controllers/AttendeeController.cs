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
    public class AttendeeController : ControllerBase
    {

        private readonly IAttendeeRepository<Attendees> rep = null;
        public AttendeeController(IAttendeeRepository<Attendees> rep)
        {
            this.rep = rep;
        }


        [HttpPost("add")]
        public ActionResult  Add([FromBody] Attendees a)
        {
            rep.Insert(a);
          return    Ok();
        }

        [HttpDelete("delete/{attendeeid}")]
        public ActionResult Delete(int attendeeid)
        {
            rep.Delete(attendeeid);
            return Ok();
        }

        public ActionResult GetAttendee(int createdby)
        {
            var l = rep.GetAttendees(createdby);
            return Ok(JsonConvert.SerializeObject(l));
        }

       
    }
}