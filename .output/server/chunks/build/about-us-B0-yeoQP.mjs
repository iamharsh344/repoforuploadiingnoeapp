import { _ as __nuxt_component_0 } from './main-Header-DbHC4O8P.mjs';
import { _ as __nuxt_component_3 } from './main-Footer-DaofIaS3.mjs';
import { u as useHead } from './v3-Dm0nbuqa.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
      title: "About Us | SilverFoxValues - Your Trusted Roblox Values Partner",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { name: "google-adsense-account", content: "ca-pub-2625601725317470" },
        { name: "robots", content: "index,follow" },
        { hid: "description", name: "description", content: "Learn about SilverFoxValues team and mission. Discover how we became the most trusted source for Roblox game values, providing accurate trading data and tools to millions of players worldwide." },
        { hid: "keywords", name: "keywords", content: "SilverFoxValues about, Roblox values team, trading platform history, game values mission, Roblox community, trading tools development, SilverFoxValues story" },
        { name: "author", content: "SilverFoxValues" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:title", property: "og:title", content: "About SilverFoxValues | The Story Behind Roblox's Premier Trading Platform" },
        { hid: "og:description", property: "og:description", content: "Meet the team behind SilverFoxValues and learn our journey to becoming the leading Roblox values platform. Discover our commitment to accurate data and fair trading." },
        { hid: "og:url", property: "og:url", content: "https://silverfoxvalues.com/about/" },
        { hid: "og:site_name", property: "og:site_name", content: "SilverFoxValues" },
        { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
        { hid: "twitter:title", name: "twitter:title", content: "About SilverFoxValues \u2013 Meet the Roblox Trading Experts" },
        { hid: "twitter:description", name: "twitter:description", content: "Discover the story and mission behind SilverFoxValues, the most trusted platform for Roblox game values and trading tools." },
        { name: "theme-color", content: "#1a202c" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" }
      ]
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MainHeader = __nuxt_component_0;
  const _component_mainFooter = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_MainHeader, null, null, _parent));
  _push(`<div class="bg-gradient-to-br from-gray-950 via-gray-900 to-slate-950 pt-20"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div class="text-center mb-12"><h1 class="text-4xl font-bold text-white mb-4">About Us</h1><p class="text-gray-300 text-lg">Learn more about SilverFoxValues and our mission</p></div><div class="bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700"><section class="mb-8"><h2 class="text-2xl font-bold text-white mb-4">Who We Are</h2><p class="text-gray-300"> SilverFoxValues is managed by a dedicated group of independent enthusiasts who are passionate about Roblox and its economy. We created this website to help the global community of Roblox players easily track and compare item values across popular games. </p></section><section class="mb-8"><h2 class="text-2xl font-bold text-white mb-4">Our Mission</h2><p class="text-gray-300"> Our goal is to provide accurate, up-to-date, and accessible item values for a variety of Roblox games. We believe in transparency and in building a trusted resource that empowers players with the information they need for better in-game decisions. </p></section><section class="mb-8"><h2 class="text-2xl font-bold text-white mb-4">How We Work</h2><p class="text-gray-300"> We gather item data from both our own research and, when applicable, credited third-party sources. Our team is committed to keeping information as accurate as possible, but all values and data are provided for informational purposes only. </p></section><section class="mb-8"><h2 class="text-2xl font-bold text-white mb-4">Community</h2><p class="text-gray-300"> SilverFoxValues is built for the Roblox community, by the community. We welcome suggestions, corrections, and ideas to help improve our database. If you&#39;d like to contribute or have feedback, reach out anytime! </p></section><section class="mb-8"><h2 class="text-2xl font-bold text-white mb-4">Contact Us</h2><p class="text-gray-300"> For questions, feedback, or credits/corrections regarding data sources, email us at: <a href="mailto:support@silverfoxvalues.com" class="text-purple-400 underline">support@silverfoxvalues.com</a></p></section></div></div></div>`);
  _push(ssrRenderComponent(_component_mainFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { aboutUs as default };
//# sourceMappingURL=about-us-B0-yeoQP.mjs.map
