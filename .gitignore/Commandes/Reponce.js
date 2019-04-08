client.on('message', msg => {
  if (msg.content === 'test') {
    msg.reply('Je fonctione bien');
