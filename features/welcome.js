

module.exports = function(controller) {

   controller.on('connected', function(bot, message) {
      bot.reply(message,"Welcome, my name is Jordan ");
      bot.reply(message, "....")
      bot.reply(message, "Well I am Jordan's avatar")
       bot.reply(message,{
                text: 'Ask me some questions',
                quick_replies: [
                    {
                        title: 'Contact Info',
                        payload: 'Conact Info',
                    },
                    {
                        title: 'Phone',
                        payload: '908-240-7545',
                    }
                ]
            });
    });


}