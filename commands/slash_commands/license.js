const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('license')
        .setDescription('[Правительство] Отчетность о выдачи лицензий')
        .addStringOption(option =>
        option
            .setName('тип')
            .addChoices(
                { name: 'Оружие', value: 'gif_funny' },
                { name: 'Рыбалка', value: 'gif_meme' },
                { name: 'Охота', value: 'gif_movie' },
                { name: 'Бизнес', value: 'gif_movie' },
                { name: 'Адвокатская деятельность', value: 'gif_movie' },
            )
            .setRequired(true)
        )

        .addAttachmentOption(option =>
        option
            .setName('изображение')
            .setDescription('Прикрепите док-ва выдачи лицензии')
            .setRequired(true)
        )
        .addBooleanOption(option =>
        option
            .setName("скидка")
            .setDescription("Делали ли вы скидку")
            .setRequired(true)
        ),
    async execute(interaction){
        const type = interaction.options.getString()
    }
}