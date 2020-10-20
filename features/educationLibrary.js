module.exports = function(controller) {
    if (controller.adapter.name === 'Web Adapter') {
      controller.hears(['Education'], 'message', async (bot, message) => {

            await bot.reply(message,{
                 text: 'Which educational experience would you like to hear more about?',
                quick_replies: [
                    {
                        title: 'App Academy',
                        payload: 'App Academy',
                    },
                    {
                        title: 'Lynn University',
                        payload: 'Lynn University',
                    },
                    {
                        title: 'Main Menu',
                        payload: 'Main Menu',
                    }
                ]
            });
      });



      
      



    }
}