const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {
  client.user.setActivity("Around With Your Messages")
})
client.on('message', msg => {
  if (msg.content === 'lemon') {
    msg.channel.send('buy a lemon', tts=true);

  }
});
client.on('message', msg => {
  if (msg.content === '<@363407297961000987>') {
    msg.channel.send('<@363407297961000987>Get Online!');

  }
});

var Sean = [
  "cheng",
  "sean",

  
];

client.on('message', message => {
  if (message.content.Sean || message.author.bot) return;
  var words = message.content.toLowerCase().trim().match(/\w+|\s+|[^\s\w]+/g);
  var containsSean = words.some(word => {
    return Sean.includes(word);
  });
  
  if (containsSean) {
    message.channel.send("#Mr.Cheng=Orchestra_rep.");
  }
});


client.on('message', msg => {
  if (msg.content === 'lemon') {
    msg.author.send('buy a lemon', tts=true);

  }
});

client.on('message', msg => {
  if (msg.content === 'muhammad') {
    msg.client.send('peace be upon him', tts=true);

  }
});


var badWords = [
  "shit",
  "fuck",
  "taiwan",
  "banana",
  "jesus",
  "...",
  ":thinking:",
  
];

client.on('message', message => {
  var words1 = message.content.toLowerCase().trim().match(/\w+|\s+|[^\s\w]+/g);
  var containsBadWord = words1.some(word1 => {
    return badWords.includes(word1);
  });
  if (containsBadWord) {
    message.delete(1)
    message.channel.send("At Yellowiki, we do not endorse, nor tolerate any offensive content. To find out why, click here--> https://goo.gl/hFBNcM");
    message.author.send("At Yellowiki, we do not endorse, nor tolerate any offensive content. To find out why, click here--> https://goo.gl/hFBNcM");

  }
});


var GoodWords = [
  "muhammad",
  "aisha",
  "allah",
  "jihad",
  "mecca",
  
];

client.on('message', message => {
  var words11 = message.content.toLowerCase().trim().match(/\w+|\s+|[^\s\w]+/g);
  var containsGoodWords = words11.some(word11 => {
    return GoodWords.includes(word11);
  });
  if (containsGoodWords) {
    message.channel.send("At Yellowiki, we embrace Islam. To find out why, click here--> http://wikiislam.net/wiki/Main_Page");
    message.author.send("Allah Bless You!");

  }
});

client.login("TOKEN");
