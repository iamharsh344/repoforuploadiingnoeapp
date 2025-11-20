import { _ as __nuxt_component_0 } from './main-Header-DbHC4O8P.mjs';
import { _ as __nuxt_component_1 } from './loader-wKYxJoHO.mjs';
import { _ as __nuxt_component_3 } from './main-Footer-DaofIaS3.mjs';
import { u as useHead } from './v3-Dm0nbuqa.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
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
      title: "Adopt Me Values | Pets, Vehicles & Toys - SilverFoxValues",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { name: "google-adsense-account", content: "ca-pub-2625601725317470" },
        { name: "robots", content: "index,follow" },
        { hid: "description", name: "description", content: "Weekly updated pet, vehicle, and toy values for Adopt Me on Roblox. Stay ahead in trading with legendary pets, rare vehicles, and exclusive toy pricing!" },
        { hid: "keywords", name: "keywords", content: "Adopt Me pets, Adopt Me values, Adopt Me Roblox, pet values, vehicle values, toy values, Adopt Me trading, adoptme pets value, rare vehicles, adoptme values, adoptme trading values" },
        { name: "author", content: "SilverFoxValues" },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:title", property: "og:title", content: "Adopt Me Values | Roblox Pets, Vehicles & Toys | SilverFoxValues" },
        { hid: "og:description", property: "og:description", content: "Stay updated with the most accurate Adopt Me Roblox values. Discover the latest pet, vehicle, and toy prices updated weekly for better trading decisions." },
        { hid: "og:url", property: "og:url", content: "https://silverfoxvalues.com/adoptme/" },
        { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
        { hid: "twitter:title", name: "twitter:title", content: "Adopt Me Roblox \u2013 Weekly Pet, Vehicle & Toy Values" },
        { hid: "twitter:description", name: "twitter:description", content: "Track trusted weekly values of Adopt Me pets, vehicles, and toys. Make better trades on Roblox using SilverFoxValues." }
      ]
    });
  },
  data() {
    return {
      isLoaded: false,
      searchQuery: "",
      activeCategory: "pets",
      showItemModal: false,
      selectedItem: null,
      isDropdownOpen: false,
      petSelections: {},
      items: [],
      categories: [
        { key: "pets", label: "Pets" },
        { key: "eggs", label: "Eggs" },
        { key: "Pet wear", label: "Pets Wear" },
        { key: "strollers", label: "Strollers" },
        { key: "food", label: "Food" },
        { key: "vehicles", label: "vehicles" },
        { key: "toys", label: "Toys" },
        { key: "gifts", label: "Gifts" },
        { key: "stickers", label: "Stickers" }
      ],
      downloadedCategory: ["pets"],
      // Infinite scroll
      displayedItems: [],
      itemsPerPage: 12,
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
    togglePetOption(itemId, option) {
      if (!this.petSelections[itemId]) {
        this.petSelections[itemId] = [];
      }
      const selections = this.petSelections[itemId];
      const isSelected = selections.includes(option);
      if (isSelected) {
        this.petSelections[itemId] = selections.filter((s) => s !== option);
      } else {
        if (option === "n" && selections.includes("m")) {
          this.petSelections[itemId] = selections.filter((s) => s !== "m");
          this.petSelections[itemId].push("n");
        } else if (option === "m" && selections.includes("n")) {
          this.petSelections[itemId] = selections.filter((s) => s !== "n");
          this.petSelections[itemId].push("m");
        } else {
          if (this.canSelectPetOption(itemId, option)) {
            this.petSelections[itemId].push(option);
          }
        }
      }
      this.$forceUpdate();
    },
    canSelectPetOption(itemId, option) {
      const currentSelections = this.petSelections[itemId] || [];
      const newSelections = [...currentSelections, option];
      if (newSelections.length >= 4) return false;
      return true;
    },
    getPetButtonClass(itemId, option) {
      const selections = this.petSelections[itemId] || [];
      const isSelected = selections.includes(option);
      const canSelect = !isSelected && this.canSelectPetOption(itemId, option);
      switch (option) {
        case "f":
          return {
            "border-blue-500": true,
            "bg-blue-500": isSelected,
            "hover:bg-blue-500": canSelect || isSelected
          };
        case "r":
          return {
            "border-[#E4046F]": true,
            "bg-[#E4046F]": isSelected,
            "hover:bg-[#E4046F]": canSelect || isSelected
          };
        case "n":
          return {
            "border-green-500": true,
            "bg-green-500": isSelected,
            "hover:bg-green-500": canSelect || isSelected
          };
        case "m":
          return {
            "border-purple-500": true,
            "bg-purple-500": isSelected,
            "hover:bg-purple-500": canSelect || isSelected
          };
        default:
          return {};
      }
    },
    getItemCombinedValue(itemId) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const item = this.filteredItems.find((i) => i._id === itemId);
      if (!item) return "0";
      if (item.category !== "pets") {
        return Number(item.value).toLocaleString("en-US");
      }
      const selections = this.petSelections[itemId] || [];
      if (selections.length === 0) {
        return Number(((_a = item.tradingValue) == null ? void 0 : _a.npRegularValue) || ((_b = item.tradingValue) == null ? void 0 : _b.regularValue));
      }
      const hasFlytRide = selections.includes("f") || selections.includes("r");
      const hasNeon = selections.includes("n");
      const hasMega = selections.includes("m");
      let totalValue = 0;
      if (hasMega && hasFlytRide) {
        totalValue = ((_c = item.tradingValue) == null ? void 0 : _c.megaValue) || 0;
      } else if (hasMega) {
        totalValue = ((_d = item.tradingValue) == null ? void 0 : _d.npMegaValue) || 0;
      } else if (hasNeon && hasFlytRide) {
        totalValue = ((_e = item.tradingValue) == null ? void 0 : _e.neonValue) || 0;
      } else if (hasNeon) {
        totalValue = ((_f = item.tradingValue) == null ? void 0 : _f.npNeonValue) || 0;
      } else if (hasFlytRide) {
        totalValue = ((_g = item.tradingValue) == null ? void 0 : _g.regularValue) || 0;
      } else {
        totalValue = ((_h = item.tradingValue) == null ? void 0 : _h.npRegularValue) || ((_i = item.tradingValue) == null ? void 0 : _i.regularValue);
      }
      return totalValue.toLocaleString("en-US");
    },
    getItemCombinedValueDemand(itemId) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      const item = this.filteredItems.find((i) => i._id === itemId);
      if (!item) return "0";
      if (item.category !== "pets") {
        return (_a = item.tradingValue) == null ? void 0 : _a.npRegularValueDemand;
      }
      const selections = this.petSelections[itemId] || [];
      if (selections.length === 0) {
        return ((_b = item.tradingValue) == null ? void 0 : _b.npRegularDemand) || ((_c = item.tradingValue) == null ? void 0 : _c.regularDemand);
      }
      const hasFlytRide = selections.includes("f") || selections.includes("r");
      const hasNeon = selections.includes("n");
      const hasMega = selections.includes("m");
      let totalValue = null;
      if (hasMega && hasFlytRide) {
        totalValue = (_d = item.tradingValue) == null ? void 0 : _d.megaDemand;
      } else if (hasMega) {
        totalValue = (_e = item.tradingValue) == null ? void 0 : _e.npMegaDemand;
      } else if (hasNeon && hasFlytRide) {
        totalValue = (_f = item.tradingValue) == null ? void 0 : _f.neonDemand;
      } else if (hasNeon) {
        totalValue = (_g = item.tradingValue) == null ? void 0 : _g.npNeonDemand;
      } else if (hasFlytRide) {
        totalValue = (_h = item.tradingValue) == null ? void 0 : _h.regularDemand;
      } else {
        totalValue = ((_i = item.tradingValue) == null ? void 0 : _i.npRegularDemand) || ((_j = item.tradingValue) == null ? void 0 : _j.regularDemand);
      }
      return totalValue;
    },
    async setActiveCategory(category) {
      this.searchQuery = null;
      this.activeCategory = category;
      if (!this.downloadedCategory.includes(category)) {
        this.isLoaded = false;
        const category2 = this.activeCategory;
        try {
          const response = await $fetch("/api/adoptme", {
            query: { category: category2 }
          });
          const g = response.data;
          this.items.push(...g);
          this.downloadedCategory.push(category2);
          let filtered = this.items;
          if (this.activeCategory !== "all") {
            filtered = filtered.filter((item) => item.category === this.activeCategory);
          }
          this.resetAndReload();
        } catch (error) {
          console.error("Error fetching items:", error);
        } finally {
          this.isLoaded = true;
        }
      }
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
    //         const response = await fetch('https://api.silverfoxvalues.com/adoptme');
    //         this.items = await response.json();
    //     } catch (error) {
    //         console.error('Error fetching items:', error);
    //     }
    // }
    async fetchAdoptMeData() {
      try {
        const response = await $fetch("/api/adoptme", {
          query: { category: "pets" }
        });
        this.items = response.data;
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
    this.fetchAdoptMeData();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_main_Header = __nuxt_component_0;
  const _component_loader = __nuxt_component_1;
  const _component_main_footer = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen text-white" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_main_Header, null, null, _parent));
  _push(`<div class="pt-32 pb-8 text-center"><div class="container mx-auto px-6"><h1 class="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"> Adopt Me </h1><p class="text-xl text-gray-300">Stay updated with the latest item values and trends</p></div></div><div class="container mx-auto px-6 mb-8"><div class="flex flex-col md:flex-row gap-4 items-center justify-between"><div class="flex-1 max-w-md"><div class="relative"><input type="text" placeholder="Search items..." class="search-bar w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"${ssrRenderAttr("value", $data.searchQuery)}><i class="fas fa-search absolute right-4 top-4 text-gray-400"></i></div></div><div class="relative w-32"><button class="flex items-center justify-between w-full px-4 py-2 bg-gray-900 rounded-lg text-sm font-semibold border border-gray-700"><span>${ssrInterpolate($data.activeCategory.charAt(0).toUpperCase() + $data.activeCategory.slice(1))}</span><svg class="${ssrRenderClass(["w-4 h-4 transition-transform", { "rotate-180": $data.isDropdownOpen }])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>`);
  if ($data.isDropdownOpen) {
    _push(`<div class="absolute z-10 w-full mt-1 rounded-lg shadow-lg max-h-[20rem] overflow-auto navbar border border-gray-700"><!--[-->`);
    ssrRenderList($data.categories, (category) => {
      _push(`<button class="${ssrRenderClass([
        "w-full px-4 py-2 text-left text-sm hover:bg-gray-700 focus:outline-none",
        { "bg-gray-900 font-semibold": $data.activeCategory === category.key }
      ])}">${ssrInterpolate(category.label)}</button>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div><div style="${ssrRenderStyle(!$data.isLoaded ? null : { display: "none" })}" class="flex justify-center my-10">`);
  _push(ssrRenderComponent(_component_loader, null, null, _parent));
  _push(`</div><div class="container mx-auto px-6 pb-12"><div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"><!--[-->`);
  ssrRenderList($data.displayedItems, (item) => {
    _push(`<div class="item-card rounded-xl p-6 relative rarity-rare flex flex-col justify-between"><div class="absolute top-3 right-3"><span class="category-badge text-xs px-2 py-1 rounded-full font-semibold">${ssrInterpolate(item.category.charAt(0).toUpperCase() + item.category.slice(1))}</span></div><div class="text-center mb-4"><div class="w-24 h-24 mx-auto mb-3 rounded-full flex items-center justify-center"><img${ssrRenderAttr("alt", item.imageName)}${ssrRenderAttr("src", `https://storage.silverfoxvalues.com/adoptme/${item.imageName}`)} loading="lazy"></div><h1 class="text-lg font-bold text-white">${ssrInterpolate(item.name)}</h1><p class="text-sm text-gray-400">${ssrInterpolate(item.category.charAt(0).toUpperCase() + item.category.slice(1))}</p></div>`);
    if (item.category == "pets") {
      _push(`<div class="flex gap-2.5 my-2"><div class="${ssrRenderClass([$options.getPetButtonClass(item._id, "f"), "duration-300 cursor-pointer border rounded-lg text-white px-4"])}">F</div><div class="${ssrRenderClass([$options.getPetButtonClass(item._id, "r"), "duration-300 cursor-pointer border rounded-lg text-white px-4"])}">R</div><div class="${ssrRenderClass([$options.getPetButtonClass(item._id, "n"), "duration-300 cursor-pointer border rounded-lg text-white px-4"])}">N</div><div class="${ssrRenderClass([$options.getPetButtonClass(item._id, "m"), "duration-300 cursor-pointer border rounded-lg text-white px-4"])}">M</div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="space-y-2 mb-4"><div class="flex justify-between items-center"><span class="text-gray-300 text-sm">Current Value:</span><span class="value-badge text-sm px-2 py-1 rounded-full font-bold">${ssrInterpolate(item.category == "pets" ? $options.getItemCombinedValue(item._id) : Number(item.value).toLocaleString("en-US"))}</span></div><div class="flex justify-between items-center"><span class="text-gray-300">Demand: </span><span class="text-white">${ssrInterpolate(item.category == "pets" ? $options.getItemCombinedValueDemand(item._id) : item.demand)}</span></div><div class="flex justify-between items-center"><span class="text-gray-300 text-sm">Trend:</span><span class="${ssrRenderClass([$options.getTrendClass(item.trend), "flex items-center"])}"><svg class="${ssrRenderClass([$options.getTrendIcon(item.trend), "mr-1 w-6 h-6"])}" viewBox="0 0 24 24" fill="currentColor"><path${ssrRenderAttr("d", $options.getTrendIconPath(item.trend))}></path></svg> ${ssrInterpolate(item.trend)}</span></div></div><button class="details-btn w-full py-2 rounded-lg font-semibold text-white"> View Details </button></div>`);
  });
  _push(`<!--]--></div><div class="h-4"></div></div>`);
  _push(ssrRenderComponent(_component_main_footer, null, null, _parent));
  if ($data.showItemModal) {
    _push(`<div class="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4"><div class="modal-content rounded-xl max-w-lg w-full p-6 relative"><button class="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"><i class="fas fa-times"></i></button>`);
    if ($data.selectedItem) {
      _push(`<div><div class="text-center mb-6"><div class="flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></path></svg></div><div class="mb-4 flex justify-center"><img${ssrRenderAttr("alt", $data.selectedItem.imageName)} class="w-24 h-24"${ssrRenderAttr("src", `https://storage.silverfoxvalues.com/adoptme/${$data.selectedItem.imageName}`)}></div><h2 class="text-2xl font-bold text-white mb-2">${ssrInterpolate($data.selectedItem.name)}</h2><div class="flex justify-center items-center space-x-2 mb-4"><span class="bg-purple-600 text-xs px-2 py-1 rounded-full">${ssrInterpolate($data.selectedItem.category.charAt(0).toUpperCase() + $data.selectedItem.category.slice(1))}</span></div></div><div class="space-y-4"><div><h3 class="font-semibold text-white mb-2">Current Value</h3><div class="flex justify-between items-center bg-gray-800 rounded-lg p-3"><span class="text-green-400 font-bold text-lg">${ssrInterpolate($data.selectedItem.category == "pets" ? $options.getItemCombinedValue($data.selectedItem._id) : Number($data.selectedItem.value).toLocaleString("en-US"))}</span><span class="${ssrRenderClass([$options.getTrendClass($data.selectedItem.trend), "flex items-center"])}"><svg class="${ssrRenderClass([$options.getTrendIcon($data.selectedItem.trend), "mr-1 w-6 h-6"])}" viewBox="0 0 24 24" fill="currentColor"><path${ssrRenderAttr("d", $options.getTrendIconPath($data.selectedItem.trend))}></path></svg> ${ssrInterpolate($data.selectedItem.trend)}</span></div></div><div class="flex justify-between items-center"><span class="text-gray-300">Demand: </span><span class="text-white">${ssrInterpolate($data.selectedItem.category == "pets" ? $options.getItemCombinedValueDemand($data.selectedItem._id) : $data.selectedItem.demand)}</span></div>`);
      if ($data.selectedItem.description != null) {
        _push(`<div><h3 class="font-semibold text-white mb-2">Description</h3><p class="text-gray-300 text-sm leading-relaxed">${ssrInterpolate($data.selectedItem.description)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border-t border-gray-600 pt-4"><p class="text-gray-400 text-xs mb-2">${ssrInterpolate((() => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adoptme/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BC_gNjqu.mjs.map
