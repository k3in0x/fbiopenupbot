const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = client;

client.on('ready', () => {
    console.log("I'm online :D");

    const presences = ["| el dinerito fresco", "in " + client.guilds.size + "servers"];
    
    setInterval(() => {
        client.user.setPresence({
            game: {
                name: presences[Math.floor(Math.random() * presences.length)],
                type: Math.floor(Math.random() * 4)
            },
            status: "idle"
        });
    }, 30 * 60 * 1000);
});

client.login(process.env.BOT_TOKEN);
