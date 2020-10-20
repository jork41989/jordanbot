module.exports = function(controller) {
    if (controller.adapter.name === 'Web Adapter') {
        controller.hears('Conact Info', 'message', async (bot, message) => {
            await bot.reply(message,{
                text: 'What type of contact information would you like?',
                quick_replies: [
                    {
                        title: 'Email',
                        payload: 'What is your email address?',
                    },
                    {
                        title: 'Phone',
                        payload: 'What is your phone number?',
                    },
                    {
                        title: 'Linkedin',
                        payload: 'Can I find you on Linkedin?',
                    },
                    {
                        title: 'Github',
                        payload: 'Can I find you on Github?',
                    }
                ]
            });
        });


    }

    controller.hears('What is your email address?', 'message', async(bot, message) =>{
      bot.reply(message, 'My email is JordanMyAckerman@gmail.com')
      await bot.reply(message,{
                text: 'Would you like more contact info or the main menu?',
                quick_replies: [
                    {
                        title: 'Main Menu',
                        payload: 'Main Menu',
                    },
                    {
                        title: 'More Contact Info',
                        payload: 'Conact Info',
                    }
                ]
            });
    })

    controller.hears('What is your phone number?', 'message', async(bot, message) =>{
      bot.reply(message, 'My phone number is (908)-240-7545')
      await bot.reply(message,{
                text: 'Would you like more contact info or the main menu?',
                quick_replies: [
                    {
                        title: 'Main Menu',
                        payload: 'Main Menu',
                    },
                    {
                        title: 'More Contact Info',
                        payload: 'Conact Info',
                    }
                ]
            });
    })
    
    controller.hears('Can I find you on Linkedin?', 'message', async(bot, message) =>{
      bot.reply(message, 'I can be found on Linkedin at <https://www.linkedin.com/in/ackermanjordan/>')
      await bot.reply(message,{
                text: 'Would you like more contact info or the main menu?',
                quick_replies: [
                    {
                        title: 'Main Menu',
                        payload: 'Main Menu',
                    },
                    {
                        title: 'More Contact Info',
                        payload: 'Conact Info',
                    }
                ]
            });
    })

    controller.hears('Can I find you on Github?', 'message', async(bot, message) =>{
      bot.reply(message, 'I can be found on Github at <https://github.com/jork41989>')
      await bot.reply(message,{
                text: 'Would you like more contact info or the main menu?',
                quick_replies: [
                    {
                        title: 'Main Menu',
                        payload: 'Main Menu',
                    },
                    {
                        title: 'More Contact Info',
                        payload: 'Conact Info',
                    }
                ]
            });
      
    })
    
}