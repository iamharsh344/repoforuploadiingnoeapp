import { _ as __nuxt_component_0 } from './main-Header-DbHC4O8P.mjs';
import { _ as __nuxt_component_3 } from './main-Footer-DaofIaS3.mjs';
import { u as useHead } from './v3-Dm0nbuqa.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
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
      title: "Grow a Garden Trade Calculator | GAG - SilverFoxValues",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { name: "google-adsense-account", content: "ca-pub-2625601725317470" },
        { name: "robots", content: "index,follow" },
        { hid: "description", name: "description", content: "Calculate trades for Grow a Garden Roblox items with our advanced trade calculator. Compare pet values, item worth, and ensure balanced trades instantly!" },
        { hid: "keywords", name: "keywords", content: "Grow a Garden trade calculator, Grow a Garden trading, gag pets values, pet trading calculator, gag trading, gag trade calculator, gag pets values, gag calculator" },
        { name: "author", content: "SilverFoxValues" },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:title", property: "og:title", content: "Grow a Garden Trade Calculator | Roblox Trading Tool | SilverFoxValues" },
        { hid: "og:description", property: "og:description", content: "Use our free trade calculator to ensure fair trades in Grow a Garden Roblox. Compare values, calculate differences, and trade smarter with accurate pricing data." },
        { hid: "og:url", property: "og:url", content: "https://silverfoxvalues.com/growagarden/trade-calculator/" },
        { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
        { hid: "twitter:title", name: "twitter:title", content: "Grow a Garden Trade Calculator \u2013 Trading Made Easy" },
        { hid: "twitter:description", name: "twitter:description", content: "Calculate perfect trades for Grow a Garden Roblox. Compare pet and item values to ensure you get the best deals every time." }
      ]
    });
  },
  data() {
    return {
      items: [],
      leftItems: [],
      rightItems: [],
      currentSlot: null,
      showModal: false,
      searchTerm: "",
      winLoss: null
    };
  },
  computed: {
    leftValue() {
      return this.calculateTotal(this.leftItems);
    },
    rightValue() {
      return this.calculateTotal(this.rightItems);
    },
    difference() {
      const leftTotal = this.calculateTotal(this.leftItems);
      const rightTotal = this.calculateTotal(this.rightItems);
      const diff = Math.abs(rightTotal - leftTotal).toFixed(2);
      if (rightTotal > leftTotal) {
        this.winLoss = "Win";
        return "+" + diff;
      } else if (leftTotal > rightTotal) {
        this.winLoss = "Loss";
        return "-" + diff;
      } else {
        this.winLoss = "Fair";
        return diff;
      }
    },
    diffBackgroundClass() {
      const leftTotal = this.calculateTotal(this.leftItems);
      const rightTotal = this.calculateTotal(this.rightItems);
      if (rightTotal > leftTotal) {
        return "bg-gradient-to-br from-emerald-500 to-emerald-600 border-emerald-400 shadow-emerald-500/50";
      } else if (leftTotal > rightTotal) {
        return "bg-gradient-to-br from-red-500 to-red-600 border-red-400 shadow-red-500/50";
      } else {
        return "bg-gradient-to-br from-slate-600 to-slate-700 border-slate-500 shadow-slate-500/50";
      }
    },
    diffTextClass() {
      const leftTotal = this.calculateTotal(this.leftItems);
      const rightTotal = this.calculateTotal(this.rightItems);
      if (rightTotal > leftTotal) {
        return "text-emerald-500";
      } else if (leftTotal > rightTotal) {
        return "text-red-500";
      } else {
        return "text-slate-600";
      }
    },
    filteredItems() {
      if (!this.searchTerm.trim()) {
        return this.items;
      }
      const search = this.searchTerm.toLowerCase();
      return this.items.filter(
        (item) => item.name.toLowerCase().includes(search) || item.value.toString().toLowerCase().includes(search)
      );
    }
  },
  methods: {
    // parseValue(valueStr) {
    //   if (typeof valueStr === 'number') return valueStr
    //   const value = parseFloat(valueStr)
    //   const suffix = valueStr.toString().replace(/[0-9.]/g, '').toUpperCase()
    //   const multipliers = {
    //     'K': 1e3,
    //     'M': 1e6,
    //     'B': 1e9,
    //     'T': 1e12,
    //     'QD': 1e15,
    //     'QT': 1e18,
    //     'SX': 1e21
    //   }
    //   return value * (multipliers[suffix] || 1)
    // },
    // formatValue(num) {
    //   if (num === 0) return "0"
    //   const suffixes = [
    //     { value: 1e33, suffix: "DC" },
    //     { value: 1e30, suffix: "NO" },
    //     { value: 1e27, suffix: "OC" },
    //     { value: 1e24, suffix: "SP" },
    //     { value: 1e21, suffix: "SX" },
    //     { value: 1e18, suffix: "QI" },
    //     { value: 1e15, suffix: "QD" },
    //     { value: 1e12, suffix: "T" },
    //     { value: 1e9, suffix: "B" },
    //     { value: 1e6, suffix: "M" },
    //     { value: 1e3, suffix: "K" }
    //   ]
    //   for (let i = 0; i < suffixes.length; i++) {
    //     if (num >= suffixes[i].value) {
    //       const formattedValue = num / suffixes[i].value
    //       if (formattedValue >= 100) {
    //         return Math.floor(formattedValue) + suffixes[i].suffix
    //       } else if (formattedValue >= 10) {
    //         return (Math.floor(formattedValue * 10) / 10) + suffixes[i].suffix
    //       } else {
    //         return (Math.floor(formattedValue * 100) / 100) + suffixes[i].suffix
    //       }
    //     }
    //   }
    //   return Math.floor(num).toString()
    // },
    calculateTotal(items) {
      return items.reduce((total, item) => total + Number(item.price == "N/A" ? 0 : item.price), 0);
    },
    getSlotClass(side, index2) {
      const itemsArray = side === "left" ? this.leftItems : this.rightItems;
      const baseClasses = "backdrop-blur-sm";
      if (itemsArray[index2]) {
        if (side === "left") {
          return `${baseClasses} bg-gradient-to-br from-emerald-900/70 to-emerald-800/70 border-2 border-emerald-500 hover:border-red-400 cursor-pointer hover:shadow-red-400/30`;
        } else {
          return `${baseClasses} bg-gradient-to-br from-blue-900/70 to-blue-800/70 border-2 border-blue-500 hover:border-red-400 cursor-pointer hover:shadow-red-400/30`;
        }
      } else if (index2 === itemsArray.length && index2 < 9) {
        return `${baseClasses} bg-slate-900/50 border-2 border-slate-600 hover:border-slate-400 cursor-pointer hover:shadow-slate-400/20`;
      } else {
        return `${baseClasses} bg-slate-900/30 border-2 border-slate-700`;
      }
    },
    handleSlotClick(side, slot) {
      const itemsArray = side === "left" ? this.leftItems : this.rightItems;
      if (itemsArray[slot]) {
        if (side === "left") {
          this.leftItems.splice(slot, 1);
        } else {
          this.rightItems.splice(slot, 1);
        }
        return;
      }
      if (slot === itemsArray.length && slot < 9) {
        this.currentSlot = { side, slot };
        this.searchTerm = "";
        this.showModal = true;
      }
    },
    selectItem(item) {
      if (this.currentSlot) {
        if (this.currentSlot.side === "left") {
          this.leftItems.push({ ...item });
        } else {
          this.rightItems.push({ ...item });
        }
      }
      this.closeModal();
    },
    closeModal() {
      this.showModal = false;
      this.currentSlot = null;
      this.searchTerm = "";
    },
    //   async loadItems() {
    //     try {
    //       const response = await fetch('https://api.silverfoxvalues.com/growagarden?category=pets')
    //       if (response.ok) {
    //         this.items = await response.json()
    //       }
    //     } catch (error) {
    //       console.error('Failed to load items:', error)
    //     }
    //   }
    async fetchRestaurantData() {
      this.pending = true;
      this.error = null;
      try {
        const category = "pets";
        const response = await $fetch("/api/gag", {
          query: { category }
        });
        this.items = response.data;
      } catch (error) {
        this.error = {
          message: error.message || "Failed to fetch restaurant data"
        };
      } finally {
        this.pending = false;
      }
    }
  },
  mounted() {
    this.fetchRestaurantData();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MainHeader = __nuxt_component_0;
  const _component_MainFooter = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_MainHeader, null, null, _parent));
  _push(`<div class="max-w-6xl mx-auto pt-44 pb-20"><h1 class="font-bold sm:text-5xl text-3xl text-center bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Pets value Calculator</h1><div class="sm:p-6 p-3"><div class="score-bar bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl border border-slate-600 sm:px-8 px-3 sm:py-4 py-2 mb-8 grid grid-cols-3 shadow-xl"><div class="flex items-center space-x-4"><span class="sm:text-6xl text-xl font-bold text-emerald-400">${ssrInterpolate($options.leftValue)}</span></div><div class="flex items-center justify-center sm:space-x-8 space-x-1"><div class="text-center"><div class="text-slate-300 sm:text-xl text-sm font-medium uppercase sm:tracking-wider mb-1">YOUR OFFER</div><div class="h-0.5 bg-emerald-500 rounded"></div></div><div class="text-slate-400 text-2xl font-light">|</div><div class="text-center"><div class="text-slate-300 sm:text-xl text-sm font-medium uppercase sm:tracking-wider mb-1">THEIR OFFER</div></div></div><div class="flex items-center justify-end space-x-4"><span class="sm:text-6xl text-xl font-bold text-blue-400">${ssrInterpolate($options.rightValue)}</span></div></div><div class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-600 sm:p-8 p-2 py-6 sm:py-8 relative shadow-2xl"><div class="grid grid-cols-2 sm:gap-32 gap-16"><div class="space-y-4"><div class="grid grid-cols-3 sm:gap-3 gap-1"><!--[-->`);
  ssrRenderList(9, (index2) => {
    _push(`<div class="${ssrRenderClass([$options.getSlotClass("left", index2 - 1), "trade-slot rounded-lg sm:h-28 h-14 flex items-center justify-center transition-all duration-300 shadow-lg"])}">`);
    if ($data.leftItems[index2 - 1]) {
      _push(`<div class="text-center"><div class="flex justify-center"><img class="w-full h-full sm:p-2.5 rounded"${ssrRenderAttr("src", `https://storage.silverfoxvalues.com/gag/${$data.leftItems[index2 - 1].imageName}`)}></div></div>`);
    } else if (index2 - 1 === $data.leftItems.length && index2 - 1 < 9) {
      _push(`<div class="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full sm:w-12 sm:h-12 h-6 w-6 flex items-center justify-center shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"><svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"></path></svg></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div></div><div class="space-y-4"><div class="grid grid-cols-3 sm:gap-3 gap-1"><!--[-->`);
  ssrRenderList(9, (index2) => {
    _push(`<div class="${ssrRenderClass([$options.getSlotClass("right", index2 - 1), "trade-slot rounded-lg sm:h-28 h-14 flex items-center justify-center transition-all duration-300 shadow-lg"])}">`);
    if ($data.rightItems[index2 - 1]) {
      _push(`<div class="text-center"><div class="flex justify-center"><img class="w-full h-full sm:p-2.5 rounded"${ssrRenderAttr("src", `https://storage.silverfoxvalues.com/gag/${$data.rightItems[index2 - 1].imageName}`)}></div></div>`);
    } else if (index2 - 1 === $data.rightItems.length && index2 - 1 < 9) {
      _push(`<div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full sm:w-12 sm:h-12 h-6 w-6 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 transition-all duration-300"><svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"></path></svg></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div><div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"><p class="${ssrRenderClass([$options.diffTextClass, "text-xl font-bold flex justify-center"])}">${ssrInterpolate($data.winLoss)}</p><div class="${ssrRenderClass([$options.diffBackgroundClass, "rounded-full sm:w-20 sm:h-20 w-14 h-14 flex items-center justify-center border-2 shadow-2xl transition-all duration-300"])}"><span class="text-white sm:text-xl text-xs font-bold">${ssrInterpolate($options.difference)}</span></div></div><h1 class="text-center text-lg font-bold mt-3 text-slate-400">Grow a Garden Calculator</h1></div></div><div class="bg-[#111827]/30 text-gray-100 p-6 md:p-10 rounded-2xl shadow-xl border border-yellow-900 mx-auto mt-10"><h2 class="text-3xl md:text-4xl font-extrabold text-center mb-4"> \u{1F6A8} Attention GAG Traders! \u{1F6A8} </h2><p class="text-lg leading-relaxed mb-4"> We\u2019ve built a <span class="font-semibold">brand-new GAG Calculator! \u{1F4A5}</span></p><p class="text-base mb-4"> Previously, it used <span class="font-semibold">Shekel values</span>, but due to inflation and low demand, no one wants Shekels anymore. \u{1F605} </p><p class="text-base mb-4"> Our <span class="font-semibold">team of 10</span> behind the scenes has created a <span class="font-semibold">perfect point system</span> for all GAG pets! \u{1F98A}\u2728 </p><ul class="list-none space-y-2 mb-6"><li>\u2705 Know the perfect value of every pet and trade without taking an L.</li><li>\u{1F4A1} Tip: Use our calculator so you never get any <span class="font-semibold">L</span> in trade.</li><li>\u{1F48E} Never get scammed on a trade again!</li></ul></div></div><div style="${ssrRenderStyle($data.showModal ? null : { display: "none" })}" class="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"><div class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-600 p-6 max-w-xl w-full mx-4 shadow-2xl"><div class="flex justify-between items-center mb-4"><h3 class="text-white text-lg font-semibold">Select Item</h3><button class="text-slate-400 hover:text-white text-xl transition-colors duration-200"><span>\xD7</span></button></div><div class="relative mb-4"><input${ssrRenderAttr("value", $data.searchTerm)} type="text" class="w-full px-4 py-3 pl-10 rounded-lg bg-slate-700 border border-slate-500 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200" placeholder="Search pets..."><div class="absolute inset-y-0 left-0 flex items-center pl-3"><svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div></div><div class="grid sm:grid-cols-4 grid-cols-2 gap-3 max-h-96 overflow-y-auto"><!--[-->`);
  ssrRenderList($options.filteredItems, (item) => {
    _push(`<div class="item-option bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-500 rounded-xl p-3 cursor-pointer hover:from-slate-600 hover:to-slate-700 hover:border-emerald-500 text-center transition-all duration-200 shadow-lg hover:shadow-emerald-500/20"><div class="flex justify-center"><img class="w-24 h-24 rounded-lg"${ssrRenderAttr("src", `https://storage.silverfoxvalues.com/gag/${item.imageName}`)}></div><div class="text-sm font-medium text-white mt-2">${ssrInterpolate(item.name)}</div><div class="text-xs text-emerald-400 font-semibold">${ssrInterpolate(item.price)}</div></div>`);
  });
  _push(`<!--]-->`);
  if ($options.filteredItems.length === 0 && $data.searchTerm) {
    _push(`<div class="col-span-full text-center text-slate-400 py-4"> No items found matching &quot;${ssrInterpolate($data.searchTerm)}&quot; </div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
  _push(ssrRenderComponent(_component_MainFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/growagarden/calculator/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-Dey2uSvQ.mjs.map
