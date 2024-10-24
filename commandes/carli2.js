

const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  'nomCom': "video",
  'categorie': "Search",
  'reaction': '🎥'
}, async (_0x3be8a8, _0x260475, _0x2ddee0) => {
  const {
    ms: _0xf2d568,
    repondre: _0x5765e3,
    arg: _0x23aa78
  } = _0x2ddee0;
  if (!_0x23aa78[0]) {
    _0x5765e3("Please insert a song/video name.");
    return;
  }
  try {
    let _0x2dd80 = _0x23aa78.join(" ");
    let _0x1c10b0 = [];
    const _0x1d0dac = await yts(_0x2dd80);
    _0x1c10b0 = _0x1d0dac.videos;
    if (_0x1c10b0 && _0x1c10b0.length > 0) {
      const _0x1143a8 = _0x1c10b0[0].url;
      const _0x34d2a3 = await fetch("https://api.ibrahimadams.us.kg/api/download/ytmp4?url=" + encodeURIComponent(_0x1143a8) + "&apikey=" + "abutech");
      const _0x1a143d = await _0x34d2a3.json();
      if (_0x1a143d.status === 200 && _0x1a143d.success) {
        const _0x25f312 = _0x1a143d.result.download_url;
        const _0x4e94c5 = {
          'image': {
            'url': _0x1c10b0[0].thumbnail
          },
          'caption': "Cyberion-Spark-X Media💻\n\n> CARLTECH 🕵"
        };
        await _0x260475.sendMessage(_0x3be8a8, _0x4e94c5, {
          'quoted': _0xf2d568
        });
        await _0x260475.sendMessage(_0x3be8a8, {
          'video': {
            'url': _0x25f312
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0xf2d568
        });
        _0x5765e3("Successfully downloaded🎧");
      } else {
        _0x5765e3("Searching...⏳");
      }
    } else {
      _0x5765e3("No videos found.");
    }
  } catch (_0x14b7c8) {
    console.error("Error from API:", _0x14b7c8);
    _0x5765e3("Searching...⏳");
  }
});
zokou({
  'nomCom': "play",
  'categorie': "Download",
  'reaction': '🎧'
}, async (_0x200e3f, _0x669cff, _0x3ce048) => {
  const {
    ms: _0x30a3e6,
    repondre: _0x11d5e4,
    arg: _0x3f9439
  } = _0x3ce048;
  if (!_0x3f9439[0]) {
    _0x11d5e4("Please insert a song name.");
    return;
  }
  try {
    let _0x348ac3 = _0x3f9439.join(" ");
    let _0x436d0c = [];
    const _0x33e40e = await yts(_0x348ac3);
    _0x436d0c = _0x33e40e.videos;
    if (_0x436d0c && _0x436d0c.length > 0) {
      const _0x4ffea5 = _0x436d0c[0].url;
      const _0x9f1c73 = await fetch("https://api.ibrahimadams.us.kg/api/download/ytmp3?url=" + encodeURIComponent(_0x4ffea5) + "&apikey=" + "abutech");
      const _0x54366f = await _0x9f1c73.json();
      if (_0x54366f.status === 200 && _0x54366f.success) {
        const _0xf1d162 = _0x54366f.result.download_url;
        const _0x410829 = {
          'image': {
            'url': _0x436d0c[0].thumbnail
          },
          'caption': "Cyberion-Spark-X Media💻\n\n> CARLTECH 🕵"
        };
        await _0x669cff.sendMessage(_0x200e3f, _0x410829, {
          'quoted': _0x30a3e6
        });
        await _0x669cff.sendMessage(_0x200e3f, {
          'audio': {
            'url': _0xf1d162
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x30a3e6
        });
        _0x11d5e4("*Downloded Successfully 🎧*");
      } else {
        _0x11d5e4("Failed to download audio. Please try again later.");
      }
    } else {
      _0x11d5e4("No audio found.");
    }
  } catch (_0x285ee6) {
    console.error("Error from API:", _0x285ee6);
    _0x11d5e4("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  'nomCom': "song",
  'categorie': "Download",
  'reaction': '🎸'
}, async (_0xb1d156, _0x363f48, _0x3a04f9) => {
  const {
    ms: _0x2e946f,
    repondre: _0x5a9cba,
    arg: _0x322628
  } = _0x3a04f9;
  if (!_0x322628[0]) {
    _0x5a9cba("Please insert a song name.");
    return;
  }
  try {
    let _0x37f8e1 = _0x322628.join(" ");
    let _0x24b320 = [];
    const _0x119980 = await yts(_0x37f8e1);
    _0x24b320 = _0x119980.videos;
    if (_0x24b320 && _0x24b320.length > 0) {
      const _0x31d826 = _0x24b320[0].url;
      const _0x5c6ae0 = await fetch("https://api.ibrahimadams.us.kg/api/download/ytmp3?url=" + encodeURIComponent(_0x31d826) + "&apikey=" + "abutech");
      const _0x281503 = await _0x5c6ae0.json();
      if (_0x281503.status === 200 && _0x281503.success) {
        const _0x7b0ded = _0x281503.result.download_url;
        const _0x166efb = {
          'image': {
            'url': _0x24b320[0].thumbnail
          },
          'caption': "Cyberion-Spark-X Media💻\n\n> CARLTECH 🕵"
        };
        await _0x363f48.sendMessage(_0xb1d156, _0x166efb, {
          'quoted': _0x2e946f
        });
        await _0x363f48.sendMessage(_0xb1d156, {
          'audio': {
            'url': _0x7b0ded
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x2e946f
        });
        _0x5a9cba("*Downloded Successfully 🎧*");
      } else {
        _0x5a9cba("Failed to download audio. Please try again later.");
      }
    } else {
      _0x5a9cba("No audio found.");
    }
  } catch (_0x4e49a5) {
    console.error("Error from API:", _0x4e49a5);
    _0x5a9cba("An error occurred while searching or downloading the audio.");
  }
});
