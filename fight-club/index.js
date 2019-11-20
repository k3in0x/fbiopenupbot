// my secret selfbot, if you're here, don't tell Discord thx

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("psst");
});

client.on("message", msg => {
    if (!msg.guild || msg.author.bot || !msg.content.startsWith("!")) return;

    const args = msg.content.substring(1).split(" ");
    const cmd = args.shift().toLowerCase();

    switch (cmd) {
        case "eval":
            evaluate(msg, args.join(" "));
        break;
    }
});

async function evaluate (msg, str) {
    if (["process", "client", "msg", "message", "guild", "leave()"].some(s => msg.content.includes(s))) return msg.channel.send("no");

    try {
        let e = eval(str);
        while (typeof e.then === "function") {
            e = await e;
        }
        msg.channel.send(textify(e));
    } catch (e) {
        msg.channel.send("```\n" + e + "\n```");
    }
}

function textify (obj) {
    return;
}
