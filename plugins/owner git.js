const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════ALEENA MWOL═════╗*\n           \n *😈═ALEENA═😈* \n\n *Owner Nikhil Jr- http://wa.me/919746138832 \n* *\n🔰instagram:-https://www.instagram.com/mr_bea_n_jr* \n *╚══════♻️═════╝* \n\n *▷Creator: Nikhil Jr*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═AleenaMwol Owner Nikhil Jr═💥*\n\n*💘https://github.com/Nikhil-Jr/Aleena*\n*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════ALEENA MWOL═════╗*\n           \n *😈═ALEENA═😈* \n\n *Owner Nikhil Jr- http://wa.me/919746138832 \n* *\n🔰instagram:-https://www.instagram.com/mr_bea_n_jr* \n *╚══════♻️═════╝* \n\n *▷Creator: Nikhil Jr*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═AleenaMwol Owner Nikhil Jr═💥*\n\n*💘https://github.com/Nikhil-Jr/Aleena*\n*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
