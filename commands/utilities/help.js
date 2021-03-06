const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "Help command for the bot.",
  permissions: "MANAGE_MESSAGES",
  options: [
    {
      name: "command",
      description: "Learn more about a specific command.",
      type: "STRING",
      required: false,
    },
  ],
  /**
   *
   * @param {CommandInteraction} interaction
   */
  async execute(interaction) {
    const { options } = interaction;
    const Response = new MessageEmbed().setColor("BLURPLE");
    const Target = options.getString("command");
    switch(Target) {
        case null:
            Response.setColor("BLURPLE");
            Response.setDescription(
                "**List of Commands** - [clear] [status] [userinfo] [ban] [kick]"
            );
            return interaction.reply({ embeds: [Response], ephemeral: true });
        
        case "clear":
            Response.setColor("BLURPLE");
            Response.setDescription(
                "**Clear** - Allows staff to delete messages from a certain user or a channel."
            );
            return interaction.reply({ embeds: [Response], ephemeral: true });

        case "status":
            Response.setColor("BLURPLE");
            Response.setDescription(
                "**Status** - Displays a status of the bot, including the latency and the database."
            );
            return interaction.reply({ embeds: [Response], ephemeral: true });
        
        case "userinfo":
            Response.setColor("BLURPLE");
            Response.setDescription(
                "**Userinfo**\n Right click on a user, navigate to Apps, and click on userinfo."
            );
            return interaction.reply({ embeds: [Response], ephemeral: true });
        
        case "ban":
            Response.setColor("BLURPLE");
            Response.setDescription(
                "**Ban**\n A command to ban users. You can include reasoning, and decide the number of days to delete message history from."
            );
            return interaction.reply({ embeds: [Response], ephemeral: true });

        case "kick":
            Response.setColor("BLURPLE");
            Response.setDescription(
                "**Kick**\n A command to kick users. You can include reasoning, and decide the number of days to delete message history from."
            );
            return interaction.reply({ embeds: [Response], ephemeral: true });
        }; 
    }
};
