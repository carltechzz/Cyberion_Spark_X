

const {
  zokou
} = require(__dirname + "/../framework/zokou");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
zokou({
  'nomCom': "scan",
  'categorie': "General"
}, async (_0x2cc027, _0xcf4492, _0x49cb6c) => {
  let {
    ms: _0x10b67d,
    repondre: _0x11729b,
    prefixe: _0x2f8c12,
    nomAuteurMessage: _0x2a031a,
    mybotpic: _0x25cc84
  } = _0x49cb6c;
  let {
    cm: _0x10fd67
  } = require(__dirname + "/../framework//zokou");
  var _0x286c75 = {};
  var _0x10b14b = "public";
  if (s.MODE.toLocaleLowerCase() != "yes") {
    _0x10b14b = "private";
  }
  _0x10fd67.map(async (_0x59f11c, _0x29c725) => {
    if (!_0x286c75[_0x59f11c.categorie]) {
      _0x286c75[_0x59f11c.categorie] = [];
    }
    _0x286c75[_0x59f11c.categorie].push(_0x59f11c.nomCom);
  });
  moment.tz.setDefault("Africa/Nairobi");
  var _0x58c7ba = _0x25cc84();
  if (_0x58c7ba.match(/\.(mp4|gif)$/i)) {
    try {
      _0xcf4492.sendMessage(_0x2cc027, {
        'video': {
          'url': _0x58c7ba
        },
        'caption': "\n *THE GIVEN LINK TAKES YOU TO THE SESSION SITE*\n \nhttps://spark-x-session.onrender.com \n \n *𝐅𝐎𝐋𝐋𝐎𝐖 𝐓𝐇𝐄 𝐀𝐁𝐎𝐕𝐄 𝐒𝐓𝐄𝐏𝐒 𝐀𝐍𝐃 𝐎𝐁𝐓𝐀𝐈𝐍 𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐃*\n \n ☆. Open link above\n ★. Enter your whatsapp number with your country code eg : 254,255. And tap on submit\n ☆. Cyberion-V1 will send you a code. Copy that code. Then whatsapp will sent Notification\n ★. Tap on that notification then enter in the code that Cyberion sent you.\n ☆. It will load for sometime then Cyberion will send A long session to your inbox on whatsapp at your own number\n ★. Copy that long session and send it to your deployer or deploy it yourself.\n \n ╭───────────────────❒\n │ CYBERION❒⁠⁠⁠⁠\n │ CARLTECH❒⁠⁠\n ⁠⁠⁠⁠╰───────────────────❒\n \n \n \n> Made by : 𝗖𝗔𝗥𝗟𝗧𝗘𝗖𝗛\n",
        'footer': "Je suis *Cyberion*, déveloper Carltech",
        'gifPlayback': true
      }, {
        'quoted': _0x10b67d
      });
    } catch (_0x444c9d) {
      console.log("🥵🥵 Menu erreur " + _0x444c9d);
      _0x11729b("🥵🥵 Menu erreur " + _0x444c9d);
    }
  } else {
    if (_0x58c7ba.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        _0xcf4492.sendMessage(_0x2cc027, {
          'image': {
            'url': _0x58c7ba
          },
          'caption': "\n *THE GIVEN LINK TAKES YOU TO THE SESSION SITE*\n \nhttps://spark-x-session.onrender.com \n \n *𝐅𝐎𝐋𝐋𝐎𝐖 𝐓𝐇𝐄 𝐀𝐁𝐎𝐕𝐄 𝐒𝐓𝐄𝐏𝐒 𝐀𝐍𝐃 𝐎𝐁𝐓𝐀𝐈𝐍 𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐃*\n \n ☆. Open link above\n ★. Enter your whatsapp number with your country code eg : 254,255. And tap on submit\n ☆. Cyberion-V1 will send you a code. Copy that code. Then whatsapp will sent Notification\n ★. Tap on that notification then enter in the code that Cyberion sent you.\n ☆. It will load for sometime then Cyberion will send A long session to your inbox on whatsapp at your own number\n ★. Copy that long session and send it to your deployer or deploy it yourself.\n \n ╭───────────────────❒\n │ CYBERION❒⁠⁠⁠⁠\n │ CARLTECH❒⁠⁠\n ⁠⁠⁠⁠╰───────────────────❒\n \n \n \n> Made by : 𝗖𝗔𝗥𝗟𝗧𝗘𝗖𝗛\n",
          'footer': "Je suis *Cyberion*, déveloper Carltech"
        }, {
          'quoted': _0x10b67d
        });
      } catch (_0x32df90) {
        console.log("🥵🥵 Menu erreur " + _0x32df90);
        _0x11729b("🥵🥵 Menu erreur " + _0x32df90);
      }
    } else {
      _0x11729b("\n *THE GIVEN LINK TAKES YOU TO THE SESSION SITE*\n \nhttps://spark-x-session.onrender.com \n \n *𝐅𝐎𝐋𝐋𝐎𝐖 𝐓𝐇𝐄 𝐀𝐁𝐎𝐕𝐄 𝐒𝐓𝐄𝐏𝐒 𝐀𝐍𝐃 𝐎𝐁𝐓𝐀𝐈𝐍 𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐃*\n \n ☆. Open link above\n ★. Enter your whatsapp number with your country code eg : 254,255. And tap on submit\n ☆. Cyberion-V1 will send you a code. Copy that code. Then whatsapp will sent Notification\n ★. Tap on that notification then enter in the code that Cyberion sent you.\n ☆. It will load for sometime then Cyberion will send A long session to your inbox on whatsapp at your own number\n ★. Copy that long session and send it to your deployer or deploy it yourself.\n \n ╭───────────────────❒\n │ CYBERION❒⁠⁠⁠⁠\n │ CARLTECH❒⁠⁠\n ⁠⁠⁠⁠╰───────────────────❒\n \n \n \n> Made by : 𝗖𝗔𝗥𝗟𝗧𝗘𝗖𝗛\n");
    }
  }
});
