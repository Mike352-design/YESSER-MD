const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU9LbzBTSkRLQ21hNjBBS0srNGY4cWxlbm8vdEdkTk1lWTl4dVgyd2ozVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWNud2lPK1dUdzJnUzFiN0l4WTU3U2QrMEJzN3ZabGo0TWpONHd5OC9BND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRDhpdGhhQU5ISTArMFBpV1pCVmhBU3RhcXF0MnRaUWQ3d01ySjg4bms4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSTy9zUGlaNzhiZ0JXZ3QwKzZrY2hib0JSRFRRTGxDcmlmcFduNUNsYkJrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9IcVpSZml3WEVvcHJqVjltdjJ5blJkR29PRDNuYmZ4N0cybElhOUIzbmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhuYURpbDJMQU4vVmtoek4zclZzenM3eEN6RVViQU1hcWJUZDBWSzVhZ289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUlEbThDUzBvdXdFakltWi9McFQyL0NRNWtjQ0V1cVVJT2tPRkpQaUxtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjRhMVBlcVByMEtMQ0xmUzJ0ZFRjaGtaR1A4SlVlaGdsQnhWaE10eFNYaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVFM1dWbWIwZFFPVGFjVFVGSk0zbnVYMXJ4TzdJeXJSdVBjSG55ZVhLTTFPbFFsQ1FKcEFUdzFhY2ozQ21iREw2bDFSY0twMTlPaHNueXZ1cHdLV2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE5LCJhZHZTZWNyZXRLZXkiOiJNOGVxblFLcktuV0Jnb0FvRkVML1JwWHp3dGIvc1luOGFpWDhuOXdlK2l3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSdk5Odk43S1NwaWpKVWI2Z19DcWtBIiwicGhvbmVJZCI6ImU0Nzg2Y2MwLTVhZjUtNGJhMy1iZmMyLThiNzExMWQyNmYzYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrUGlyTVcyTnNWK1N5cVVzRy9GWTF2dXE4N1U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSlBCOFBzdFZjcTZYSmRLOVVuL0NQMVgvUkxBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVISzNBOUNYIiwibWUiOnsiaWQiOiIyNTQxMDQ5MTYwOTE6MzJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1AyeW1aQUNFT3EweTdzR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFvWkhvTS9iVjJ3T2dnYXNQcDJNZVFOODNkcU1BZjlNNmh1SlRMMDdHemM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkcrZUJmRWFtQUZFelF6b2d5dU5BeHFaYTBna3FtQ2luNDBjbDFmbUtHVzdqTmMrZGcwZXhqeWlsRGtvV3pLMWxpZ2RxRWdvU2o3Z2ZUbDRkbTJHekF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlM0JPUC9HWjJnM1d5c1lsMnlJaEk5dmQrdHlqMVRjTGdiSUVEdFJpSVVoaXN4YXhITExxVnlCZ2Z4Tm92TnlpQ25NZGx3YmNFNk4rMS9OUU05Q3FnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDEwNDkxNjA5MTozMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVS0dSNkRQMjFkc0RvSUdyRDZkakhrRGZOM2FqQUgvVE9vYmlVeTlPeHMzIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1NTgwMjgwfQ==",
    CAPTION: process.env.CAPTION || "code by Alvino",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/3kdkf6.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII Alvinn IM ONLINE I'M YESSER-MD WHATSAPP BOT 👍🤠",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    FAKE_TYPING: process.env.FAKE_TYPING || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "yessertech",
    STATUS_REPLY: process.env.STATUS_REPLY || "`Alvin says=> your status seen 👀`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
