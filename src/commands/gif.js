module.exports = {
    name: 'gif',
    // permissions: [],
    description: 'sends a gif',
    // execute(client, message, args) {
    execute(message, args, cmd, client, Discord) {
        // if statement checks if user who sent message has the role to use this command
        // if (message.member.roles.cache.has('850164933357338692')) {
            message.channel.send('https://media.giphy.com/media/l0FF56cexcW2JAXCJj/giphy.gif');
        // } else {
        //     message.channel.send('You do not have permission to use this command, I have given you the said role to use this command.');
        //     message.member.roles.add('850164933357338692');
        // }
    }
}