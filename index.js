const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require("file-system");

module.exports = client;

const mapWhichFinnaBeAdb = new Map();

/*const commands = [
    {
        name: "%image [phrase] <`index`/random/first/last>", 
        description: "Searches for images in Google and displays the image on the given index. If none is given, the first one.",
        topic: "fun",
        example: {
            input: "%image doge random", 
            output: "*random picture of doge*"
        }
    },
    {
        name: "%silly [text]",
        description: "Makes text look randomly silly.",
        topic: "text",
        example: {
            input: "%silly This is an example.",
            output: "thIS ís  án  éxxáAmpplLée."
        }
    },
    {
        name: "%randomtext [length]",
        description: "Generates you random text.",
        topic: "text",
        example: {
            input: "%randomtext 30",
            output: "J omt. W qv uuv, cwwg. C slfr y. Zfdbgbas c x d."
        }
    },
    {
        name: "%leet [text]",
        description: '"Leetifies" a text - turns letters into numbers.',
        topic: "text",
        example: {
            input: "%leet This is an example.",
            output: "7h15 15 4n 3x4mp13."
        }
    },
    {
        name: "%derp [text]",
        description: '"Derpifies" a text - capitalizes every second letter.',
        topic: "text",
        example: {
            input: "%derp This is an example.",
            output: "tHiS Is aN ExAmPlE."
        }
    },
    {
        name: "%emojify [text]",
        description: "Turns letters into their emoji versions.",
        topic: "text",
        example: {
            input: "%emojify Omg hello this is an example",
            output: ":scream::black_large_square::wave::black_large_square::regional_indicator_t::regional_indicator_h::regional_indicator_i::regional_indicator_s::black_large_square::regional_indicator_i::regional_indicator_s::black_large_square::regional_indicator_a::regional_indicator_n::black_large_square::regional_indicator_e::regional_indicator_x::regional_indicator_a::regional_indicator_m::regional_indicator_p::regional_indicator_l::regional_indicator_e:"
        }
    },
    {
        name: "%emote [emote]",
        description: "Sends the picture of the given emote.",
        topic: "misc",
        example: {
            input: "%emote :ayy:",
            output: "*image of the given emote*"
        }
    },
    {
        name: "%slice [fruit name]",
        description: "Slices a fruit for the fruit ninja feature.",
        topic: "fruit ninja",
        example: {
            input: "%slice apple",
            output: "You sliced the apple, take 20 coins."
        }
    },
    {
        name: "%randomcaps [text]",
        description: "Capitalizes random letters in the given text.",
        topic: "text",
        example: {
            input: "%randomcaps This is an example.",
            output: "THIs iS AN exAmPLE."
        }
    },
    {
        name: "%leak <user>",
        description: "Simulates leaking fake funny information from the given user.",
        topic: "fun",
        example: {
            input: "%leak @Doge#5999",
            output: "> Hacking Doge#5999\n\n> Login data found (on a public site):\n>     Email address: \n>         doge@pornhub.com\n>     Password: \n>         69\n\n> Discord messages data found:\n>     Most used word(s): \n>         2 inches\n>     Latest message in DMs (with Meö):\n>         No, mine is 2 inches\n>     Latest message on servers:\n >         Fuck you all AHHHHAHAHA\n\n> Finished hacking Doge#5999"
        }
    },
    {
        name: "%challenge [user]",
        description: "Challenges an user to a fight!",
        topic: "fight"
    },
    {
        name: "%accept [user]",
        description: "Accepts an user's request to a fight!",
        topic: "fight"
    },
    {
        name: "%balance <user>",
        description: "Shows your, or the given user's balance.",
        topic: "fun",
        example: {
            input: "%balance",
            output: "Meö, your balance is 6969"
        }
    },
    {
        name: "%weeb [text]",
        description: "Makes text look like it's written by a weeb.",
        topic: "text",
        example: {
            input: "%weeb This is an example.",
            output: "T-This i-is a-an example. ᵘʷᵘ"
        }
    },
    {
        name: "%roll <user>",
        description: "You and your challenged user roll a dice, and whom rolled a higher amount wins the 2 rolls added together.",
        topic: "fun"
    },
    {
        name: "%count [expression]",
        description: "Counts the given mathematical expression.",
        topic: "fun",
        example: {
            input: "%count 6 + 9 + 6 * 9",
            output: "6 + 9 + 6 * 9 = 69"
        }
    },
    {
        name: "%random <min> [max]",
        description: "Returns a random number between min and max.",
        topic: "fun",
        example: {
            input: "%random 69 420",
            output: "361"
        }
    },
    {
        name: "%randomuser",
        description: "Gives basic info about a random user in the server.",
        topic: "fun"
    },
    {
        name: "%userinfo <user>",
        description: "Gives info about the given user, or yourself.",
        topic: "fun"
    },
    {
        name: "%serverinfo",
        description: "Gives basic info about the server",
        topic: "fun"
    },
    {
        name: "%cmd [text]",
        description: "Gives a cool cmd prompt effect to the given text.",
        topic: "fun"
    },
    {
        name: "%commit [suicide/genocide] <name>",
        description: '**Suicide**:\nWrites "rip" in the chat.\n\n**Genocide**:\n"Kills" everyone in the server whose name includes the given text.',
        topic: "fun"
    },
    {
        name: "%doge [text]",
        description: '"Dogeifies" text - writes `so, very, such, much` before each adjective.',
        topic: "text",
        example: {
            input: "%doge This command is cool and good. Also, this server is amazing, great job Meö",
            output: "Wow. This command is very cool and much good. Also, this server is so amazing, very great job Meö"
        }
    },
    {
        name: "%choose [options (split by a comma)]",
        description: "Chooses a random option.",
        topic: "fun",
        example: {
            input: "%choose example1,example2,example69",
            output: "I choose example69"
        }
    },
    {
        name: "%age [yyyy-mm-dd or yyyy/mm/dd]",
        description: "Calculates your age.",
        topic: "fun",
        example: {
            input: "%age 1969/6/9",
            output: "Your age is " + (new Date().getFullYear() - new Date("1969/6/9").getFullYear())
        }
    },
    {
        name: "%cancer [font] [text]",
        description: "Makes text look cancerous, unreadable.",
        topic: "text",
        example: {
            input: "%cancer handwriting This is an example.",
            output: "𝓽𝓱𝓲𝓼 𝓲𝓼 𝓪𝓷 𝓮𝔁𝓪𝓶𝓹𝓵𝓮."
        }
    },
    {
        name: "%discriminator <user>",
        description: "Does **funny** math to your or the given user's discriminator.",
        topic: "fun",
        example: {
            input: "%discriminator @Doge#5999",
            output: "5999 - 5999 = 0 + 6969 = 6969 = Doge#6969 LMAO"
        }
    }
];*/

