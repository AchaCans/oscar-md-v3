/*============== Jangan di ganti! ==============*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let jarot = `
*STORE CREATOR*
«================»
››╭─〘 *Store* 〙
╭╡📮: Store owner kami.
│┝‷✧ *jasa murid bot:*
│┝‷✧ *jasa Jadi bot:*
│┝‷✧ *jasa Sewa bot:*
│╰───···─────
│⁺◛˖ Ingin membeli store owner? Chat owner aja…
╰──────────···───
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya1)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: jarot,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '',
           hydratedButtons: [{
             urlButton: {
               displayText: '𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧🌱',
               url: 'https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ'
             }

           },
                {
               urlButton: {
               displayText: '𝙂𝙧𝙤𝙪𝙥 𝘽𝙤𝙩 𝙊𝙛𝙛𝙘🌍',
               url: 'https://chat.whatsapp.com/IqZke0cAG6G3iVsnB9myfL'
             }

           },
               {
             quickReplyButton: {
               displayText: '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢',
               url: 'instagram 
             }
             
           },
               {
             quickReplyButton: {
               displayText: '𝙈𝙚𝙣𝙪',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: '𝘿𝙤𝙣𝙖𝙨𝙞',
               id: '.donasi',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.customPrefix = /^(store|.store)$/i
handler.command = new RegExp
handler.help = ['.store']
module.exports = handler
