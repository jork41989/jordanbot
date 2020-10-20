module.exports = function(controller) {
  if (controller.adapter.name === 'Web Adapter') {

    controller.hears(['App Academy'], 'message', async (bot, message) => {

          await bot.reply(message,{
                    text: 'What would you like to know about Lynn University?',
                    quick_replies: [
                        {
                            title: 'Details',
                            payload: 'LU Details',
                        },
                        {
                            title: 'Timeline',
                            payload: 'LU Timeline',
                        },
                    ]
          });
    });

    


  }
}