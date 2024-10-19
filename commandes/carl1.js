

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
}, async (_0x183a68, _0x4b78a4, _0x16c1e4) => {
  const {
    repondre: _0x579dcc,
    ms: _0x136a41,
    arg: _0x17d046
  } = _0x16c1e4;
  if (!_0x17d046 || !_0x17d046[0]) {
    return _0x579dcc("yes buddy,🕵please say something.");
  }
  try {
    const _0x3179a5 = await traduire(_0x17d046.join(" "), {
      'to': 'en'
    });
    console.log(_0x3179a5);
    fetch("http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=" + _0x3179a5).then(_0x298d92 => _0x298d92.json()).then(_0x44e3a3 => {
      const _0x44b49e = _0x44e3a3.cnt;
      console.log(_0x44b49e);
      traduire(_0x44b49e, {
        'to': 'en'
      }).then(_0x398913 => {
        _0x579dcc(_0x398913);
      })["catch"](_0x391433 => {
        console.error("Error when translating into French :", _0x391433);
        _0x579dcc("Error when translating into French");
      });
    })["catch"](_0x16fbf9 => {
      console.error("Error requesting BrainShop :", _0x16fbf9);
      _0x579dcc("Error requesting BrainShop");
    });
  } catch (_0x3430d1) {
    _0x579dcc("oops an error : " + _0x3430d1);
  }
});
zokou({
  'nomCom': 'ai',
  'reaction': '📡',
  'categorie': 'IA'
}, async (_0x23a219, _0x354558, _0x2cedee) => {
  const {
    repondre: _0x2d2546,
    arg: _0x5d49d1,
    ms: _0xc82b3e
  } = _0x2cedee;
  try {
    if (!_0x5d49d1 || _0x5d49d1.length === 0) {
      return _0x2d2546("Please enter the necessary information to generate the image.");
    }
    const _0x44951e = _0x5d49d1.join(" ");
    const _0x5f1c87 = await axios.get("https://photooxy.com/effect/create-image?q=" + _0x44951e);
    const _0x545713 = _0x5f1c87.data;
    if (_0x545713.status == 200) {
      const _0x21a807 = _0x545713.result;
      _0x354558.sendMessage(_0x23a219, {
        'image': {
          'url': _0x21a807
        },
        'caption': "*powered by Spark-X*"
      }, {
        'quoted': _0xc82b3e
      });
    } else {
      _0x2d2546("Error during image generation.");
    }
  } catch (_0x1d3749) {
    console.error("Erreur:", _0x1d3749.message || "Une erreur s'est produite");
    _0x2d2546("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "gpt1",
  'reaction': '📡',
  'categorie': 'IA'
}, async (_0x2e2126, _0x563795, _0x11c09e) => {
  const {
    repondre: _0x190154,
    arg: _0x456b66,
    ms: _0x476544
  } = _0x11c09e;
  try {
    if (!_0x456b66 || _0x456b66.length === 0) {
      return _0x190154("Please ask a me any thing.");
    }
    const _0x280ead = _0x456b66.join(" ");
    const _0x3e10aa = await axios.get("https://api.ibrahimadams.us.kg/api/ai/gpt4?q=" + _0x280ead + "&apikey=my-vriend");
    const _0x5f3390 = _0x3e10aa.data;
    if (_0x5f3390) {
      _0x190154(_0x5f3390.result);
    } else {
      _0x190154("Error during response generation.");
    }
  } catch (_0x4399cc) {
    console.error("Erreur:", _0x4399cc.message || "Une erreur s'est produite");
    _0x190154("Oops, an error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "gpt",
  'reaction': '🤔',
  'categorie': 'IA'
}, async (_0x15083b, _0x262dd3, _0x5659b6) => {
  const {
    repondre: _0xb9af96,
    arg: _0x225a11,
    ms: _0x500333
  } = _0x5659b6;
  try {
    if (!_0x225a11 || _0x225a11.length === 0) {
      return _0xb9af96("Please ask a question.");
    }
    const _0x3c0642 = _0x225a11.join(" ");
    const _0x5e2f6b = await axios.get("https://api.ibrahimadams.us.kg/api/ai/gpt4?q=" + _0x3c0642 + "&apikey=my-vriend");
    const _0x30a9a4 = _0x5e2f6b.data;
    if (_0x30a9a4) {
      _0xb9af96(_0x30a9a4.result);
    } else {
      _0xb9af96("Error during response generation.");
    }
  } catch (_0x168845) {
    console.error("Erreur:", _0x168845.message || "Une erreur s'est produite");
    _0xb9af96("Oops, an error occurred while processing your request.");
  }
});
