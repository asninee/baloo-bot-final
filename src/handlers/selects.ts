import { Bot } from '#structures/bot';
import { getContents } from '#functions/getContents';
import { logger } from '#functions/logger';

export async function loadSelects(client: Bot) {
  const contents = await getContents('src/selects');

  for (const content of contents) {
    const { select } = content;
    if (select === undefined || select.customId === undefined) {
      logger.error(`error exporting select menu.`);
    } else {
      client.selects.set(select.customId, select);
    }
  }

  logger.info(`loaded ${client.selects.size} select menu(s).`);
}
