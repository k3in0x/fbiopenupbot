const Discord = require("discord.js");

module.exports = {
    name: "randomuser",
    description: "Gives general info about a random user in the server.",
    type: "util",
    usage: "%randomuser <settings<bot:false|me:false>>",

    run: function (msg, args) {
        const g = msg.guild;
        const mm = g.members.filter(m => (msg.content.toLowerCase().includes("bot:false") ? !m.user.bot : (msg.content.toLowerCase().includes("me:false") ? m.user.id !== msg.author.id : true))).random();
        const m = mm.user;
        const userroles = [];
        const userrolesobj = [];
        const usercolor = mm.highestRole.hexColor;

        mm.roles.array().forEach(function(value) {
            if (value.name === "@everyone") {
                return;
            }

            userroles.push(value.name);
            userrolesobj.push(value)
        });

        if (!userroles) {
            usercolor = "00ff00";
        }
        
        if (mm.highestRole.hexColor === "GREY" && userroles[userroles.length - 2]) {
            usercolor = userrolesobj[userrolesobj.length - 2].hexColor;
        }
        
        console.log(userroles);

        const em = new Discord.RichEmbed() 
        .setTitle("Random user") 
        .setThumbnail(m.avatarURL)
        .addField("Username:", m.tag)
        .addField("ID:", m.id)
        .addBlankField()
        .addField("Nickname:", (mm.nickname ? mm.nickname : "none"))
        .addField("Roles:", (userroles.join(", ") ? userroles.join(", ") : "none"))
        .setColor(usercolor)
        .setFooter("Requested by " + msg.author.tag);

        const desc = [];

        if (m.bot) {
            desc.push("This user is a bot. You can turn off getting bots by saying `bot:false` as an argument in the command");
        }
        if (m.id === msg.author.id) {
            desc.push("Hey, that's you! You can turn off getting yourself by saying `me:false` as an argument in the command");
        }

        if (desc[0]) {
            em.setDescription(desc.join("\n"));
        }

        return msg.channel.send({embed: em});
    }
};
