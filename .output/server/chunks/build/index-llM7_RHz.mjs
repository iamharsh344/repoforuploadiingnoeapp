import { _ as __nuxt_component_0 } from './main-Header-DbHC4O8P.mjs';
import { u as useHead } from './v3-Dm0nbuqa.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  name: "BrainrotApp",
  setup() {
    useHead({
      title: "Steal a Brainrot Values | Characters & Mutations - SilverFoxValues",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { name: "google-adsense-account", content: "ca-pub-2625601725317470" },
        { name: "robots", content: "index,follow" },
        { hid: "description", name: "description", content: "Complete dictionary of all brainrot characters and mutation multipliers for Steal a Brainrot on Roblox. Track character rarities, income rates, and trading values!" },
        { hid: "keywords", name: "keywords", content: "Steal a Brainrot, Steal a Brainrot values, Steal a Brainrot Roblox, brainrot characters, character values, mutation multipliers, Steal a Brainrot trading, Roblox brainrot game, SilverFoxValues, brainrot dictionary" },
        { name: "author", content: "SilverFoxValues" },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:title", property: "og:title", content: "Steal a Brainrot Values | Roblox Characters & Mutations | SilverFoxValues" },
        { hid: "og:description", property: "og:description", content: "Stay updated with the most accurate Steal a Brainrot Roblox values. Discover all character rarities from Common to Secret with income rates and mutation multipliers." },
        { hid: "og:url", property: "og:url", content: "https://silverfoxvalues.com/stealabrainrot/characters/" },
        { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
        { hid: "twitter:title", name: "twitter:title", content: "Steal a Brainrot Roblox \u2013 Complete Character & Mutation Guide" },
        { hid: "twitter:description", name: "twitter:description", content: "Track trusted values of all 58 Steal a Brainrot characters across 7 rarities. Master trading with mutation multipliers and income rates using SilverFoxValues." }
      ]
    });
  },
  data() {
    return {
      searchQuery: "",
      categories: [
        {
          name: "Common",
          characters: [
            { id: 1, name: "Noobini Pizzanini", speed: "1/sec" },
            { id: 2, name: "Lirih Larila", speed: "3/sec" },
            { id: 3, name: "Tim Cheese", speed: "5/sec" },
            { id: 4, name: "Fluriflura", speed: "7/sec" },
            { id: 5, name: "Talpa Di Fero", speed: "9/sec" },
            { id: 6, name: "Svinina Bombardino", speed: "10/sec" },
            { id: 7, name: "Pipi Kiwi", speed: "13/sec" }
          ]
        },
        {
          name: "Rare",
          characters: [
            { id: 101, name: "Trippi Troppi", speed: "15/sec" },
            { id: 102, name: "Tung Tung Tung Sahur", speed: "25/sec" },
            { id: 103, name: "Gangster Footera", speed: "30/sec" },
            { id: 104, name: "Bandito Bobritto", speed: "35/sec" },
            { id: 105, name: "Boneca Amblalabu", speed: "40/sec" },
            { id: 106, name: "Cacto Hipopotamo", speed: "50/sec" },
            { id: 107, name: "Ta Ta Ta Sahur", speed: "55/sec" },
            { id: 108, name: "Tric Trac Baraboom", speed: "65/sec" }
          ]
        },
        {
          name: "Epic",
          characters: [
            { id: 201, name: "Cappuccino Assassino", speed: "75/sec" },
            { id: 202, name: "Brr Brr Patapim", speed: "100/sec" },
            { id: 203, name: "Truimero Truicina", speed: "125/sec" },
            { id: 204, name: "Bambini Crostini", speed: "135/sec" },
            { id: 205, name: "Bannatia Dolphinita", speed: "150/sec" },
            { id: 206, name: "Perchello Lemonchello", speed: "160/sec" },
            { id: 207, name: "Brii Brii Bicus Dicus Bombicus", speed: "175/sec" }
          ]
        },
        {
          name: "Legendary",
          characters: [
            { id: 301, name: "Burbaloni Loliloli", speed: "200/sec" },
            { id: 302, name: "Chimpanzini Bananini", speed: "300/sec" },
            { id: 303, name: "Ballerina Cappuccina", speed: "500/sec" },
            { id: 304, name: "Chef Crabracadabra", speed: "600/sec" },
            { id: 305, name: "Lionel Cactuseli", speed: "650/sec" },
            { id: 306, name: "Glorbo Fruttodrillo", speed: "750/sec" },
            { id: 307, name: "Blueberrinni Octopusini", speed: "1,000/sec" },
            { id: 308, name: "Pandaccini Bananini", speed: "1,200/sec" }
          ]
        },
        {
          name: "Mythic",
          characters: [
            { id: 401, name: "Frigo Camelo", speed: "1,200/sec" },
            { id: 402, name: "Orangutini Ananassini", speed: "1,700/sec" },
            { id: 403, name: "Rhino Toasterino", speed: "2,100/sec" },
            { id: 404, name: "Bombardiro Crocodilo", speed: "2,500/sec" },
            { id: 405, name: "Bombombini Gusini", speed: "5,000/sec" },
            { id: 406, name: "Cavallo Virtuoso", speed: "7,500/sec" },
            { id: 407, name: "Spioniro Golubiro", speed: "3,500/sec" },
            { id: 408, name: "Zibra Zubra Zibralini", speed: "6,000/sec" },
            { id: 409, name: "Tigrilini Watermelini", speed: "7,500/sec" }
          ]
        },
        {
          name: "Brainrot God",
          characters: [
            { id: 501, name: "Cocofanto Elefanto", speed: "10,000/sec" },
            { id: 502, name: "Girafa Celestre", speed: "20,000/sec" },
            { id: 503, name: "Gattatino Neonino", speed: "35,000/sec" },
            { id: 504, name: "Matteo", speed: "50,000/sec" },
            { id: 505, name: "Tralalero Tralala", speed: "50,000/sec" },
            { id: 506, name: "Unclito Samito", speed: "65,000/sec" },
            { id: 507, name: "Odin Din Din Dun", speed: "75,000/sec" },
            { id: 508, name: "Trenostruzzo Turbo 3000", speed: "150,000/sec" },
            { id: 509, name: "Tigroligre Frutonni", speed: "60,000/sec" },
            { id: 510, name: "Orcalero Orcala", speed: "100,000/sec" }
          ]
        },
        {
          name: "Secret",
          characters: [
            { id: 601, name: "La Vacca Saturno Saturnita", speed: "250,000/sec" },
            { id: 602, name: "Sammyni Spiderini", speed: "300,000/sec" },
            { id: 603, name: "Los Tralaleritos", speed: "500,000/sec" },
            { id: 604, name: "Las Tralaleritas", speed: "650,000/sec" },
            { id: 605, name: "Graipuss Medussi", speed: "1,000,000/sec" },
            { id: 606, name: "La Grande Combinazione", speed: "10,000,000/sec" },
            { id: 607, name: "Garama and Madundung", speed: "50,000,000/sec" },
            { id: 608, name: "Torrtuginni Dragonfrutini", speed: "350,000/sec" },
            { id: 609, name: "Pot Hotspot", speed: "2,500,000/sec" }
          ]
        }
      ]
    };
  },
  computed: {
    filteredCategories() {
      return this.categories.map((cat) => ({
        name: cat.name,
        characters: this.searchQuery ? cat.characters.filter((c) => c.name.toLowerCase().includes(this.searchQuery.toLowerCase())) : cat.characters
      })).filter((cat) => cat.characters.length || !this.searchQuery);
    },
    totalCharacters() {
      return this.categories.reduce((sum, cat) => sum + cat.characters.length, 0);
    },
    rarityTypes() {
      return this.categories.length;
    }
  },
  components: {
    StatCard: {
      props: ["icon", "label", "value", "color"],
      template: `
          <div class="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div class="flex items-center mb-2">
              <svg :class="'w-5 h-5 text-' + color + '-400 mr-2'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="icon"></path>
              </svg>
              <span class="text-gray-400 text-sm">{{ label }}</span>
            </div>
            <div :class="'text-3xl font-bold text-' + color + '-400'">{{ value }}</div>
          </div>`
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MainHeader = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_MainHeader, null, null, _parent));
  _push(`<div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24"><div class="container mx-auto px-6 py-8"><div class="text-center mb-4"><h1 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 mb-4"> Steal a Brainrot </h1><p class="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"> Complete dictionary of all brainrot characters and mutation multipliers for <br>the ultimate Roblox gaming experience </p></div><div class="max-w-2xl mx-auto mb-12"><div class="relative"><input${ssrRenderAttr("value", $data.searchQuery)} type="text" placeholder="Search brainrot characters..." class="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors duration-200"><svg class="absolute right-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div></div><div class="grid sm:grid-cols-3 grid-cols-1 gap-6 mb-8"><div class="bg-gray-800 border border-gray-700 rounded-lg p-6"><div class="flex items-center mb-2"><svg class="w-5 h-5 text-teal-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg><span class="text-gray-400 text-sm">Total Characters</span></div><div class="text-3xl font-bold text-teal-400">58</div></div><div class="bg-gray-800 border border-gray-700 rounded-lg p-6"><div class="flex items-center mb-2"><svg class="w-5 h-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg><span class="text-gray-400 text-sm">Rarity Types</span></div><div class="text-3xl font-bold text-purple-400">7</div></div><div class="bg-gray-800 border border-gray-700 rounded-lg p-6"><div class="flex items-center mb-2"><svg class="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z"></path></svg><span class="text-gray-400 text-sm">Mutations</span></div><div class="text-3xl font-bold text-blue-400">9</div></div></div><div class="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8"><div class="flex items-center mb-6"><svg class="w-6 h-6 text-teal-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg><h2 class="text-white text-xl font-semibold">Mutation Multipliers</h2></div><div class="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4 mb-6"><div class="bg-gray-700 border border-gray-600 rounded-lg p-4 text-center"><div class="text-teal-400 text-sm font-medium mb-1">Gold</div><div class="text-white text-2xl font-bold">1.25x</div></div><div class="bg-gray-700 border border-gray-600 rounded-lg p-4 text-center"><div class="text-teal-400 text-sm font-medium mb-1">Diamond</div><div class="text-white text-2xl font-bold">1.5x</div></div><div class="bg-gray-700 border border-gray-600 rounded-lg p-4 text-center"><div class="text-teal-400 text-sm font-medium mb-1">Rainbow</div><div class="text-white text-2xl font-bold">10x</div></div><div class="bg-gray-700 border border-gray-600 rounded-lg p-4 text-center"><div class="text-teal-400 text-sm font-medium mb-1">Candy</div><div class="text-white text-2xl font-bold">4x</div></div></div><h3 class="text-purple-300 text-lg font-medium mb-4">Event Mutations</h3><div class="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-4"><div class="bg-gradient-to-br from-purple-800 to-purple-900 rounded-lg p-4 text-center border border-purple-700"><div class="text-purple-300 text-sm font-medium mb-1">Bloodrot</div><div class="text-white text-xl font-bold">2x</div></div><div class="bg-gradient-to-br from-purple-800 to-purple-900 rounded-lg p-4 text-center border border-purple-700"><div class="text-purple-300 text-sm font-medium mb-1">Tacos</div><div class="text-white text-xl font-bold">3x</div></div><div class="bg-gradient-to-br from-purple-800 to-purple-900 rounded-lg p-4 text-center border border-purple-700"><div class="text-purple-300 text-sm font-medium mb-1">Disco</div><div class="text-white text-xl font-bold">4x</div></div><div class="bg-gradient-to-br from-purple-800 to-purple-900 rounded-lg p-4 text-center border border-purple-700"><div class="text-purple-300 text-sm font-medium mb-1">Firework</div><div class="text-white text-xl font-bold">6x</div></div><div class="bg-gradient-to-br from-purple-800 to-purple-900 rounded-lg p-4 text-center border border-purple-700"><div class="text-purple-300 text-sm font-medium mb-1">Nyancat</div><div class="text-white text-xl font-bold">6x</div></div></div></div><!--[-->`);
  ssrRenderList($options.filteredCategories, (category) => {
    _push(`<div class="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8"><div class="mb-6"><h2 class="text-white font-medium text-lg">${ssrInterpolate(category.name)} <span class="text-gray-400">(${ssrInterpolate(category.characters.length)} characters)</span></h2></div><div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"><!--[-->`);
    ssrRenderList(category.characters, (char) => {
      _push(`<div class="bg-gray-700 rounded-lg border border-gray-600 p-4 hover:border-teal-500 transition-colors duration-200 cursor-pointer"><h3 class="text-white font-medium text-base mb-2">${ssrInterpolate(char.name)}</h3><div class="flex items-center"><svg class="w-4 h-4 text-teal-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg><span class="text-teal-400 font-medium">${ssrInterpolate(char.speed)}</span></div></div>`);
    });
    _push(`<!--]--></div>`);
    if (category.characters.length === 0 && $data.searchQuery) {
      _push(`<div class="text-center py-8 text-gray-400"> No ${ssrInterpolate(category.name.toLowerCase())} characters match \u201C${ssrInterpolate($data.searchQuery)}\u201D </div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/steal-brainrot/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-llM7_RHz.mjs.map
