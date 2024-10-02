const {
  zokou: a33_0x421269
} = require("../framework/zokou");
const a33_0x1bedba = require("../set");
const a33_0x3838cb = require('fs');
const a33_0x4c1572 = require("dotenv");
function a33_0x6da88d(_0x168dbc) {
  filePath = "./app.json";
  const _0x193945 = a33_0x3838cb.readFileSync(filePath, "utf-8");
  const _0x9adcef = JSON.parse(_0x193945);
  const _0x33a27b = _0x9adcef.env[_0x168dbc];
  if (_0x33a27b && _0x33a27b.description) {
    return _0x33a27b.description;
  } else {
    return "The environment variable description was not found.";
  }
}
const a33_0x493d24 = {
  "nomCom": "setvar",
  "categorie": "heroku",
  "description": "set a heroku var"
};
a33_0x421269(a33_0x493d24, async (_0x403741, _0x5465ce, _0x563863) => {
  const {
    ms: _0x2d8075,
    repondre: _0x19c2dd,
    superUser: _0x5a9636,
    arg: _0x1463be
  } = _0x563863;
  if (!_0x5a9636) {
    _0x19c2dd("only Mods can use this commande");
    return;
  }
  ;
  if (a33_0x1bedba.HEROKU_APP_NAME == null || a33_0x1bedba.HEROKU_APY_KEY == null) {
    _0x19c2dd("Please fill in the HEROKU_APP_NAME and HEROKU_APY_KEY environment variables");
    return;
  }
  ;
  if (!_0x1463be[0x0] || !_0x1463be.join('').split('=')) {
    _0x19c2dd("Bad format ; Exemple of using :\nsetvar OWNER_NAME=Fredora");
    return;
  }
  ;
  const _0x1109d3 = _0x1463be.join(" ");
  const _0x51e9ac = require("heroku-client");
  const _0x459d93 = {
    token: a33_0x1bedba.HEROKU_APY_KEY
  };
  const _0x5c5ee2 = new _0x51e9ac(_0x459d93);
  let _0x3e16c3 = "/apps/" + a33_0x1bedba.HEROKU_APP_NAME;
  await _0x5c5ee2.patch(_0x3e16c3 + "/config-vars", {
    'body': {
      [_0x1109d3.split('=')[0x0]]: _0x1109d3.split('=')[0x1]
    }
  });
  await _0x19c2dd("Heroku var changes , rebootings....");
});
const a33_0x282db0 = {
  "nomCom": "getallvar",
  "categorie": "heroku",
  "description": "get all heroku vars"
};
a33_0x421269(a33_0x282db0, async (_0x1cf306, _0x2910f4, _0xfd0bc8) => {
  const {
    ms: _0x5eb022,
    repondre: _0xbc1802,
    superUser: _0x23ba7a,
    arg: _0x47cc52
  } = _0xfd0bc8;
  if (!_0x23ba7a) {
    _0xbc1802("only mods can use this commande");
    return;
  }
  ;
  if (a33_0x1bedba.HEROKU_APP_NAME == null || a33_0x1bedba.HEROKU_APY_KEY == null) {
    _0xbc1802("Please fill in the HEROKU_APP_NAME and HEROKU_APY_KEY environment variables");
    return;
  }
  ;
  const _0xb44000 = require("heroku-client");
  const _0x3a1341 = {
    token: a33_0x1bedba.HEROKU_APY_KEY
  };
  const _0x5c1d4b = new _0xb44000(_0x3a1341);
  let _0x207d91 = "/apps/" + a33_0x1bedba.HEROKU_APP_NAME;
  let _0x2d8a6c = await _0x5c1d4b.get(_0x207d91 + "/config-vars");
  let _0x7706bf = "*Heroku Vars list *\n\n";
  for (vr in _0x2d8a6c) {
    _0x7706bf += "🍁 *" + vr + "* " + "= " + _0x2d8a6c[vr] + "\n";
  }
  _0xbc1802(_0x7706bf);
});
const a33_0x472cc0 = {
  "nomCom": "getvar",
  "categorie": "heroku",
  "description": "get a heroku var"
};
a33_0x421269(a33_0x472cc0, async (_0x4046fa, _0x11f623, _0x157ad5) => {
  const {
    ms: _0x178c1f,
    repondre: _0xc2ac7c,
    superUser: _0x169c70,
    arg: _0x12de10
  } = _0x157ad5;
  if (!_0x169c70) {
    _0xc2ac7c("Only Mods can use this command");
    return;
  }
  ;
  if (a33_0x1bedba.HEROKU_APP_NAME == null || a33_0x1bedba.HEROKU_APY_KEY == null) {
    _0xc2ac7c("Please fill in the HEROKU_APP_NAME and HEROKU_APY_KEY environment variables");
    return;
  }
  ;
  if (!_0x12de10[0x0]) {
    _0xc2ac7c("insert the variable name in capital letter");
    return;
  }
  ;
  try {
    const _0x564495 = require("heroku-client");
    const _0xcafea1 = {
      token: a33_0x1bedba.HEROKU_APY_KEY
    };
    const _0x3edb67 = new _0x564495(_0xcafea1);
    let _0x575583 = "/apps/" + a33_0x1bedba.HEROKU_APP_NAME;
    let _0xe26b34 = await _0x3edb67.get(_0x575583 + "/config-vars");
    for (vr in _0xe26b34) {
      if (_0x12de10.join(" ") === vr) {
        return _0xc2ac7c(vr + "= " + _0xe26b34[vr]);
      }
    }
  } catch (_0x421a6d) {
    _0xc2ac7c("Error" + _0x421a6d);
  }
});
const a33_0x2aae5b = {
  "nomCom": "settings",
  "categorie": "Heroku",
  "description": "edit settings of the bot"
};
a33_0x421269(a33_0x2aae5b, async (_0x5c5f2b, _0x21565d, _0x4c4e06) => {
  const {
    ms: _0x25a7e7,
    repondre: _0x4a46e8,
    superUser: _0x188f30,
    auteurMessage: _0x2f9cd4
  } = _0x4c4e06;
  if (!_0x188f30) {
    _0x4a46e8("command reserved for bot owner");
    return;
  }
  ;
  const _0x5072c6 = {
    "nom": "AUTO_READ_STATUS",
    "choix": ["yes", 'no']
  };
  const _0x118b4b = {
    "nom": "AUTO_DOWNLOAD_STATUS",
    "choix": ["yes", 'no']
  };
  const _0x4cba0b = {
    "nom": "PM_PERMIT",
    "choix": ["yes", 'no']
  };
  const _0x1e64e7 = {
    "nom": "PUBLIC_MODE",
    "choix": ["yes", 'no']
  };
  const _0x1e12e3 = {
    "nom": "STARTING_BOT_MESSAGE",
    "choix": ["yes", 'no']
  };
  const _0x254834 = {
    "nom": "ANTI_VIEW_ONCE",
    "choix": ["yes", 'no']
  };
  const _0x9a5fe3 = {
    "nom": "PRESENCE",
    "choix": ['1', '2', '3', '4']
  };
  const _0x2954a9 = {
    "nom": "PM_CHATBOT",
    "choix": ["yes", 'no']
  };
  const _0x4cf0a8 = {
    "nom": "ANTI_COMMAND_SPAM",
    "choix": ["yes", 'no']
  };
  let _0x18de4d = [_0x5072c6, _0x118b4b, _0x4cba0b, _0x1e64e7, _0x1e12e3, _0x254834, _0x9a5fe3, _0x2954a9, _0x4cf0a8];
  function _0x5b19ed(_0x4012da, _0x557b6e) {
    if (_0x4012da.nom < _0x557b6e.nom) {
      return -0x1;
    }
    if (_0x4012da.nom > _0x557b6e.nom) {
      return 0x1;
    }
    return 0x0;
  }
  _0x18de4d.sort(_0x5b19ed);
  let _0x361d6f = "    ╭─────  ──────╮\n              settings\n    ╰─────  ──────╯\n\n";
  for (v = 0x0; v < _0x18de4d.length; v++) {
    _0x361d6f += v + 0x1 + "- *" + _0x18de4d[v].nom + "*\n";
  }
  _0x361d6f += "\nChoose a variable by its number";
  const _0x2970a9 = {
    text: _0x361d6f
  };
  const _0x2bae4a = {
    quoted: _0x25a7e7
  };
  let _0x265876 = await _0x21565d.sendMessage(_0x5c5f2b, _0x2970a9, _0x2bae4a);
  console.log(_0x265876);
  const _0x11d6e5 = {
    "chatJid": _0x5c5f2b,
    "sender": _0x2f9cd4,
    "timeout": 0xea60,
    "filter": _0x470db1 => _0x470db1.message.extendedTextMessage && _0x470db1.message.extendedTextMessage.contextInfo.stanzaId == _0x265876.key.id && _0x470db1.message.extendedTextMessage.text > 0x0 && _0x470db1.message.extendedTextMessage.text <= _0x18de4d.length
  };
  let _0x336688 = await _0x21565d.awaitForMessage(_0x11d6e5);
  let _0x208b64 = _0x336688.message.extendedTextMessage.text - 0x1;
  let {
    nom: _0x2adfeb,
    choix: _0x138b67
  } = _0x18de4d[_0x208b64];
  let _0x304cb4 = "    ╭──────▭▬──────╮\n              settings\n    ╰──────▭▬──────╯\n\n";
  _0x304cb4 += "*Name* :" + _0x2adfeb + "\n";
  _0x304cb4 += "*Description* :" + a33_0x6da88d(_0x2adfeb) + "\n\n";
  _0x304cb4 += "┌────── ⋆⋅☆⋅⋆ ──────┐\n\n";
  for (i = 0x0; i < _0x138b67.length; i++) {
    _0x304cb4 += "* *" + (i + 0x1) + "* => " + _0x138b67[i] + "\n";
  }
  _0x304cb4 += "\n└────── ⋆⋅☆⋅⋆ ──────┘\n\nPlease reply on message with the number corresponding to your choice";
  const _0x257712 = {
    text: _0x304cb4
  };
  const _0x1bc136 = {
    quoted: _0x336688
  };
  let _0x45ac89 = await _0x21565d.sendMessage(_0x5c5f2b, _0x257712, _0x1bc136);
  const _0x4cb0c7 = {
    "chatJid": _0x5c5f2b,
    "sender": _0x2f9cd4,
    "timeout": 0xea60,
    "filter": _0x10ca7f => _0x10ca7f.message.extendedTextMessage && _0x10ca7f.message.extendedTextMessage.contextInfo.stanzaId == _0x45ac89.key.id && _0x10ca7f.message.extendedTextMessage.text > 0x0 && _0x10ca7f.message.extendedTextMessage.text <= _0x138b67.length
  };
  let _0x260c3c = await _0x21565d.awaitForMessage(_0x4cb0c7);
  let _0x1cfebc = _0x260c3c.message.extendedTextMessage.text - 0x1;
  if (a33_0x1bedba.HEROKU == 'no') {
    try {
      const _0x11aff5 = a33_0x4c1572.parse(a33_0x3838cb.readFileSync("set.env", {
        'encoding': "utf-8"
      }));
      _0x11aff5[_0x2adfeb] = _0x138b67[_0x1cfebc];
      const _0x4e5a09 = Object.keys(_0x11aff5).map(_0x407821 => _0x407821 + '=' + _0x11aff5[_0x407821]).join("\n");
      a33_0x3838cb.writeFileSync("set.env", _0x4e5a09);
      _0x4a46e8("variable refresh\n restart in progress....");
      const {
        exec: _0x1d87ac
      } = require("child_process");
      _0x1d87ac("pm2 restart all");
    } catch (_0x4ba7a2) {
      console.error(_0x4ba7a2);
      _0x4a46e8("Error");
    }
  } else {
    if (a33_0x1bedba.HEROKU_APP_NAME == null || a33_0x1bedba.HEROKU_APY_KEY == null) {
      _0x4a46e8("Please fill in the HEROKU_APP_NAME and HEROKU_APY_KEY environment variables");
      return;
    }
    ;
    const _0x10c8b1 = require("heroku-client");
    const _0x1d4754 = {
      token: a33_0x1bedba.HEROKU_APY_KEY
    };
    const _0x451bc3 = new _0x10c8b1(_0x1d4754);
    let _0x13ab57 = "/apps/" + a33_0x1bedba.HEROKU_APP_NAME;
    const _0x2eb99b = {
      _0x2adfeb: _0x138b67[_0x1cfebc]
    };
    const _0x47586e = {
      "body": _0x2eb99b
    };
    await _0x451bc3.patch(_0x13ab57 + "/config-vars", _0x47586e);
    await _0x4a46e8("variable refresh, restart in progress....");
  }
});
function a33_0x362207(_0x135787, _0xe1cb60) {
  const _0x1aa74b = function () {
    let _0x524c22 = true;
    return function (_0x2d7dc5, _0x47d535) {
      const _0x26fd35 = _0x524c22 ? function () {
        if (_0x47d535) {
          const _0x14f341 = _0x47d535.apply(_0x2d7dc5, arguments);
          _0x47d535 = null;
          return _0x14f341;
        }
      } : function () {};
      _0x524c22 = false;
      return _0x26fd35;
    };
  }();
  const _0x53fbc1 = _0x1aa74b(this, function () {
    return _0x53fbc1.toString().search("(((.+)+)+)+$").toString().constructor(_0x53fbc1).search("(((.+)+)+)+$");
  });
  _0x53fbc1();
  const _0x23cacb = {
    "nomCom": _0x135787,
    "categorie": "Heroku"
  };
  a33_0x421269(_0x23cacb, async (_0x2244e2, _0x9bfe50, _0x5191d6) => {
    const {
      arg: _0x45461e,
      superUser: _0x423d5e,
      repondre: _0x38b02b
    } = _0x5191d6;
    if (!_0x423d5e) {
      _0x38b02b("command reserved for bot owner");
      return;
    }
    ;
    if (!_0x45461e[0x0]) {
      _0x38b02b(a33_0x6da88d(_0xe1cb60));
      return;
    }
    ;
    if (a33_0x1bedba.HEROKU == 'no') {
      try {
        const _0x409aa8 = {
          encoding: "utf-8"
        };
        const _0x532bb1 = a33_0x4c1572.parse(a33_0x3838cb.readFileSync("set.env", _0x409aa8));
        _0x532bb1[_0xe1cb60] = _0x45461e.join(" ");
        const _0x349364 = Object.keys(_0x532bb1).map(_0x3ed9a3 => _0x3ed9a3 + '=' + _0x532bb1[_0x3ed9a3]).join("\n");
        a33_0x3838cb.writeFileSync("set.env", _0x349364);
        _0x38b02b("variable refresh\n restart in progress....");
        const {
          exec: _0x452831
        } = require("child_process");
        _0x452831("pm2 restart all");
      } catch (_0x2c99b7) {
        console.log(_0x2c99b7);
        _0x38b02b("Error");
      }
    } else {
      if (a33_0x1bedba.HEROKU_APP_NAME == null || a33_0x1bedba.HEROKU_APY_KEY == null) {
        _0x38b02b("Please fill in the HEROKU_APP_NAME and HEROKU_APY_KEY environment variables");
        return;
      }
      ;
      const _0x9378f1 = require("heroku-client");
      const _0x51782c = {
        token: a33_0x1bedba.HEROKU_APY_KEY
      };
      const _0x3553c0 = new _0x9378f1(_0x51782c);
      let _0x545ceb = "/apps/" + a33_0x1bedba.HEROKU_APP_NAME;
      await _0x3553c0.patch(_0x545ceb + "/config-vars", {
        'body': {
          [_0xe1cb60]: _0x45461e.join(" ")
        }
      });
      await _0x38b02b("variable refresh, restart in progress....");
    }
  });
}
;
a33_0x362207("setprefix", "PREFIX");
a33_0x362207("linkmenu", "BOT_MENU_LINKS");
a33_0x362207("warncount", "WARN_COUNT");
a33_0x362207("botname", "BOT_NAME");
