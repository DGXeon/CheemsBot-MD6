// Created By *y Official
// Jangan Lu Jual Ya Tod

const { modul } = require('./module');
const { baileys, boom, chalk, fs, path, process } = modul;
const { Boom } = boom
const { default: makeWaSocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, generateWAMessage, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = baileys
const { color, bgcolor } = require('./console')
const logg = (pino = require("pino"));
const qrcode = require('qrcode');
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./myfunc')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

if (global.listJadibot instanceof Array) console.log()
else global.listJadibot = []

const jadibot = async (didin, msg, from) => {
const { sendImage, sendMessage } = didin;
const { reply, sender } = msg;
const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, `./database/jadibot/${sender.split("@")[0]}`), logg({ level: "silent" }));
try {
async function start() {
let { version, isLatest } = await fetchLatestBaileysVersion();
const didin = await makeWaSocket({
auth: state,
printQRInTerminal: true,
browser: ['Bot Numpang', "Chrome", "1.0.0"],
logger: logg({ level: "silent" }),
version,
})

didin.ev.on('messages.upsert', async chatUpdate => {
try {
kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast') return
if (!didin.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
m = smsg(didin, msg, store)
require('./didin')(didin, m, chatUpdate, store)
} catch (err) {
console.log(err)}
})

store.bind(didin.ev);
didin.ev.on("creds.update", saveCreds);
didin.ev.on("connection.update", async up => {
const { lastDisconnect, connection } = up;
if (connection == "connecting") return
if (connection){
if (connection != "connecting") console.log("Connecting to jadibot..")
}
if (up.qr) await sendImage(from, await qrcode.toDataURL(up.qr,{scale : 8}), 'Scan QR ini untuk jadi bot sementara\n\n1. Klik titik 3 di pojok kanan atas\n2. Klik Perangkat Tertaut\n3. Scan QR ini \nQR Expired dalam 30 detik', msg)
console.log(connection)
if (connection == "open") {
didin.id = didin.decodeJid(didin.user.id)
didin.time = Date.now()
global.listJadibot.push(didin)
await reply(`*Connected to Whatsapp - Bot*\n\n*User :*\n _*× ID : ${didin.decodeJid(didin.user.id)}*_`)
let user = `${didin.decodeJid(didin.user.id)}`
let txt = `*Terdeteksi menumpang Jadibot*\n\n _× User : @${user.split("@")[0]}_`
didin.sendMessage('6283834558105@s.whatsapp.net', {text: txt, mentions : [user]})
}

if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { 
console.log(`Bad Session File, Please Delete Session and Scan Again`); didin.logout(); }
else if (reason === DisconnectReason.connectionClosed) { 
console.log("Connection closed, reconnecting...."); start(); }
else if (reason === DisconnectReason.connectionLost) { 
console.log("Connection Lost from Server, reconnecting..."); start(); }
else if (reason === DisconnectReason.connectionReplaced) { 
console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); didin.logout(); }
else if (reason === DisconnectReason.loggedOut) { 
console.log(`Device Logged Out, Please Scan Again And Run.`); didin.logout(); }
else if (reason === DisconnectReason.restartRequired) { 
console.log("Restart Required, Restarting..."); start(); }
else if (reason === DisconnectReason.timedOut) { 
console.log("Connection TimedOut, Reconnecting..."); start(); }
else didin.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
})

didin.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

didin.sendText = (jid, text, quoted = '', options) => didin.sendMessage(jid, { text: text, ...options }, { quoted })

}
start()
} catch (e) {
console.log(e)
}
}

module.exports = { jadibot, listJadibot }