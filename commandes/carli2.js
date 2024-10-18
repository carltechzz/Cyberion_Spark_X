

const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  'nomCom': "video",
  'categorie': "Search",
  'reaction': '🎥'
}, async (_0x2cd8f2, _0x442076, _0x49d588) => {
  const {
    ms: _0x474b3a,
    repondre: _0x5bc441,
    arg: _0x59f97d
  } = _0x49d588;
  if (!_0x59f97d[0]) {
    _0x5bc441("Please insert a song/video name.");
    return;
  }
  try {
    let _0xd4099b = _0x59f97d.join(" ");
    let _0xe153c7 = [];
    const _0x29014b = await yts(_0xd4099b);
    _0xe153c7 = _0x29014b.videos;
    if (_0xe153c7 && _0xe153c7.length > 0) {
      const _0x3ad077 = _0xe153c7[0].url;
      const _0x1bdc22 = await fetch("https://api.ibrahimadams.us.kg/api/download/ytmp4?url=" + encodeURIComponent(_0x3ad077) + "&apikey=" + "my-friend");
      const _0x1af67b = await _0x1bdc22.json();
      if (_0x1af67b.status === 200 && _0x1af67b.success) {
        const _0x2ee5b2 = _0x1af67b.result.download_url;
        const _0x1ca214 = {
          'image': {
            'url': _0xe153c7[0].thumbnail
          },
          'caption': "YOUTUBE SEARCH\n\n ©CarlTech"
        };
        await _0x442076.sendMessage(_0x2cd8f2, _0x1ca214, {
          'quoted': _0x474b3a
        });
        await _0x442076.sendMessage(_0x2cd8f2, {
          'video': {
            'url': _0x2ee5b2
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x474b3a
        });
        _0x5bc441("Successfully downloaded🎧");
      } else {
        _0x5bc441("Searching...⏳");
      }
    } else {
      _0x5bc441("No videos found.");
    }
  } catch (_0x7d87b8) {
    console.error("Error from API:", _0x7d87b8);
    _0x5bc441("Searching...⏳");
  }
});
zokou({
  'nomCom': "play",
  'categorie': "Download",
  'reaction': '🎧'
}, async (_0x274eba, _0x30afe6, _0x2b55b5) => {
  const {
    ms: _0x2dd537,
    repondre: _0x22d0b5,
    arg: _0x3a9c33
  } = _0x2b55b5;
  if (!_0x3a9c33[0]) {
    _0x22d0b5("Please insert a song name.");
    return;
  }
  try {
    let _0x54a544 = _0x3a9c33.join(" ");
    let _0x2332e5 = [];
    const _0x5914a7 = await yts(_0x54a544);
    _0x2332e5 = _0x5914a7.videos;
    if (_0x2332e5 && _0x2332e5.length > 0) {
      const _0x32188d = _0x2332e5[0].url;
      const _0x4966f3 = await fetch("https://api.ibrahimadams.us.kg/api/download/ytmp3?url=" + encodeURIComponent(_0x32188d) + "&apikey=" + "my-friend");
      const _0x25ac13 = await _0x4966f3.json();
      if (_0x25ac13.status === 200 && _0x25ac13.success) {
        const _0x33a4c1 = _0x25ac13.result.download_url;
        const _0x40705b = {
          'image': {
            'url': _0x2332e5[0].thumbnail
          },
          'caption': "YOUTUBE SEARCH\n\n  ©CarlTech"
        };
        await _0x30afe6.sendMessage(_0x274eba, _0x40705b, {
          'quoted': _0x2dd537
        });
        await _0x30afe6.sendMessage(_0x274eba, {
          'audio': {
            'url': _0x33a4c1
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x2dd537
        });
        _0x22d0b5("*Downloded Successfully 🎧*");
      } else {
        _0x22d0b5("Failed to download audio. Please try again later.");
      }
    } else {
      _0x22d0b5("No audio found.");
    }
  } catch (_0x3775e0) {
    console.error("Error from API:", _0x3775e0);
    _0x22d0b5("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  'nomCom': "song",
  'categorie': "Download",
  'reaction': '🎸'
}, async (_0x5332a2, _0xba5c2d, _0x1d6e12) => {
  const {
    ms: _0x38cbc2,
    repondre: _0x5172bb,
    arg: _0x289ed5
  } = _0x1d6e12;
  if (!_0x289ed5[0]) {
    _0x5172bb("Please insert a song name.");
    return;
  }
  try {
    let _0x5dff02 = _0x289ed5.join(" ");
    let _0x277e5c = [];
    const _0x582e93 = await yts(_0x5dff02);
    _0x277e5c = _0x582e93.videos;
    if (_0x277e5c && _0x277e5c.length > 0) {
      const _0x5774b1 = _0x277e5c[0].url;
      const _0x212489 = await fetch("https://api.ibrahimadams.us.kg/api/download/ytmp3?url=" + encodeURIComponent(_0x5774b1) + "&apikey=" + "my-friend");
      const _0x3e3fe5 = await _0x212489.json();
      if (_0x3e3fe5.status === 200 && _0x3e3fe5.success) {
        const _0x17e8bf = _0x3e3fe5.result.download_url;
        const _0x773181 = {
          'image': {
            'url': _0x277e5c[0].thumbnail
          },
          'caption': "YOUTUBE SEARCH\n\n  ©CarlTech"
        };
        await _0xba5c2d.sendMessage(_0x5332a2, _0x773181, {
          'quoted': _0x38cbc2
        });
        await _0xba5c2d.sendMessage(_0x5332a2, {
          'audio': {
            'url': _0x17e8bf
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x38cbc2
        });
        _0x5172bb("*Downloded Successfully 🎧*");
      } else {
        _0x5172bb("Failed to download audio. Please try again later.");
      }
    } else {
      _0x5172bb("No audio found.");
    }
  } catch (_0xa329aa) {
    console.error("Error from API:", _0xa329aa);
    _0x5172bb("An error occurred while searching or downloading the audio.");
  }
});
