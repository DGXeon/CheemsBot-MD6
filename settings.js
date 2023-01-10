
const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//damtabase
global.public = true

global.chatsSettings = JSON.parse(fs.readFileSync('./database/chatsettings.json'))

global.antiwagc = chatsSettings.anti.whatsappGroups
global.antiwadm = chatsSettings.anti.whatsappDirect
global.antiyt = chatsSettings.anti.youtube
global.antiig = chatsSettings.anti.instagram
global.antifb = chatsSettings.anti.facebook
global.antitg = chatsSettings.anti.telegram
global.antitt = chatsSettings.anti.tiktok
global.antitwt = chatsSettings.anti.twitter
global.antidocs = chatsSettings.anti.documents
global.antitoxic = chatsSettings.anti.toxic
global.antiflood = chatsSettings.anti.flood
global.antilinks = chatsSettings.anti.links
global.autoreply = chatsSettings.auto.reply
global.autosticker = chatsSettings.auto.sticker
global.xplevel = chatsSettings.extras.xpLevel
global.nsfw = chatsSettings.extras.NSFW
global.notbuttons = chatsSettings.extras.notButtons

//owmner v card
global.owner = ['5492996557871'] //ur owner number
global.ownername = "𝑨𝒍𝒆𝒛𝒖𝒖" //ur owner name
global.ytname = "𝒀𝒐𝒖𝑻𝒖𝒃𝒆: 𝑻𝒉𝒆𝑨𝒍𝒆𝒛𝒖𝒖" //ur yt chanel name
global.socialm = "𝑻𝒘𝒊𝒕𝒄𝒉: 𝒕𝒉𝒆𝒂𝒍𝒆𝒛𝒖𝒖𝒚𝒕" //ur github or insta name
global.location = "𝒆𝒏 𝒍𝒂 𝒓𝒆 𝒄𝒐𝒏𝒄𝒉𝒂 𝒅𝒆 𝒕𝒖 𝒎𝒂𝒅𝒓𝒆" //ur location

//bot bomdy 
global.ownernomer = "5492996557871" //ur number
global.premium = [''] //ur premium number
global.botname = '𝕊𝕜𝕪𝕫𝕖𝕖𝙱𝙾𝚃' //ur bot name
global.linkz = 'https://twitch.tv/thealezuuyt'
global.linkz2 = "https://chat.whatsapp.com/HYj9wu5Jrv6CROxyeQbHoS" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtube.com/alexmine" //ur website to be displayed
global.botscript = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' //script link
global.themeemoji = "♦" //ur theme emoji
global.packname = "Sticker By" //ur sticker watermark packname
global.author = "SkyzeeBOT\n\n\nA whatsapp bot developed by\n🦄Dream Guy Xeon\n\n\n\n\n\n\n\n       --------______-------\n\n\n\n\n\n\n\nContact No. : +916909137213" //ur sticker watermark author
global.wm = "SZBOT" //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['!','.','#','&']
global.sp = ''
global.nuevosAvisos = [
`*01/10/2022: El bot dejará de funcionar al MD debido a que el bot estará orientado especialmente a funcionar en chats grupales, dejando el MD para usos secundarios.*`,
`Los comandos de descarga no están funcionando correctamente (EN DESARROLLO)`,
`Las actividades de mantenimiento del bot estarán en reposo debido a dificultades personales del dueño, pero no se dejarán de lado.`,
`Para utilizar los comandos de *#makermenu* primero se debe colocar *#textmaker*, luego el comando (ej: _#textmaker lava sexooo_)`
]

