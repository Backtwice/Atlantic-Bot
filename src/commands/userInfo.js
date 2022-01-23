const Builder = require('@discordjs/builders').SlashCommandBuilder

module.exports = {
	data: new Builder().setName('инфо').setDescription('Информация про свой или чужой профиль.').addUserOption(Option => Option.setName('цель').setDescription('Не обязательно. Если не указать то информация будет о вашем профиле.')),
	async execute(Inter) {
		const User = Inter.options.getUser('цель')
		if (User) {
			await Inter.reply(`Тэг: ${User.tag}\nID: ${User.id}\n`)
		}
	}
}
