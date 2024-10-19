

const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  'nomCom': "video",
  'categorie': "Search",
  'reaction': '🎥'
}, async (_0x19d042, _0x21e0bd, _0x38a367) => {
  const {
    ms: _0x82f8d5,
    repondre: _0x496098,
    arg: _0x3c0f10
  } = _0x38a367;
  if (!_0x3c0f10[0]) {
    _0x496098("Please insert a song/video name.");
    return;
  }
  try {
    let _0xd871ce = _0x3c0f10.join(" ");
    let _0x40c5a6 = [];
    const _0x393f1d = await yts(_0xd871ce);
    _0x40c5a6 = _0x393f1d.videos;
    if (_0x40c5a6 && _0x40c5a6.length > 0) {
      const _0x2a69e9 = _0x40c5a6[0].url;
      const _0x11139b = await fetch("https://api.ibrahimadams.us.kg/api/download/ytmp4?url=" + encodeURIComponent(_0x2a69e9) + "&apikey=" + "my-vriend");
      const _0x978f82 = await _0x11139b.json();
      if (_0x978f82.status === 200 && _0x978f82.success) {
        const _0x4002e5 = _0x978f82.result.download_url;
        const _0xdf0eba = {
          'image': {
            'url': _0x40c5a6[0].thumbnail
          },
          'caption': "YOUTUBE SEARCH\n\n ©CarlTech"
        };
        await _0x21e0bd.sendMessage(_0x19d042, _0xdf0eba, {
          'quoted': _0x82f8d5
        });
        await _0x21e0bd.sendMessage(_0x19d042, {
          'video': {
            'url': _0x4002e5
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x82f8d5
        });
        _0x496098("Successfully downloaded🎧");
      } else {
        _0x496098("Searching...⏳");
      }
    } else {
      _0x496098("No videos found.");
    }
  } catch (_0x5429c8) {
    console.error("Error from API:", _0x5429c8);
    _0x496098("Searching...⏳");
  }
});
zokou({
  'nomCom': "play",
  'categorie': "Download",
  'reaction': '🎧'
}, async (_0x28330b, _0x674c83, _0x26f530) => {
  const {
    ms: _0x121db2,
    repondre: _0x3b166a,
    arg: _0x2dde61
  } = _0x26f530;
  if (!_0x2dde61[0]) {
    _0x3b166a("Please insert a song name.");
    return;
  }
  try {
    let _0x1d6f93 = _0x2dde61.join(" ");
    let _0x43f5b3 = [];
    const _0x328a71 = await yts(_0x1d6f93);
    _0x43f5b3 = _0x328a71.videos;
    if (_0x43f5b3 && _0x43f5b3.length > 0) {
      const _0x4ee0b3 = _0x43f5b3[0].url;
      const _0x3a10c1 = await fetch("https://api.ibrahimadams.us.kg/api/download/ytmp3?url=" + encodeURIComponent(_0x4ee0b3) + "&apikey=" + "my-vriend");
      const _0xca247b = await _0x3a10c1.json();
      if (_0xca247b.status === 200 && _0xca247b.success) {
        const _0x65c4e9 = _0xca247b.result.download_url;
        const _0x1d9f98 = {
          'image': {
            'url': _0x43f5b3[0].thumbnail
          },
          'caption': "YOUTUBE SEARCH\n\n ©CarlTech"
        };
        await _0x674c83.sendMessage(_0x28330b, _0x1d9f98, {
          'quoted': _0x121db2
        });
        await _0x674c83.sendMessage(_0x28330b, {
          'audio': {
            'url': _0x65c4e9
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x121db2
        });
        _0x3b166a("*Downloded Successfully 🎧*");
      } else {
        _0x3b166a("Failed to download audio. Please try again later.");
      }
    } else {
      _0x3b166a("No audio found.");
    }
  } catch (_0x2f5f37) {
    console.error("Error from API:", _0x2f5f37);
    _0x3b166a("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  'nomCom': "song",
  'categorie': "Download",
  'reaction': '🎸'
}, async (_0x50fcae, _0x203751, _0x2f27d3) => {
  const {
    ms: _0x370554,
    repondre: _0x380888,
    arg: _0x21d0de
  } = _0x2f27d3;
  if (!_0x21d0de[0]) {
    _0x380888("Please insert a song name.");
    return;
  }
  try {
    let _0x5a2973 = _0x21d0de.join(" ");
    let _0x57ffe2 = [];
    const _0x29369e = await yts(_0x5a2973);
    _0x57ffe2 = _0x29369e.videos;
    if (_0x57ffe2 && _0x57ffe2.length > 0) {
      const _0x56c65e = _0x57ffe2[0].url;
      const _0x70514c = await fetch("https://api.ibrahimadams.us.kg/api/download/ytmp3?url=" + encodeURIComponent(_0x56c65e) + "&apikey=" + "my-vriend");
      const _0x52ca05 = await _0x70514c.json();
      if (_0x52ca05.status === 200 && _0x52ca05.success) {
        const _0x34b865 = _0x52ca05.result.download_url;
        const _0x3eaa0a = {
          'image': {
            'url': _0x57ffe2[0].thumbnail
          },
          'caption': "YOUTUBE SEARCH\n\n ©CarlTech"
        };
        await _0x203751.sendMessage(_0x50fcae, _0x3eaa0a, {
          'quoted': _0x370554
        });
        await _0x203751.sendMessage(_0x50fcae, {
          'audio': {
            'url': _0x34b865
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x370554
        });
        _0x380888("*Downloded Successfully 🎧*");
      } else {
        _0x380888("Failed to download audio. Please try again later.");
      }
    } else {
      _0x380888("No audio found.");
    }
  } catch (_0x38e14f) {
    console.error("Error from API:", _0x38e14f);
    _0x380888("An error occurred while searching or downloading the audio.");
  }
});
