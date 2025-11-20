import { c as defineEventHandler, e as setResponseHeader, f as createError } from '../../_/nitro.mjs';
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

const valuesRestaurant = defineEventHandler(async (event) => {
  try {
    const response = await fetch("https://api.silverfoxvalues.com/myRestaurantValues", {
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    const data = await response.json();
    setResponseHeader(event, "Cache-Control", "public, max-age=1800, stale-while-revalidate=180");
    return data;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Failed to fetch restaurant values: ${error.message}`
    });
  }
});

export { valuesRestaurant as default };
//# sourceMappingURL=values-restaurant.mjs.map
