import { _ as __nuxt_component_0 } from './main-Header-DbHC4O8P.mjs';
import { _ as __nuxt_component_1 } from './loader-wKYxJoHO.mjs';
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
      title: "AdoptMe Trade Calculator | Pet, Toy & Gift Values - SilverFoxValues",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { name: "google-adsense-account", content: "ca-pub-2625601725317470" },
        { name: "robots", content: "index,follow" },
        { hid: "description", name: "description", content: "Calculate fair trades for Roblox AdoptMe items, including pets, toys, gifts, and more. Instantly compare values and ensure balanced trades every time!" },
        { hid: "keywords", name: "keywords", content: "AdoptMe trade calculator, Roblox AdoptMe trading, pet values AdoptMe, adoptme pets value, adoptme pets, AdoptMe trading, Roblox trading tool, adoptme" },
        { name: "author", content: "SilverFoxValues" },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:title", property: "og:title", content: "AdoptMe Trade Calculator | Roblox Trading Tool | SilverFoxValues" },
        { hid: "og:description", property: "og:description", content: "Use our free trade calculator to ensure fair trades in Roblox AdoptMe. Compare pet, toy, and gift values, calculate differences, and trade smarter with accurate pricing data." },
        { hid: "og:url", property: "og:url", content: "https://silverfoxvalues.com/adoptme/calculator/" },
        { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
        { hid: "twitter:title", name: "twitter:title", content: "AdoptMe Trade Calculator \u2013 Fair Roblox Trading Made Easy" },
        { hid: "twitter:description", name: "twitter:description", content: "Easily calculate and compare Roblox AdoptMe pet, toy, and gift values to make perfect trades every time." }
      ]
    });
  },
  data() {
    return {
      filteredItems: [],
      category: null,
      items: [],
      leftItems: [],
      rightItems: [],
      currentSlot: null,
      showModal: false,
      searchTerm: "",
      winLoss: null,
      currentStep: "item",
      // or 'frnm'
      selectedItem: null,
      selectedOptions: [],
      // 'f', 'r', 'n', 'm'
      downloadedCategory: ["pets"],
      isLoaded: false
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
      const leftTotal = Number(this.calculateTotal(this.leftItems));
      const rightTotal = Number(this.calculateTotal(this.rightItems));
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
      const leftTotal = Number(this.calculateTotal(this.leftItems));
      const rightTotal = Number(this.calculateTotal(this.rightItems));
      if (rightTotal > leftTotal) {
        return "bg-gradient-to-br from-emerald-500 to-emerald-600 border-emerald-400 shadow-emerald-500/50";
      } else if (leftTotal > rightTotal) {
        return "bg-gradient-to-br from-red-500 to-red-600 border-red-400 shadow-red-500/50";
      } else {
        return "bg-gradient-to-br from-slate-600 to-slate-700 border-slate-500 shadow-slate-500/50";
      }
    },
    diffTextClass() {
      const leftTotal = Number(this.calculateTotal(this.leftItems));
      const rightTotal = Number(this.calculateTotal(this.rightItems));
      if (rightTotal > leftTotal) {
        return "text-emerald-500";
      } else if (leftTotal > rightTotal) {
        return "text-red-500";
      } else {
        return "text-slate-600";
      }
    },
    filteredItems() {
      if (!this.searchTerm.trim() && !this.category) {
        return this.items;
      }
      const search = this.searchTerm.toLowerCase();
      return this.items.filter(
        (item) => (!this.category || item.category === this.category) && item.name.toLowerCase().includes(search)
      );
    }
  },
  methods: {
    async SetCategory(cat) {
      this.category = cat;
      this.searchTerm = "";
      if (!this.downloadedCategory.includes(cat)) {
        this.isLoaded = false;
        const category = cat;
        try {
          const response = await $fetch("/api/adoptme", {
            query: { category }
          });
          const g = response.data;
          this.items.push(...g);
          this.downloadedCategory.push(cat);
        } catch (error) {
          console.error("Error fetching items:", error);
        } finally {
          this.isLoaded = true;
        }
      }
    },
    calculateTotal(items) {
      return items.reduce((total, item) => total + (item.calculatedValue || item.value || 0), 0).toFixed(2);
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
      if (item.tradingValue) {
        this.selectedItem = item;
        this.selectedOptions = [];
        this.currentStep = "frnm";
      } else {
        this.addItemToSlot(item, item.value);
      }
    },
    addItemToSlot(item, value) {
      if (!this.currentSlot) return;
      if (this.currentSlot.side === "left") {
        this.leftItems.push({
          ...item,
          calculatedValue: value
        });
      } else {
        this.rightItems.push({
          ...item,
          calculatedValue: value
        });
      }
      this.closeModal();
    },
    confirmFRNMSelection() {
      const item = this.selectedItem;
      const selections = this.selectedOptions;
      const tradingValue = item.tradingValue || {};
      let calculatedValue;
      if (selections.length === 0) {
        calculatedValue = Number(tradingValue.npRegularValue || tradingValue.regularValue || 0);
      } else {
        const hasFlyRide = selections.includes("f") || selections.includes("r");
        const hasNeon = selections.includes("n");
        const hasMega = selections.includes("m");
        if (hasMega && hasFlyRide) {
          calculatedValue = tradingValue.megaValue || 0;
        } else if (hasMega) {
          calculatedValue = tradingValue.npMegaValue || 0;
        } else if (hasNeon && hasFlyRide) {
          calculatedValue = tradingValue.neonValue || 0;
        } else if (hasNeon) {
          calculatedValue = tradingValue.npNeonValue || 0;
        } else if (hasFlyRide) {
          calculatedValue = tradingValue.regularValue || 0;
        } else {
          calculatedValue = tradingValue.npRegularValue || tradingValue.regularValue || 0;
        }
      }
      if (this.currentSlot.side === "left") {
        this.leftItems.push({
          ...item,
          selected: [...selections],
          calculatedValue
        });
      } else {
        this.rightItems.push({
          ...item,
          selected: [...selections],
          calculatedValue
        });
      }
      this.closeModal(true);
    },
    toggleOption(option) {
      const idx = this.selectedOptions.indexOf(option);
      if (this.selectedOptions.includes("n") && option == "m") {
        this.selectedOptions.splice(this.selectedOptions.indexOf("n"), 1);
        this.selectedOptions.push("m");
      } else if (this.selectedOptions.includes("m") && option == "n") {
        this.selectedOptions.splice(this.selectedOptions.indexOf("m"), 1);
        this.selectedOptions.push("n");
      } else if (idx === -1) {
        this.selectedOptions.push(option);
      } else {
        this.selectedOptions.splice(idx, 1);
      }
    },
    closeModal(force) {
      if (force) {
        this.showModal = false;
        this.selectedItem = null;
        this.selectedOptions = [];
        this.currentSlot = null;
        this.searchTerm = "";
        this.currentStep = "item";
        return;
      }
      if (this.currentStep === "frnm") {
        this.currentStep = "item";
      } else {
        this.showModal = false;
        this.selectedItem = null;
        this.selectedOptions = [];
        this.currentSlot = null;
        this.searchTerm = "";
      }
    },
    async fetchRestaurantData() {
      this.pending = true;
      this.error = null;
      try {
        const category = "pets";
        const response = await $fetch("/api/adoptme", {
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
  const _component_loader = __nuxt_component_1;
  const _component_MainFooter = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_MainHeader, null, null, _parent));
  _push(`<div class="max-w-6xl mx-auto pt-32 pb-20"><h1 class="font-bold lg:text-5xl text-3xl text-center bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">AdoptMe value Calculator</h1><div class="md:p-6 p-3"><div class="score-bar bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl border border-slate-600 lg:px-8 px-3 lg:py-4 py-2 mb-8 grid grid-cols-3 shadow-xl"><div class="flex items-center space-x-4"><span class="lg:text-6xl text-xl font-bold text-emerald-400">${ssrInterpolate($options.leftValue)}</span></div><div class="flex items-center justify-center lg:space-x-8 space-x-1"><div class="text-center"><div class="text-slate-300 lg:text-xl text-sm font-medium uppercase lg:tracking-wider mb-1">YOUR OFFER</div><div class="h-0.5 bg-emerald-500 rounded"></div></div><div class="text-slate-400 text-2xl font-light">|</div><div class="text-center"><div class="text-slate-300 lg:text-xl text-sm font-medium uppercase lg:tracking-wider mb-1">THEIR OFFER</div></div></div><div class="flex items-center justify-end space-x-4"><span class="lg:text-6xl text-xl font-bold text-blue-400">${ssrInterpolate($options.rightValue)}</span></div></div><div class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-600 lg:p-8 p-2 py-6 lg:py-8 relative shadow-2xl"><div class="grid grid-cols-2 lg:gap-32 gap-16"><div class="space-y-4"><div class="grid grid-cols-3 lg:gap-3 gap-1"><!--[-->`);
  ssrRenderList(9, (index2) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    _push(`<div class="${ssrRenderClass([$options.getSlotClass("left", index2 - 1), "trade-slot rounded-lg lg:h-28 h-14 flex items-center justify-center transition-all duration-300 shadow-lg"])}">`);
    if ($data.leftItems[index2 - 1]) {
      _push(`<div class="text-center relative"><div class="flex justify-center"><img class="lg:w-20 lg:h-20 w-10 h-10 lg:p-2.5 rounded"${ssrRenderAttr("src", `https://storage.silverfoxvalues.com/adoptme/${$data.leftItems[index2 - 1].imageName}`)}></div><div class="absolute flex lg:gap-1.5 gap-px lg:-mt-4 -mt-[10px] lg:-ml-3.5 ml-px text-white font-semibold">`);
      if ((_b = (_a = $data.leftItems[index2 - 1]) == null ? void 0 : _a.selected) == null ? void 0 : _b.includes("f")) {
        _push(`<div class="bg-[#3B82F6] lg:px-1.5 px-0.5 lg:py-0.5 lg:text-sm text-xs rounded-full">F</div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_d = (_c = $data.leftItems[index2 - 1]) == null ? void 0 : _c.selected) == null ? void 0 : _d.includes("r")) {
        _push(`<div class="bg-[#E4046F] lg:px-1.5 px-0.5 lg:py-0.5 lg:text-sm text-xs rounded-full">R</div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_f = (_e = $data.leftItems[index2 - 1]) == null ? void 0 : _e.selected) == null ? void 0 : _f.includes("n")) {
        _push(`<div class="bg-[#22C55E] lg:px-1.5 px-0.5 lg:py-0.5 lg:text-sm text-xs rounded-full">N</div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_h = (_g = $data.leftItems[index2 - 1]) == null ? void 0 : _g.selected) == null ? void 0 : _h.includes("m")) {
        _push(`<div class="bg-[#A855F7] lg:px-1.5 px-0.5 lg:py-0.5 lg:text-sm text-xs rounded-full">M</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    } else if (index2 - 1 === $data.leftItems.length && index2 - 1 < 9) {
      _push(`<div class="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full lg:w-12 lg:h-12 h-6 w-6 flex items-center justify-center shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"><svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"></path></svg></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div></div><div class="space-y-4"><div class="grid grid-cols-3 lg:gap-3 gap-1"><!--[-->`);
  ssrRenderList(9, (index2) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    _push(`<div class="${ssrRenderClass([$options.getSlotClass("right", index2 - 1), "trade-slot rounded-lg lg:h-28 h-14 flex items-center justify-center transition-all duration-300 shadow-lg"])}">`);
    if ($data.rightItems[index2 - 1]) {
      _push(`<div class="text-center"><div class="flex justify-center"><img class="lg:w-20 lg:h-20 w-10 h-10 lg:p-2.5 rounded"${ssrRenderAttr("src", `https://storage.silverfoxvalues.com/adoptme/${$data.rightItems[index2 - 1].imageName}`)}></div><div class="absolute flex lg:gap-1.5 gap-px lg:-mt-4 -mt-[10px] lg:-ml-3.5 ml-px text-white font-semibold">`);
      if ((_b = (_a = $data.rightItems[index2 - 1]) == null ? void 0 : _a.selected) == null ? void 0 : _b.includes("f")) {
        _push(`<div class="bg-[#3B82F6] lg:px-1.5 px-0.5 lg:py-0.5 lg:text-sm text-xs rounded-full">F</div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_d = (_c = $data.rightItems[index2 - 1]) == null ? void 0 : _c.selected) == null ? void 0 : _d.includes("r")) {
        _push(`<div class="bg-[#E4046F] lg:px-1.5 px-0.5 lg:py-0.5 lg:text-sm text-xs rounded-full">R</div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_f = (_e = $data.rightItems[index2 - 1]) == null ? void 0 : _e.selected) == null ? void 0 : _f.includes("n")) {
        _push(`<div class="bg-[#22C55E] lg:px-1.5 px-0.5 lg:py-0.5 lg:text-sm text-xs rounded-full">N</div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_h = (_g = $data.rightItems[index2 - 1]) == null ? void 0 : _g.selected) == null ? void 0 : _h.includes("m")) {
        _push(`<div class="bg-[#A855F7] lg:px-1.5 px-0.5 lg:py-0.5 lg:text-sm text-xs rounded-full">M</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    } else if (index2 - 1 === $data.rightItems.length && index2 - 1 < 9) {
      _push(`<div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full lg:w-12 lg:h-12 h-6 w-6 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 transition-all duration-300"><svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"></path></svg></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div><div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"><p class="${ssrRenderClass([$options.diffTextClass, "text-xl font-bold flex justify-center"])}">${ssrInterpolate($data.winLoss)}</p><div class="${ssrRenderClass([$options.diffBackgroundClass, "rounded-full lg:w-20 lg:h-20 w-14 h-14 flex items-center justify-center border-2 shadow-2xl transition-all duration-300"])}"><span class="text-white lg:text-xl text-xs font-bold">${ssrInterpolate($options.difference)}</span></div></div><h1 class="text-center text-lg font-bold mt-3 text-slate-400">AdoptMe Calculator</h1></div></div></div><div style="${ssrRenderStyle($data.showModal && $data.currentStep === "item" ? null : { display: "none" })}" class="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"><div class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-600 lg:p-6 p-3 max-w-2xl w-full mx-4 shadow-2xl"><div class="flex justify-between items-center mb-4"><h3 class="text-white text-lg font-semibold">Select Item</h3><button class="text-slate-400 hover:text-white text-xl transition-colors duration-200"><span>\xD7</span></button></div><div class="relative mb-4"><input${ssrRenderAttr("value", $data.searchTerm)} type="text" class="w-full px-4 py-3 pl-10 rounded-lg bg-slate-700 border border-slate-500 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200" placeholder="Search pets..."><div class="absolute inset-y-0 left-0 flex items-center pl-3"><svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div></div><div class="flex gap-5"><div class="space-y-2 *:min-w-32"><div class="${ssrRenderClass([$data.category == "pets" ? "bg-gray-700 border-gray-400" : "border-gray-800", "bg-gray-600 border p-2.5 px-3 rounded-lg text-white font-semibold cursor-pointer duration-300"])}">Pets</div><div class="${ssrRenderClass([$data.category == "eggs" ? "bg-gray-700 border-gray-400" : "border-gray-800", "bg-gray-600 border p-2.5 px-3 rounded-lg text-white font-semibold cursor-pointer duration-300"])}">Eggs</div><div class="${ssrRenderClass([$data.category == "Pet wear" ? "bg-gray-700 border-gray-400" : "border-gray-800", "bg-gray-600 border p-2.5 px-3 rounded-lg text-white font-semibold cursor-pointer duration-300"])}">Pet Wear</div><div class="${ssrRenderClass([$data.category == "strollers" ? "bg-gray-700 border-gray-400" : "border-gray-800", "bg-gray-600 border p-2.5 px-3 rounded-lg text-white font-semibold cursor-pointer duration-300"])}">Strollers</div><div class="${ssrRenderClass([$data.category == "food" ? "bg-gray-700 border-gray-400" : "border-gray-800", "bg-gray-600 border p-2.5 px-3 rounded-lg text-white font-semibold cursor-pointer duration-300"])}">Food</div><div class="${ssrRenderClass([$data.category == "vehicles" ? "bg-gray-700 border-gray-400" : "border-gray-800", "bg-gray-600 border p-2.5 px-3 rounded-lg text-white font-semibold cursor-pointer duration-300"])}">Vehicles</div><div class="${ssrRenderClass([$data.category == "toys" ? "bg-gray-700 border-gray-400" : "border-gray-800", "bg-gray-600 border p-2.5 px-3 rounded-lg text-white font-semibold cursor-pointer duration-300"])}">Toys</div><div class="${ssrRenderClass([$data.category == "gifts" ? "bg-gray-700 border-gray-400" : "border-gray-800", "bg-gray-600 border p-2.5 px-3 rounded-lg text-white font-semibold cursor-pointer duration-300"])}">Gifts</div><div class="${ssrRenderClass([$data.category == "stickers" ? "bg-gray-700 border-gray-400" : "border-gray-800", "bg-gray-600 border p-2.5 px-3 rounded-lg text-white font-semibold cursor-pointer duration-300"])}">Stickers</div></div><div class="grid lg:grid-cols-3 grid-cols-2 gap-3 max-h-[29.5rem] overflow-y-auto"><!--[-->`);
  ssrRenderList($options.filteredItems, (item) => {
    _push(`<div class="item-option bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-500 rounded-xl p-3 cursor-pointer hover:from-slate-600 hover:to-slate-700 hover:border-emerald-500 text-center transition-all duration-200 shadow-lg hover:shadow-emerald-500/20"><div class="flex justify-center"><img class="rounded-lg"${ssrRenderAttr("src", `https://storage.silverfoxvalues.com/adoptme/${item.imageName}`)}></div><div class="text-sm font-medium text-white mt-2">${ssrInterpolate(item.name)}</div></div>`);
  });
  _push(`<!--]-->`);
  if ($options.filteredItems.length === 0 && $data.searchTerm) {
    _push(`<div class="col-span-full text-center text-slate-400 py-4"> No items found matching &quot;${ssrInterpolate($data.searchTerm)}&quot; </div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div style="${ssrRenderStyle(!$data.isLoaded ? null : { display: "none" })}" class="text-white">`);
  _push(ssrRenderComponent(_component_loader, null, null, _parent));
  _push(`</div></div></div></div></div>`);
  if ($data.showModal && $data.currentStep === "frnm" && $data.selectedItem) {
    _push(`<div class="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[51]"><div class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-600 p-6 max-w-sm w-full mx-4 shadow-2xl"><div class="flex justify-between items-center mb-4"><h3 class="text-white text-lg font-semibold">Select FRNM Options</h3><button class="text-slate-400 hover:text-white text-xl transition-colors duration-200"><span>\xD7</span></button></div><p class="text-slate-300 mb-4">${ssrInterpolate($data.selectedItem.name)}</p><div class="flex gap-3 mb-6"><!--[-->`);
    ssrRenderList(["f", "r", "n", "m"], (opt) => {
      _push(`<button class="${ssrRenderClass([{ "bg-emerald-500": $data.selectedOptions.includes(opt) }, "p-2 px-4 rounded-lg border border-slate-500 text-white uppercase font-bold transition disabled:bg-gray-500"])}">${ssrInterpolate(opt)}</button>`);
    });
    _push(`<!--]--></div><button class="w-full py-2 px-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-bold"> Confirm </button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_MainFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adoptme/calculator/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BU5GgIdn.mjs.map
