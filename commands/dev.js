const Discord = require("discord.js");

module.exports = {
    devonly: true,
    run: function (msg, args) {
        if (msg.author.id !== "576083686055739394") {
            return msg.channel.send("You look like a dev dude, succ a dicc plz");
        }
        
        switch (args[1]) {
            case "eval":
                return evaluate(msg, args.slice(2).join(" "));
            case "display":
                return display(msg, args.slice(2).join(" "));
        }
    }
};

async function evaluate (msg, str) {
    const em = new Discord.RichEmbed().setTitle("eval").addField("Code:", str);

    str = Discord.util.escapeMarkdown(str);
    
    try {
        let evaled = eval(str);
        while (typeof evaled.then === "function") {
            evaled = await evaled
        }
        const evaledText = typeof evaled === "string" ? evaled : require("util").inspect(evaled, {depth: 1});
        em.addField("Success", `\`\`\`js\n${evaledText}\n\`\`\``);
        em.setColor("00ff00");
    } catch (e) {
        em.addField("Error", `\`\`\`\n${e.stack}\n\`\`\``);
        em.setColor("ff0000");
    }
    
    return msg.channel.send({embed: em});
}

function display (msg, str) {

}
