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




    }
}