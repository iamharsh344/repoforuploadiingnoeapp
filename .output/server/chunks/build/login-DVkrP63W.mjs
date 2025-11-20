import { u as useHead } from './v3-Dm0nbuqa.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderDynamicModel, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-CYYamiF5.mjs';
import { _ as _export_sfc } from './server.mjs';
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
import 'vue-router';

const _sfc_main = {
  setup() {
    useHead({
      title: "Admin Login - SilverFoxValues",
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
      username: "",
      password: "",
      showPassword: false,
      isLoading: false,
      errorMessage: ""
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    async handleLogin() {
      this.isLoading = true;
      this.errorMessage = "";
      try {
        const response = await fetch("https://api.silverfoxvalues.com/admin/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: this.username.trim(),
            password: this.password.trim()
          })
        });
        const data = await response.json();
        localStorage.setItem("token", data.token);
        if (!response.ok) {
          throw new Error(data.message || "Login failed");
        }
        if (data.success) {
          this.$router.push("/admin/");
        }
      } catch (error) {
        this.errorMessage = error.message || "An error occurred during login";
      } finally {
        this.isLoading = false;
      }
    }
  },
  beforeMount() {
    if (localStorage.getItem("token") == null) {
      return this.$router.push("/admin/login");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4" }, _attrs))}><div class="w-full max-w-sm bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-700"><div class="text-center mb-8"><div class="bg-white/10 rounded-full p-1 w-16 h-16 mx-auto mb-6 backdrop-blur-sm"><img${ssrRenderAttr("src", _imports_0)}></div><h1 class="text-2xl font-bold text-white mb-2"> Admin Portal </h1><p class="text-gray-400 text-sm opacity-90"> SilverFoxValues Dashboard </p></div><form class="space-y-5">`);
  if ($data.errorMessage) {
    _push(`<div class="mb-4 p-3 bg-red-900/50 border border-red-600 rounded-lg"><p class="text-red-300 text-sm">${ssrInterpolate($data.errorMessage)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div><label class="block text-gray-300 text-sm font-medium mb-2"> Username </label><div class="relative"><svg class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg><input id="username"${ssrRenderAttr("value", $data.username)} type="text" class="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all disabled:opacity-50"${ssrIncludeBooleanAttr($data.isLoading) ? " disabled" : ""} placeholder="Enter your username" required></div></div><div><label class="block text-gray-300 text-sm font-medium mb-2"> Password </label><div class="relative"><svg class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg><input id="password"${ssrRenderDynamicModel($data.showPassword ? "text" : "password", $data.password, null)}${ssrRenderAttr("type", $data.showPassword ? "text" : "password")} required class="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all disabled:opacity-50"${ssrIncludeBooleanAttr($data.isLoading) ? " disabled" : ""} placeholder="Enter your password"></div></div><button type="submit"${ssrIncludeBooleanAttr($data.isLoading) ? " disabled" : ""} class="w-full bg-gradient-to-r from-slate-600 to-gray-700 hover:from-slate-700 hover:to-gray-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-slate-500 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">`);
  if (!$data.isLoading) {
    _push(`<span>Sign In</span>`);
  } else {
    _push(`<span class="flex items-center justify-center"><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Signing In... </span>`);
  }
  _push(`</button></form><div class="mt-8 text-center"><p class="text-xs text-gray-500"> \xA9 2025 SilverFoxValues. Admin access only. </p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { login as default };
//# sourceMappingURL=login-DVkrP63W.mjs.map
