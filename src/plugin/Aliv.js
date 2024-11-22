import config from '../../config.cjs';

const ping = async (m, sock) => {
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "alive") {
    const start = new Date().getTime();
    await m.React('👀');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;

    const text = `*Alvio MD*
_✈︎᯽᯽᯽᯽᯽᯽᯽᯽᯽᯽᯽᯽᯽᯽᯽✈︎✈︎
*🤠 ${push$name} hellow 🤠
*📆 ${days} Day(s)*
*🕰️ ${hours} Hour(s)*
*⏳ ${minutes} Minute(s)*
*⏲️ ${seconds} Second(s)*
_✈︎᯽᯽᯽᯽᯽᯽᯽᯽᯽᯽᯽᯽᯽᯽᯽︎✈︎✈︎`
    sock.sendMessage(m.from, { text }, { quoted: m });
  }
}

export default ping;
￼Enter
