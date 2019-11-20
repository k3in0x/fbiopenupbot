const Discord = require("discord.js");

module.exports = {
    name: "slots", 
    description: "Slots with emojis", 
    type: "fun", 
    usage: "%slots [emoji * >=6]",
    
    run: (msg, args) => {
        let emojis = [];

        if (!args[1]) return msg.channel.send("You need to give at least 6 Unicode emojis to play slots!");

        args.shift();
        args.forEach(v => {
            if (/[^\u0000-\u00ff]/.test(v)) emojis.push(v);
        });

        if (emojis.length < 6) return msg.channel.send("You need to give at least 6 Unicode emojis to play slots!");

        emojis = Array.from(new Set(emojis)).filter((_, i) => i <= 10);

        const rng1 = Math.floor(Math.random() * emojis.length);
        const rng2 = Math.floor(Math.random() * emojis.length);
        const rng3 = Math.floor(Math.random() * emojis.length);
        let choice1;
        let choice2;
        let choice3;

        const beginEm = new Discord.RichEmbed()
        .setTitle(msg.author.username + "'s slots")
        .setDescription("`" + emojis[0] + "` `" + emojis[0] + "` `" + emojis[0] + "`");

        msg.channel.send({embed: beginEm}).then(mesg => {
            let i = 0;
            const interval = setInterval(() => {
                if (i >= emojis.length) return clearInterval(interval);

                if (rng1 === i) choice1 = emojis[i];
                if (rng2 === i) choice2 = emojis[i];
                if (rng3 === i) choice3 = emojis[i];

                const em1 = (choice1 ? choice1 : emojis[i]);
                const em2 = (choice2 ? choice2 : emojis[i]);
                const em3 = (choice3 ? choice3 : emojis[i]);

                const contEm = new Discord.RichEmbed()
                .setTitle(msg.author.username + "'s slots")
                .setDescription("`" + em1 + "` `" + em2 + "` `" + em3 + "`");

                const finEm = new Discord.RichEmbed()
                .setTitle(msg.author.username + "'s slots")
                .setDescription("`" + choice1 + "` `" + choice2 + "` `" + choice3 + "`");
   
                if (Object.values(countValues([choice1, choice2, choice3])).max() !== 1) {
                    finEm.addField("Win!", "You got " + Object.values(countValues([choice1, choice2, choice3])).max() + " of the same emojis!");
                    finEm.setColor(0x00ff00);
                } else {
                    finEm.addField("Loss!", "Imagine losing your own game");
                    finEm.setColor(0xff0000);
                    console.log(Object.values(countValues([choice1, choice2, choice3])).max());
                }

                if (i === emojis.length - 1) {
                    mesg.edit({embed: finEm});
                } else {
                    mesg.edit({embed: contEm});
                }

                i++;
            }, 1000);
        });
    }
};

function countValues (arr) {
    const map = new Map();
    const obj = {};

    arr.forEach(val => {
        map.set(val, map.get(val) ? map.get(val) +1 : 1);
        obj[val] = map.get(val);
    });

    return obj;
}

Array.prototype.max = function () {
    return Math.max.apply(null, this.map(Number));
};
