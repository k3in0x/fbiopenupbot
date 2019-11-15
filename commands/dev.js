const Discord = require("discord.js");

module.exports = {
    devonly: true,
    run: function (msg, args) {
        if (msg.author.id !== "576083686055739394") {
            return msg.channel.send("You look like a dev dude, succ a dicc plz");
        }
        
        switch (args[1]) {
            case "eval":
                evaluate(msg, args.slice(1).join(""));
            break;
        }
    }
};

async function evaluate (msg, str) {
    const em = new Discord.RichEmbed().setTitle("eval").addField("Code:", str);
    
    try {
        let evaled = eval(str);
        evaled = typeof evaled.then === "function" ? await evaled : evaled;
        const evaledText = typeof evaled === "string" ? evaled : require("util").inspect(evaled, {depth: 1});
        em.addField("Success", `\`\`\`js\n${evaledText}\n\`\`\``);
    } catch (e) {
        em.addField("Error", `\`\`\`\n${e.stack}\n\`\`\``);
    }
    
    return msg.channel.send({embed: em});
}
