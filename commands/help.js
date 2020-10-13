var Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setTitle(client.user.username+" COMMANDS")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor(0x03254c)
        .addFields(
          { name: '**join:**', value: 'The bot joins on the voice channel.'},
          { name: '**play:**', value: 'The bot automatically joins the voice channel and plays the "FBI Open Up" sound at 100% volume.'},
          { name: '**leave:**', value: 'The bot leaves the voice channel.'},
        )
        .setFooter(client.user.username, client.user.displayAvatarURL());
        message.reply("Sended to DM").then(d_msg => { d_msg.delete({timeout: 3000}); });
        message.delete({timeout: 2000});
        message.author.send(embed);

}

module.exports.config = {
    command: "help"
}