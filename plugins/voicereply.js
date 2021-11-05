/* Codded by @YASAS DILEEPA


Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - YASAS DILEEPA
*/

const MARAYA = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

   var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var VOICE_on = ''
    var VOICE_off = ''
    
    if (config.LANG == 'EN') {
        l_dsc = 'turn on and turn of voice reply. -bot owner command'
        alr_on = 'Antilink is already open!'
        alr_off = 'Antilink is currently closed!'
        VOICE_on = 'voice reply option turned on!'
        VOICE_off = 'voice reply option turned off'
    }
    if (config.LANG == 'SI') {
        l_dsc = 'auto වොයිස් රිප්ලයි සේවාව ලබා ගත හැක.'
        alr_on = 'ඔන් විය'
        alr_off = 'ඕෆ් විය!'
        VOICE_on = 'ක්‍රියාත්මක විය'
        VOICE_off = 'ක්‍රියා විරහිත විය'
    }
     if (config.PSW !== 'kingraviya') {
    QueenSew.newcmdaddtosew({pattern: 'voicereply ?(.*)', fromMe: true, desc: l_dsc, usage: '.voicereply on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['VOICE_REPLY']: 'false'
                    } 
                });
                await message.sendMessage(VOICE_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['VOICE_REPLY']: 'true'
                    } 
                });
                await message.sendMessage(VOICE_on)
        }
    }));
}
