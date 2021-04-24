const fs = require("fs")
const Slimbot = require('slimbot');
require('dotenv').config()
const func = require('./subFunctions/functions')
var token = process.env['TELEGRAM_BOT_TOKEN'];
const exec = require('exec');
(async () => {

   

    const slimbot = new Slimbot(token);

    slimbot.startPolling();

    slimbot.on('message', async message => {
        
        let username = message.from.first_name
        if(message.text == "/statusConteiners"){
            
            let status = await execComand(["docker", "ps"])
            //console.log(status)
            func.sendMessage(token, message.chat.id, status)
        }

    });
  

})()


function execComand(comand){
    return new Promise((resolve, reject)=>{
        let err = ""
        let out = ""
        let code = ""
        let tes = exec(comand, (a, b, c)=>{
            err += a
            out += b
            code += c
        })
        tes.on("close", (code)=>{
            resolve(out)
        })
        tes.on("error", (err)=>{
            reject(err)
        })

    })
}
function respostasProntas(){}