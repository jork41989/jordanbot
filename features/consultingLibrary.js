module.exports = function(controller) {
    if (controller.adapter.name === 'Web Adapter') {

        controller.hears(['Independent Consulting Services'], 'message', async (bot, message) => {

            await bot.reply(message,{
                 text: 'What would you like to know?',
                quick_replies: [
                    {
                        title: 'Job title',
                        payload: 'ICS Job Title',
                    },
                    {
                        title: 'Job Description',
                        payload: 'ICS Job Description',
                    },
                    {
                        title: 'Timeline',
                        payload: 'ICS Timeline',
                    },
                    
                ]
            });
        });


      controller.hears(['ICS Job Title'], 'message', async (bot, message) => {
        bot.reply(message, 'Freelance Developer')
        await bot.reply(message,{
                 text: 'Want to learn more about this role?',
                quick_replies: [
                    {
                        title: 'Yes',
                        payload: 'Independent Consulting Services',
                    },
                    {
                        title: 'Back to work history?',
                        payload: 'Work history',
                    }
                ]
            });
      });

      controller.hears(['ICS Job Description'], 'message', async (bot, message) => {
        bot.reply(message, 'Retained to develop and implement eCommerce and corporate sites to enable clients to market products and services, launch brands, and achieve continued growth.')
        bot.reply(message, 'For more details, check out my resume!')
        await bot.reply(message,{
                 text: 'Want to learn more about this role?',
                quick_replies: [
                    {
                        title: 'Yes',
                        payload: 'Independent Consulting Services',
                    },
                    {
                        title: 'Back to work history?',
                        payload: 'Work history',
                    }
                ]
            });
      });

      controller.hears(['ICS Timeline'], 'message', async (bot, message) => {
        bot.reply(message, 'December 2019-Present')
        await bot.reply(message,{
                 text: 'Want to learn more about this role?',
                quick_replies: [
                    {
                        title: 'Yes',
                        payload: 'Independent Consulting Services',
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