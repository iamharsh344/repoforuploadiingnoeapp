import { c as defineEventHandler, g as getQuery, e as setResponseHeader, f as createError } from '../../_/nitro.mjs';
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

const cache = /* @__PURE__ */ new Map();
const CACHE_TTL = 5 * 60 * 1e3;
const gag = defineEventHandler(async (event) => {
  try {
    const { category } = getQuery(event) || {};
    const key = category || "all";
    const now = Date.now();
    const cachedEntry = cache.get(key);
    if (cachedEntry) {
      const isExpired = now > cachedEntry.expiry;
      if (isExpired) {
        setResponseHeader(event, "Cache-Control", "public, max-age=1800, stale-while-revalidate=180");
        refreshCache(key, category);
      }
      return { data: cachedEntry.data };
    }
    const shifted = await fetchAndShift(category);
    cache.set(key, { data: shifted, expiry: now + CACHE_TTL });
    setResponseHeader(event, "Cache-Control", "public, max-age=1800, stale-while-revalidate=180");
    return { data: shifted };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Failed to fetch adoptme values: ${error.message}`
    });
  }
});
async function fetchAndShift(category) {
  const externalApiUrl = `https://api.silverfoxvalues.com/growagarden?category=${encodeURIComponent(category)}`;
  const response = await fetch(externalApiUrl, { headers: { "Content-Type": "application/json" } });
  if (!response.ok) throw new Error(`API Error: ${response.status}`);
  const data = await response.json();
  return data;
}
async function refreshCache(key, category) {
  try {
    const shifted = await fetchAndShift(category);
    cache.set(key, { data: shifted, expiry: Date.now() + CACHE_TTL });
  } catch (err) {
    console.error(`Failed to refresh cache for ${key}:`, err);
  }
}

export { gag as default };
//# sourceMappingURL=gag.mjs.map
