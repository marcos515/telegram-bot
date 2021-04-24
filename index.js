const fs = require("fs")
const Slimbot = require('slimbot');
require('dotenv').config()
const func = require('./subFunctions/functions')
var token = process.env['TELEGRAM_BOT_TOKEN'];
const exec = require('exec');
var splitToWords = require('split-to-words');
(async () => {

    

    const slimbot = new Slimbot(token);

    slimbot.startPolling();

    slimbot.on('message', async message => {
        
        let username = message.from.first_name
        if(message.text == "/docker_status" || message.text == "/docker_status@logescravo_bot"){
            let status = await execComand(["docker", "ps", "-a", "--format", `{"ID":"{{ .ID }}", "Image": "{{ .Image }}", "Names":"{{ .Names }}", "status":"{{.Status}}", "ports":"{{.Ports}}"}`])
            //docker ps --format '{"ID":"{{ .ID }}", "Image": "{{ .Image }}", "Names":"{{ .Names }}", "status":"{{.Status}}"}'
            let mesage = `Atualmente há ${status.length} conteiners:\n\n`
            for (let index = 0; index < status.length; index++) {
                mesage += status[index].Image + "  -->  " + status[index].status + "\n\n"
                
            }
            func.sendMessage(token, message.chat.id, mesage)
        }

    });
  

})()


function execComand(comand){
    return new Promise((resolve, reject)=>{
        let err = ""
        let out = ""
        let code = ""
        let as = 0
        let tes = exec(comand, (a, b, c)=>{
            err += a
            out += b
            code += c
            as++;
        })
        tes.on("close", (code)=>{
            let data = out.split("\n")
            let z = ""
            for (let index = 0; index < data.length-1; index++) {
                z+= (data[index]) + ","
                
            }
            try {
                let test = "["+ z.substring(0, z.length - 1)+ "]"
                resolve(JSON.parse(test))
            } catch (error) {
                console.log(error)
                resolve([])
            }
            
        })
        tes.on("error", (err)=>{
            reject(err)
        })

    })
}
function respostasProntas(){}