var axios = require("axios");

module.exports = function (ticketId, replyMsg) {
  var data = JSON.stringify({
    ticket: {
      comment: {
        body: replyMsg,
        public: true,
      },
      status: "solved",
    },
  });

  var config = {
    method: "put",
    url: "https://your_url.zendesk.com/api/v2/tickets/" + ticketId,
    headers: {
      Authorization: "<Your_auth_here>",
      "Content-Type": "application/json",
       },
    data: data,
  };

  axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      response ? console.log("Status: Reply sent successfully ! \nTicket Id: " + ticketId + "\nMsg: " + replyMsg) : console.log("There is no response from Zen!");
    })
    .catch(function (error) {
      console.log(error);
    });
};