const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU054ODhYY2hWSDU0aldSRXcwR1llOUJvK0lpUmRLdklqN1dPd1NSK2VHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEdGRlhvWW5XOGtVL0hwM1RUVC9NZkJ1MEVoS2hZb2RmNDNXQXJpd0xBND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSE9uV1RMSEMrQzJtVWFGck5YcGl1VnNTRlBXeEhhRmRnRVFjRSs0dkdVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrd1lkdXNZdHZ5NUxMdmtzVTUyMHBxU3BoK2pNZEtnd1ozc01KY0Zpd1c4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJOeEUzOGpISVU0cG00cFdyaUg3cXBiNmx1TjJWN0ZucDZtOGIzMnU1M0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNDZnhkc04vYU1LOGtySC9QVTdaQjByUEpIcUZhMDhBN2liSDlYdFQ2M2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVBlUVQybDl6d0loZU9YMjkvVVFDZllySGxaTnZmQ3BEeDJPNVVXbmMwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjlOMkhKL2JNT3dkMHI1UWVDRDdjdkJleFppNk5SS2hEK1FyWG5rbjhXYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxFTitCWXA1YVIwTnVSUG02NFprQmVoMFN4aEtXOEpyQzZveHFNa2YvTlVyeXVRb28yWHJ1bWhNWStPci8yTlBvZkthbnE1d25WbWxFYk4zSjNVQ2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ3LCJhZHZTZWNyZXRLZXkiOiJ2emVGQUlDUmMyUmoxQjFkbCsxSVYxazFMSmdzSmNFWjNqVHREMGFZVlY4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjTFliZ012ZFJhSzZ1a21pYTFlUGJ3IiwicGhvbmVJZCI6ImRjYjZjZGU0LWU1ODMtNGY0Yy1iYTgxLTI5YTg3MTliNTExOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCNjJrYy9Pak05Y0NlK2RreHBiS0wyWCtRUTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGtHZFVjOXhMdG5kczhqS3pOb0Z6ZEpvTnVrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1ZTFBNUURHIiwibWUiOnsiaWQiOiIyNTQxMDQ5MTYwOTE6MzdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1AreW1aQUNFTk8vMWJzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFvWkhvTS9iVjJ3T2dnYXNQcDJNZVFOODNkcU1BZjlNNmh1SlRMMDdHemM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlE5ZURJYk5zc0ZGV0tKRnQzTmk4TktMQXJUUkduaFBwcXBEUEZKSjFGejE4TVJ4Mi9zM2ZLdFY0cnFxTjVDamtjdGFRUWxTNmRRNTAyZ1JBTmh4akNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvTHFMc015Z09BVkxKYmJXR2lVQVZsQVYzY3NSTWFzSGd6NGNOQjFBRW42K0lhMlhVV0xwcnBGaENBT2VnRTB1eWtnZEdyeWY3bm94RGV6K1F3Y2hqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDEwNDkxNjA5MTozN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVS0dSNkRQMjFkc0RvSUdyRDZkakhrRGZOM2FqQUgvVE9vYmlVeTlPeHMzIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1NzQ1NTUyfQ==",
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
