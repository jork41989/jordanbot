module.exports = function(controller) {
    if (controller.adapter.name === 'Web Adapter') {

    controller.hears(['The Walt Disney Company'], 'message', async (bot, message) => {

      await bot.reply(message,{
                 text: 'What would you like to know?',
                quick_replies: [
                    {
                        title: 'Job title',
                        payload: 'TWDC Job Title',
                    },
                    {
                        title: 'Job Description',
                        payload: 'TWDC Job Description',
                    },
                    {
                        title: 'Timeline',
                        payload: 'TWDC Timeline',
                    },
                    
                ]
            });
      });


       controller.hears(['TWDC Job Title'], 'message', async (bot, message) => {
        bot.reply(message, 'Business Analyst / Guest Support Technical Specialist')
        await bot.reply(message,{
                 text: 'Want to learn more about this role?',
                quick_replies: [
                    {
                        title: 'Yes',
                        payload: 'The Walt Disney Company',
                    },
                    {
                        title: 'Back to work history?',
                        payload: 'Work history',
                    }
                ]
            });
      });


      controller.hears(['TWDC Job Description'], 'message', async (bot, message) => {
        bot.reply(message, 'Built an impressive record of achievements for this multinational mass media and entertainment conglomerate. Originally recruited as a pilot for the Monorail Department and transitioned as a Guest Support Technical Specialist for the Photo Imaging Department. Evolved as a Business Analyst within the Photo Imaging Department.')
        bot.reply(message, 'For more details, check out my resume!')
        await bot.reply(message,{
                 text: 'Want to learn more about this role?',
                quick_replies: [
                    {
                        title: 'Yes',
                        payload: 'The Walt Disney Company',
                    },
                    {
                        title: 'Back to work history?',
                        payload: 'Work history',
                    }
                ]
            });
      });

      controller.hears(['TWDC Timeline'], 'message', async (bot, message) => {
        bot.reply(message, '2015-2019')
        await bot.reply(message,{
                 text: 'Want to learn more about this role?',
                quick_replies: [
                    {
                        title: 'Yes',
                        payload: 'The Walt Disney Company',
                    },
                    {
                        title: 'Back to work history?',
                        payload: 'Work history',
                    }
                ]
            });
      });

  }
}