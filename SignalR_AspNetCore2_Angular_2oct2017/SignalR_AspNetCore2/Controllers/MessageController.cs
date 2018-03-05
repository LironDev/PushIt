using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace SignalR_AspNetCore2.Controllers
{
    [Route("api/message")]
    public class MessageController : Controller 
    {
        private IHubContext<MessageHub> _messageHubContext;

        public MessageController(IHubContext<MessageHub> messageHubContext)
        {
            _messageHubContext = messageHubContext;
        }

        public IActionResult Post(string id)
        {
            //Broadcast message to client
            _messageHubContext.Clients.All.InvokeAsync("send", "Hello from the hub server at " + DateTime.Now.ToString("dd-MM-yyyy HH:mm:ss")); 
            _messageHubContext.Clients.All.InvokeAsync("send", "LALLALALA");
            _messageHubContext.Clients.All.InvokeAsync("send", "id" + id);
            return Ok();
        }
    }
}