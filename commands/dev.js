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

    str = Discord.escapeMarkdown(str);
    
    try {
        let evaledText = "";
        console.log = l => {
            evaledText += l + "\n";
        };
        let evaled = eval(str);
        while (typeof evaled.then === "function") {
            evaled = await evaled
        }
        evaledText += typeof evaled === "string" ? evaled : require("util").inspect(evaled, {depth: 1});
        em.addField("Success", `\`\`\`js\n${evaledText}\n\`\`\``);
        em.setColor("00ff00");
    } catch (e) {
        em.addField("Error", `\`\`\`\n${e.stack}\n\`\`\``);
        em.setColor("ff0000");
    }
    
    return msg.channel.send({embed: em});
}

asnyc function display (msg, str) {
    str = Discord.escapeMarkdown(str);

    try {
        let evaled = eval(str);
        while (typeof evaled.then === "function") {
            evaled = await evaled;
        }
        let output = [...Discord.splitMessage(recursiveTextify(evaled)]);
        output.map(message.channel.send);
    } catch (e) {
        return msg.channel.send(e.stack);
    } 
}

function recursiveTextify (e) {
    return Object.keys(e).map((key, index) => [key, (["string", "boolean", undefined, "number"].includes(typeof Object.values(e)[index]) ? Object.values(e)[index] : recursiveTextify(Object.values(e)[index]))].join(":\n")).join("\n\n");
}
