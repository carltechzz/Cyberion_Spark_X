


const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  'nomCom': "video",
  'categorie': "Search",
  'reaction': '🎥'
}, async (_0xd98f60, _0x4d0f9a, _0x161b4a) => {
  const {
    ms: _0x4e5cdd,
    repondre: _0xde6a4e,
    arg: _0x5053eb
  } = _0x161b4a;
  if (!_0x5053eb[0]) {
    _0xde6a4e("Please insert a song/video name.");
    return;
  }
  try {
    let _0xbefa7 = _0x5053eb.join(" ");
    let _0x5dcfe8 = [];
    const _0xddeb06 = await yts(_0xbefa7);
    _0x5dcfe8 = _0xddeb06.videos;
    if (_0x5dcfe8 && _0x5dcfe8.length > 0) {
      const _0x36dbfc = _0x5dcfe8[0].url;
      const _0xc5da0f = await fetch("https://api.ibrahimadams.us.kg/api/download/ytmp4?url=" + encodeURIComponent(_0x36dbfc) + "&apikey=" + "abutech");
      const _0x1e764e = await _0xc5da0f.json();
      if (_0x1e764e.status === 200 && _0x1e764e.success) {
        const _0x4e57d4 = _0x1e764e.result.download_url;
        const _0x2bbae8 = {
          'image': {
            'url': _0x5dcfe8[0].thumbnail
          },
          'caption': "YOUTUBE SEARCH\n\n ©CarlTech🕵"
        };
        await _0x4d0f9a.sendMessage(_0xd98f60, _0x2bbae8, {
          'quoted': _0x4e5cdd
        });
        await _0x4d0f9a.sendMessage(_0xd98f60, {
          'video': {
            'url': _0x4e57d4
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x4e5cdd
        });
        _0xde6a4e("Successfully downloaded🎧");
      } else {
        _0xde6a4e("Searching...⏳");
      }
    } else {
      _0xde6a4e("No videos found.");
    }
  } catch (_0x435b04) {
    console.error("Error from API:", _0x435b04);
    _0xde6a4e("Searching...⏳");
  }
});
zokou({
  'nomCom': "play",
  'categorie': "Download",
  'reaction': '🎧'
}, async (_0x54c224, _0x588535, _0x4113a4) => {
  const {
    ms: _0x176d57,
    repondre: _0x503489,
    arg: _0x161e48
  } = _0x4113a4;
  if (!_0x161e48[0]) {
    _0x503489("Please insert a song name.");
    return;
  }
  try {
    let _0x3f6de6 = _0x161e48.join(" ");
    let _0x210c78 = [];
    const _0x59ffd8 = await yts(_0x3f6de6);
    _0x210c78 = _0x59ffd8.videos;
    if (_0x210c78 && _0x210c78.length > 0) {
      const _0x3c94ab = _0x210c78[0].url;
      const _0xb9018a = await fetch("https://api.ibrahimadams.us.kg/api/download/ytmp3?url=" + encodeURIComponent(_0x3c94ab) + "&apikey=" + "abutech");
      const _0x4e552e = await _0xb9018a.json();
      if (_0x4e552e.status === 200 && _0x4e552e.success) {
        const _0x33ca67 = _0x4e552e.result.download_url;
        const _0x4af95a = {
          'image': {
            'url': _0x210c78[0].thumbnail
          },
          'caption': "YOUTUBE SEARCH\n\n ©CarlTech🕵"
        };
        await _0x588535.sendMessage(_0x54c224, _0x4af95a, {
          'quoted': _0x176d57
        });
        await _0x588535.sendMessage(_0x54c224, {
          'audio': {
            'url': _0x33ca67
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x176d57
        });
        _0x503489("*Downloded Successfully 🎧*");
      } else {
        _0x503489("Failed to download audio. Please try again later.");
      }
    } else {
      _0x503489("No audio found.");
    }
  } catch (_0x22ac35) {
    console.error("Error from API:", _0x22ac35);
    _0x503489("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  'nomCom': "song",
  'categorie': "Download",
  'reaction': '🎸'
}, async (_0x3edbac, _0x3a4979, _0x5e8cbb) => {
  const {
    ms: _0x5c36df,
    repondre: _0x1f7727,
    arg: _0x5aacbf
  } = _0x5e8cbb;
  if (!_0x5aacbf[0]) {
    _0x1f7727("Please insert a song name.");
    return;
  }
  try {
    let _0x225035 = _0x5aacbf.join(" ");
    let _0xc59045 = [];
    const _0x5abb68 = await yts(_0x225035);
    _0xc59045 = _0x5abb68.videos;
    if (_0xc59045 && _0xc59045.length > 0) {
      const _0x25de29 = _0xc59045[0].url;
      const _0x31e693 = await fetch("https://api.ibrahimadams.us.kg/api/download/ytmp3?url=" + encodeURIComponent(_0x25de29) + "&apikey=" + "abutech");
      const _0x1c78cf = await _0x31e693.json();
      if (_0x1c78cf.status === 200 && _0x1c78cf.success) {
        const _0x54c3d3 = _0x1c78cf.result.download_url;
        const _0x1f21ac = {
          'image': {
            'url': _0xc59045[0].thumbnail
          },
          'caption': "YOUTUBE SEARCH\n\n ©CarlTech🕵"
        };
        await _0x3a4979.sendMessage(_0x3edbac, _0x1f21ac, {
          'quoted': _0x5c36df
        });
        await _0x3a4979.sendMessage(_0x3edbac, {
          'audio': {
            'url': _0x54c3d3
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x5c36df
        });
        _0x1f7727("*Downloded Successfully 🎧*");
      } else {
        _0x1f7727("Failed to download audio. Please try again later.");
      }
    } else {
      _0x1f7727("No audio found.");
    }
  } catch (_0x44d7ee) {
    console.error("Error from API:", _0x44d7ee);
    _0x1f7727("An error occurred while searching or downloading the audio.");
  }
});
