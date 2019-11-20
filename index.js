const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = client;

const prefix = '%';

client.on('ready', () => {
    console.log("I'm online :D");

    const presences = ["%help", "in " + client.guilds.size + " servers"];
    
    setInterval(() => {
        client.user.setPresence({
            game: {
                name: presences[Math.floor(Math.random() * presences.length)],
                type: Math.floor(Math.random() * 4)
            },
            status: "online"
        });
    }, 30 * 60 * 1000);
});

client.on('message', async (msg) => {
    if (!msg.guild || msg.content.charAt(0) !== "%" || (msg.author.bot && msg.author.id !== client.user.id)) {
        return;
    }

    const args = msg.content.substring("%".length).split(" ");
    
    try {
        if (args[0].toLowerCase() === "help") {
            await helpCmd(msg);
            return;
        }
        
        require("./commands/" + args[0].toLowerCase() + ".js").run(msg, args, args.slice(1, args.length).join(" "), client);
    } catch (err) {
        if (!(typeof err === "Error" && `${err.stack}`.includes("find module"))) {
            if (msg.author.id !== "576083686055739394") msg.channel.send("Sorry, there was an error running that command. The shitty dev is notified!");
            (await client.fetchUser("576083686055739394")).send("There was an error running\n```" + msg.content + "```\nran by **" + msg.author.tag + "**:\n```" + err.stack + "```");
        }
    }
});

async function helpCmd (msg) {
    const readdir = require("util").promisify(require("fs").readdir);
    
    const cmds = (await readdir("./commands")).map(f => require("./commands/" + f)).filter(c => !c.devonly);
    
    await new Promise(r => setTimeout(r, 100));
    
    const textCmds = cmds.filter(c => c.type === "text");
    const utilCmds = cmds.filter(c => c.type === "util");
    const funCmds = cmds.filter(c => c.type === "fun");
    
    const em = new Discord.RichEmbed()
    .setTitle("Help")
    .addField("Text commands", "\u200b")
    .setFooter("[] - required\n<> - optional")
    .setColor("RANDOM");
    
    textCmds.forEach(c => {
        em.addField(c.name[0].toUpperCase() + c.name.substring(1), "Usage: `" + c.usage + "`\n\nDescription: " + c.description + (c.example ? "\n\nExample:\nInput: `" + c.example.input + "`\nOutput: `" + c.example.output + "`": ""));
    });
    
    em.addBlankField()
    .addField("Util commands", "\u200b");
    
    utilCmds.forEach(c => {
        em.addField(c.name[0].toUpperCase() + c.name.substring(1), "Usage: `" + c.usage + "`\n\nDescription: " + c.description + (c.example ? "\n\nExample:\nInput: `" + c.example.input + "`\nOutput: `" + c.example.output + "`": ""));
    });
    
    em.addBlankField()
    .addField("Fun commands", "\u200b");
        
    funCmds.forEach(c => {
        em.addField(c.name[0].toUpperCase() + c.name.substring(1), "Usage: `" + c.usage + "`\n\nDescription: " + c.description + (c.example ? "\n\nExample:\nInput: `" + c.example.input + "`\nOutput: `" + c.example.output + "`": ""));
    });

    em.addBlankField();
    
    msg.channel.send({embed: em});
}
 
client.login(process.env.BOT_TOKEN);
