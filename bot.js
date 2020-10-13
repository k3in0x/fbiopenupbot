// K3IN0X TROLL BOT, USED TO JOIN FBI BOTS TO ANY VOICE CHANNEL.
var Discord = require('discord.js');
var client = new Discord.Client();
var fs = require('fs');
//var embed = new Discord.MessageEmbed()

client.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
      if(err) console.error(err);
      
      var jsfiles = files.filter(f => f.split('.').pop() === 'js');
      if (jsfiles.length <= 0) { return console.log('No commands found...')}
      else { console.log(jsfiles.length + ' commands found.') }
      
      jsfiles.forEach((f, i) => {
        var cmds = require(`./commands/${f}`);
        console.log(`Command ${f} loading...`);
        client.commands.set(cmds.config.command, cmds);
      })
})

/*CUSTOM PREFIX (default == "fbi ")
db.fetchObject(`guildPrefix_${message.guild.id}`).then(i => {
  let prefix;
  if (i.text){
      prefix = i.text
  } else{
      prefix = 'fbi '
  }
})*/

client.on('ready', () => {
    console.log('FBI BOT ENABLED\n   _______  ____\n  / __/ _ )/  _/\n / _// _  |/ /  \n/_/ /____/___/  ');                 

    client.user.setActivity("fbi help & f!help", {type: "LISTENING"})

});

//const channelvoice = 'You must first enter the voice channel!';


client.on('message', async message =>{

    var sender = message.author;
    var msg = message.content.toUpperCase();
    var prefix = 'fbi '
    var cont = message.content.slice(prefix.length).split(/ +/);
    var args = cont.slice(1);

    if(!message.content.startsWith(prefix)) return;

    var cmd = client.commands.get(cont[0])
    if (cmd) cmd.run(client, message, args);


    /*//if(!message.member.roles.cache.has('743966032712171632')) return message.author.send('NO PUEDES CRACK!')

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();*/
});

client.login(process.env.token);
//TOKEN HAS BEEN ENCRYPTED :)
