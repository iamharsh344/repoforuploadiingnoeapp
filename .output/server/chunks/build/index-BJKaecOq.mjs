import { _ as __nuxt_component_0 } from './main-Header-DbHC4O8P.mjs';
import { _ as __nuxt_component_3, s as setInterval } from './main-Footer-DaofIaS3.mjs';
import { u as useHead } from './v3-Dm0nbuqa.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-BizknXJk.mjs';
import '../_/nitro.mjs';
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
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import './virtual_public-CYYamiF5.mjs';
import 'vue-router';

const _sfc_main = {
  setup() {
    useHead({
      title: "Live Stock - Grow a Garden | SilverFoxValues",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { name: "google-adsense-account", content: "ca-pub-2625601725317470" },
        { name: "robots", content: "index,follow" },
        { hid: "description", name: "description", content: "Check the latest live stock values for pets, plants, gears and more from the Roblox game Grow a Garden. Updated regularly by SilverFox Values." },
        { hid: "keywords", name: "keywords", content: "Grow a Garden, Grow a Garden values, Grow a Garden Roblox, live stock gag, grow a garden live stock, gag live stock, Grow a Garden trading, Roblox garden game" },
        { name: "author", content: "SilverFoxValues" },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:title", property: "og:title", content: "Live Stock - Grow a Garden | SilverFoxValues" },
        { hid: "og:description", property: "og:description", content: "Check the latest live stock values for pets, plants, gears and more from the Roblox game Grow a Garden. Updated regularly by SilverFox Values." },
        { hid: "og:url", property: "og:url", content: "https://silverfoxvalues.com/growagarden/crops/" },
        { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
        { hid: "twitter:title", name: "twitter:title", content: "Live Stock - Grow a Garden | SilverFoxValues" },
        { hid: "twitter:description", name: "twitter:description", content: "Check the latest live stock values for pets, plants, gears and more from the Roblox game Grow a Garden." }
      ]
    });
  },
  data() {
    return {
      stockData: [],
      lastUpdated: "",
      connectionStatus: "Connected",
      loading: false,
      error: null
    };
  },
  mounted() {
    this.gagData();
    this.startAutoRefresh();
  },
  beforeUnmount() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  },
  methods: {
    async gagData() {
      this.loading = true;
      this.error = null;
      try {
        const response = await $fetch("/api/gag-live-stock");
        this.stockData = response.data;
        this.lastUpdated = (/* @__PURE__ */ new Date()).toLocaleString();
      } catch (error) {
        this.error = {
          message: error.message || "Failed to fetch stock data"
        };
      } finally {
        this.loading = false;
      }
    },
    refreshData() {
      this.gagData();
    },
    startAutoRefresh() {
      this.refreshInterval = setInterval();
    },
    getCategoryColor(category) {
      const colors = {
        egg: "bg-yellow-500",
        gear: "bg-blue-500",
        seed: "bg-green-500",
        honey: "bg-amber-500",
        cosmetics: "bg-pink-500",
        travelingmerchant: "bg-purple-500"
      };
      return colors[category] || "bg-gray-500";
    },
    getCategoryTextColor(category) {
      const colors = {
        egg: "text-yellow-400",
        gear: "text-blue-400",
        seed: "text-green-400",
        honey: "text-amber-400",
        cosmetics: "text-pink-400",
        travelingmerchant: "text-purple-400"
      };
      return colors[category] || "text-gray-400";
    },
    getCategoryEmoji(category) {
      const emojis = {
        egg: "\u{1F95A}",
        gear: "\u2699\uFE0F",
        seed: "\u{1F331}",
        honey: "\u{1F36F}",
        cosmetics: "\u{1F484}",
        travelingmerchant: "\u{1F6D2}"
      };
      return emojis[category] || "\u{1F4E6}";
    },
    getCategoryTitle(category) {
      const titles = {
        egg: "Egg",
        gear: "Gear",
        seed: "Seed",
        honey: "Honey",
        cosmetics: "Cosmetics",
        travelingmerchant: "Traveling Merchant"
      };
      return titles[category] || category.charAt(0).toUpperCase() + category.slice(1);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MainHeader = __nuxt_component_0;
  const _component_mainFooter = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-darker-bg min-h-screen text-text-primary" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_MainHeader, null, null, _parent));
  _push(`<div class="bg-dark-bg px-6 py-4 pt-[6rem]"><div class="max-w-7xl mx-auto flex justify-between"><div><h1 class="text-2xl font-bold text-white">GAG Live Stock</h1><p class="text-text-secondary text-sm mt-2">Last updated: ${ssrInterpolate($data.lastUpdated)}</p></div><div class="flex items-center"><button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"> Refresh </button></div></div></div><main class="max-w-7xl mx-auto px-6 py-8">`);
  if ($data.error) {
    _push(`<div class="bg-red-600/20 border border-red-600 rounded-lg p-4 mb-6"><p class="text-red-400">${ssrInterpolate($data.error.message)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.loading) {
    _push(`<div class="text-center py-8"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-accent mx-auto"></div><p class="mt-4 text-text-secondary">Loading stock data...</p></div>`);
  } else {
    _push(`<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"><!--[-->`);
    ssrRenderList($data.stockData, (category, categoryName) => {
      _push(`<div style="${ssrRenderStyle(categoryName != "updated_at" ? null : { display: "none" })}" class="bg-card-bg rounded-lg border border-gray-600 p-6"><div class="flex items-center space-x-3 mb-6"><div class="${ssrRenderClass([$options.getCategoryColor(categoryName), "w-10 h-10 rounded-lg flex items-center justify-center"])}"><span class="text-xl">${ssrInterpolate($options.getCategoryEmoji(categoryName))}</span></div><h2 class="${ssrRenderClass([$options.getCategoryTextColor(categoryName), "text-xl font-bold"])}">${ssrInterpolate($options.getCategoryTitle(categoryName))}</h2></div><div class="space-y-3"><!--[-->`);
      ssrRenderList(category.items, (item, index2) => {
        _push(`<div class="flex justify-between items-center p-3 bg-darker-bg rounded border border-gray-700"><div class="flex items-center space-x-3"><span>${ssrInterpolate(item.emoji)}</span><span class="text-sm">${ssrInterpolate(item.name)}</span></div><span class="${ssrRenderClass([$options.getCategoryTextColor(categoryName), "font-bold"])}"> \xD7${ssrInterpolate(item.quantity)}</span></div>`);
      });
      _push(`<!--]--></div>`);
      if (categoryName === "travelingmerchant" && category.merchantName) {
        _push(`<div class="mt-4 p-3 bg-amber-500/20 rounded border border-amber-500/50"><div class="flex items-center justify-between"><span class="text-amber-400 text-sm font-medium">${ssrInterpolate(category.merchantName)}</span><span class="text-amber-400 text-sm">${ssrInterpolate(category.status)}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  }
  _push(`</main>`);
  _push(ssrRenderComponent(_component_mainFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/growagarden/live-stock/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BJKaecOq.mjs.map
