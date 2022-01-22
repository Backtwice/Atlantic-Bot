module.exports = (BotClient) => {
	BotClient.handleEvents = async (Files, Path) => {
		for (const file of Files) {
			const Event = require(`${Path}/${file}`)

			if (Event.once) {
				BotClient.once(Event.name, (...args) => Event.execute(...args, BotClient))
			} else {
				BotClient.on(Event.name, (...args) => Event.execute(...args, BotClient))
			}
		}
	}
}