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
    const em = new Discord.RichEmbed()
    .setTitle("eval")
    .addField("Code:", "```" + str + "```");

    str = str.replace("```", "");
    
    try {
        let evaledText = "";
        const consolelog = console.log;
        console.log = l => {
            evaledText += l + "\n";
        };
        let evaled = eval(str);
        console.log = consolelog;
        while (typeof evaled.then === "function") {
            evaled = await evaled;
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

async function display (msg, str) {
    str = Discord.escapeMarkdown(str);

    try {
        let evaled = eval(str);
        while (typeof evaled.then === "function") {
            evaled = await evaled;
        }
        const output = splitMessage(recursiveTextify(evaled).map(prop => prop.join(":\n")).join("\n\n"));
        output.map(msg.channel.send);
    } catch (e) {
        return msg.channel.send(e.stack);
    } 
}

function recursiveTextify (e) {
    return Object.keys(e).map((key, index) => [key, (["string", "boolean", undefined, "number"].includes(typeof Object.values(e)[index]) ? Object.values(e)[index] : textify(Object.values(e)[index]))]);
}

function textify (obj) {
    if (obj instanceof Map || obj instanceof Discord.Collection) {
        const values = [];

        for (const [key, val] of obj.entries()) {
            values.push([key, (typeof val === "object" ? textify(val) : val)]);
        }

        obj = values;
    }

    if (obj instanceof Object) {
        const values = Object.values(obj);
        const keys = Object.keys(obj);

        obj = keys.map((key, index) => [key, (typeof values[index] === "object" ? textify(values[index]) : values[index])]);
    }

    return obj;
}

function splitMessage (str) {
    const arr = [""];

    for (let i = 0; i < str.length; i++) {
        if (arr.length !== Math.floor(i / 1950)) {
            arr.push("");
        }
        arr[arr.length - 1] += str[i];
    }

    return arr;
}
