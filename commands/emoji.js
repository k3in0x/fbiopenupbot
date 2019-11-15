module.exports = {
    name: "emoji",
    description: "Gives the image version of a given custom emoji",
    type: "util",
    usage: "%emoji [emoji]",
    
    run: function(msg, args) {
        const emoji = args[1];
        const emojiID = args[1].split(":");

        if (!emojiID[2] && msg.author.id !== "576083686055739394") {
            return msg.channel.send("You didn't give an emote!");
        } 

        emojiID = emojiID[2].slice(0, 18);
        if (isNaN(Number(emojiID)) && msg.author.id !== "576083686055739394") {
            return msg.channel.send("You didn't give an emote!");
        }

        let url = "https://cdn.discordapp.com/emojis/" + emojiID + ".png";

        return msg.channel.send({file: url}).catch(err => {
            if (err) {
                url = "https://cdn.discordapp.com/emojis/" + emojiID + ".jpg";

                msg.channel.send({file: url}).catch(err => {
                    if (err) {
                        url = "https://cdn.discordapp.com/emojis/" + emojiID + ".jpeg";

                        msg.channel.send({file: url});
                    }
                });
            } 
        });
    }
};
