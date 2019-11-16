module.exports = {
    run: function(msg){
        const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
        const randomUser = () => random(msg.guild.members).user;
    
        const user = (msg.mentions.users.first() ? msg.mentions.users.first() : msg.author);
    
        const randomDM = random(["Yea, 4 hotdogs can fit in my bum", "Oooo nice nudes", "No, mine is 2 inches", "Oh my god sameeeeee 😱😱😱😂😂😂👍👍👍", "Thanks mom"]);
        const randomServer = random(["Fuck you all AHHHHAHAHA", "Oh my god sameeeeee 😱😱😱😂😂😂👍👍👍", (user.id !== msg.author.id ? msg.author.username + "'s nudes.png" : randomUser().username + "'s nudes.png")]);
        const randomUsed = random(["2 inches", "small size"]);
        const randomEmail = random([usernameForm(user.username) + "@pornhub.com", usernameForm(user.username) + "IsHorny@gmail.com", "notAvirgin@msn.com", usernameFrom(user.username) + "@animators.hentaiheaven.org"]);
        const randomPassword = random(["123456789", "69", "password123", "incorrect"]);
    
        let currentState = 1;

        let message = "```css\n> Hacking " + user.tag + "```";
    
        msg.channel.send(message).then(mesg => {
            setInterval(function() {
                if (currentState % 2 === 0 && currentState < 7) {
                    msg.edit("```> ...```");
                    currentState++;
                    return;
                }
                switch (currentState) {
                    case 3:
                        message = message.slice(0, message.length - 3);
                        message += "\n\n> Login data found (on a public site):\n>     Email address: \n>         " + randomEmail + "\n>     Password: \n>         " + randomPassword + "```";
                        mesg.edit(message);
                        break;
                    case 5:
                        message = message.slice(0, message.length - 3);
                        message += "\n\n> Discord messages data found:\n>     Most used word(s): \n>         " + randomUsed + "\n>     Latest message in DMs (with " + randomUser().username + "):\n>         " + randomDM + "\n>     Latest message on servers: \n>         " + randomServer + "```";
                        mesg.edit(message);
                        break;
                    case 7:
                        message = message.slice(0, message.length - 3);
                        message += "\n\n> Finished hacking " + user.tag + "```";
                        mesg.edit(message);
                        break;
                }
                currentState++;
            }, 1200);
        });
    }
};

function usernameForm (str) {
    return str.toLowerCase().replace(" ", "_");
}
