module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    // async execute(message, args, Discord, client) {
    async execute(message, args, cmd, client, Discord) {
        const channel = 'YOUR_CHANNEL';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "YOUR_ROLE");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "YOUR_ROLE");
 
        const yellowTeamEmoji = 'YOUR_EMOJI';
        const blueTeamEmoji = 'YOUR_EMOJI';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose a team to play on!')
            .setDescription('Choosing a team will allow you to interact with your teammates!\n\n'
                + `${yellowTeamEmoji} for yellow team\n`
                + `${blueTeamEmoji} for blue team`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
            } else {
                return;
            }
        });
    }
}
    
// module.exports = {
//     name: 'reactionrole',
//     description: 'Sets up a reaction role message.',
//     async execute(client, message, args, Discord) {
//         const channel = '850167000852201502';
//         const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Yellow Team");
//         const redTeamRole = message.guild.roles.cache.find(role => role.name === "Red Team");

//         const yellowTeamEmoji = '🍋';
//         const redTeamEmoji = '🍓';


//         let embed = new Discord.MessageEmbed()
//                 .setColor('#4ef542')
//                 .setTitle('React for a role!')
//                 .setDescription('React for roles to have more permissions for this server!\n\n' 
//                 + `${yellowTeamEmoji} for yellow team\n` 
//                 + `${redTeamEmoji} for red team`);

//         let messageEmbed = await message.channel.send(embed);


//         messageEmbed.react(yellowTeamEmoji);
//         messageEmbed.react(redTeamEmoji);

//         client.on('messageReactionAdd', async (reaction, user) => {
//             if (reaction.message.partial) await reaction.message.fetch();
//             if (reaction.partial) await reaction.fetch();
//             if (user.bot) return;
//             if (!reaction.message.guild) return;
            
//             if (reaction.message.channel.id == channel) {
//                 if (reaction.emoji.name === yellowTeamEmoji) {
//                     await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
//                 } else if (reaction.emoji.name === redTeamEmoji) {
//                     await reaction.message.guild.members.cache.get(user.id).roles.add(redTeamRole);
//                 }
//             } else {
//                 return;
//             }
//         });

//         client.on('messageReactionRemove', async (reaction, user) => {
//             if (reaction.message.partial) await reaction.message.fetch();
//             if (reaction.partial) await reaction.fetch();
//             if (user.bot) return;
//             if (!reaction.message.guild) return;
            
//             if (reaction.message.channel.id == channel) {
//                 if (reaction.emoji.name === yellowTeamEmoji) {
//                     await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
//                 } else if (reaction.emoji.name === redTeamEmoji) {
//                     await reaction.message.guild.members.cache.get(user.id).roles.remove(redTeamRole);
//                 }
//             } else {
//                 return;
//             }
//         });
//     }
// }