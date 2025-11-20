import { c as defineEventHandler, r as readBody, f as createError } from '../../_/nitro.mjs';
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

const chatSendmsg = defineEventHandler(async (event) => {
  try {
    const { msg, token } = await readBody(event);
    const response = await fetch("https://api.silverfoxvalues.com/chat/sent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({
        message: msg
      })
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw createError({
        statusMessage: errorData.msg || "Something went wrong"
      });
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.statusCode) throw error;
    throw createError({
      statusCode: 500,
      statusMessage: error.message || "Server error"
    });
  }
});

export { chatSendmsg as default };
//# sourceMappingURL=chat-sendmsg.mjs.map