const file = require("./userinfo.json");
const botconfig = require("./botconfig.json");

const fruitNinja = require("./features/fruitNinja.js");
const rpg = require("./features/rpg.js");
const ai = require("./features/AI.js");
const cmds = require("./commands.js");

const PREFIX = '%';

const dogeChannels = [];

client.on('ready', () => {
    console.log("I'm online :D");

    client.user.setPresence({
        game: {name: "in " + client.guilds.size + " servers", type: 3},
        status: "online"
    });
    
    client.guilds.array().forEach(function (g, index) {
        let wb;
        g.fetchWebhooks().then(wbs => {
            if (wbs.find(wbF => wbF.name === "Doge")) {
                wb = wbs.find(wbF => wbF.name === "Doge").id;
            }
        });

        if (wb) {
            dogeChannels[g.id] = wb;
        }
    });
    
    client.guilds.array().forEach(function(g){
        g.members.array().forEach(function(m){
            if (!file[m.user.id]) {
                file[m.user.id] = new Proxy({
                    bal: 1000, 
                    rpg: new rpg.Rpg()
                }, {
                    set: function(obj, prop, val) {
                        obj[prop] = val;
                        
                        mapWhichFinnaBeAdb.set(prop, val);
                        
                        return true;
                    }
                });
                file[m.user.id].rpg.setUp(m.user);
            }
        });
    });

    cmds.setUp(client, dogeChannels);
    fruitNinja.setUp(client, dogeChannels);
    rpg.setUp(client, dogeChannels);
    ai.setUp(client);
});

client.on("guildMemberAdd", m => {
    const g = m.guild;
    const cat = g.channels.find(gc => gc.type === "category" && gc.name === "server count");

    if (!cat) {
        return;
    } 

    cat.children.array().forEach(c => {
        if (m.user.bot) {
            if (c.name.includes("Bots: ")) {
                c.edit({name: "Bots: " + (parseInt(c.name) + 1)});
            }
        } else {
            if (c.name.includes("Users: ")) {
                c.edit({name: "Users: " + (parseInt(c.name) + 1)});
            }
        }
        if (c.name.includes("Members: ")) {
            c.edit({name: "Members: " + (parseInt(c.name) + 1)});
        }
    });
});

client.on("guildMemberRemove", m => {
    const g = m.guild;
    const cat = g.channels.find(gc => gc.type === "category" && gc.name === "server count");

    if (!cat) {
        return;
    } 

    cat.children.array().forEach(c => {
        if (m.user.bot) {
            if (c.name.includes("Bots: ")) {
                c.edit({name: "Bots: " + (parseInt(c.name, 10) - 1)});
            }
        } else {
            if (c.name.includes("Users: ")) {
                c.edit({name: "Users: " + (parseInt(c.name, 10) - 1)});
            }
        }
        if (c.name.includes("Members: ")) {
            c.edit({name: "Members: " + (parseInt(c.name, 10) - 1)});
        } 
    });
});

client.on("guildCreate", guild => {
    const tyFAC = guild.channels.find(n => n.name === "general");

    if (tyFAC) {
        tyFAC.send("**Le dead meme Discord bot has arrived!**\nMy prefix is `%`. Type `%help` for some general info and commands. If you'd like to get a better experience with the bot, create a webhook called `Doge` in " + guild.name);
    }
});

client.on('message', async (msg) => {
    if (!msg.guild) {
        return false;
    }
    if (msg.author.bot && msg.author.id !== client.user.id) {
        return false;
    }
    if (msg.content.charAt(0) !== "%") {
        return false;
    }

    let args = msg.content.substring("%".length).split(" ");
    
    await cmds[args[0].toLowerCase()](msg, args, args.slice(1, args.length).join(" "), commands);

    try {
        runCommand[args[0].toLowerCase()](msg, args, args.slice(1, args.length).join(" "), commands);
    } catch (err) {
        console.log(msg.author.tag + " is gay");
    }
});

function runCommand (msg, args, cont) {
    //later lol
}

client.login(process.env.BOT_TOKEN);