//messages
global.mess = {
    success: '𝙷𝙴𝙲𝙷𝙾 ✓',
    admin: '𝙳𝙸𝚂𝙲𝚄𝙻𝙿Á 𝙵𝙻𝙰𝙲𝙾, 𝙲𝙰𝚁𝙴𝙲𝙴𝚂 𝙳𝙴 𝙿𝙴𝚁𝙼𝙸𝚂𝙾𝚂 𝙿𝙰𝚁𝙰 𝙰𝙲𝙲𝙴𝙳𝙴𝚁 𝙰 𝙳𝙸𝙲𝙷𝙰 𝙵𝚄𝙽𝙲𝙸Ó𝙽',
    botAdmin: '𝙽𝙴𝙲𝙴𝚂𝙸𝚃𝙾 𝙰𝙳𝙼𝙸𝙽 𝙿𝙰𝚁𝙰 𝙳𝙸𝙲𝙷𝙰 𝙵𝚄𝙽𝙲𝙸Ó𝙽 :)',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: '𝙳𝙸𝚂𝙲𝚄𝙻𝙿á 𝙵𝙻𝙰𝙲𝙾, 𝙲𝙰𝚁𝙴𝙲𝙴𝚂 𝙳𝙴 𝙿𝙴𝚁𝙼𝙸𝚂𝙾𝚂 𝙿𝙰𝚁𝙰 𝙰𝙲𝙲𝙴𝙳𝙴𝚁 𝙰 𝙳𝙸𝙲𝙷𝙰 𝙵𝚄𝙽𝙲𝙸Ó𝙽',
    group: '𝙴𝚂𝚃𝙰 𝙵𝚄𝙽𝙲𝙸Ó𝙽 𝚂𝙾𝙻𝙾 𝙴𝚂𝚃Á 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴 𝙿𝙰𝚁𝙰 𝙲𝙷𝙰𝚃𝚂 𝙶𝚁𝚄𝙿𝙰𝙻𝙴𝚂',
    private: '𝙴𝚂𝚃𝙰 𝙵𝚄𝙽𝙲𝙸Ó𝙽 𝚂𝙾𝙻𝙾 𝙴𝚂𝚃Á 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴 𝙿𝙰𝚁𝙰 𝙲𝙷𝙰𝚃𝚂 𝙿𝚁𝙸𝚅𝙰𝙳𝙾𝚂',
    bot: '𝙳𝙸𝚂𝙲𝚄𝙻𝙿á 𝙵𝙻𝙰𝙲𝙾, 𝙲𝙰𝚁𝙴𝙲𝙴𝚂 𝙳𝙴 𝙿𝙴𝚁𝙼𝙸𝚂𝙾𝚂 𝙿𝙰𝚁𝙰 𝙰𝙲𝙲𝙴𝙳𝙴𝚁 𝙰 𝙳𝙸𝙲𝙷𝙰 𝙵𝚄𝙽𝙲𝙸Ó𝙽',
    wait: '𝚃𝚁𝙰𝙱𝙰𝙹𝙰𝙽𝙳𝙾...',
    linkm: '¿𝚈 𝙴𝙻 𝙻𝙸𝙽𝙺, 𝙿𝙰? ¿𝚂𝙾𝚈 𝙰𝙳𝙸𝚅𝙸𝙽𝙾?',
    error: '𝙴𝚁𝚁𝙾𝚁 :(',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: '𝙴𝙿𝙰𝙰 𝙱𝚄𝙴𝙽𝙾... 𝙿𝙰𝚁𝙰 𝙰𝙲𝙲𝙴𝙳𝙴𝚁 𝙰𝙻 𝙿𝙾𝚁𝙽𝙰𝚉𝙾 𝚄𝙽 𝙰𝙳𝙼𝙸𝙽 𝙳𝙴𝙱𝙴 𝙷𝙰𝙱𝙸𝙻𝙸𝚃𝙰𝚁𝙻𝙾',
    ban: '𝚄𝚈, 𝙴𝚂𝚃𝙰𝚂 𝚁𝙴 𝙱𝙰𝙽𝙴𝙰𝙳𝙾 𝙲𝚁𝙰𝙲𝙺, 𝚀𝚄𝙴 𝚃𝙴𝙽𝙶𝙰 𝚄𝙽 𝙱𝚄𝙴𝙽 𝙳Í𝙰 ;)',
    banChat: '𝙻𝙰𝙼𝙴𝙽𝚃𝙰𝙼𝙾𝚂 𝙲𝙾𝙼𝚄𝙽𝙸𝙲𝙰𝚁𝚃𝙴 𝚀𝚄𝙴 𝚂𝙴 𝙷𝙰 𝚁𝙴𝚂𝚃𝚁𝙸𝙽𝙶𝙸𝙳𝙾 𝙴𝙻 𝙱𝙾𝚃 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾.\n\n𝘌𝘭 𝘰𝘸𝘯𝘦𝘳 𝘣𝘶𝘴𝘤𝘢 𝘦𝘷𝘪𝘵𝘢𝘳 𝘤𝘪𝘦𝘳𝘵𝘰𝘴 𝘢𝘴𝘱𝘦𝘤𝘵𝘰𝘴 𝘤𝘰𝘯𝘧𝘭𝘪𝘤𝘵𝘪𝘷𝘰𝘴, 𝘥𝘦 𝘭𝘰𝘴 𝘤𝘶𝘢𝘭𝘦𝘴, 𝘱𝘰𝘯𝘦𝘳 𝘦𝘯 𝘳𝘪𝘦𝘴𝘨𝘰 𝘭𝘢 𝘧𝘶𝘯𝘤𝘪𝘰𝘯𝘢𝘭𝘪𝘥𝘢𝘥 𝘥𝘦𝘭 𝘣𝘰𝘵 𝘰 𝘱𝘳𝘰𝘮𝘰𝘷𝘦𝘳 𝘦𝘭 𝘮𝘢𝘭 𝘶𝘴𝘰 𝘥𝘦 𝘭𝘢 𝘮𝘪𝘴𝘮𝘢. 𝘚𝘪 𝘤𝘳𝘦𝘦𝘴 𝘲𝘶𝘦 𝘦𝘴𝘵𝘰 𝘱𝘶𝘥𝘰 𝘩𝘢𝘣𝘦𝘳 𝘴𝘪𝘥𝘰 𝘶𝘯 𝘦𝘳𝘳𝘰𝘳, 𝘤𝘰𝘯𝘵á𝘤𝘵𝘢𝘵𝘦 𝘤𝘰𝘯 𝘦𝘭 𝘰𝘸𝘯𝘦𝘳 𝘈𝘭𝘦𝘻𝘶𝘶.'
}

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/errorreply.png") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
