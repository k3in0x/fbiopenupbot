module.exports = {
    name: "leet",
    description: "\"Leetifies\" text: replaces letters with numbers.",
    usage: "%leet [text]",
    example: {
        input: "%leet isekebot is the best",
        output: "153k3507 15 7h3 5357"
    },
    
    run: function (msg, args, txt) {
        if (!txt) {
            txt = "You need to give text";
        }

        let textToArr = txt.split("");
        let finArr = "";

        textToArr.forEach(function(va, index) {
            const v = va.toLowerCase();

            if (v === "i" || v === "l") {
                finArr += "1";
                return;
            }
            if (v === "o") {
                finArr += "0";
                return;
            }
            if (v === "e") {
                finArr += "3";
                return;
            }
            if (va === "G") {
                finArr += "6";
                return;
            }
            if (v === "g") {
                finArr += "9";
                return;
            }
            if (v === "s") {
                finArr += "5";
                return;
            }
            if (v === "z") {
                finArr += "2";
                return;
            } 
            if (v === "t") {
                finArr += "7";
                return;
            }
            if (value === "B") {
                finArr += "8";
                return;
            }
            if (v === "b") {
                finArr += "5";
                return;
            }
            if (v === "a") {
                finArr += "4";
                return;
            }
            finArr += (value);
        });

        return msg.channel.send(finArr);
    }
};
