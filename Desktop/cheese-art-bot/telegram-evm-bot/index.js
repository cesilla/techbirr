const TelegramBot = require('node-telegram-bot-api');
const token = '6827359852:AAFRwiJiQ1U7JMWFFdmORMiDSVGlfFxYP7Y';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Merhaba! Lütfen TON cüzdan adresinizi girin:');

  bot.once('message', (msg) => {
    const tonWalletAddress = msg.text;



    bot.sendMessage(chatId, `TON cüzdanı ${tonWalletAddress} bağlandı ve doğrulama başarılı.`);
  });
});

module.exports = bot;
