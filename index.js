const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = client;

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

const PREFIX = '%';

client.on('ready', () => {
    console.log("I'm online :D");

    const presences = ["%help", "in " + client.guilds.size + " servers"];
    
    setInterval(() => {
        client.user.setPresence({
            game: {name: presences[Math.floor(Math.random() * presences.length)], type: 3},
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
        if (!(typeof err === "Error" && `${err}`.includes("Cannot find module"))) {
            if (msg.author.id !== "576083686055739394") msg.channel.send("Sorry, there was an error running that command. The shitty dev is notified!");
            (await client.fetchUser("576083686055739394")).send("There was an error running\n```" + msg.content + "```\nran by **" + msg.author.tag + "**:\n```" + err.stack + "```");
        }
    }
});

async function helpCmd (msg) {
    const fs = require("fs");
    
    let cmds;
    await fs.readdir("./commands", async (_, files) => {
        await files;
        cmds = files.map(f => require("./commands/" + f)).filter(c => !c.devonly);
    });
    
    const textCmds = cmds.filter(c => c.type === "text");
    const utilCmds = cmds.filter(c => c.type === "util");
    const funCmds = cmds.filter(c => c.type === "fun");
    
    const em = new Discord.RichEmbed()
    .setTitle("Help")
    .addField("Text commands", "\u200b")
    .addBlankField()
    .setFooter("[] - required\n<> - optional");
    
    textCmds.forEach(c => {
        em.addField(c.name, "Usage: " + c.usage + "\nDescription: " + c.description + (c.example ? "\nExample:\nInput: `" + c.example.input + "`\n`Output: " + c.example.output + "`": ""));
    });
    
    em.addField("Util commands", "\u200b")
    .addBlankField();
    
    utilCmds.forEach(c => {
        em.addField(c.name, "Usage: " + c.usage + "\nDescription: " + c.description + (c.example ? "\nExample:\nInput: `" + c.example.input + "`\n`Output: " + c.example.output + "`": ""));
    });
    
    em.addField("Fun commands", "\u200b")
    .addBlankField();
        
    funCmds.forEach(c => {
        em.addField(c.name, "Usage: " + c.usage + "\nDescription: " + c.description + (c.example ? "\nExample:\nInput: `" + c.example.input + "`\n`Output: " + c.example.output + "`": ""));
    });
}
 
client.login(process.env.BOT_TOKEN);
