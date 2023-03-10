import {
    Client,
    slash,
    event,
    Interaction,
    Intents,
    config
} from "./deps.ts";

import { commands } from "./commands.ts";
import { copypasta } from "./copypasta.ts";

class TagBot extends Client {
    @slash()
    gnulinux(i: Interaction) {
        copypasta.gnulinux(i);
    }

    @slash()
    archlinux(i: Interaction) {
        copypasta.archlinux(i);
    }

    @slash()
    itslinux(i: Interaction) {
        copypasta.itslinux(i);
    }

    @slash()
    ecmascript(i: Interaction) {
        copypasta.ecmascript(i);
    }

    @slash()
    itsjavascript(i: Interaction) {
        copypasta.itsjavascript(i);
    }

    @event()
    ready() {
        console.log("Ready!")
        commands.forEach(command => {
            this.slash.commands.create(command, '999435288478765211')
                .then((cmd) => console.log(`Created Slash Command ${cmd.name}!`))
                .catch(() => console.log(`Failed to create ${command.name} command!`));
        })
    }
}

const bot = new TagBot();
bot.connect(config()["DISCORD_TOKEN"], Intents.None);