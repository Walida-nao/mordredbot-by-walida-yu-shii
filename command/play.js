module.exports.run = async (Discord, client, message, args, ytdl, streamOptions) => {

    var [link] = args;
  
    message.member.voiceChannel.join()
  .then(connection => {
    console.log('play');
    const stream = ytdl(link, { filter : 'audioonly' });
    const dispatcher = connection.playStream(stream, streamOptions);
    
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`${message.author.username}`)
    .addField('Actually playing', link)
    return message.channel.send(embed)
  })
  .catch(console.error);
  
  }

    