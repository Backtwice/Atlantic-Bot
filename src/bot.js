const {Client, Intents, Collection} = require('discord.js')
const FS = require('fs')

const BotClient = new Client({intents: 32767})
const DIR_Functions = FS.readdirSync('src/functions').filter(Name => Name.endsWith('.js'))
const DIR_Commands = FS.readdirSync('src/commands')
const DIR_Events = FS.readdirSync('src/events').filter(Name => Name.endsWith('.js'))

require('dotenv').config()
BotClient.commands = new Collection()

BotClient.on('ready', () => {
	console.log(`Logged in as ${BotClient.user.tag}`)
})

(async () => {
	for (file of functions) {
		require(`./functions/${file}`)(BotClient)
	}

	BotClient.login(process.env.TOKEN)
})
