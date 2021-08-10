module.exports = {
    name: 'ping',
    description: "this is a ping command",
    // execute(client, message, args) {
    execute(message, args, cmd, client, Discord) {
        message.channel.send('pong!');
    }
}