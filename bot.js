// K3IN0X TROLL BOT, USED TO JOIN FBI BOTS TO ANY VOICE CHANNEL.

const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'fbi ';

const fs = require('fs');

client.on('ready', () => {
    console.log('FBI está escuchando...');

    client.user.setActivity("conversations", {type: "LISTENING"})

});

const channelvoice = 'You must first enter the voice channel!';

client.on('message', async message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    //if(!message.member.roles.cache.has('743966032712171632')) return message.author.send('NO PUEDES CRACK!')

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'play'){
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play('./audio/fbi.mp3', {
                volume: 1,
              });
            await message.delete();
          } else {
            message.reply(channelvoice);
          }
    };

    if(command === 'juan'){
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play('./audio/juan.mp3', {
                volume: 1,
              });
            await message.delete();
          } else {
            message.reply(channelvoice);
          }
    };

    if(command === 'kun'){
      if (message.member.voice.channel) {
          const connection = await message.member.voice.channel.join();
          const dispatcher = connection.play('./audio/kun.mp3', {
              volume: 1,
            });
          await message.delete();
        } else {
          message.reply(channelvoice);
        }
  };

    if(command === 'leave'){
        message.guild.me.voice.channel.leave();
        await message.delete();
    };
});

client.login(process.env.token);
//TOKEN HAS BEEN ENCRYPTED :)
