const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  msg.content.replace('.', ':sadpotatoe:');
});

// client.on('messageReactionAdd', async (reaction, user) => {
//   if (reaction.partial) {
//     await reaction.fetch();
//   }

//   const { message } = reaction;

//   if (message.id === rulesMessageId) {
//     const member = message.channel.guild.members.cache.get(user.id);

//     if (reaction.emoji.id === emojiIds.HEAVEN) {
//       guildRoles.forEach((guildRole) => {
//         if (guildRole !== guildRoles.HEAVEN) {
//           member.roles.remove(guildRoles[i]);
//         }
//       });

//       member.roles.add(guildRoles.HEAVEN);
//     }
//   }
// });

client.login(config.token);
