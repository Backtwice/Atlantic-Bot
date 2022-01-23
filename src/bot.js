const {Client, Collection} = require('discord.js')
const client = new Client({intents: 32767, allowedMentions: {repliedUser: false}})
const config = require('./config.json')
const FS = require('fs')
client.commands = new Collection()

const CommandFiles = FS.readdirSync('src/commands').filter((File) => File.endsWith('.js'))
const EventFiles = FS.readdirSync('src/events').filter((File) => File.endsWith('.js'))

for (const File of CommandFiles) {
	const Command = require(`./commands/${File}`)
	client.commands.set(Command.data.name, Command)
}

for (const File of EventFiles) {
	const Event = require(`./events/${File}`)
	Event.once ? client.once(Event.name, (...args) => Event.execute(...args)) : client.on(Event.name, (...args) => Event.execute(...args))
}

client.on('interactionCreate', async (Inter) => {
	if (!Inter.isCommand()) return

	const Command = client.commands.get(Inter.commandName)
	if (!Command) return

	try {
		await Command.execute(Inter)
	} catch (Error) {
		console.error(Error)
		await Inter.reply({
			content: 'Произошла ошибка при исполнений команды!',
			ephemeral: true
		})
	}
})

client.login(config.token)
