

/* # Exclusively from 🐱‍👤Nikash
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "type some word after command\n🗡🗡"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'npubg ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/pubglogo?apikey=00oQhHnqcqFGofHbjsFtXZcKVWO&text1=New%20Charachter&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by 🐱‍👤Nikash*' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'npubg ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/pubglogo?apikey=00oQhHnqcqFGofHbjsFtXZcKVWO&text1=New%20Charachter&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by 🐱‍👤Nikash*' })

    }));
    
}
