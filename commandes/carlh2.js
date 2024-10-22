
const {
  zokou
} = require("../framework/zokou");
const {
  default: axios
} = require("axios");
const pkg = require("@whiskeysockets/baileys");
const {
  generateWAMessageFromContent,
  proto
} = pkg;
zokou({
  'nomCom': "carlinfo",
  'reaction': '🕵',
  'categorie': "User"
}, async (_0x1f601d, _0x579ba3, _0xe049a7) => {
  const {
    repondre: _0x1aa113,
    arg: _0x4c1c9e,
    ms: _0x51bbee
  } = _0xe049a7;
  try {
    if (!_0x4c1c9e || _0x4c1c9e.length === 0) {
      return _0x1aa113("Example dear *.carlinfo 1*");
    }
    await _0x1aa113("Syncing🔄 carltech info.....");
    const _0x3804ef = encodeURIComponent(_0x4c1c9e.join(" "));
    const _0x4a5474 = "https://spark-x-session.onrender.com/code?number=" + _0x3804ef;
    const _0xd76a18 = await axios.get(_0x4a5474);
    const _0x5f2e18 = _0xd76a18.data;
    if (_0x5f2e18 && _0x5f2e18.code) {
      const _0x48d1e7 = _0x5f2e18.code;
      const _0x1f8874 = "\n❂─────═━┈┈━═──━┈⦾\n➻ BOT: *CYBERION-SPARK-X*\n➻ SERIES: *SPARK*\n➻ BOT ID: *" + _0x48d1e7 + "*\n➻ DEV: *CARLTECH*\n❂─────═━┈┈━═──━┈⦾";
      const _0x189e18 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "🛃 CHANNEL LINK",
          'url': "https://whatsapp.com/channel/0029Vak0genJ93wQXq3q6X3h"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "⚙️ SESSION ID",
          'url': "https://spark-x-session.onrender.com"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "✨ SPARK-X REPO",
          'url': "https://github.com/Carl24tech/Cyberion-Spark-X"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "🧑‍🧑‍🧒‍🧒 JOIN OUR GROUP",
          'url': "https://chat.whatsapp.com/FNd2l56sAsdClsgAb4pbP0"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "🌍 TELEGRAM CHANNEL",
          'url': "https://t.me/carltechai"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "🎯 OUR WEBSITE",
          'url': "https://carltech-innovativehub.vercel.app/"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "📲 WHATSAPP",
          'url': "https://wa.link/c9qf2z"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "📲 CONTACT ME",
          'url': "https://t.me/carlltecch"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "📥 FOLLOW WACHANNEL",
          'url': "https://whatsapp.com/channel/0029Vak0genJ93wQXq3q6X3h"
        })
      }];
      const _0x4de182 = generateWAMessageFromContent(_0x1f601d, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 0x2
            },
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create({
                'text': _0x1f8874
              }),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'text': " *Cyberion-Spark-X*"
              }),
              'header': proto.Message.InteractiveMessage.Header.create({
                'title': '',
                'subtitle': '',
                'hasMediaAttachment': false
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                'buttons': _0x189e18
              })
            })
          }
        }
      }, {});
      await _0x579ba3.relayMessage(_0x1f601d, _0x4de182.message, {
        'messageId': _0x4de182.key.id
      });
    } else {
      throw new Error("Invalid response from Api.");
    }
  } catch (_0x1e1da6) {
    console.error("Error getting Api response:", _0x1e1da6.message);
    _0x1aa113("Error getting response from Api.");
  }
});
