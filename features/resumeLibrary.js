module.exports = function(controller) {
    if (controller.adapter.name === 'Web Adapter') {


        controller.hears(['Work history'], 'message', async (bot, message) => {

            await bot.reply(message,{
                 text: 'Which role would you like to hear more about?',
                quick_replies: [
                    {
                        title: 'Independent Consulting Services',
                        payload: 'Independent Consulting Services',
                    },
                    {
                        title: 'The Walt Disney Company',
                        payload: 'The Walt Disney Company',
                    }
                ]
            });
        });


        controller.hears(['Independent Consulting Services'], 'message', async (bot, message) => {

            await bot.reply(message,{
                 text: 'What would you like to know?',
                quick_replies: [
                    {
                        title: 'Job title',
                        payload: 'Independent Consulting Services Job Title',
                    },
                    {
                        title: 'Job Description',
                        payload: 'Independent Consulting Services Job Description',
                    }
                ]
            });
        });


      controller.hears(['Independent Consulting Services Job Title'], 'message', async (bot, message) => {
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


    }
}