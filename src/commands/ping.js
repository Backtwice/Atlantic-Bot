const Builder = require('@discordjs/builders').SlashCommandBuilder
const wait = require('util').promisify(setTimeout)

module.exports = {
	data: new Builder().setName('пинг').setDescription('Понг!'),
	async execute(Inter) {
		let Ping = Date.now() - Inter.createdTimestamp

		await Inter.reply(`Понг! :ping_pong:\n.`)
		await wait(500)
		await Inter.editReply(`Понг! :ping_pong:\n..`)
		await wait(500)
		await Inter.editReply(`Понг! :ping_pong:\n...`)
		await wait(500)
		await Inter.editReply(`Понг! :ping_pong:\n*${Ping}мс (${Ping / 1000}с)*`)
	}
}
