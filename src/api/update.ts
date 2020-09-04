import { Message, RichEmbed, MessageAttachment } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';

import { rarityMapNumberHex } from '../services/deck.service';

const fs = require('fs');

const { Pool } = require('pg');

const update = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  const args = cmd.arguments
    .filter(str => /\S/.test(str))
    .map(arg => arg.charAt(0).toUpperCase() + arg.slice(1))
    .join(' ');

  const embed = new RichEmbed().setColor('#E64A19').setDescription(`Обновляю персонажа **${args}**`);

  msg.channel.sendEmbed(embed);

  console.log(msg.attachments);
};

export default update;