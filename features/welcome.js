

module.exports = function(controller) {

   controller.on('connected', function(bot, message) {
      bot.reply(message,"Welcome, my name is Jordan and I am open to work");
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
                        title: 'Work History',
                        payload: 'Work History',
                    },
                    {
                        title: 'Education',
                        payload: 'Education',
                    },
                ]
            });
    });

  controller.hears(['Main Menu'], 'message', async (bot, message) => {
    bot.reply(message,{
                text: 'Ask me some questions',
                quick_replies: [
                    {
                        title: 'Contact Info',
                        payload: 'Conact Info',
                    },
                    {
                        title: 'Work History',
                        payload: 'Work History',
                    },
                    {
                        title: 'Education',
                        payload: 'Education',
                    },
                ]
            });
  })

}