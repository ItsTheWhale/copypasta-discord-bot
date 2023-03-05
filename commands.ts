import { SlashCommandPartial, SlashCommandOptionType } from "./deps.ts";


export const commands: SlashCommandPartial[] = [
    {
        name: "gnulinux",
        description: "Get GNU/Linux copypasta.",
        options: [
            {
                name: "name",
                description: "Name.",
                type: SlashCommandOptionType.STRING
            }
        ],
    },
    {
        name: "archlinux",
        description: "Get Arch Linux copypasta.",
        options: [
            {
                name: "name",
                description: "Name.",
                type: SlashCommandOptionType.STRING
            }
        ],
    },
    {
        name: "itslinux",
        description: "Get Linux not GNU/Linux copypasta.",
        options: [
            {
                name: "name",
                description: "Name.",
                type: SlashCommandOptionType.STRING
            }
        ],
    },
    {
        name: "ecmascript",
        description: "Get ECMAScript copypasta.",
        options: [
            {
                name: "name",
                description: "Name.",
                type: SlashCommandOptionType.STRING
            }
        ],
    },
];