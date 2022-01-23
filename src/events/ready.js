module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log(`Events » Logged in as ${client.user.tag}`)
		client.user.setPresence({activities: [{name: `*help | ${client.guilds.cache.size == 1 ? '1 сервер.' : client.guilds.cache.size + ' серверов.'}`, type: 'LISTENING'}], status: 'idle'})	
	}
}
