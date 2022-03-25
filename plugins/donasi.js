//Jangan Di Hapus Tapi kalo Di tambah Boleh

let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(thumbfoto)).buffer(), `
┌─✧ 〔 Donasi • Emoney 〕
├◌ GoPay: 085713041886 [ Fachri ]
├◌ Dana: 085713041886 [ Fachri ]
├◌ Pulsa: 081395861695 [ BOTCAHX ]
└────···✧

Terimakasih Banyak Untuk Yg Sudah Berdonasi !!
`.trim(), DonasiBgBiarBotnyaOn24Jam, 'Menu', '.menu', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
