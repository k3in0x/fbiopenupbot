module.exports = {
    name: "derp",
    description: "Capitalizes every second letter in the given text.",
    usage: "%derp [text]",
    type: "text",
    example: {
        input: "%derp 1s3k3b0t is the best",
        output: "1S3K3B0T iS tHe BeSt"
    },
    
    run: function (msg, args, text) {
        if (!text) {
            text = "You need to give text";
        }

        const textToArr = text.split("");
        let finArr = [];

        textToArr.forEach(function(value, index) {
            if (index % 2 === 0) {
                finArr.push(value.toLowerCase());
            } else {
                finArr.push(value.toUpperCase());
            }
        });

        return msg.channel.send(finArr.join(""));
    }
};
