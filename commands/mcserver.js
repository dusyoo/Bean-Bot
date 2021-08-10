const util = require('minecraft-server-util');
module.exports = {
    name: 'mcserver',
    description: 'Check minecraft server information',
    execute(message, args, cmd, client, Discord) {
        util.status('rodeo.mcsrv.pro', {port: 25565}).then((response) => {
            const embed = new Discord.MessageEmbed().setColor("#996633").setTitle('Harrison\'s Minecraft Server Status').addFields(
                {name: 'Server IP', value: response.host},
                {name: 'Online Players', value: response.onlinePlayers},
                {name: 'Max Players', value: response.maxPlayers},
                {name: 'Version', value: response.version}
            )
            message.channel.send(embed);
        }).catch ((error) =>{
            message.channel.send('There was an error finding this server');
            throw error;
        })
    }
} 