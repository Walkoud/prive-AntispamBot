var config = require("./config.json")
const fs = require("fs")
const ms  = require("ms")
const randomColor = require("randomcolor");
const Discord = require("discord.js");
const client = new Discord.Client();


client.login(process.env.TOKEN)

client.on("ready", () => {
    console.log(`frais et dispo`);
});

async function roleChange(){
  try{
    let guild = client.guilds.first()
      config.roles.forEach(r =>{
        var rColor = randomColor();
        guild.roles.get(r).edit({color: rColor})
      })
  }catch(e){
    if(e == "TypeError: Cannot read property 'roles' of undefined" || e == "TypeError: Cannot read property 'edit' of undefined") return
    else{
      console.log(e)
    }
  }
}

let delay = config.delay
var main = setInterval(roleChange, ms(delay))


client.on("message", async message => {
    config = JSON.parse(fs.readFileSync("./config.json", "utf8"))
    if(message.content.startsWith(config.prefix) && message.guild.member(message.author).hasPermission("ADMINISTRATOR")){
      const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      let nRole = message.mentions.roles.first()
      if(!nRole) nRole = NaN

      if(command == "roles"){

        if(args[0] == "add"){
          config.roles.push(nRole.id)
          message.channel.send(`Role added`)
        }
        else if(args[0] == "list"){
          let roles = new Array();
          config.roles.forEach(r =>{
            roles.push(message.guild.roles.get(r))
          })
          message.channel.send("Roles: "+roles)
        }
        else if(args[0] == "remove"){
          const index = config.roles.indexOf(nRole.id);
          config.roles.splice(index, 1);
          message.channel.send(`Role Removed`)
        }
        else if(!args[0]){
          message.channel.send(`Args: <add, list, remove> @role`)
        }else{
          message.channel.send(`Args: <add, list, remove> @role`)
        }
      }

      if(command  == "delay"){
        if(!args[0]){
          message.channel.send("Delay: ' "+ config.delay +" '")
        }else{
        config.delay = args[0]
        delay = args[0]
        }
      }
      if(command == "prefix"){
        if(!args[0]){
          message.channel.send("Prefix: ' "+ config.prefix +" '")
        }
        else{
          config.prefix = args[0]
        }
      }
      if(command == "delay" || command == "roles"){
        clearInterval(main)
        main = setInterval(roleChange, ms(delay))
      }
      fs.writeFile("./config.json", JSON.stringify(config), (err) => {
        if(err)return console.error(err)
      });
    }
});
