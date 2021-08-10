module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    permissions: [],
    description: "Check the user balance",
    execute(message, args, cmd, client, discord, profileData) {
      message.channel.send(`Your wallet balance is ${profileData.coins}, you banks balance is ${profileData.bank}`);
    },
};