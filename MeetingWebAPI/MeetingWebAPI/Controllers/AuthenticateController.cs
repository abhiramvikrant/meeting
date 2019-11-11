using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MeetingWebAPI.Data;
using MeetingWebAPI.Model;

namespace MeetingWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {

        private readonly  IAuthRepository rep = null;
        private readonly IConfiguration _config = null;
        public AuthenticateController(IAuthRepository _rep, IConfiguration config)
        {
            this.rep = _rep;
            this._config = config;
                }
        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody]Users udto)
        {
            var user = await rep.Authenticate(udto.Username, udto.password);
            
            if (user == null)
            {
                return Unauthorized();
            }
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.id.ToString()),
                new Claim(ClaimTypes.Name,user.Username)
            };
            var secret = Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value);
            var key = new SymmetricSecurityKey(secret);
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            var tokendescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenhandlker = new JwtSecurityTokenHandler();
            var token = tokenhandlker.CreateToken(tokendescriptor);

            return Ok(

                new
                {
                    token = tokenhandlker.WriteToken(token)
                });


        }



    }
}