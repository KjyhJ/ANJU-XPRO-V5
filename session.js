//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUcwM1FtV1dmbHVUSHR3UU52SFB6YU9KemE2Nmwvb2VjUWxxYmZodnBsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjFnZnN0ajJWUmxSUXZmWWF3UTBTamNyK2lnQmdkQ1Uyei9rUU5JazNCWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRlo2VEt5UFNTL1pTL0J0cERiUEZFOWNueStCQUpnMVg4bzk2QVJRbFU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQS2xjVWVLZ3ZBSEVQdUdQMmppc0NVbkVOWGFuSXZzUVpnVzdJTHlrWUZFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFIc05CQWl6RThPd0duTmFKdTJtbllNcWt5d0R3UkMzRHF5UXF5YUtBa0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVPVDd2Y284ekNTbTIrVG9TNnRYYkdRU0JQUnZreUhicjVxNmZjQy9JelE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEFsM3VqQzlyVm4zSlpVbUdOczlRNHVYSTkwd2dFTEw3bmdBUkkzWS9saz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTcvbkZKU3lvYmVrRmptMzVyb0o4MnYwaXlTRTlHbUxjSzFoeCtiZ29Ybz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQxeUdCRFQ4bFNpVjJzeWNEcUJwVTBKMDBIWk5nVFM2QmxlM3hSYnBIS2x1UzBpeTJ1Uld0RWp3TzdVenFiZ2VvZTNhcVd2L1ZSaUdENTJvVWRNakNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6ImYvK3JoY285RWFXTW5MTUVEWlZRTk9xeHlQVTJKdWZRS1Y4bVlyK0JHczA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkZKcDlUSktIUWZpR3NjZjR1dWNZWmciLCJwaG9uZUlkIjoiNjZlMmMxOWEtZWY4MS00NTdiLTk0ZWEtYTQwZWY3OGY1ZDczIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNPcWdyVlhQaW1zYkt5eGJBOHd2TjA0WGR0VT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoVkVtOXhHSDl2eVY3cVg0TGxHMy9XelRYMFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRkxGSFA1S0YiLCJtZSI6eyJpZCI6Ijk0NzQzNjA3NjM3OjM5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjM4NTk4OTcyNTQ3MzIwOjM5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHJnNmFBQ0VML3Zsc0lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWEZvbHlBZmkxYUxNOVBVUCtIZjJnNmlESUpJcFgybnQ0cUJTejFLQjFVTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaWJVZDdxbEgyVE1pSlNyRUlFQUdXbkNHZEcrSjFieUFid2ZFc2ErZXF4OENZUlFLOElEL0QvMXVwQW11T2xycTZmU05XaVdkeWxzR0J3YjBHMXZuQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6ImVHblpnQXdiQmFBSU01a0xXTFMrdyt6eERqcUZkU20yQmNGMWlQOFpJRENqNlhwUVNYN3dkb0hBTHR4d2lhZC9MZ21Gd3oydE1JbUpKMVJDb2tJeUJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDM2MDc2Mzc6MzlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVnhhSmNnSDR0V2l6UFQxRC9oMzlvT29neUNTS1Y5cDdlS2dVczlTZ2RWRCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5Mzk5NTAwLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5lLyJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
