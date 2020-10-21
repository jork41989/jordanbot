module.exports = function(controller) {
  if (controller.adapter.name === 'Web Adapter') {

    controller.hears(['nyan cat'], 'message', (bot, message) => {
      bot.reply(message, {
          files: [
              {
                  url: 'https://media.giphy.com/media/Rm9RzjSAfXm4o/giphy.gif',
                  image: true
              }
          ]
      })
  })

  }
}