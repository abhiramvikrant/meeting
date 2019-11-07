using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MeetingWebAPI.Data;
using MeetingWebAPI.Model;

namespace MeetingWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {

        private IAuthRepository rep = null;
        public AuthenticateController(IAuthRepository _rep)
        {
            this.rep = _rep;
        }
        [HttpPost("Login")]
        public IActionResult Login([FromBody] Users udto)
        {
            var auth = rep.Authenticate(udto.Username, udto.password);
            return Ok(auth);
        }

    }
}