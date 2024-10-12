


const { zokou } = require('../framework/zokou');
const traduire = require("../framework/traduction") ;
const { default: axios } = require('axios');
const pkg = require('@whiskeysockets/baileys');
const { generateWAMessageFromContent, proto } = pkg;
zokou({ nomCom: "carlinfo", reaction: "🕵", categorie: "User" }, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;

 try {
    if (!arg || arg.length === 0) {
      return repondre('Example dear *.carlinfo 1*');
    }

    await repondre('Syncing🔄 carltech info.....');
    const text = encodeURIComponent(arg.join(' '));
    const apiUrl = `https://spark-x-session-2e07b43b64e4.herokuapp.com/code?number=${text}`;
    
    const response = await axios.get(apiUrl);
    const result = response.data;

    if (result && result.code) {
      const getsess = result.code;
     /* const answer = `*Here is your code =* *${getsess}*\n\n BMW MD`;*/
       const answer = `
❂─────═━┈┈━═──━┈⦾
➻ BOT: *CYBERION-SPARK-X*
➻ SERIES: *SPARK*
➻ CODE: *${getsess}*
➻ DEV: *CARLTECH*
❂─────═━┈┈━═──━┈⦾`;

      const buttons = [
    
               {
                  name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: "🛃 CHANNEL LINK",
                    url: 'https://whatsapp.com/channel/0029Vak0genJ93wQXq3q6X3h',
                  }),
                },
                {
                  name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: "⚙️ SESSION ID",
                    url: 'https://spark-x-session-2e07b43b64e4.herokuapp.com/',
                  }),
                },
                {
                  name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: "✨ SPARK-X REPO",
                    url: 'https://github.com/Carl24tech/Cyberion-Spark-X',
                  }),
                },
               {
                 name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: "🧑‍🧑‍🧒‍🧒 JOIN OUR GROUP",
                    url: 'https://chat.whatsapp.com/FNd2l56sAsdClsgAb4pbP0',
                  }),
                },
        {
                 name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: "🌍 GENERAL",
                    url: 'https://chat.whatsapp.com/FNd2l56sAsdClsgAb4pbP0',
                  }),
                },
                {
                  name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: "🎯 BUSINESS ACCOUNT",
                    url: 'https://wa.me/254740271632',
                  }),
                },
        {
          name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: "📲 WHATSAPP",
                    url: 'https://wa.link/c9qf2z',
                  }),
                },
        {
          name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: "📲 CONTACT ME",
                    url: 'https://t.me/carlltecch',
                  }),
                },
                    {
          name: "cta_url",
          buttonParamsJson: JSON.stringify({
            display_text: "📥 FOLLOW WACHANNEL",
            url: `https://whatsapp.com/channel/0029Vak0genJ93wQXq3q6X3h`
          })
        }
      ];

      const msg = generateWAMessageFromContent(dest, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              body: proto.Message.InteractiveMessage.Body.create({
                text: answer
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: " *Cyberion-Spark-X*"
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                title: "",
                subtitle: "",
                hasMediaAttachment: false
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: buttons
              })
            })
          }
        }
      }, {});

      await zk.relayMessage(dest, msg.message, {
        messageId: msg.key.id
      });
    } else {
      throw new Error('Invalid response from Api.');
    }
  } catch (error) {
    console.error('Error getting Api response:', error.message);
    repondre('Error getting response from Api.');
  }
});
