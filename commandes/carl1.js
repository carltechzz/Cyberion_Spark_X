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
}, async (_0x15f1ce, _0x3e5ed3, _0x4e5276) => {
  const {
    repondre: _0x25d99a,
    ms: _0x27bd71,
    arg: _0x32c859
  } = _0x4e5276;
  if (!_0x32c859 || !_0x32c859[0]) {
    return _0x25d99a("yes I'm listening to you.");
  }
  try {
    const _0x22b0d0 = await traduire(_0x32c859.join(" "), {
      'to': 'en'
    });
    console.log(_0x22b0d0);
    fetch("http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=" + _0x22b0d0).then(_0x206780 => _0x206780.json()).then(_0x6ef2f3 => {
      const _0xee88f0 = _0x6ef2f3.cnt;
      console.log(_0xee88f0);
      traduire(_0xee88f0, {
        'to': 'en'
      }).then(_0x419794 => {
        _0x25d99a(_0x419794);
      })["catch"](_0x2b681d => {
        console.error("Error when translating into French :", _0x2b681d);
        _0x25d99a("Error when translating into French");
      });
    })["catch"](_0xb15a3b => {
      console.error("Error requesting BrainShop :", _0xb15a3b);
      _0x25d99a("Error requesting BrainShop");
    });
  } catch (_0x5e856f) {
    _0x25d99a("oops an error : " + _0x5e856f);
  }
});
zokou({
  'nomCom': 'ai',
  'reaction': '📡',
  'categorie': 'IA'
}, async (_0x396233, _0x253bed, _0x3e9128) => {
  const {
    repondre: _0x31afcb,
    arg: _0x2f7f01,
    ms: _0x442384
  } = _0x3e9128;
  try {
    if (!_0x2f7f01 || _0x2f7f01.length === 0) {
      return _0x31afcb("Please enter the necessary information to generate the image.");
    }
    const _0x594d19 = _0x2f7f01.join(" ");
    const _0x38e45c = await axios.get("https://photooxy.com/effect/create-image?q=" + _0x594d19);
    const _0x58ca43 = _0x38e45c.data;
    if (_0x58ca43.status == 200) {
      const _0x4f47fa = _0x58ca43.result;
      _0x253bed.sendMessage(_0x396233, {
        'image': {
          'url': _0x4f47fa
        },
        'caption': "*powered by AI*"
      }, {
        'quoted': _0x442384
      });
    } else {
      _0x31afcb("Error during image generation.");
    }
  } catch (_0x31471a) {
    console.error("Erreur:", _0x31471a.message || "Une erreur s'est produite");
    _0x31afcb("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "gpt1",
  'reaction': '📡',
  'categorie': 'IA'
}, async (_0x1d5414, _0x2710c0, _0x3f6fb4) => {
  const {
    repondre: _0x2bf0bb,
    arg: _0x56becd,
    ms: _0x20bc5c
  } = _0x3f6fb4;
  try {
    if (!_0x56becd || _0x56becd.length === 0) {
      return _0x2bf0bb("Please ask a me any thing.");
    }
    const _0x15f29c = _0x56becd.join(" ");
    const _0x37a829 = await axios.get("http://api.maher-zubair.tech/ai/chatgpt4?q=" + _0x15f29c);
    const _0x357ba6 = _0x37a829.data;
    if (_0x357ba6) {
      _0x2bf0bb(_0x357ba6.result);
    } else {
      _0x2bf0bb("Error during response generation.");
    }
  } catch (_0x264263) {
    console.error("Erreur:", _0x264263.message || "Une erreur s'est produite");
    _0x2bf0bb("Oops, an error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "gpt",
  'reaction': '🤔',
  'categorie': 'IA'
}, async (_0x1c8da0, _0x81d692, _0x3b0c91) => {
  const {
    repondre: _0xdd8c7,
    arg: _0x2e66a0,
    ms: _0xc33258
  } = _0x3b0c91;
  try {
    if (!_0x2e66a0 || _0x2e66a0.length === 0) {
      return _0xdd8c7("Please ask a question.");
    }
    const _0x14e636 = _0x2e66a0.join(" ");
    const _0x735c6 = await axios.get("https://temp.giftedapis.us.kg/api/ai/gpt4?q=" + _0x14e636 + "&apikey=gifted");
    const _0xc34db6 = _0x735c6.data;
    if (_0xc34db6) {
      _0xdd8c7(_0xc34db6.result);
    } else {
      _0xdd8c7("Error during response generation.");
    }
  } catch (_0x4686a5) {
    console.error("Erreur:", _0x4686a5.message || "Une erreur s'est produite");
    _0xdd8c7("Oops, an error occurred while processing your request.");
  }
});
