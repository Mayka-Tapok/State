const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('gov')
        .setDescription('отчет о занятии гос. волны')
        .addStringOption(option =>
            option
                .setName('фракция')
                .setDescription('Фракция, которая отправила гос. волну')
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName('время')
                .setDescription('Время занятия гос. волны')
                .setRequired(true)
        )
        .addStringOption(option =>
        option
            .setName('цель')
            .setDescription('Цель занятия гос. волны')
            .setRequired(true)
        ),
    async execute(interaction) {
        const frac = interaction.options.getString('фракция')
        const time = interaction.options.getString('время')
        const goal = interaction.options.getString('цель')
        const Embed = new EmbedBuilder()
            .setTitle('Отчет о занятии гос. волны')
            .setColor("DarkBlue")
            .addFields(
                {name: "Фракция",value: `${frac}`, inline: true},
                {name: "Время", value: `${time}`,inline: true},
                {name: "Цель", value: `${goal}`, inline: true}
            )
        await interaction.reply({content: "<@&1083579965234221106>, <@&1083580109165957191>, <@&1083580081500327986>, <@&1083579980266623016>, <@&1083579977208963083>, <@&1083579975090839592>" , embeds: [Embed]})

    }
}