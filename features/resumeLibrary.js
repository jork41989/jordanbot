module.exports = function(controller) {
    if (controller.adapter.name === 'Web Adapter') {
        controller.hears('Ask me anything', 'message', async (bot, message) => {

            await bot.reply(message,{
                text: 'Here is more about me',
                quick_replies: [
                    {
                        title: 'Email',
                        payload: 'jork41989@gmail.com',
                    },
                    {
                        title: 'Phone',
                        payload: '908-240-7545',
                    }
                ]
            });
        });


    }
}