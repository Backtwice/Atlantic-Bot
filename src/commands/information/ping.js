const {SlashCommandBuilder} = require('@discordjs/builders')

module.exports = {
	data: new SlashCommandBuilder().setName('Ping').setDescription('Посмотри пинг бота.'),
	async execute(interaction) {
		await interaction.reply(`Пинг клиента - ${Date.now() - interaction.createdTimestamp}мс\nПинг Discord API - ${Math.round(BotClient.ws.ping())}мс`)
	}
}
