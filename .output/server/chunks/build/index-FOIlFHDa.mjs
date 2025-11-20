import { u as useHead } from './v3-Dm0nbuqa.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-CYYamiF5.mjs';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { _ as _export_sfc } from './server.mjs';
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
import 'vue-router';

const _imports_1 = publicAssetsURL("/admin/gag.jpg");
const _imports_2 = publicAssetsURL("/admin/mr.jpg");
const _imports_3 = publicAssetsURL("/admin/adoptme.jpg");
const _sfc_main = {
  setup() {
    useHead({
      title: "Admin - SilverFoxValues",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { name: "robots", content: "noindex, nofollow" }
      ]
    });
  },
  data() {
    return {
      hasToken: false,
      selectedGame: "gag",
      selectedFilter: "All",
      searchQuery: "",
      items: [],
      showAddModal: false,
      add: {
        name: null,
        price: null,
        value: null,
        demand: null,
        rarity: null,
        description: null,
        category: null
      },
      loading: false,
      error: null,
      games: {
        gag: {
          title: "Grow a Garden",
          url: "https://api.silverfoxvalues.com/growagarden"
        },
        mr: {
          title: "My Restaurant",
          url: "https://api.silverfoxvalues.com/myRestaurantValues"
        },
        adoptme: {
          title: "Adopt Me",
          url: "https://api.silverfoxvalues.com/adoptme"
        }
      },
      showEditModal: false,
      editingItem: null,
      gameFields: {
        gag: [
          { key: "name", label: "Item Name", type: "text" },
          { key: "price", label: "Price", type: "text" },
          { key: "value", label: "Value", type: "text" },
          { key: "demand", label: "Demand", type: "text" },
          { key: "rarity", label: "Rarity", type: "text" },
          { key: "limited", label: "Limited", type: "select", options: ["YES", "NO"] },
          { key: "robux", label: "Robux", type: "text" },
          { key: "multiHarvest", label: "Multi-Harvest", type: "text" },
          { key: "stable", label: "Stable", type: "text" },
          { key: "description", label: "Description", type: "textarea" }
        ],
        mr: [
          { key: "name", label: "Item Name", type: "text" },
          { key: "value", label: "Value", type: "text" },
          { key: "demand", label: "Demand", type: "text" },
          { key: "description", label: "Description", type: "textarea" }
        ],
        adoptme: [
          { key: "name", label: "Item Name", type: "text" },
          { key: "value", label: "Value", type: "text" },
          { key: "demand", label: "Demand", type: "text" },
          { key: "imageName", label: "Image", type: "image" },
          { key: "description", label: "Description", type: "textarea" }
        ]
      },
      gameDisplayFields: {
        gag: [
          { key: "value", label: "Value", format: "text" },
          { key: "price", label: "Point", format: "text" },
          { key: "demand", label: "Demand", format: "text" },
          { key: "rarity", label: "Rarity", format: "badge" }
        ],
        mr: [
          { key: "value", label: "Value", format: "currency", icon: "\u{1F48E}" }
        ],
        adoptme: [
          { key: "value", label: "Value", format: "currency" },
          { key: "demand", label: "Demand", format: "text" }
        ]
      },
      saving: false,
      saveMessage: null,
      saveMessageType: "success",
      selectedFile: null,
      // Store the uploaded file
      hasNewFile: false
    };
  },
  computed: {
    gameTitle() {
      var _a;
      return ((_a = this.games[this.selectedGame]) == null ? void 0 : _a.title) || "Select a Game";
    },
    availableFilters() {
      const categories = [...new Set(this.items.map((item) => item.category || item.type || "Item"))];
      return ["All", ...categories];
    },
    filteredItems() {
      let filtered = this.items;
      if (this.selectedFilter !== "All") {
        filtered = filtered.filter(
          (item) => (item.category || item.type || "Item") === this.selectedFilter
        );
      }
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(
          (item) => item.name.toLowerCase().includes(query)
        );
      }
      return filtered;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/admin/login");
    },
    openEditModal(item) {
      this.editingItem = { ...item };
      this.showEditModal = true, this.selectedFile = null;
      this.hasNewFile = false;
    },
    closeEditModal() {
      this.showEditModal = false;
      this.editingItem = null;
      this.saveMessage = null;
      this.selectedFile = null;
      this.hasNewFile = false;
    },
    closeAddModal() {
      this.showAddModal = false;
      this.selectedFile = null;
      this.hasNewFile = false;
    },
    async addChanges() {
      this.saving = true;
      this.saveMessage = null;
      try {
        let requestBody;
        const token = localStorage.getItem("token");
        let headers = {
          "Authorization": "Bearer " + token
        };
        if (this.hasNewFile && this.selectedFile) {
          requestBody = new FormData();
          requestBody.append("itemname", this.add.name);
          requestBody.append("value", this.add.value);
          requestBody.append("price", this.add.price);
          requestBody.append("demand", this.add.demand);
          requestBody.append("description", this.add.description);
          requestBody.append("category", this.add.category);
          requestBody.append("rarity", this.add.rarity);
          requestBody.append("image", this.selectedFile);
        } else {
          headers["Content-Type"] = "application/json";
          requestBody = JSON.stringify({
            itemname: this.add.name,
            value: this.add.value,
            price: this.add.price,
            demand: this.add.demand,
            description: this.add.description,
            rarity: this.add.rarity,
            category: this.add.category
          });
        }
        const response = await fetch("https://api.silverfoxvalues.com/admin/addGAG", {
          method: "POST",
          headers,
          body: requestBody
        });
        if (response.status === 401) {
          localStorage.removeItem("token");
          this.$router.push("/admin/login");
          return;
        }
        const errorData = await response.json();
        if (!response.ok) {
          throw new Error(`${errorData.error}`);
        }
        this.saveMessage = "Item Added successfully!";
        this.saveMessageType = "success";
        setTimeout(() => {
          this.closeAddModal();
        }, 1500);
      } catch (error) {
        this.saveMessage = `${error.message}`;
        this.saveMessageType = "error";
      } finally {
        this.saving = false;
      }
    },
    async saveChanges() {
      if (!this.editingItem) return;
      this.saving = true;
      this.saveMessage = null;
      try {
        if (this.selectedGame === "gag") {
          await this.saveGagItem();
        } else if (this.selectedGame === "mr") {
          await this.saveMrItem();
        } else if (this.selectedGame === "adoptme") {
          await this.saveAdoptMeItem();
        }
        const index2 = this.items.findIndex((item) => item.id === this.editingItem.id);
        if (index2 !== -1) {
          this.items[index2] = { ...this.editingItem };
        }
        this.saveMessage = "Item updated successfully!";
        this.saveMessageType = "success";
        setTimeout(() => {
          this.closeEditModal();
        }, 1500);
      } catch (error) {
        this.saveMessage = `${error.message}`;
        this.saveMessageType = "error";
      } finally {
        this.saving = false;
      }
    },
    async saveGagItem() {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("https://api.silverfoxvalues.com/admin/updateGAG", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          },
          body: JSON.stringify({
            id: this.editingItem._id,
            itemname: this.editingItem.name,
            value: this.editingItem.value,
            price: this.editingItem.price,
            demand: this.editingItem.demand,
            type: this.editingItem.type,
            rarity: this.editingItem.rarity,
            robux: this.editingItem.robux,
            limited: this.editingItem.limited,
            multiHarvest: this.editingItem.multiHarvest,
            description: this.editingItem.description
          })
        });
        if (response.status === 401) {
          localStorage.removeItem("token");
          this.$router.push("/admin/login");
          return;
        }
        const errorData = await response.json();
        if (!response.ok) {
          throw new Error(`${errorData.error}`);
        }
        return errorData;
      } catch (error) {
        throw error;
      }
    },
    async saveMrItem() {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("https://api.silverfoxvalues.com/admin/updateMR", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          },
          body: JSON.stringify({
            id: this.editingItem._id,
            itemname: this.editingItem.name,
            value: this.editingItem.value,
            demand: this.editingItem.demand,
            description: this.editingItem.description
          })
        });
        if (response.status === 401) {
          localStorage.removeItem("token");
          this.$router.push("/admin/login");
          return;
        }
        const errorData = await response.json();
        if (!response.ok) {
          throw new Error(`${errorData.error}`);
        }
        return errorData;
      } catch (error) {
        console.error("Error saving item:", error);
        throw error;
      }
    },
    handleFileChange(event, fieldKey) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFile = file;
        this.hasNewFile = true;
        if (fieldKey != null) this.editingItem[fieldKey] = file.name;
      }
    },
    async saveAdoptMeItem() {
      const token = localStorage.getItem("token");
      try {
        let requestBody;
        let headers = {
          "Authorization": "Bearer " + token
        };
        if (this.hasNewFile && this.selectedFile) {
          requestBody = new FormData();
          requestBody.append("id", this.editingItem._id);
          requestBody.append("itemname", this.editingItem.name);
          requestBody.append("value", this.editingItem.value);
          requestBody.append("demand", this.editingItem.demand);
          requestBody.append("description", this.editingItem.description);
          requestBody.append("category", this.editingItem.category);
          requestBody.append("image", this.selectedFile);
        } else {
          headers["Content-Type"] = "application/json";
          requestBody = JSON.stringify({
            id: this.editingItem._id,
            itemname: this.editingItem.name,
            value: this.editingItem.value,
            demand: this.editingItem.demand,
            description: this.editingItem.description,
            category: this.editingItem.category
          });
        }
        const response = await fetch("https://api.silverfoxvalues.com/admin/updateAdoptme", {
          method: "POST",
          headers,
          body: requestBody
        });
        if (response.status === 401) {
          localStorage.removeItem("token");
          this.$router.push("/admin/login");
          return;
        }
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(`${responseData.error}`);
        }
        return responseData;
      } catch (error) {
        console.error("Error saving item:", error);
        throw error;
      }
    },
    async selectGame(gameKey) {
      this.selectedGame = gameKey;
      this.selectedFilter = "All";
      this.searchQuery = "";
      await this.fetchGameData();
    },
    async fetchGameData() {
      if (!this.games[this.selectedGame]) return;
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch(this.games[this.selectedGame].url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.items = Array.isArray(data) ? data : data.items || [];
        this.items = this.items.map((item, index2) => ({
          ...item,
          id: item.id || index2
        }));
      } catch (err) {
        this.error = `Failed to fetch data: ${err.message}`;
        this.items = [];
      } finally {
        this.loading = false;
      }
    },
    formatValue(value) {
      const numValue = Number(value) || 0;
      if (numValue >= 1e6) {
        return `${(numValue / 1e6).toFixed(1)}M`;
      } else if (numValue >= 1e3) {
        return `${(numValue / 1e3).toFixed(0)}K`;
      }
      return numValue.toLocaleString();
    },
    formatFieldValue(value, format) {
      if (!value && value !== 0) return "N/A";
      switch (format) {
        case "currency":
          return this.selectedGame == "gag" ? this.formatValue(value) : Number(value).toLocaleString();
        case "boolean":
          return value === "YES" || value === true ? "Yes" : "No";
        case "badge":
        case "text":
        default:
          return value;
      }
    },
    getRarityColor(rarity) {
      const rarityColors = {
        "Common": "bg-gray-600",
        "Uncommon": "bg-green-600",
        "Rare": "bg-blue-600",
        "Epic": "bg-purple-600",
        "Legendary": "bg-yellow-600",
        "Mythic": "bg-red-600"
      };
      return rarityColors[rarity] || "bg-slate-600";
    }
  },
  beforeMount() {
    if (localStorage.getItem("token") == null) {
      return this.$router.push("/admin/login");
    }
    this.hasToken = true;
    this.fetchGameData();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($data.hasToken) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-900 text-white" }, _attrs))}><div class="flex"><div class="sm:w-20 w-16 bg-slate-800 border-r border-slate-700 py-6 min-h-screen"><div class="flex flex-col items-center space-y-4"><div class="w-14 h-14 flex items-center justify-center hover:scale-105 transition-transform rounded"><img${ssrRenderAttr("src", _imports_0)}></div><div class="game-icon bg-gradient-to-br from-orange-500 to-red-600 cursor-pointer flex items-center justify-center" data-game="gag"><img${ssrRenderAttr("src", _imports_1)}></div><div class="game-icon bg-gradient-to-br from-red-500 to-pink-600 cursor-pointer flex items-center justify-center" data-game="mr"><img${ssrRenderAttr("src", _imports_2)}></div><div class="game-icon bg-gradient-to-br from-red-500 to-pink-600 cursor-pointer flex items-center justify-center" data-game="adoptme"><img${ssrRenderAttr("src", _imports_3)}></div></div></div><main class="flex-1"><header class="bg-slate-800 border-b border-slate-700 px-6 py-5"><div class="flex items-center justify-between"><div class="flex items-center space-x-4"><div><h1 class="text-2xl font-bold">Gaming Admin Panel</h1><p class="text-slate-400 text-base">Manage your gaming inventory</p></div></div><div class="text-right"><div class="text-sm text-slate-400 p-1.5 bg-gray-700 rounded-lg cursor-pointer">Logout</div></div></div></header><div class="sm:p-6 p-3"><div class="mb-6"><div class="flex flex-col sm:flex-row gap-2.5 sm:items-center mb-4"><div class="relative min-w-20 max-w-80"><input${ssrRenderAttr("value", $data.searchQuery)} type="text" placeholder="Search Items..." class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 pl-10 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500"><svg class="absolute left-3 top-2.5 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div><div style="${ssrRenderStyle($data.selectedGame == "gag" ? null : { display: "none" })}"><button class="px-4 py-2.5 rounded-lg text-sm font-medium transition-colors bg-slate-700 text-slate-300 hover:bg-slate-600">Add</button></div></div><div class="flex"><div class="grid grid-cols-4 gap-4"><!--[-->`);
    ssrRenderList($options.availableFilters, (filter) => {
      _push(`<button class="${ssrRenderClass([
        "sm:px-4 px-2 py-2 rounded-lg text-sm font-medium transition-colors",
        $data.selectedFilter === filter ? "bg-slate-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
      ])}">${ssrInterpolate(filter == "crops" ? "plants" : filter)}</button>`);
    });
    _push(`<!--]--></div></div></div><div class="mb-6"><h2 class="text-lg font-semibold mb-2">${ssrInterpolate($options.gameTitle)}</h2><p class="text-slate-400 text-sm mb-4">Manage items for selected game</p></div>`);
    if ($data.loading) {
      _push(`<div class="flex justify-center items-center h-64"><div class="animate-spin rounded-full h-32 w-32 border-b-2 border-slate-500"></div></div>`);
    } else if ($data.error) {
      _push(`<div class="bg-red-900 border border-red-700 rounded-lg p-4 mb-6"><p class="text-red-300">${ssrInterpolate($data.error)}</p><button class="mt-2 bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"> Retry </button></div>`);
    } else {
      _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4"><!--[-->`);
      ssrRenderList($options.filteredItems, (item) => {
        _push(`<div class="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-slate-600 transition-colors flex flex-col justify-between"><div class="flex items-center mb-3"><div class="w-12 h-12 p-1 flex items-center justify-center mr-3"><img${ssrRenderAttr("src", `https://storage.silverfoxvalues.com/${$data.selectedGame}/${item.imageName}`)}${ssrRenderAttr("alt", item.name)} class="w-full h-full object-cover rounded"></div><div class="flex-1 min-h-12"><h3 class="text-base font-medium">${ssrInterpolate(item.name)}</h3><p class="text-sm text-slate-400">${ssrInterpolate((item.category == "crops" ? "plants" : item.category) || item.type || "Item")}</p></div></div><div class="space-y-2 mb-3"><!--[-->`);
        ssrRenderList($data.gameDisplayFields[$data.selectedGame], (field) => {
          _push(`<div>`);
          if (item[field.key] !== void 0 && item[field.key] !== null) {
            _push(`<div class="flex justify-between"><p class="text-sm text-slate-400 mb-1">${ssrInterpolate(field.label)}:</p>`);
            if (field.format === "currency") {
              _push(`<div class="flex items-center"><span class="text-lg font-semibold">${ssrInterpolate($options.formatFieldValue(item[field.key], field.format))}</span>`);
              if (field.icon) {
                _push(`<span class="text-slate-400 ml-1">${ssrInterpolate(field.icon)}</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            } else if (field.format === "badge" && item.category == "pets") {
              _push(`<div><span class="${ssrRenderClass([$options.getRarityColor(item[field.key]), "inline-block px-2 py-1 rounded-full text-xs font-medium text-white"])}">${ssrInterpolate($options.formatFieldValue(item[field.key], field.format))}</span></div>`);
            } else {
              _push(`<div><span class="${ssrRenderClass([field.key == "value" ? "text-green-400" : "text-slate-200", "text-base font-semibold"])}">${ssrInterpolate($options.formatFieldValue(item[field.key], field.format))}</span></div>`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div><button class="w-full bg-slate-600 hover:bg-slate-500 text-white py-2 rounded-lg text-sm font-medium transition-colors"> Edit Item </button></div>`);
      });
      _push(`<!--]--></div>`);
    }
    _push(`</div></main></div>`);
    if ($data.showEditModal) {
      _push(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"><div class="bg-slate-800 rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto"><div class="flex items-center justify-between mb-6"><h2 class="text-xl font-semibold text-white">Edit Item</h2><button class="text-slate-400 hover:text-white"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>`);
      if ($data.editingItem) {
        _push(`<form><div class="grid grid-cols-3 gap-4 mb-6"><!--[-->`);
        ssrRenderList($data.gameFields[$data.selectedGame], (field) => {
          _push(`<div class="${ssrRenderClass(field.type === "textarea" ? "col-span-3" : "col-span-1")}"><label class="block text-sm font-medium text-slate-300 mb-2">${ssrInterpolate(field.label)}:</label>`);
          if (field.type === "text") {
            _push(`<input${ssrRenderAttr("value", $data.editingItem[field.key])} type="text" class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 disabled:bg-gray-800"${ssrIncludeBooleanAttr(field.key == "name") ? " disabled" : ""}>`);
          } else {
            _push(`<!---->`);
          }
          if (field.type === "image") {
            _push(`<input type="file" class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 disabled:bg-gray-800">`);
          } else if (field.type === "select") {
            _push(`<select class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-slate-500"><!--[-->`);
            ssrRenderList(field.options, (option) => {
              _push(`<option${ssrRenderAttr("value", option)}${ssrIncludeBooleanAttr(Array.isArray($data.editingItem[field.key]) ? ssrLooseContain($data.editingItem[field.key], option) : ssrLooseEqual($data.editingItem[field.key], option)) ? " selected" : ""}>${ssrInterpolate(option)}</option>`);
            });
            _push(`<!--]--></select>`);
          } else if (field.type === "textarea") {
            _push(`<textarea rows="4" class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 resize-none">${ssrInterpolate($data.editingItem[field.key])}</textarea>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
        if ($data.saveMessage) {
          _push(`<div class="${ssrRenderClass([$data.saveMessageType === "success" ? "bg-green-900 border border-green-700 text-green-300" : "bg-red-900 border border-red-700 text-red-300", "mb-4 p-3 rounded-lg"])}">${ssrInterpolate($data.saveMessage)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex space-x-4"><button type="button" class="px-6 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg font-medium transition-colors"> Cancel </button><button type="submit"${ssrIncludeBooleanAttr($data.saving) ? " disabled" : ""} class="flex-1 flex justify-center gap-2.5 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">`);
        if ($data.saving) {
          _push(`<div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate($data.saving ? "Saving..." : "Save Changes")}</button></div></form>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    } else {
      _push(`<!---->`);
    }
    if ($data.showAddModal && $data.selectedGame == "gag") {
      _push(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"><div class="bg-slate-800 rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto"><div class="flex items-center justify-between mb-6"><h2 class="text-xl font-semibold text-white">Add Item</h2><button class="text-slate-400 hover:text-white"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><form><div class="grid grid-cols-3 gap-4 mb-6"><div><label class="block text-sm font-medium text-slate-300 mb-2">Name:</label><input${ssrRenderAttr("value", $data.add.name)} type="text" class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 disabled:bg-gray-800"></div><div><label class="block text-sm font-medium text-slate-300 mb-2">Price:</label><input${ssrRenderAttr("value", $data.add.price)} type="text" class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 disabled:bg-gray-800"></div><div><label class="block text-sm font-medium text-slate-300 mb-2">Value:</label><input${ssrRenderAttr("value", $data.add.value)} type="text" class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 disabled:bg-gray-800"></div><div><label class="block text-sm font-medium text-slate-300 mb-2">Category:</label><select class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 disabled:bg-gray-800"><option value="pets"${ssrIncludeBooleanAttr(Array.isArray($data.add.category) ? ssrLooseContain($data.add.category, "pets") : ssrLooseEqual($data.add.category, "pets")) ? " selected" : ""}>Pets</option><option value="crops"${ssrIncludeBooleanAttr(Array.isArray($data.add.category) ? ssrLooseContain($data.add.category, "crops") : ssrLooseEqual($data.add.category, "crops")) ? " selected" : ""}>Plants</option><option value="gears"${ssrIncludeBooleanAttr(Array.isArray($data.add.category) ? ssrLooseContain($data.add.category, "gears") : ssrLooseEqual($data.add.category, "gears")) ? " selected" : ""}>Gears</option></select></div><div><label class="block text-sm font-medium text-slate-300 mb-2">Rarity:</label><select class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 disabled:bg-gray-800"><option value="common"${ssrIncludeBooleanAttr(Array.isArray($data.add.rarity) ? ssrLooseContain($data.add.rarity, "common") : ssrLooseEqual($data.add.rarity, "common")) ? " selected" : ""}>Common</option><option value="uncommon"${ssrIncludeBooleanAttr(Array.isArray($data.add.rarity) ? ssrLooseContain($data.add.rarity, "uncommon") : ssrLooseEqual($data.add.rarity, "uncommon")) ? " selected" : ""}>uncommon</option><option value="rare"${ssrIncludeBooleanAttr(Array.isArray($data.add.rarity) ? ssrLooseContain($data.add.rarity, "rare") : ssrLooseEqual($data.add.rarity, "rare")) ? " selected" : ""}>rare</option><option value="epic"${ssrIncludeBooleanAttr(Array.isArray($data.add.rarity) ? ssrLooseContain($data.add.rarity, "epic") : ssrLooseEqual($data.add.rarity, "epic")) ? " selected" : ""}>epic</option><option value="legendary"${ssrIncludeBooleanAttr(Array.isArray($data.add.rarity) ? ssrLooseContain($data.add.rarity, "legendary") : ssrLooseEqual($data.add.rarity, "legendary")) ? " selected" : ""}>legendary</option><option value="mythical"${ssrIncludeBooleanAttr(Array.isArray($data.add.rarity) ? ssrLooseContain($data.add.rarity, "mythical") : ssrLooseEqual($data.add.rarity, "mythical")) ? " selected" : ""}>mythical</option><option value="divine"${ssrIncludeBooleanAttr(Array.isArray($data.add.rarity) ? ssrLooseContain($data.add.rarity, "divine") : ssrLooseEqual($data.add.rarity, "divine")) ? " selected" : ""}>divine</option><option value="prismatic"${ssrIncludeBooleanAttr(Array.isArray($data.add.rarity) ? ssrLooseContain($data.add.rarity, "prismatic") : ssrLooseEqual($data.add.rarity, "prismatic")) ? " selected" : ""}>prismatic</option><option value="prismatic"${ssrIncludeBooleanAttr(Array.isArray($data.add.rarity) ? ssrLooseContain($data.add.rarity, "prismatic") : ssrLooseEqual($data.add.rarity, "prismatic")) ? " selected" : ""}>prismatic</option></select></div><div><label class="block text-sm font-medium text-slate-300 mb-2">Demand:</label><input${ssrRenderAttr("value", $data.add.demand)} type="text" class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 disabled:bg-gray-800"></div><div><label class="block text-sm font-medium text-slate-300 mb-2">Image:</label><input type="file" class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 disabled:bg-gray-800"></div><div class="col-span-3"><label class="block text-sm font-medium text-slate-300 mb-2">Description:</label><textarea rows="4" class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 resize-none">${ssrInterpolate($data.add.description)}</textarea></div></div>`);
      if ($data.saveMessage) {
        _push(`<div class="${ssrRenderClass([$data.saveMessageType === "success" ? "bg-green-900 border border-green-700 text-green-300" : "bg-red-900 border border-red-700 text-red-300", "mb-4 p-3 rounded-lg"])}">${ssrInterpolate($data.saveMessage)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex space-x-4"><button type="button" class="px-6 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg font-medium transition-colors"> Cancel </button><button type="submit"${ssrIncludeBooleanAttr($data.saving) ? " disabled" : ""} class="flex-1 flex justify-center gap-2.5 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">`);
      if ($data.saving) {
        _push(`<div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate($data.saving ? "Saving..." : "Save Changes")}</button></div></form></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-FOIlFHDa.mjs.map
