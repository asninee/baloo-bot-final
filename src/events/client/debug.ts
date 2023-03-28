import { Message, Events } from 'discord.js';
import { Bot, Event } from '#structures';
import { logger } from 'utils';

export const event: Event = {
  name: Events.Debug,
  once: true,
  execute(_client: Bot, m: Message) {
    logger.debug(m);
  }
};
