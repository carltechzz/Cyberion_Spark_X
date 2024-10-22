



const {
  zokou
} = require("../framework/zokou");
const traduire = require("../framework/traduction");
const {
  default: axios
} = require("axios");
zokou({
  'nomCom': "bot",
  'reaction': '📡',
  'categorie': 'IA'
}, async (_0x23ace4, _0x35e2e9, _0x530363) => {
  const {
    repondre: _0x302c43,
    ms: _0x398f3e,
    arg: _0x286a7d
  } = _0x530363;
  if (!_0x286a7d || !_0x286a7d[0]) {
    return _0x302c43("yes buddy,🕵please say something.");
  }
  try {
    const _0x2e19bd = await traduire(_0x286a7d.join(" "), {
      'to': 'en'
    });
    console.log(_0x2e19bd);
    fetch("http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=" + _0x2e19bd).then(_0x22e13f => _0x22e13f.json()).then(_0x1aa615 => {
      const _0x3fc4c6 = _0x1aa615.cnt;
      console.log(_0x3fc4c6);
      traduire(_0x3fc4c6, {
        'to': 'en'
      }).then(_0x3939d8 => {
        _0x302c43(_0x3939d8);
      })["catch"](_0x45777e => {
        console.error("Error when translating into French :", _0x45777e);
        _0x302c43("Error when translating into French");
      });
    })["catch"](_0x83989d => {
      console.error("Error requesting BrainShop :", _0x83989d);
      _0x302c43("Error requesting BrainShop");
    });
  } catch (_0x51dde9) {
    _0x302c43("oops an error : " + _0x51dde9);
  }
});
zokou({
  'nomCom': 'ai',
  'reaction': '📡',
  'categorie': 'IA'
}, async (_0x2028a0, _0xf5d739, _0x42833c) => {
  const {
    repondre: _0x4e9cd4,
    arg: _0x516670,
    ms: _0x74b35f
  } = _0x42833c;
  try {
    if (!_0x516670 || _0x516670.length === 0) {
      return _0x4e9cd4("Please enter the necessary information to generate the image.");
    }
    const _0x1812f9 = _0x516670.join(" ");
    const _0x19a7c6 = await axios.get("https://photooxy.com/effect/create-image?q=" + _0x1812f9);
    const _0x4edcfd = _0x19a7c6.data;
    if (_0x4edcfd.status == 200) {
      const _0x2d9f47 = _0x4edcfd.result;
      _0xf5d739.sendMessage(_0x2028a0, {
        'image': {
          'url': _0x2d9f47
        },
        'caption': "*powered by Spark-X*"
      }, {
        'quoted': _0x74b35f
      });
    } else {
      _0x4e9cd4("Error during image generation.");
    }
  } catch (_0x18643c) {
    console.error("Erreur:", _0x18643c.message || "Une erreur s'est produite");
    _0x4e9cd4("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "gpt1",
  'reaction': '📡',
  'categorie': 'IA'
}, async (_0x1ae9aa, _0x446273, _0x404102) => {
  const {
    repondre: _0x3e8919,
    arg: _0xfb0490,
    ms: _0x17c0de
  } = _0x404102;
  try {
    if (!_0xfb0490 || _0xfb0490.length === 0) {
      return _0x3e8919("Please ask a me any thing.");
    }
    const _0x19e307 = _0xfb0490.join(" ");
    const _0x46503a = await axios.get("https://api.ibrahimadams.us.kg/api/ai/gpt4?q=" + _0x19e307 + "&apikey=abutech");
    const _0xcb30f1 = _0x46503a.data;
    if (_0xcb30f1) {
      _0x3e8919(_0xcb30f1.result);
    } else {
      _0x3e8919("Error during response generation.");
    }
  } catch (_0x2c9c19) {
    console.error("Erreur:", _0x2c9c19.message || "Une erreur s'est produite");
    _0x3e8919("Oops, an error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "gpt",
  'reaction': '🤔',
  'categorie': 'IA'
}, async (_0x521acf, _0x64bcf3, _0x212e60) => {
  const {
    repondre: _0x4093f9,
    arg: _0x16f072,
    ms: _0x6dec48
  } = _0x212e60;
  try {
    if (!_0x16f072 || _0x16f072.length === 0) {
      return _0x4093f9("Please ask a question.");
    }
    const _0x49d32a = _0x16f072.join(" ");
    const _0x2c8df7 = await axios.get("https://api.ibrahimadams.us.kg/api/ai/gpt4?q=" + _0x49d32a + "&apikey=abutech");
    const _0x2e04db = _0x2c8df7.data;
    if (_0x2e04db) {
      _0x4093f9(_0x2e04db.result);
    } else {
      _0x4093f9("Error during response generation.");
    }
  } catch (_0xd705c3) {
    console.error("Erreur:", _0xd705c3.message || "Une erreur s'est produite");
    _0x4093f9("Oops, an error occurred while processing your request.");
  }
});
