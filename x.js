const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v10');

const rest = new REST({ version: '10' }).setToken("MTA4MTc4MTg2MzQxMDA2MTQxNQ.G1DOto.DiNWlehMZHdXznENNTcXJe_gH-qtjgjYCj_b2w");

rest.put(Routes.applicationGuildCommands("1081781863410061415", "999435288478765211"), { body: [] })
	.then(() => console.log('Successfully deleted all guild commands.'))
	.catch(console.error);