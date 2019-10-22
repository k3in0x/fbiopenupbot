module.exports = {
    run: weeb = function (msg, args, text) {
    	if (!text) {
        	return msg.channel.send("Much confusion OWO");
   		}

    	let textToArr = text.split(" ");
    	let finArr = "";

    	textToArr.forEach(function(value, index) {
        	let sent = false;

       	 	if (value.toLowerCase() === "sorry") {
            	if (Math.random() < 0.6) {
                	finArr += s-sowwwy";
            	} else {
                	finArr += "sowwwy θωθ";
            	}

            	sent = true;
        	}
        	if (value.toLowerCase() === "love" || value.toLowerCase() === "luv") {
            	if (Math.random() < 0.6) {
                	finArr += "w-wuw";
           		} else {
                	finArr += "wuww θωθ";
            	}

            	sent = true;
        	}

        	if (!sent) {
            	if (Math.random() < 0.4) {
                	finArr += value.charAt(0) + "-" + value;
           		} else {
                	finArr += value;
            	}
       		} 
        	if (Math.random() < 0.4) {
            	finArr += "ᵘʷᵘ";
        	}
    	});

    	msg.channel.send(finArr);
	}
}
