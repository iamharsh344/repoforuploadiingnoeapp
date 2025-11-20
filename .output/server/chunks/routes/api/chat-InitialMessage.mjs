import { c as defineEventHandler, f as createError } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'unhead/utils';
import 'vue';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';

const chatInitialMessage = defineEventHandler(async (event) => {
  try {
    const response = await fetch("https://api.silverfoxvalues.com/chat/getInitialMessages", {
      method: "GET"
    });
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Failed to Sent chat: ${error.message}`
    });
  }
});

export { chatInitialMessage as default };
//# sourceMappingURL=chat-InitialMessage.mjs.map
