

const {
  zokou
} = require(__dirname + "/../framework/zokou");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
zokou({
  'nomCom': "scan",
  'categorie': "General"
}, async (_0x1d5fa3, _0x49db94, _0x3a36c3) => {
  let {
    ms: _0x19a748,
    repondre: _0x35394b,
    prefixe: _0x56f321,
    nomAuteurMessage: _0x3227c6,
    mybotpic: _0x5dda19
  } = _0x3a36c3;
  let {
    cm: _0x43e0e1
  } = require(__dirname + "/../framework//zokou");
  var _0x53cb80 = {};
  var _0x2f8d9b = "public";
  if (s.MODE.toLocaleLowerCase() != "yes") {
    _0x2f8d9b = "private";
  }
  _0x43e0e1.map(async (_0xd4d521, _0x554755) => {
    if (!_0x53cb80[_0xd4d521.categorie]) {
      _0x53cb80[_0xd4d521.categorie] = [];
    }
    _0x53cb80[_0xd4d521.categorie].push(_0xd4d521.nomCom);
  });
  moment.tz.setDefault("Africa/Nairobi");
  var _0x3afa82 = _0x5dda19();
  if (_0x3afa82.match(/\.(mp4|gif)$/i)) {
    try {
      _0x49db94.sendMessage(_0x1d5fa3, {
        'video': {
          'url': _0x3afa82
        },
        'caption': "\n *THE GIVEN LINK TAKES YOU TO THE SESSION SITE*\n \nhttps://spark-x-session.onrender.com \n \n *𝐅𝐎𝐋𝐋𝐎𝐖 𝐓𝐇𝐄 𝐀𝐁𝐎𝐕𝐄 𝐒𝐓𝐄𝐏𝐒 𝐀𝐍𝐃 𝐎𝐁𝐓𝐀𝐈𝐍 𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐃*\n \n ☆. Open link above\n ★. Enter your whatsapp number with your country code eg : 254,255. And tap on submit\n ☆. Cyberion-V1 will send you a code. Copy that code. Then whatsapp will sent Notification\n ★. Tap on that notification then enter in the code that Cyberion sent you.\n ☆. It will load for sometime then Cyberion will send A long session to your inbox on whatsapp at your own number\n ★. Copy that long session and send it to your deployer or deploy it yourself.\n \n ╭───────────────────❒\n │ CYBERION❒⁠⁠⁠⁠\n │ CARLTECH❒⁠⁠\n ⁠⁠⁠⁠╰───────────────────❒\n \n \n \n> Made by : 𝗖𝗔𝗥𝗟𝗧𝗘𝗖𝗛\n",
        'footer': "Je suis *Bugatti*, déveloper Marisel",
        'gifPlayback': true
      }, {
        'quoted': _0x19a748
      });
    } catch (_0x149907) {
      console.log("🥵🥵 Menu erreur " + _0x149907);
      _0x35394b("🥵🥵 Menu erreur " + _0x149907);
    }
  } else {
    if (_0x3afa82.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        _0x49db94.sendMessage(_0x1d5fa3, {
          'image': {
            'url': _0x3afa82
          },
          'caption': "\n *THE GIVEN LINK TAKES YOU TO THE SESSION SITE*\n \nhttps://spark-x-session.onrender.com \n \n *𝐅𝐎𝐋𝐋𝐎𝐖 𝐓𝐇𝐄 𝐀𝐁𝐎𝐕𝐄 𝐒𝐓𝐄𝐏𝐒 𝐀𝐍𝐃 𝐎𝐁𝐓𝐀𝐈𝐍 𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐃*\n \n ☆. Open link above\n ★. Enter your whatsapp number with your country code eg : 254,255. And tap on submit\n ☆. Cyberion-V1 will send you a code. Copy that code. Then whatsapp will sent Notification\n ★. Tap on that notification then enter in the code that Cyberion sent you.\n ☆. It will load for sometime then Cyberion will send A long session to your inbox on whatsapp at your own number\n ★. Copy that long session and send it to your deployer or deploy it yourself.\n \n ╭───────────────────❒\n │ CYBERION❒⁠⁠⁠⁠\n │ CARLTECH❒⁠⁠\n ⁠⁠⁠⁠╰───────────────────❒\n \n \n \n> Made by : 𝗖𝗔𝗥𝗟𝗧𝗘𝗖𝗛\n",
          'footer': "Je suis *Bugatti*, déveloper Marisel"
        }, {
          'quoted': _0x19a748
        });
      } catch (_0x15f783) {
        console.log("🥵🥵 Menu erreur " + _0x15f783);
        _0x35394b("🥵🥵 Menu erreur " + _0x15f783);
      }
    } else {
      _0x35394b("\n *THE GIVEN LINK TAKES YOU TO THE SESSION SITE*\n \nhttps://spark-x-session.onrender.com \n \n *𝐅𝐎𝐋𝐋𝐎𝐖 𝐓𝐇𝐄 𝐀𝐁𝐎𝐕𝐄 𝐒𝐓𝐄𝐏𝐒 𝐀𝐍𝐃 𝐎𝐁𝐓𝐀𝐈𝐍 𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐃*\n \n ☆. Open link above\n ★. Enter your whatsapp number with your country code eg : 254,255. And tap on submit\n ☆. Cyberion-V1 will send you a code. Copy that code. Then whatsapp will sent Notification\n ★. Tap on that notification then enter in the code that Cyberion sent you.\n ☆. It will load for sometime then Cyberion will send A long session to your inbox on whatsapp at your own number\n ★. Copy that long session and send it to your deployer or deploy it yourself.\n \n ╭───────────────────❒\n │ CYBERION❒⁠⁠⁠⁠\n │ CARLTECH❒⁠⁠\n ⁠⁠⁠⁠╰───────────────────❒\n \n \n \n> Made by : 𝗖𝗔𝗥𝗟𝗧𝗘𝗖𝗛\n");
    }
  }
});
