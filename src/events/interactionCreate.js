module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		if (!interaction.isCommand()) return

		const Command = BotClient.commands.get(interaction.commandName)
		if (!Command) return

		try {
			await Command.execute(interaction)
		} catch (Error) {
			console.error('Error » ' + Error)
			await interaction.reply({
				content: 'Произошла ошибка!',
				ephemeral: true
			})
		}
	}
}
