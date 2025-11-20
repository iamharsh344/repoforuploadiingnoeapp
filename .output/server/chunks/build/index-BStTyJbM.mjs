import { _ as __nuxt_component_0 } from './main-Header-DbHC4O8P.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BizknXJk.mjs';
import { _ as __nuxt_component_3, s as setInterval } from './main-Footer-DaofIaS3.mjs';
import { u as useHead } from './v3-Dm0nbuqa.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../_/nitro.mjs';
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

const _imports_0 = publicAssetsURL("/games/gag/calculator.webp");
const _imports_1 = publicAssetsURL("/games/gag/stock.webp");
const _imports_2 = publicAssetsURL("/games/gag/pets.webp");
const _imports_3 = publicAssetsURL("/games/gag/plants.webp");
const _imports_4 = publicAssetsURL("/games/gag/gears.webp");
const _imports_5 = publicAssetsURL("/games/gag/mutation.webp");
const _imports_6 = publicAssetsURL("/games/mr.webp");
const _imports_7 = publicAssetsURL("/games/gag.webp");
const _imports_8 = publicAssetsURL("/games/adoptme.webp");
const _imports_9 = publicAssetsURL("/games/stealabrainroot.webp");
const _imports_10 = publicAssetsURL("/Giveaway/g2.jpeg");
const _imports_11 = publicAssetsURL("/Giveaway/g1.jpeg");
const _imports_12 = publicAssetsURL("/Giveaway/g3.jpeg");
const _imports_13 = publicAssetsURL("/Giveaway/Dragonfly.webp");
const _imports_14 = publicAssetsURL("/Giveaway/DiscoBeeIcon.gif");
const _imports_15 = publicAssetsURL("/Giveaway/Raccon.webp");
const _sfc_main = {
  setup() {
    useHead({
      title: "SilverFoxValues | #1 Roblox Game Values & Trading Platform",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { name: "google-adsense-account", content: "ca-pub-2625601725317470" },
        { name: "robots", content: "index,follow" },
        { hid: "description", name: "description", content: "The most trusted source for Roblox game values and trading tools. Track accurate prices for Grow a Garden, Steal a Brainrot, and more games. Weekly updates, trade calculators, and comprehensive item databases." },
        { hid: "keywords", name: "keywords", content: "adoptme values, Roblox values, Roblox trading, Grow a Garden values, adoptme pets values, gag pet values, item values, Roblox trade calculator, game values, Roblox price guide" },
        { name: "author", content: "SilverFoxValues" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:title", property: "og:title", content: "SilverFoxValues | #1 Roblox Game Values & Trading Platform" },
        { hid: "og:description", property: "og:description", content: "Discover accurate Roblox game values for pets, items, and characters. Use our trading tools and weekly updated databases to dominate the Roblox trading scene." },
        { hid: "og:url", property: "og:url", content: "https://silverfoxvalues.com/" },
        { hid: "og:site_name", property: "og:site_name", content: "SilverFoxValues" },
        { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
        { hid: "twitter:title", name: "twitter:title", content: "SilverFoxValues \u2013 Your Ultimate Roblox Trading Companion" },
        { hid: "twitter:description", name: "twitter:description", content: "Get the most accurate Roblox game values and trading tools. Track prices for multiple games, use our calculators, and trade smarter than ever." },
        { name: "theme-color", content: "#1a202c" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" }
      ]
    });
  },
  data() {
    return {
      tab: false,
      giveaways: [
        {
          id: 1,
          title: "Legendary Pet",
          endTime: "Ends in 2 days",
          image: "ghjdg.png"
        },
        {
          id: 2,
          title: "Rare Equipment",
          endTime: "Ends in 5 days",
          image: "fas fa-gem text-purple-500"
        },
        {
          id: 3,
          title: "In-Game Currency",
          endTime: "Ends in 1 week",
          image: "fas fa-coins text-yellow-400"
        }
      ],
      contributors: [
        {
          id: 1,
          name: "Farmerjimmy",
          logo: "/contributors/farmerjimmy.webp"
        },
        {
          id: 2,
          name: "Lachythebear",
          logo: "/contributors/lachythebear.webp"
        },
        {
          id: 3,
          name: "P0tatoch1q",
          logo: "/contributors/p0tatoch1q.webp"
        },
        {
          id: 4,
          name: "Ray211008",
          logo: "/contributors/ray211008.webp"
        },
        {
          id: 5,
          name: "Richie",
          logo: "/contributors/richie.webp"
        },
        {
          id: 6,
          name: "Sai",
          logo: "/contributors/sai.webp"
        },
        {
          id: 6,
          name: "Sckyee",
          logo: "/contributors/sckyee.webp"
        },
        {
          id: 6,
          name: "Subdoesmr",
          logo: "/contributors/subdoesmr.webp"
        }
      ],
      particles: [],
      particleInterval: null
    };
  },
  mounted() {
    this.particleInterval = setInterval(this.createParticle);
  },
  beforeUnmount() {
    if (this.particleInterval) {
      clearInterval(this.particleInterval);
    }
  },
  methods: {
    viewGameValues(gameId) {
      this.$router.push(`/${gameId}/`);
    },
    enterGiveaway() {
      (void 0).open("https://discord.gg/dg6Ec6zprT", "_blank");
    },
    openDiscord() {
      (void 0).open("https://discord.gg/dg6Ec6zprT", "_blank");
    },
    createParticle() {
      const particle = {
        id: Date.now() + Math.random(),
        style: {
          left: Math.random() * (void 0).innerWidth + "px",
          bottom: "0px",
          animation: "float-up 8s linear forwards"
        }
      };
      this.particles.push(particle);
      setTimeout(() => {
        const index2 = this.particles.findIndex((p) => p.id === particle.id);
        if (index2 > -1) {
          this.particles.splice(index2, 1);
        }
      }, 8e3);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_main_Header = __nuxt_component_0;
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_main_Footer = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen body text-slate-200" }, _attrs))} data-v-f7dfbc7b>`);
  _push(ssrRenderComponent(_component_main_Header, null, null, _parent));
  _push(`<div class="pt-32 pb-12 text-center" data-v-f7dfbc7b><div class="container mx-auto px-6" data-v-f7dfbc7b><h1 class="text-4xl md:text-7xl font-bold mb-4" data-v-f7dfbc7b> Welcome to SilverFoxValues </h1><p class="text-lg md:text-2xl mb-8 opacity-90" data-v-f7dfbc7b> Your ultimate destination for Roblox game values &amp; giveaways! </p><div class="animate-pulse" data-v-f7dfbc7b><i class="fas fa-gamepad text-4xl mb-4" data-v-f7dfbc7b></i><p class="text-lg" data-v-f7dfbc7b>Discover the latest values and win amazing prizes!</p></div></div></div><div style="${ssrRenderStyle($data.tab ? null : { display: "none" })}" class="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4" data-v-f7dfbc7b><div class="modal-content rounded-xl max-w-4xl w-full p-6 relative overflow-y-auto" data-v-f7dfbc7b><div class="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6" data-v-f7dfbc7b>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/growagarden/calculator",
    class: "category-card bg-gray-900 border border-gray-700 rounded-lg overflow-hidden cursor-pointer"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Weather" loading="lazy" class="w-full h-28 sm:h-32 md:h-40 object-cover" data-v-f7dfbc7b${_scopeId}><h4 class="text-center font-semibold text-lg py-1.5" data-v-f7dfbc7b${_scopeId}>Pets Calculator</h4>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "Weather",
            loading: "lazy",
            class: "w-full h-28 sm:h-32 md:h-40 object-cover"
          }),
          createVNode("h4", { class: "text-center font-semibold text-lg py-1.5" }, "Pets Calculator")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/growagarden/live-stock",
    class: "category-card bg-green-400 border border-gray-700 rounded-lg overflow-hidden cursor-pointer"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="Livestock" loading="lazy" class="w-full h-28 sm:h-32 md:h-40 object-cover" data-v-f7dfbc7b${_scopeId}><h4 class="text-center text-black font-semibold text-lg py-1.5" data-v-f7dfbc7b${_scopeId}>Livestock</h4>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1,
            alt: "Livestock",
            loading: "lazy",
            class: "w-full h-28 sm:h-32 md:h-40 object-cover"
          }),
          createVNode("h4", { class: "text-center text-black font-semibold text-lg py-1.5" }, "Livestock")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/growagarden/pets",
    class: "category-card bg-gray-900 border border-gray-700 rounded-lg overflow-hidden cursor-pointer"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_2)} alt="Pets" loading="lazy" class="w-full h-28 sm:h-32 md:h-40 object-cover" data-v-f7dfbc7b${_scopeId}><h4 class="text-center font-semibold text-lg py-1.5" data-v-f7dfbc7b${_scopeId}>Pets</h4>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2,
            alt: "Pets",
            loading: "lazy",
            class: "w-full h-28 sm:h-32 md:h-40 object-cover"
          }),
          createVNode("h4", { class: "text-center font-semibold text-lg py-1.5" }, "Pets")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/growagarden/plants",
    class: "category-card bg-gray-900 border border-gray-700 rounded-lg overflow-hidden cursor-pointer"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_3)} alt="Plants" loading="lazy" class="w-full h-28 sm:h-32 md:h-40 object-cover" data-v-f7dfbc7b${_scopeId}><h4 class="text-center font-semibold text-lg py-1.5" data-v-f7dfbc7b${_scopeId}>Plants</h4>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_3,
            alt: "Plants",
            loading: "lazy",
            class: "w-full h-28 sm:h-32 md:h-40 object-cover"
          }),
          createVNode("h4", { class: "text-center font-semibold text-lg py-1.5" }, "Plants")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/growagarden/gears",
    class: "category-card bg-gray-900 border border-gray-700 rounded-lg overflow-hidden cursor-pointer"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_4)} alt="Crops" loading="lazy" class="w-full h-28 sm:h-32 md:h-40 object-cover" data-v-f7dfbc7b${_scopeId}><h4 class="text-center font-semibold text-lg py-1.5" data-v-f7dfbc7b${_scopeId}>Gears</h4>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_4,
            alt: "Crops",
            loading: "lazy",
            class: "w-full h-28 sm:h-32 md:h-40 object-cover"
          }),
          createVNode("h4", { class: "text-center font-semibold text-lg py-1.5" }, "Gears")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/growagarden/mutations",
    class: "category-card bg-gray-900 border border-gray-700 rounded-lg overflow-hidden cursor-pointer"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_5)} alt="Mutations" loading="lazy" class="w-full h-28 sm:h-32 md:h-40 object-cover" data-v-f7dfbc7b${_scopeId}><h4 class="text-center font-semibold text-lg py-1.5" data-v-f7dfbc7b${_scopeId}>Mutations</h4>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_5,
            alt: "Mutations",
            loading: "lazy",
            class: "w-full h-28 sm:h-32 md:h-40 object-cover"
          }),
          createVNode("h4", { class: "text-center font-semibold text-lg py-1.5" }, "Mutations")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="container mx-auto px-6 pb-12" data-v-f7dfbc7b><section class="mb-12" data-v-f7dfbc7b><h2 class="text-4xl font-bold text-center mb-8 flex justify-center items-center gap-2.5" data-v-f7dfbc7b><svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-v-f7dfbc7b><path fill="currentColor" fill-rule="evenodd" d="m10.667 6.134l-.502-.355A4.24 4.24 0 0 0 7.715 5h-.612c-.405 0-.813.025-1.194.16c-2.383.846-4.022 3.935-3.903 10.943c.024 1.412.354 2.972 1.628 3.581A3.2 3.2 0 0 0 5.027 20a2.74 2.74 0 0 0 1.53-.437c.41-.268.77-.616 1.13-.964c.444-.43.888-.86 1.424-1.138a4.1 4.1 0 0 1 1.89-.461H13c.658 0 1.306.158 1.89.46c.536.279.98.709 1.425 1.139c.36.348.72.696 1.128.964c.39.256.895.437 1.531.437a3.2 3.2 0 0 0 1.393-.316c1.274-.609 1.604-2.17 1.628-3.581c.119-7.008-1.52-10.097-3.903-10.942C17.71 5.025 17.3 5 16.897 5h-.612a4.24 4.24 0 0 0-2.45.78l-.502.354a2.31 2.31 0 0 1-2.666 0M16.75 9a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-9.25.25a.75.75 0 0 1 .75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V13a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V10a.75.75 0 0 1 .75-.75m11.5 2a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m2.25.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0" clip-rule="evenodd" data-v-f7dfbc7b></path></svg>Game Values </h2><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" data-v-f7dfbc7b><div class="gamer-card rounded-2xl p-8 text-center" data-v-f7dfbc7b><img alt="game-mr" fetchpriority="high" width="600" height="300"${ssrRenderAttr("src", _imports_6)} class="mx-auto mb-4 rounded-lg shadow-lg w-full max-h-40 object-cover" data-v-f7dfbc7b><h3 class="text-2xl font-bold mb-2" data-v-f7dfbc7b>My Restaurant</h3><p class="text-gray-200 mb-4" data-v-f7dfbc7b>Discover food and equipment values</p><button class="game-button w-full py-3 px-6 rounded-xl font-bold text-lg relative overflow-hidden" data-v-f7dfbc7b> View Values </button></div><div class="gamer-card rounded-2xl p-8 text-center" data-v-f7dfbc7b><img alt="game-gag" fetchpriority="high" width="600" height="300"${ssrRenderAttr("src", _imports_7)} class="mx-auto mb-4 rounded-lg shadow-lg w-full max-h-40 object-cover" data-v-f7dfbc7b><h3 class="text-2xl font-bold mb-2" data-v-f7dfbc7b>Grow a Garden</h3><p class="text-gray-200 mb-4" data-v-f7dfbc7b>Check the latest pet and item values</p><button class="game-button w-full py-3 px-6 rounded-xl font-bold text-lg relative overflow-hidden" data-v-f7dfbc7b> View Values </button></div><div class="gamer-card rounded-2xl p-8 text-center" data-v-f7dfbc7b><img alt="game-adoptme" fetchpriority="high" width="600" height="300"${ssrRenderAttr("src", _imports_8)} class="mx-auto mb-4 rounded-lg shadow-lg w-full max-h-40 object-cover" data-v-f7dfbc7b><h3 class="text-2xl font-bold mb-2" data-v-f7dfbc7b>Adoptme</h3><p class="text-gray-200 mb-4" data-v-f7dfbc7b>Check the latest pet and item values</p><button class="game-button w-full py-3 px-6 rounded-xl font-bold text-lg relative overflow-hidden" data-v-f7dfbc7b> View Values </button></div><div class="gamer-card rounded-2xl p-8 text-center" data-v-f7dfbc7b><img alt="game-stalbrainroot" fetchpriority="high" width="600" height="300"${ssrRenderAttr("src", _imports_9)} class="mx-auto mb-4 rounded-lg shadow-lg w-full max-h-40 object-cover" data-v-f7dfbc7b><h3 class="text-2xl font-bold mb-2" data-v-f7dfbc7b>Steal Brainrot</h3><p class="text-gray-200 mb-4" data-v-f7dfbc7b>Check the latest pet and item values</p><button class="game-button w-full py-3 px-6 rounded-xl font-bold text-lg relative overflow-hidden" data-v-f7dfbc7b> View Values </button></div></div></section><section class="mb-12" data-v-f7dfbc7b><h2 class="text-4xl font-bold text-center mb-8" data-v-f7dfbc7b><i class="fas fa-gift mr-3" data-v-f7dfbc7b></i>Active Giveaways </h2><div class="flex justify-center mt-5" data-v-f7dfbc7b><div class="flex sm:flex-row flex-col mt-2.5 gap-2.5" data-v-f7dfbc7b><a href="https://discord.gg/dg6Ec6zprT" class="block text-center w-fit text-gray-950 font-semibold bg-blue-200 p-1 rounded-xl" data-v-f7dfbc7b><p data-v-f7dfbc7b>Ends on Wednesday</p><img class="w-64" alt="Dragonfly"${ssrRenderAttr("src", _imports_10)} data-v-f7dfbc7b></a><a href="https://discord.gg/dg6Ec6zprT" class="block text-center w-fit text-gray-950 font-semibold bg-green-200 p-1 rounded-xl" data-v-f7dfbc7b><p data-v-f7dfbc7b>Starts from Wednesday</p><img class="w-64" alt="Dragonfly"${ssrRenderAttr("src", _imports_11)} data-v-f7dfbc7b></a><a href="https://discord.gg/dg6Ec6zprT" class="block text-center w-fit text-gray-950 font-semibold bg-yellow-200 p-1 rounded-xl" data-v-f7dfbc7b><p data-v-f7dfbc7b>Weekly Giveaway </p><img class="w-64" alt="Dragonfly"${ssrRenderAttr("src", _imports_12)} data-v-f7dfbc7b></a></div></div></section><section class="mb-12" data-v-f7dfbc7b><h2 class="text-4xl font-bold text-center mb-8" data-v-f7dfbc7b><i class="fas fa-gift mr-3" data-v-f7dfbc7b></i>Previous Giveaways </h2><div class="flex justify-center mt-5" data-v-f7dfbc7b><div class="flex mt-2.5" data-v-f7dfbc7b><div class="flex items-center" data-v-f7dfbc7b><img class="w-52" alt="Dragonfly"${ssrRenderAttr("src", _imports_13)} data-v-f7dfbc7b></div><div class="flex items-center" data-v-f7dfbc7b><img class="w-52" alt="DiscoBeeIcon"${ssrRenderAttr("src", _imports_14)} data-v-f7dfbc7b></div><div class="flex items-center" data-v-f7dfbc7b><img class="w-24" alt="Racoon"${ssrRenderAttr("src", _imports_15)} data-v-f7dfbc7b></div></div></div></section><section class="relative z-10 overflow-hidden bg-[#1B1A44] py-16 px-8 mt-40" data-v-f7dfbc7b><div class="container" data-v-f7dfbc7b><div class="-mx-4 flex flex-wrap items-center" data-v-f7dfbc7b><div class="w-full px-4 lg:w-1/2" data-v-f7dfbc7b><div class="text-center lg:text-left" data-v-f7dfbc7b><div class="mb-10 lg:mb-0" data-v-f7dfbc7b><div class="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-xl md:text-4xl text-white" data-v-f7dfbc7b> The Ultimate Roblox Trading Spot<br data-v-f7dfbc7b><span class="text-sm" data-v-f7dfbc7b>A single place to post trades, see what others offer, check game values, and make the best deals.</span></div><p class="w-full text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed text-white" data-v-f7dfbc7b></p></div></div></div><div class="w-full px-4 lg:w-1/2" data-v-f7dfbc7b><div class="text-center lg:text-right" data-v-f7dfbc7b><div class="flex justify-end" data-v-f7dfbc7b><a class="game-button block w-fit py-3 px-6 rounded-xl font-bold text-lg relative overflow-hidden" href="https://robloxvalueshub.com/trade?utm_source=share&amp;utm_campaign=silverfoxvalues" data-v-f7dfbc7b>Start Trading \u{1F680}</a></div></div></div></div></div><span class="absolute top-0 right-0 -z-10" data-v-f7dfbc7b><svg width="388" height="250" viewBox="0 0 388 220" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f7dfbc7b><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6910)" data-v-f7dfbc7b></path><defs data-v-f7dfbc7b><linearGradient id="paint0_linear_971_6910" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse" data-v-f7dfbc7b><stop offset="0.520507" stop-color="white" data-v-f7dfbc7b></stop><stop offset="1" stop-color="white" stop-opacity="0" data-v-f7dfbc7b></stop></linearGradient></defs></svg></span><span class="absolute top-0 right-0 -z-10" data-v-f7dfbc7b><svg width="324" height="250" viewBox="0 0 324 220" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f7dfbc7b><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6911)" data-v-f7dfbc7b></path><defs data-v-f7dfbc7b><linearGradient id="paint0_linear_971_6911" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse" data-v-f7dfbc7b><stop offset="0.520507" stop-color="white" data-v-f7dfbc7b></stop><stop offset="1" stop-color="white" stop-opacity="0" data-v-f7dfbc7b></stop></linearGradient></defs></svg></span><span class="absolute top-4 left-4 -z-10" data-v-f7dfbc7b><svg width="43" height="56" viewBox="0 0 43 56" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f7dfbc7b><g opacity="0.5" data-v-f7dfbc7b><circle cx="40.9984" cy="1.49626" r="1.49626" transform="rotate(90 40.9984 1.49626)" fill="white" data-v-f7dfbc7b></circle><circle cx="27.8304" cy="1.49626" r="1.49626" transform="rotate(90 27.8304 1.49626)" fill="white" data-v-f7dfbc7b></circle><circle cx="14.6644" cy="1.49626" r="1.49626" transform="rotate(90 14.6644 1.49626)" fill="white" data-v-f7dfbc7b></circle><circle cx="1.49642" cy="1.49626" r="1.49626" transform="rotate(90 1.49642 1.49626)" fill="white" data-v-f7dfbc7b></circle><circle cx="40.9984" cy="14.6642" r="1.49626" transform="rotate(90 40.9984 14.6642)" fill="white" data-v-f7dfbc7b></circle><circle cx="27.8304" cy="14.6642" r="1.49626" transform="rotate(90 27.8304 14.6642)" fill="white" data-v-f7dfbc7b></circle><circle cx="14.6644" cy="14.6642" r="1.49626" transform="rotate(90 14.6644 14.6642)" fill="white" data-v-f7dfbc7b></circle><circle cx="1.49642" cy="14.6642" r="1.49626" transform="rotate(90 1.49642 14.6642)" fill="white" data-v-f7dfbc7b></circle><circle cx="40.9984" cy="27.8302" r="1.49626" transform="rotate(90 40.9984 27.8302)" fill="white" data-v-f7dfbc7b></circle><circle cx="27.8304" cy="27.8302" r="1.49626" transform="rotate(90 27.8304 27.8302)" fill="white" data-v-f7dfbc7b></circle><circle cx="14.6644" cy="27.8302" r="1.49626" transform="rotate(90 14.6644 27.8302)" fill="white" data-v-f7dfbc7b></circle><circle cx="1.49642" cy="27.8302" r="1.49626" transform="rotate(90 1.49642 27.8302)" fill="white" data-v-f7dfbc7b></circle><circle cx="40.9984" cy="40.9982" r="1.49626" transform="rotate(90 40.9984 40.9982)" fill="white" data-v-f7dfbc7b></circle><circle cx="27.8304" cy="40.9963" r="1.49626" transform="rotate(90 27.8304 40.9963)" fill="white" data-v-f7dfbc7b></circle><circle cx="14.6644" cy="40.9982" r="1.49626" transform="rotate(90 14.6644 40.9982)" fill="white" data-v-f7dfbc7b></circle><circle cx="1.49642" cy="40.9963" r="1.49626" transform="rotate(90 1.49642 40.9963)" fill="white" data-v-f7dfbc7b></circle><circle cx="40.9984" cy="54.1642" r="1.49626" transform="rotate(90 40.9984 54.1642)" fill="white" data-v-f7dfbc7b></circle><circle cx="27.8304" cy="54.1642" r="1.49626" transform="rotate(90 27.8304 54.1642)" fill="white" data-v-f7dfbc7b></circle><circle cx="14.6644" cy="54.1642" r="1.49626" transform="rotate(90 14.6644 54.1642)" fill="white" data-v-f7dfbc7b></circle><circle cx="1.49642" cy="54.1642" r="1.49626" transform="rotate(90 1.49642 54.1642)" fill="white" data-v-f7dfbc7b></circle></g></svg></span></section></div><div class="relative py-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm" data-v-f7dfbc7b><div class="text-center mb-6" data-v-f7dfbc7b><h2 class="text-2xl font-bold mb-2" data-v-f7dfbc7b>Our Contributors</h2><p class="text-purple-200" data-v-f7dfbc7b>Amazing people who make our platform better</p></div><div class="contributors-scroll-container" data-v-f7dfbc7b><div class="contributors-track" data-v-f7dfbc7b><!--[-->`);
  ssrRenderList($data.contributors, (contributor) => {
    _push(`<div class="contributor-item" data-v-f7dfbc7b><div class="contributor-card" data-v-f7dfbc7b><img${ssrRenderAttr("src", contributor.logo)}${ssrRenderAttr("alt", contributor.name)} loading="lazy" class="w-16 h-16 rounded-full object-cover border-3 border-white/20 shadow-lg" data-v-f7dfbc7b><span class="contributor-name" data-v-f7dfbc7b>${ssrInterpolate(contributor.name)}</span></div></div>`);
  });
  _push(`<!--]--><!--[-->`);
  ssrRenderList($data.contributors, (contributor) => {
    _push(`<div class="contributor-item" data-v-f7dfbc7b><div class="contributor-card" data-v-f7dfbc7b><img${ssrRenderAttr("src", contributor.logo)}${ssrRenderAttr("alt", contributor.name)} loading="lazy" class="w-16 h-16 rounded-full object-cover border-3 border-white/20 shadow-lg" data-v-f7dfbc7b><span class="contributor-name" data-v-f7dfbc7b>${ssrInterpolate(contributor.name)}</span></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
  _push(ssrRenderComponent(_component_main_Footer, null, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList($data.particles, (particle) => {
    _push(`<div class="fixed w-2 h-2 bg-white opacity-30 rounded-full pointer-events-none particle" style="${ssrRenderStyle(particle.style)}" data-v-f7dfbc7b></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f7dfbc7b"]]);

export { index as default };
//# sourceMappingURL=index-BStTyJbM.mjs.map
