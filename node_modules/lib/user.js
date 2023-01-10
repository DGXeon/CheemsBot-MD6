const fs = require('fs')
const user = JSON.parse(fs.readFileSync('./lib/data.json')); 

async function setUser(users, id, x) {     
Object.keys(user).forEach((i) => {
if (user[i].id === id) {
if (users == "±id"){ user[i].id = x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "±emote"){ user[i].emote = x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "±timers"){ user[i].timers = x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "±hit"){ user[i].hit = x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "-hit"){ user[i].hit -= x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "+hit"){ user[i].hit += x
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "±star"){ user[i].star = x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "-star"){ user[i].star -= x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "+star"){ user[i].star += x
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "±afk"){ user[i].afk = x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "±alasan"){ user[i].alasan = x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "±ban"){ user[i].ban = x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "±premium"){ user[i].premium = x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
}})
} 

module.exports = { setUser }