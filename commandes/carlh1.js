



































const a41_0x46f0da = function () {
  let _0x403289 = true;
  return function (_0x2304bd, _0x7cc03b) {
    const _0x5194fb = _0x403289 ? function () {
      if (_0x7cc03b) {
        const _0x54ec9e = _0x7cc03b.apply(_0x2304bd, arguments);
        _0x7cc03b = null;
        return _0x54ec9e;
      }
    } : function () {};
    _0x403289 = false;
    return _0x5194fb;
  };
}();
const a41_0x3f6522 = a41_0x46f0da(this, function () {
  return a41_0x3f6522.toString().search("(((.+)+)+)+$").toString().constructor(a41_0x3f6522).search("(((.+)+)+)+$");
});
a41_0x3f6522();
const {
  zokou: a41_0x8d2a1b
} = require("../framework/zokou");
const a41_0xd15356 = require("../set");
const a41_0x27b897 = {
  "nomCom": "profile",
  "categorie": "Fun",
  "desc": "get profile picture and status of a user"
};
a41_0x8d2a1b(a41_0x27b897, async (_0x1c336a, _0x39b697, _0xf20a9d) => {
  const {
    ms: _0x5d20dd,
    arg: _0x4e893f,
    repondre: _0x49e2dd,
    auteurMessage: _0x2245c2,
    nomAuteurMessage: _0x3b0e7b,
    msgRepondu: _0x149198,
    auteurMsgRepondu: _0x4c192b
  } = _0xf20a9d;
  let _0x45d036 = null;
  let _0x3d33da = null;
  if (!_0x149198) {
    _0x45d036 = _0x2245c2;
    _0x3d33da = _0x3b0e7b;
    try {
      ppUrl = await _0x39b697.profilePictureUrl(_0x45d036, "image");
    } catch {
      ppUrl = a41_0xd15356.IMAGE_MENU;
    }
    ;
    const _0x5bc4a4 = await _0x39b697.fetchStatus(_0x45d036);
    const _0x27c3d1 = {
      "url": ppUrl
    };
    mess = {
      'image': _0x27c3d1,
      'caption': "*Nom :* " + _0x3d33da + "\n*Status :*\n" + _0x5bc4a4.status
    };
  } else {
    _0x45d036 = _0x4c192b;
    _0x3d33da = '@' + _0x4c192b.split('@')[0x0];
    try {
      ppUrl = await _0x39b697.profilePictureUrl(_0x45d036, "image");
    } catch {
      ppUrl = a41_0xd15356.IMAGE_MENU;
    }
    ;
    const _0x7f5f65 = await _0x39b697.fetchStatus(_0x45d036);
    const _0x2a12b8 = {
      url: ppUrl
    };
    const _0x4dd04f = {
      "image": _0x2a12b8,
      "caption": "*Name :* " + _0x3d33da + "\n*Status :*\n" + _0x7f5f65.status,
      "mentions": [_0x4c192b]
    };
    mess = _0x4dd04f;
  }
  ;
  const _0x3f344e = {
    "quoted": _0x5d20dd
  };
  _0x39b697.sendMessage(_0x1c336a, mess, _0x3f344e);
});
