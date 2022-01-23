const {SlashCommandBuilder} = require('@discordjs/builders')
const {REST} = require('@discordjs/rest')
const {Routes} = require('discord-api-types/v9')
const Config = require('../config.json')
const FS = require('fs')

const CommandFiles = FS.readdirSync('src/commands').filter(File => File.endsWith('.js'))
const Commands = []

for (const File of CommandFiles) {
	const Command = require(`../commands/${File}`)
	Commands.push(Command.data.toJSON())
}

const Rest = new REST({version: '9'}).setToken(Config.token)
(async () => {
	try {
		console.log('Events » Started refreshing application commands...')
		await Rest.put(Routes.applicationCommands(Config.bot_id), {body: Commands})

		console.log('Events » Successfully refreshed application commands.\n')
	} catch (Error) {
		console.error(Error)
	}
})
