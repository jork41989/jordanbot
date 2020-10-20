module.exports = function(controller) {
  if (controller.adapter.name === 'Web Adapter') {

    controller.hears(['App Academy'], 'message', async (bot, message) => {

          await bot.reply(message,{
                    text: 'What would you like to know about App Academy?',
                    quick_replies: [
                        {
                            title: 'Details',
                            payload: 'a/A Details',
                        },
                        {
                            title: 'Timeline',
                            payload: 'a/A Timeline',
                        },
                        
                        
                    ]
                });
    });


  controller.hears(['a/A Details'], 'message', async (bot, message) => {
    bot.reply(message, 'A software training program, based in New York, New York')
    bot.reply(message, 'Accepted and completed 1000-hour immersive, highly competitive, and career-focused full stack web development boot camp in a collaborative, simulated work setting. Gained extensive hands-on experience with full stack software development practices in an agile environment.')
    bot.reply(message, 'For more details, check out my resume!')
    await bot.reply(message,{
                 text: 'Want to learn more about this educational experience?',
                quick_replies: [
                    {
                        title: 'Yes',
                        payload: 'App Academy',
                    },
                    {
                        title: 'Back to education history?',
                        payload: 'Education',
                    }
                ]
    });

  });


  controller.hears(['a/A Timeline'], 'message', async (bot, message) => {
      bot.reply(message, 'June 2019 - December 2019')
      await bot.reply(message,{
                 text: 'Want to learn more about this educational experience?',
                quick_replies: [
                    {
                        title: 'Yes',
                        payload: 'App Academy',
                    },
                    {
                        title: 'Back to education history?',
                        payload: 'Education',
                    }
                ]
    });
  });

  




  }
}