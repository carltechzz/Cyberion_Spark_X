

'use strict';

Object.defineProperty(exports, "__esModule", {
  'value': true
});
const {
  zokou
} = require("../framework/zokou");
zokou({
  'nomCom': "repo",
  'catégorie': "General",
  'reaction': '🔄',
  'nomFichier': __filename
}, async (_0x2d4c7f, _0x295cca, _0x459a03) => {
  try {
    const _0x31eefc = await fetch("https://api.github.com/repos/carl24tech/Cyberion-Spark-X");
    const _0x217a4e = await _0x31eefc.json();
    if (_0x217a4e) {
      const _0x388ba4 = {
        'stars': _0x217a4e.stargazers_count,
        'forks': _0x217a4e.forks_count,
        'lastUpdate': _0x217a4e.updated_at,
        'owner': _0x217a4e.owner.login
      };
      const _0x24b8d8 = new Date(_0x217a4e.created_at).toLocaleDateString("en-GB");
      const _0x51e228 = "*𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐂𝐲𝐛𝐞𝐫𝐢𝐨𝐧-𝐒𝐩𝐚𝐫𝐤-𝐗 𝐫𝐞𝐩𝐨*\n \n *𝐓𝐡𝐢𝐬 𝐢𝐬 𝐭𝐡𝐞 𝐜𝐮𝐫𝐫𝐞𝐧𝐭 𝐩𝐫𝐨𝐠𝐫𝐞𝐬𝐬.*\n┏────────────────────────⊷\n│ ☋️ *𝐒𝐞𝐬𝐬𝐢𝐨𝐧* : https://spark-x-session.onrender.com \n\n│ 🔁 *𝐑𝐞𝐩𝐨:* " + _0x217a4e.html_url + "\n\n│ 🌟 *𝐒𝐭𝐚𝐫𝐬:* " + _0x388ba4.stars + "\n\n│ 🍽 *𝐅𝐨𝐫𝐤𝐬:* " + _0x388ba4.forks + "\n\n│ 📅 *𝐑𝐞𝐥𝐞𝐚𝐬𝐞 𝐃𝐚𝐭𝐞:* " + _0x24b8d8 + "\n\n│ 💻 *𝐔𝐩𝐝𝐚𝐭𝐞𝐝:* " + _0x388ba4.lastUpdate + "\n\n│ 🕵 *𝐎𝐰𝐧𝐞𝐫:* 𝘊𝘈𝘙𝘓𝘛𝘌𝘊𝘏\n\n│ 🌐 *𝐂𝐡𝐚𝐧𝐧𝐞𝐥:* https://whatsapp.com/channel/0029Vak0genJ93wQXq3q6X3h\n\n│ 📨 *𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦:* https://t.me/carlltecch\n╰─────────────────────────⊷\n *𝑪𝒀𝑩𝑬𝑹𝑰𝑶𝑵-𝑺𝑷𝑨𝑹𝑲-𝑿*";
      await _0x295cca.sendMessage(_0x2d4c7f, {
        'image': {
          'url': "https://files.catbox.moe/mkmk3o.jpg"
        },
        'caption': _0x51e228
      });
    } else {
      console.log("Could not fetch data");
    }
  } catch (_0x42491a) {
    console.log("Error fetching data:", _0x42491a);
  }
});
