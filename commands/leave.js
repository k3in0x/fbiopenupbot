const channelvoice = 'You must first enter the voice channel!';

module.exports.run = async (client, message, args) => {

    message.guild.me.voice.channel.leave();
    await message.delete({timeout: 2000});

}

module.exports.config = {
    command: "kun"
}