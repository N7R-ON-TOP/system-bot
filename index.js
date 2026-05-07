const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`✅ ${client.user.tag} شغال`);
});

client.on('messageCreate', message => {

  if (message.author.bot) return;

  if (message.content === "ق") {
    message.reply("🔒 تم القفل");
  }

});

client.login("MTUwMTkwOTQ5NTE5MzAxNDMxMw.GoAZyh.lTC-37u78FeTajvHtDUjCa_5pSa3jwkyk3cFdY
");
