import { _ as __nuxt_component_0 } from './main-Header-DbHC4O8P.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BizknXJk.mjs';
import { _ as __nuxt_component_3 } from './main-Footer-DaofIaS3.mjs';
import { ref, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { u as useHead } from './v3-Dm0nbuqa.mjs';
import { _ as _export_sfc } from './server.mjs';
import './virtual_public-CYYamiF5.mjs';
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

const _imports_0 = publicAssetsURL("/blogs/Grow+a+Garden.webp");
const _sfc_main = {
  __name: "blogs",
  __ssrInlineRender: true,
  setup(__props) {
    const blogPosts = ref([
      {
        id: 1,
        title: "\u2699\uFE0F Best Early-Game Setup in Grow a Garden (GAG)",
        excerpt: "Getting ahead early in Grow a Garden \u{1F331} is all about smart plot placement, upgrade priorities, and tight planting cycles...",
        game: "Grow a Garden",
        slug: "/growagarden/Best-Early-Game-Setup-in-Grow-a-Garden",
        date: "2025-08-19"
      },
      {
        id: 2,
        title: "\u{1F43E} How to Get Rare Pets in Grow a Garden",
        excerpt: "Rare pets in Grow a Garden add powerful bonuses and style to your garden. This guide explains the best ways to increase your chances...",
        game: "Grow a Garden",
        slug: "/growagarden/How-to-Get-Rare-Pets-in-Grow-a-Garden",
        date: "2025-08-19",
        image: "/blogs/Pet_Egg_stand.webp"
      },
      {
        id: 3,
        title: "\u{1F311} Eclipse Mutation Guide Grow a Garden",
        excerpt: "The Eclipse Mutation \u{1F311} is a rare global event in Grow a Garden that temporarily boosts crop value and enables special mutation outcomes.",
        game: "Grow a Garden",
        slug: "/growagarden/Eclipse-Mutation-Guide",
        date: "2025-08-19",
        image: "/blogs/Fraer.webp"
      },
      {
        id: 4,
        title: "\u{1F331} How to Get Romanesco in Grow a Garden",
        excerpt: "The Romanesco seed is one of the rarest items in Grow a Garden, belonging to the Prismatic rarity. Getting it can be tricky but ",
        game: "Grow a Garden",
        slug: "/growagarden/How-to-Get-Romanesco-in-Grow-a-Garden",
        date: "2025-08-19",
        image: "/blogs/RomanescoProduce.webp"
      },
      {
        id: 5,
        title: "\u26A1 How to Farm Faster in Grow a Garden",
        excerpt: "Farming in Grow a Garden is the core of progression. The faster you farm, the more seeds, pets, and resources you unlock.",
        game: "Grow a Garden",
        slug: "/growagarden/How-to-Farm-Faster",
        date: "2025-08-19",
        image: "/blogs/Wiki.webp"
      },
      {
        id: 6,
        title: "\u{1F4B0} Best Money-Making Crops in Mid-Game (GAG)",
        excerpt: "Mid-game in Grow a Garden \u{1F331} is where farming starts to get serious. Upgrades become more expensive...",
        game: "Grow a Garden",
        slug: "/growagarden/Best-Money-Making-Crops-in-Mid-Game-in-Grow-a-Garden",
        date: "2025-08-19"
      },
      {
        id: 7,
        title: "\u{1F3C6} How to Prestige Efficiently in Grow a Garden (GAG)",
        excerpt: "Prestiging (also called Rebirth) in Grow a Garden \u{1F331}\u{1F3C6} is the key mechanic that resets your farm in exchange for permanent...",
        game: "Grow a Garden",
        slug: "/growagarden/How-to-Prestige-Rebirth-Efficiently-in-Grow-a-Garden",
        date: "2025-08-21"
      },
      {
        id: 8,
        title: "\u{1F381} All Active Grow a Garden Codes",
        excerpt: "Codes in Grow a Garden are the best way to get a head start and boost your farming journey. Developers release these codes...",
        game: "Grow a Garden",
        slug: "/growagarden/All-Active-Grow-a-Garden-Codes",
        date: "2025-08-26"
      },
      {
        id: 9,
        title: "\u{1F4B8} Insane Layouts That Print Cash And How to Copy Them",
        excerpt: "Discover the best money-making layouts in Roblox My Restaurant and learn step-by-step how to set them up yourself...",
        game: "My Restaurant",
        slug: "/myrestaurantvalues/Insane-Layouts-That-Print-Cash-And-How-to-Copy-Them",
        date: "2025-08-29",
        image: "/blogs/mr-blog.jpg"
      },
      {
        id: 10,
        title: "\u{1F680} Every Update Ranked! Which My Restaurant Event Was the GOAT?",
        excerpt: "We rate every major update in Roblox My Restaurant and reveal which ones changed the game forever...",
        game: "My Restaurant",
        slug: "/myrestaurantvalues/Every-Update-Ranked-Which-My-Restaurant-Event-Was-the-GOAT",
        date: "2025-08-29",
        image: "/blogs/Taco_Truck.webp"
      },
      {
        id: 11,
        title: "\u{1F354} From Noob Chef to Restaurant King \u{1F451}",
        excerpt: "A complete step by step journey to becoming the ultimate Restaurant Tycoon in Roblox My Restaurant...",
        game: "My Restaurant",
        slug: "/myrestaurantvalues/From-Noob-Chef-to-Restaurant-King",
        date: "2025-08-29",
        image: "/blogs/mr-blog.jpg"
      },
      {
        id: 12,
        title: "\u{1F331} See Live Stock Items in Grow a Garden (Eggs, Seeds & More!)",
        excerpt: "Track the live stock system in Roblox Grow a Garden from eggs to seeds, and discover how it helps your farming journey...",
        game: "Grow a Garden",
        slug: "/growagarden/See-Live-Stock-Items-in-Grow-a-Garden-Roblox",
        date: "2025-08-29",
        image: "/blogs/Screenshot_livestock.png"
      }
    ]);
    const activeGame = ref("all");
    const searchQuery = ref("");
    const filteredPosts = computed(() => {
      let posts = [...blogPosts.value].reverse();
      if (activeGame.value !== "all") {
        posts = posts.filter((post) => post.game === activeGame.value);
      }
      if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase().trim();
        posts = posts.filter(
          (post) => post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query) || post.game.toLowerCase().includes(query)
        );
      }
      return posts;
    });
    const getGameBadgeColor = (game) => {
      const colors = {
        valorant: "bg-gradient-to-r from-red-500 to-pink-500 text-white",
        minecraft: "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
      };
      return colors[game] || "bg-gradient-to-r from-purple-500 to-blue-500 text-white";
    };
    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(void 0, options);
    };
    useHead({
      title: "Gaming Blog - My Restaurant & Grow a Garden Guides | SilverFoxValues",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { name: "google-adsense-account", content: "ca-pub-2625601725317470" },
        { name: "robots", content: "index,follow" },
        { hid: "description", name: "description", content: "Master My Restaurant and Grow a Garden with our comprehensive guides, tips, and strategies. Get the latest updates, trading advice, and expert gameplay tutorials for both Roblox games." },
        { hid: "keywords", name: "keywords", content: "adoptme values, how to do gag, Roblox trading, Grow a Garden values, adoptme pets values, gag blogs, mutations grow a garden guide, grow a garden roblux, gag roblux, Roblox price guide" },
        { name: "author", content: "SilverFoxValues" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:title", property: "og:title", content: "Gaming Blog - My Restaurant & Grow a Garden Guides | SilverFoxValues" },
        { hid: "og:description", property: "og:description", content: "Master My Restaurant and Grow a Garden with our comprehensive guides, tips, and strategies. Get the latest updates, trading advice, and expert gameplay tutorials for both Roblox games." },
        { hid: "og:url", property: "og:url", content: "https://silverfoxvalues.com/blogs" },
        { hid: "og:site_name", property: "og:site_name", content: "SilverFoxValues" },
        { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
        { hid: "twitter:title", name: "twitter:title", content: "Gaming Blog - My Restaurant & Grow a Garden Guides | SilverFoxValues" },
        { hid: "twitter:description", name: "twitter:description", content: "Master My Restaurant and Grow a Garden with our comprehensive guides, tips, and strategies. Get the latest updates, trading advice, and expert gameplay tutorials for both Roblox games." },
        { name: "theme-color", content: "#1a202c" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_main_Header = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_main_Footer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "min-h-screen",
        style: { "background": "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #000000 100%)" }
      }, _attrs))} data-v-0de34780>`);
      _push(ssrRenderComponent(_component_main_Header, null, null, _parent));
      _push(`<div class="container mx-auto px-4 py-8 pt-32" data-v-0de34780><div class="text-center mb-12" data-v-0de34780><h1 class="text-4xl md:text-5xl font-bold text-white mb-4" data-v-0de34780>Game Blog</h1><p class="text-purple-200 text-lg max-w-2xl mx-auto" data-v-0de34780> Latest gaming news, guides, and updates for your favorite games </p></div><div class="max-w-7xl mx-auto" data-v-0de34780><div class="mb-10" data-v-0de34780><div class="max-w-2xl mx-auto mb-8" data-v-0de34780><div class="relative" data-v-0de34780><input${ssrRenderAttr("value", unref(searchQuery))} type="text" placeholder="Search blog posts..." class="w-full px-6 py-4 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300" data-v-0de34780><div class="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-200" data-v-0de34780><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0de34780><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-0de34780></path></svg></div>`);
      if (unref(searchQuery)) {
        _push(`<button class="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-200 hover:text-white transition-colors duration-200" data-v-0de34780><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0de34780><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-0de34780></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex flex-wrap justify-center gap-4" data-v-0de34780><button class="${ssrRenderClass([
        "px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105",
        unref(activeGame) === "all" ? "text-white shadow-lg shadow-gray-800" : "bg-white/10 backdrop-blur-sm text-purple-200 hover:bg-white/20"
      ])}" style="${ssrRenderStyle([unref(activeGame) === "all" ? "background: linear-gradient(45deg, #1e1b4b, #1e1b4b)" : ""])}" data-v-0de34780> All Posts </button><button class="${ssrRenderClass([
        "px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105",
        unref(activeGame) === "Grow a Garden" ? "text-white shadow-lg shadow-gray-800" : "bg-white/10 backdrop-blur-sm text-purple-200 hover:bg-white/20"
      ])}" style="${ssrRenderStyle([unref(activeGame) === "Grow a Garden" ? "background: linear-gradient(45deg, #000000, #1e1b4b)" : ""])}" data-v-0de34780> Grow a Garden </button><button class="${ssrRenderClass([
        "px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105",
        unref(activeGame) === "My Restaurant" ? "text-white shadow-lg shadow-gray-800" : "bg-white/10 backdrop-blur-sm text-purple-200 hover:bg-white/20"
      ])}" style="${ssrRenderStyle([unref(activeGame) === "My Restaurant" ? "background: linear-gradient(45deg, #000000, #1e1b4b)" : ""])}" data-v-0de34780> My Restaurant </button></div></div><div class="text-center mb-8" data-v-0de34780><p class="text-purple-200" data-v-0de34780>`);
      if (unref(searchQuery) || unref(activeGame) !== "all") {
        _push(`<span data-v-0de34780>${ssrInterpolate(unref(searchQuery) ? `for "${unref(searchQuery)}"` : "")} ${ssrInterpolate(unref(activeGame) !== "all" ? `in ${unref(activeGame)}` : "")}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-0de34780><!--[-->`);
      ssrRenderList(unref(filteredPosts), (post) => {
        _push(`<div class="group bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/20" data-v-0de34780><div class="relative h-48 bg-gradient-to-br from-purple-600 to-blue-600 overflow-hidden" data-v-0de34780>`);
        if (post.image) {
          _push(`<img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.title)} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-v-0de34780>`);
        } else {
          _push(`<img${ssrRenderAttr("src", _imports_0)} alt="grow a garden" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-v-0de34780>`);
        }
        _push(`<div class="absolute top-4 left-4" data-v-0de34780><span class="${ssrRenderClass([
          "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg",
          getGameBadgeColor(post.game)
        ])}" data-v-0de34780>${ssrInterpolate(post.game)}</span></div><div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" data-v-0de34780></div></div><div class="p-6" data-v-0de34780><h3 class="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-orange-300 transition-colors duration-300" data-v-0de34780>${ssrInterpolate(post.title)}</h3><p class="text-purple-200 mb-4 line-clamp-3" data-v-0de34780>${ssrInterpolate(post.excerpt)}</p><div class="flex items-center justify-between" data-v-0de34780><span class="text-purple-300 text-sm font-medium" data-v-0de34780>${ssrInterpolate(formatDate(post.date))}</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: post.slug,
          class: "text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg",
          style: { "background": "linear-gradient(45deg, #000000, #1e1b4b)" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Read More `);
            } else {
              return [
                createTextVNode(" Read More ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (unref(filteredPosts).length === 0) {
        _push(`<div class="text-center py-16" data-v-0de34780><div class="text-purple-300 text-xl mb-4" data-v-0de34780> No posts found </div><p class="text-purple-200 mb-6" data-v-0de34780> Try adjusting your search terms or category filter </p><button class="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105" data-v-0de34780> Clear All Filters </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_main_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blogs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blogs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0de34780"]]);

export { blogs as default };
//# sourceMappingURL=blogs-BO_Gmp7B.mjs.map
