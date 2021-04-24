var axios = require('axios')

async function sendMessage(token, chatId, message) {
  await axios.get(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
}

async function sendShareButton(token, chatId, message, textButton, urlButton) {
  let body = { "reply_markup": { "inline_keyboard": [[{ "text": "", "url": "" }]] } };
  body.reply_markup.inline_keyboard[0][0].text = textButton;
  body.reply_markup.inline_keyboard[0][0].url = urlButton;
  await axios.get(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`, { data: body })

  return 'ok'
}

async function sendTipButton(token, chatId, message, arrayButtons) {
  var resp = { "a": "0" }
  var response2 = ''

  let body = { "parse_mode": "Markdown", "reply_markup": { "one_time_keyboard": true, "keyboard": [] } }
  body.reply_markup.keyboard = arrayButtons;


  await axios.get(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`, { data: body })

  return 'ok'
}

module.exports = { sendMessage, sendShareButton, sendTipButton }

