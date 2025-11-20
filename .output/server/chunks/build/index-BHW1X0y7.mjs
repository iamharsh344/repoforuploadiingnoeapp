import { _ as __nuxt_component_0 } from './main-Header-DbHC4O8P.mjs';
import { _ as __nuxt_component_1 } from './loader-wKYxJoHO.mjs';
import { _ as __nuxt_component_3 } from './main-Footer-DaofIaS3.mjs';
import { u as useHead } from './v3-Dm0nbuqa.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-DcjpnLTq.mjs';
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
  name: "GrowGardenValues",
  setup() {
    useHead({
      title: "Grow a Garden Values | Pets - SilverFoxValues",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { name: "google-adsense-account", content: "ca-pub-2625601725317470" },
        { name: "robots", content: "index,follow" },
        { hid: "description", name: "description", content: "Accurately track weekly updated item, crop, and pet values for Grow a Garden on Roblox. Stay ahead in trading and know what your items are worth!" },
        { hid: "keywords", name: "keywords", content: "Grow a Garden, Grow a Garden values, gag values, gag pet values, item values, crop values, Grow a Garden trading, gag roblox values, gag" },
        { name: "author", content: "SilverFoxValues" },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:title", property: "og:title", content: "Grow a Garden Values | Roblox Pets & Items | SilverFoxValues" },
        { hid: "og:description", property: "og:description", content: "Stay updated with the most accurate Grow a Garden Roblox values. Discover the latest pet, item, and crop prices updated weekly." },
        { hid: "og:url", property: "og:url", content: "https://silverfoxvalues.com/growagarden/pets/" },
        { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
        { hid: "twitter:title", name: "twitter:title", content: "Grow a Garden Roblox \u2013 Weekly Pet, Crop & Item Values" },
        { hid: "twitter:description", name: "twitter:description", content: "Track trusted weekly values of Grow a Garden items and pets. Make better trades on Roblox using SilverFoxValues." }
      ]
    });
  },
  data() {
    return {
      searchQuery: "",
      activeCategory: "all",
      showItemModal: false,
      selectedItem: null,
      isLoaded: false,
      items: [],
      categories: [
        { key: "/plants", label: "Plant" },
        { key: "/gears", label: "Gear" },
        { key: "/pets", label: "Pet" }
      ],
      // Infinite scroll
      displayedItems: [],
      itemsPerPage: 20,
      // Good for grid layouts (divisible by 2,3,4)
      currentPage: 1,
      loading: false,
      observer: null,
      searchTimeout: null
    };
  },
  watch: {
    activeCategory() {
      this.resetAndReload();
    },
    searchQuery() {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(() => {
        this.resetAndReload();
      }, 300);
    }
  },
  computed: {
    filteredItems() {
      let filtered = this.items;
      if (this.activeCategory !== "all") {
        filtered = filtered.filter((item) => item.category === this.activeCategory);
      }
      if (this.searchQuery) {
        filtered = filtered.filter(
          (item) => item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      return filtered;
    },
    hasReachedEnd() {
      return this.displayedItems.length >= this.filteredItems.length;
    }
  },
  methods: {
    setActiveCategory(category) {
      this.$router.push("/growagarden" + category);
    },
    showModal(itemId) {
      this.selectedItem = this.items.find((item) => item._id === itemId);
      this.showItemModal = true;
    },
    hideModal() {
      this.showItemModal = false;
      this.selectedItem = null;
    },
    getTrendClass(trend) {
      if (trend == null) return "text-gray-400";
      if (trend.includes("+")) return "text-green-400";
      if (trend.includes("-")) return "text-red-400";
      return "text-gray-400";
    },
    getTrendIcon(trend) {
      if (trend == null) return "text-gray-500";
      if (trend.includes("+")) return "text-green-500";
      if (trend.includes("-")) return "text-red-500";
      return "text-gray-500";
    },
    getTrendIconPath(trend) {
      if (trend == null) return "M5 12h14";
      if (trend.includes("+")) {
        return "M7 14l5-5 5 5z";
      }
      if (trend.includes("-")) {
        return "M7 10l5 5 5-5z";
      }
      return "M5 12h14";
    },
    // async fetchItems() {
    //     try {
    //         const response = await fetch('https://api.silverfoxvalues.com/growagarden?category=pets');
    //         this.items = await response.json();
    //         this.activeCategory = 'pets'
    //         this.isLoaded = true
    //     } catch (error) {
    //         console.error('Error fetching items:', error);
    //     }
    // }
    async fetchRestaurantData() {
      try {
        const category = "pets";
        const response = await $fetch("/api/gag", {
          query: { category }
        });
        this.activeCategory = "pets";
        this.isLoaded = true;
        this.items = response.data;
        this.items = this.items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        this.currentPage = 1;
        this.displayedItems = [];
        this.loadMoreItems();
        this.$nextTick(() => {
          this.setupInfiniteScroll();
        });
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    },
    loadMoreItems() {
      if (this.loading || this.hasReachedEnd) return;
      this.loading = true;
      setTimeout(() => {
        const filtered = this.filteredItems;
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const newItems = filtered.slice(startIndex, endIndex);
        this.displayedItems.push(...newItems);
        this.currentPage++;
        this.loading = false;
      }, 100);
    },
    setupInfiniteScroll() {
      return;
    },
    resetAndReload() {
      this.currentPage = 1;
      this.displayedItems = [];
      this.loadMoreItems();
    }
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
  },
  created() {
    this.fetchRestaurantData();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_main_Header = __nuxt_component_0;
  const _component_loader = __nuxt_component_1;
  const _component_main_footer = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-white game-body" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_main_Header, null, null, _parent));
  _push(`<div class="pt-32 pb-8 text-center"><div class="container mx-auto px-6"><h1 class="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"> Grow a Garden </h1><p class="text-xl text-gray-300">Stay updated with the latest item values and trends</p></div></div><div class="container mx-auto px-6 mb-8"><div class="flex flex-col md:flex-row gap-4 items-center justify-between"><div class="flex-1 max-w-md"><div class="relative"><input type="text" placeholder="Search items..." class="search-bar w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"${ssrRenderAttr("value", $data.searchQuery)}><i class="fas fa-search absolute right-4 top-4 text-gray-400"></i></div></div><div class="flex gap-2 flex-wrap"><!--[-->`);
  ssrRenderList($data.categories, (category) => {
    _push(`<button class="${ssrRenderClass(["filter-btn px-4 py-2 rounded-lg text-sm font-semibold", { "active": $data.activeCategory === category.key }])}">${ssrInterpolate(category.label)}</button>`);
  });
  _push(`<!--]--></div></div></div><div style="${ssrRenderStyle(!$data.isLoaded ? null : { display: "none" })}" class="flex justify-center my-10">`);
  _push(ssrRenderComponent(_component_loader, null, null, _parent));
  _push(`</div><div class="container mx-auto px-6 pb-12 min-h-[450px]"><div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"><!--[-->`);
  ssrRenderList($data.displayedItems, (item) => {
    _push(`<div class="${ssrRenderClass(`item-card rounded-xl p-6 relative ${"rarity-" + item.rarity.toLowerCase()}`)}"><div class="absolute top-3 right-3"><span class="category-badge text-xs px-2 py-1 rounded-full font-semibold">${ssrInterpolate(item.category == "crops" ? "Plants" : item.category.charAt(0).toUpperCase() + item.category.slice(1))}</span></div><div class="text-center mb-4"><div class="w-24 h-24 mx-auto mb-3 rounded-full flex items-center justify-center"><img${ssrRenderAttr("alt", item.imageName)}${ssrRenderAttr("src", `https://storage.silverfoxvalues.com/gag/${item.imageName}`)} loading="lazy"></div><h1 class="text-lg font-bold text-white">${ssrInterpolate(item.name)}</h1><p class="text-sm text-gray-400">${ssrInterpolate(item.category == "crops" ? "Plants" : item.category.charAt(0).toUpperCase() + item.category.slice(1))}</p></div><div class="space-y-2 mb-4"><div class="flex justify-between items-center"><span class="text-gray-300 text-sm">Value:</span><span class="value-badge text-base px-2 py-1 rounded-full font-semibold flex gap-1"><img alt="Sheckle" width="20" height="20" class="w-[20px] h-[20px]"${ssrRenderAttr("src", _imports_0)}> ${ssrInterpolate(item.value.toLowerCase())}</span></div><div class="flex justify-between items-center"><span class="text-gray-300 text-sm">Rarity:</span><span class="text-sm px-2 py-1 rounded-full font-semibold">${ssrInterpolate(item.rarity)}</span></div><div class="flex justify-between items-center"><span class="text-gray-300 text-sm">Demand:</span><span class="text-sm px-2 py-1 rounded-full font-semibold">${ssrInterpolate(item.demand)}</span></div><div class="flex justify-between items-center"><span class="text-gray-300 text-sm">Points:</span><span class="text-sm px-2 py-1 rounded-full font-semibold">${ssrInterpolate(item.price)}</span></div><div class="flex justify-between items-center"><span class="text-gray-300 text-sm">Trend:</span><span class="${ssrRenderClass([$options.getTrendClass(item.trend), "flex items-center"])}"><svg class="${ssrRenderClass([$options.getTrendIcon(item.trend), "mr-1 w-6 h-6"])}" viewBox="0 0 24 24" fill="currentColor"><path${ssrRenderAttr("d", $options.getTrendIconPath(item.trend))}></path></svg> ${ssrInterpolate(item.trend)}</span></div></div><button class="details-btn w-full py-2 rounded-lg font-semibold text-white"> View Details </button></div>`);
  });
  _push(`<!--]--></div><div class="h-4"></div></div>`);
  _push(ssrRenderComponent(_component_main_footer, null, null, _parent));
  if ($data.showItemModal) {
    _push(`<div class="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4"><div class="modal-content rounded-xl max-w-lg w-full p-6 relative"><button class="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"><i class="fas fa-times"></i></button>`);
    if ($data.selectedItem) {
      _push(`<div><div class="text-center mb-6"><div class="flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></path></svg></div><div class="mb-4 flex justify-center"><img${ssrRenderAttr("alt", $data.selectedItem.imageName)} class="w-24 h-24"${ssrRenderAttr("src", `https://storage.silverfoxvalues.com/gag/${$data.selectedItem.imageName}`)}></div><h2 class="text-2xl font-bold text-white mb-2">${ssrInterpolate($data.selectedItem.name)}</h2><div class="flex justify-center items-center space-x-2 mb-4"><span class="bg-purple-600 text-xs px-2 py-1 rounded-full">${ssrInterpolate($data.selectedItem.category == "crops" ? "Plants" : $data.selectedItem.category.charAt(0).toUpperCase() + $data.selectedItem.category.slice(1))}</span></div></div><div class="space-y-4"><div><h3 class="font-semibold text-white mb-2">Current Value</h3><div class="flex justify-between items-center bg-gray-800 rounded-lg p-3"><span class="text-green-400 font-bold text-lg">${ssrInterpolate($data.selectedItem.value.toUpperCase())}</span><span class="${ssrRenderClass([$options.getTrendClass($data.selectedItem.trend), "flex items-center"])}"><svg class="${ssrRenderClass([$options.getTrendIcon($data.selectedItem.trend), "mr-1 w-6 h-6"])}" viewBox="0 0 24 24" fill="currentColor"><path${ssrRenderAttr("d", $options.getTrendIconPath($data.selectedItem.trend))}></path></svg> ${ssrInterpolate($data.selectedItem.trend)}</span></div></div><div><h3 class="font-semibold text-white mb-2">Description</h3><p class="text-gray-300 text-sm leading-relaxed">${ssrInterpolate($data.selectedItem.description)}</p></div><div><h3 class="font-semibold text-white mb-2">Stats</h3><div class="space-y-2"><div class="flex justify-between items-center"><span class="text-gray-300">Rarity: </span><span class="text-white">${ssrInterpolate($data.selectedItem.rarity)}</span></div><div class="flex justify-between items-center"><span class="text-gray-300">Limited: </span><span class="text-white">${ssrInterpolate($data.selectedItem.limited)}</span></div><div class="flex justify-between items-center"><span class="text-gray-300">Demand: </span><span class="text-white">${ssrInterpolate($data.selectedItem.demand)}</span></div><div class="flex justify-between items-center"><span class="text-gray-300">Points: </span><span class="text-white">${ssrInterpolate($data.selectedItem.price)}</span></div></div></div><div class="border-t border-gray-600 pt-4"><p class="text-gray-400 text-xs mb-2">${ssrInterpolate((() => {
        if (!$data.selectedItem.lastUpdated) return "";
        const now = /* @__PURE__ */ new Date();
        const date = new Date($data.selectedItem.lastUpdated);
        const diffInMs = now - date;
        const diffInMinutes = Math.floor(diffInMs / (1e3 * 60));
        const diffInHours = Math.floor(diffInMinutes / 60);
        const diffInDays = Math.floor(diffInHours / 24);
        if (diffInMinutes < 1) return "Just now";
        if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
        if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
        if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      })())}</p></div></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/growagarden/pets/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BHW1X0y7.mjs.map
