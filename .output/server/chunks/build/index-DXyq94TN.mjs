import { _ as __nuxt_component_0 } from './main-Header-DbHC4O8P.mjs';
import { _ as __nuxt_component_1 } from './loader-wKYxJoHO.mjs';
import { _ as __nuxt_component_3 } from './main-Footer-DaofIaS3.mjs';
import { u as useHead } from './v3-Dm0nbuqa.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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
      title: "My Restaurant Values | Appliances, Decor & Furniture - SilverFoxValues",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { name: "google-adsense-account", content: "ca-pub-2625601725317470" },
        { name: "robots", content: "index,follow" },
        { hid: "description", name: "description", content: "Accurately track weekly updated appliance, decor, and furniture values for My Restaurant on Roblox. Stay ahead in trading with kitchen appliances, decorations, and furniture pricing!" },
        { hid: "keywords", name: "keywords", content: "My Restaurant, My Restaurant values, My Restaurant Roblox, appliances values, decor values, furniture values, My Restaurant trading, Roblox restaurant game, SilverFoxValues, kitchen appliances" },
        { name: "author", content: "SilverFoxValues" },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:title", property: "og:title", content: "My Restaurant Values | Roblox Appliances, Decor & Furniture | SilverFoxValues" },
        { hid: "og:description", property: "og:description", content: "Stay updated with the most accurate My Restaurant Roblox values. Discover the latest appliances, decor, and furniture prices updated weekly." },
        { hid: "og:url", property: "og:url", content: "https://silverfoxvalues.com/myrestaurant/" },
        { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
        { hid: "twitter:title", name: "twitter:title", content: "My Restaurant Roblox \u2013 Weekly Appliances, Decor & Furniture Values" },
        { hid: "twitter:description", name: "twitter:description", content: "Track trusted weekly values of My Restaurant appliances, decor, and furniture. Make better trades on Roblox using SilverFoxValues." }
      ]
    });
  },
  data() {
    return {
      isLoaded: false,
      searchQuery: "",
      activeCategory: "all",
      showItemModal: false,
      selectedItem: null,
      items: [],
      categories: [
        { key: "all", label: "All" },
        { key: "Appliance", label: "Appliance" },
        { key: "Decor", label: "Decor" },
        { key: "Furniture", label: "Furniture" }
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
      this.activeCategory = category;
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
    async fetchRestaurantData() {
      try {
        const response = await $fetch("/api/values-restaurant");
        this.items = response;
        this.currentPage = 1;
        this.displayedItems = [];
        this.loadMoreItems();
        this.$nextTick(() => {
          this.setupInfiniteScroll();
        });
        this.isLoaded = true;
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen text-white" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_main_Header, null, null, _parent));
  _push(`<div class="pt-32 pb-8 text-center"><div class="container mx-auto px-6"><h1 class="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"> My Restaurant </h1><p class="text-xl text-gray-300">Stay updated with the latest item values and trends</p></div></div><div class="container mx-auto px-6 mb-8"><div class="flex flex-col md:flex-row gap-4 items-center justify-between"><div class="flex-1 max-w-md"><div class="relative"><input type="text" placeholder="Search items..." class="search-bar w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"${ssrRenderAttr("value", $data.searchQuery)}><i class="fas fa-search absolute right-4 top-4 text-gray-400"></i></div></div><div class="flex gap-2 flex-wrap"><!--[-->`);
  ssrRenderList($data.categories, (category) => {
    _push(`<button class="${ssrRenderClass(["filter-btn px-4 py-2 rounded-lg text-sm font-semibold", { "active": $data.activeCategory === category.key }])}">${ssrInterpolate(category.label)}</button>`);
  });
  _push(`<!--]--></div></div></div><div style="${ssrRenderStyle(!$data.isLoaded ? null : { display: "none" })}" class="flex justify-center my-10">`);
  _push(ssrRenderComponent(_component_loader, null, null, _parent));
  _push(`</div><div class="container mx-auto px-6 pb-12 min-h-[450px]"><div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"><!--[-->`);
  ssrRenderList($data.displayedItems, (item) => {
    _push(`<div class="item-card rounded-xl p-6 relative rarity-rare"><div class="absolute top-3 right-3"><span class="category-badge text-xs px-2 py-1 rounded-full font-semibold">${ssrInterpolate(item.category)}</span></div><div class="text-center mb-4"><div class="w-24 h-24 mx-auto mb-3 rounded-full flex items-center justify-center"><img${ssrRenderAttr("alt", item.imageName)}${ssrRenderAttr("src", `https://storage.silverfoxvalues.com/mr/${item.imageName}`)} loading="lazy"></div><h1 class="text-lg font-bold text-white">${ssrInterpolate(item.name)}</h1><p class="text-sm text-gray-400">${ssrInterpolate(item.category)}</p></div><div class="space-y-2 mb-4"><div class="flex justify-between items-center"><span class="text-gray-300 text-sm">Current Value:</span><span class="value-badge text-sm px-2 py-1 rounded-full font-bold">${ssrInterpolate(Number(item.value).toLocaleString("en-US"))}\u{1F48E}</span></div><div class="flex justify-between items-center"><span class="text-gray-300 text-sm">Trend:</span><span class="${ssrRenderClass([$options.getTrendClass(item.trend), "flex items-center"])}"><svg class="${ssrRenderClass([$options.getTrendIcon(item.trend), "mr-1 w-6 h-6"])}" viewBox="0 0 24 24" fill="currentColor"><path${ssrRenderAttr("d", $options.getTrendIconPath(item.trend))}></path></svg> ${ssrInterpolate(item.trend)}</span></div></div><button class="details-btn w-full py-2 rounded-lg font-semibold text-white"> View Details </button></div>`);
  });
  _push(`<!--]--></div><div class="h-4"></div></div>`);
  _push(ssrRenderComponent(_component_main_footer, null, null, _parent));
  if ($data.showItemModal) {
    _push(`<div class="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4"><div class="modal-content rounded-xl max-w-lg w-full p-6 relative"><button class="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"><i class="fas fa-times"></i></button>`);
    if ($data.selectedItem) {
      _push(`<div><div class="text-center mb-6"><div class="mb-4 flex justify-center"><img${ssrRenderAttr("alt", $data.selectedItem.imageName)}${ssrRenderAttr("src", `https://storage.silverfoxvalues.com/mr/${$data.selectedItem.imageName}`)}></div><h2 class="text-2xl font-bold text-white mb-2">${ssrInterpolate($data.selectedItem.name)}</h2><div class="flex justify-center items-center space-x-2 mb-4"><span class="bg-purple-600 text-xs px-2 py-1 rounded-full">${ssrInterpolate($data.selectedItem.category)}</span></div></div><div class="space-y-4"><div><h1 class="font-semibold text-white mb-2">Current Value</h1><div class="flex justify-between items-center bg-gray-800 rounded-lg p-3"><span class="text-green-400 font-bold text-lg">${ssrInterpolate(Number($data.selectedItem.value).toLocaleString("en-US"))}\u{1F48E}</span><span class="${ssrRenderClass([$options.getTrendClass($data.selectedItem.trend), "flex items-center"])}"><svg class="${ssrRenderClass([$options.getTrendIcon($data.selectedItem.trend), "mr-1 w-6 h-6"])}" viewBox="0 0 24 24" fill="currentColor"><path${ssrRenderAttr("d", $options.getTrendIconPath($data.selectedItem.trend))}></path></svg> ${ssrInterpolate($data.selectedItem.trend)}</span></div></div><div><h1 class="font-semibold text-white mb-2">Description</h1><p class="text-gray-300 text-sm leading-relaxed">${ssrInterpolate($data.selectedItem.description)}</p></div><div class="border-t border-gray-600 pt-4"><p class="text-gray-400 text-xs mb-2">${ssrInterpolate((() => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/myrestaurantvalues/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DXyq94TN.mjs.map
