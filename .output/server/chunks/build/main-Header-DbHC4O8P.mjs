import { _ as __nuxt_component_0$1 } from './nuxt-link-BizknXJk.mjs';
import { withCtx, createBlock, createVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-CYYamiF5.mjs';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { _ as _export_sfc } from './server.mjs';

const _imports_1 = publicAssetsURL("/logo/SilverFoxLogo_2x.webp");
const _sfc_main = {
  data() {
    return {
      showDiscordWidget: false,
      mobileMenuOpen: false,
      openLogin: false,
      commingSoon: false,
      currentView: "login",
      // 'login', 'user', 'error'
      user: null,
      errorMessage: "",
      isLoading: false
    };
  },
  mounted() {
    this.checkAuthStatus();
  },
  methods: {
    checkAuthStatus() {
      const urlParams = new URLSearchParams((void 0).location.search);
      const token = urlParams.get("token");
      const userParam = urlParams.get("user");
      const error = urlParams.get("error");
      if (token && userParam) {
        this.handleSuccessfulLogin(token, userParam);
      } else if (error) {
        this.showError(error);
        this.cleanUrl();
      } else {
        const savedToken = localStorage.getItem("authToken");
        if (savedToken) {
          this.showUserSection();
        } else {
          this.showLoginSection();
        }
      }
    },
    handleSuccessfulLogin(token, userParam) {
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", userParam);
      this.cleanUrl();
      this.showUserSection();
    },
    async handleDiscordLogin() {
      this.isLoading = true;
      try {
        const response = await fetch("https://api.silverfoxvalues.com/auth/discord");
        const data = await response.json();
        (void 0).location.href = data.authUrl;
      } catch (error) {
        console.error("Error initiating login:", error);
        this.showError("Failed to start login process");
      } finally {
        this.isLoading = false;
      }
    },
    handleLogout() {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      this.user = null;
      this.showLoginSection();
    },
    showLoginSection() {
      this.currentView = "login";
      this.errorMessage = "";
    },
    showUserSection() {
      const userStr = localStorage.getItem("user");
      if (userStr) {
        try {
          this.user = JSON.parse(decodeURIComponent(userStr));
          this.currentView = "user";
        } catch (error) {
          console.error("Error parsing user data:", error);
          this.showError("Invalid user data");
        }
      }
    },
    showError(error) {
      this.errorMessage = error;
      this.currentView = "error";
    },
    tryAgain() {
      this.showLoginSection();
    },
    cleanUrl() {
      (void 0).history.replaceState({}, (void 0).title, "/");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b;
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><nav class="navbar fixed w-full top-0 z-50 px-6 py-4"><div class="container mx-auto flex justify-between items-center"><div class="flex items-center cursor-pointer"><div class="fox-logo w-14 h-14 rounded-full flex items-center justify-center"><img${ssrRenderAttr("src", _imports_0)} class="w-[56px] h-[56px]"${ssrRenderAttr("srcset", _imports_0 + " 1x, " + _imports_1 + " 2x")} alt="SilverFoxValues" width="56" height="56"></div><h1 class="text-white text-2xl font-bold">SilverFoxValues</h1></div><div class="hidden lg:flex items-center space-x-4"><div class="relative overflow-hidden"><span class="absolute right-3 top-3 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold px-3 rounded shadow-lg rotate-45 select-none">NEW</span>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/adoptme/calculator/",
    class: "bg-yellow-500 text-slate-700 px-4 py-2 rounded-lg flex items-center space-x-2 font-semibold min-w-[13.5rem]"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${_scopeId}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId}><path d="M11.25 16.25h1.5L12 17zM16 14v.5"${_scopeId}></path><path d="M4.42 11.247A13.2 13.2 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.7 11.7 0 0 0-.493-3.309M8 14v.5"${_scopeId}></path><path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5c-1.931.722-3.576-.297-3.656-1c-.113-.994 1.177-6.53 4-7c1.923-.321 3.651.845 3.651 2.235A7.5 7.5 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277c2.823.47 4.113 6.006 4 7c-.08.703-1.725 1.722-3.656 1c-1.261-.472-1.855-1.45-2.239-2.5"${_scopeId}></path></g></svg><span${_scopeId}>Adoptme Calculator</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-6 h-6",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            createVNode("g", {
              fill: "none",
              stroke: "currentColor",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2"
            }, [
              createVNode("path", { d: "M11.25 16.25h1.5L12 17zM16 14v.5" }),
              createVNode("path", { d: "M4.42 11.247A13.2 13.2 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.7 11.7 0 0 0-.493-3.309M8 14v.5" }),
              createVNode("path", { d: "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5c-1.931.722-3.576-.297-3.656-1c-.113-.994 1.177-6.53 4-7c1.923-.321 3.651.845 3.651 2.235A7.5 7.5 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277c2.823.47 4.113 6.006 4 7c-.08.703-1.725 1.722-3.656 1c-1.261-.472-1.855-1.45-2.239-2.5" })
            ])
          ])),
          createVNode("span", null, "Adoptme Calculator")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/growagarden/calculator/",
    class: "discord-btn text-white px-4 py-2 rounded-lg flex items-center space-x-2 font-semibold"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${_scopeId}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId}><path d="M11.25 16.25h1.5L12 17zM16 14v.5"${_scopeId}></path><path d="M4.42 11.247A13.2 13.2 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.7 11.7 0 0 0-.493-3.309M8 14v.5"${_scopeId}></path><path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5c-1.931.722-3.576-.297-3.656-1c-.113-.994 1.177-6.53 4-7c1.923-.321 3.651.845 3.651 2.235A7.5 7.5 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277c2.823.47 4.113 6.006 4 7c-.08.703-1.725 1.722-3.656 1c-1.261-.472-1.855-1.45-2.239-2.5"${_scopeId}></path></g></svg><span${_scopeId}>GAG Calculator</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-6 h-6",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            createVNode("g", {
              fill: "none",
              stroke: "currentColor",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2"
            }, [
              createVNode("path", { d: "M11.25 16.25h1.5L12 17zM16 14v.5" }),
              createVNode("path", { d: "M4.42 11.247A13.2 13.2 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.7 11.7 0 0 0-.493-3.309M8 14v.5" }),
              createVNode("path", { d: "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5c-1.931.722-3.576-.297-3.656-1c-.113-.994 1.177-6.53 4-7c1.923-.321 3.651.845 3.651 2.235A7.5 7.5 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277c2.823.47 4.113 6.006 4 7c-.08.703-1.725 1.722-3.656 1c-1.261-.472-1.855-1.45-2.239-2.5" })
            ])
          ])),
          createVNode("span", null, "GAG Calculator")
        ];
      }
    }),
    _: 1
  }, _parent));
  if ($data.currentView == "user") {
    _push(`<div class="block cursor-pointer text-white px-4 py-2 rounded-lg flex items-center space-x-2 font-semibold border border-gray-600"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"></path></svg><span>${ssrInterpolate(((_a = $data.user) == null ? void 0 : _a.username) || "User")}</span></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.currentView != "user") {
    _push(`<div class="block cursor-pointer discord-btn text-white px-4 py-2 rounded-lg flex items-center space-x-2 font-semibold"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"></path></svg><span>Login</span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="block cursor-pointer bg-indigo-600 text-white px-2 py-2 rounded-full flex items-center space-x-2 font-semibold"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"></path></svg></div></div><div class="lg:hidden"><button class="text-white focus:outline-none" name="opne-toggle" aria-label="Open-toggle"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div></div><div style="${ssrRenderStyle($data.mobileMenuOpen ? null : { display: "none" })}" class="lg:hidden mt-4 rounded-lg mx-6"><div class="px-4 py-2 space-y-2"><div class="relative overflow-hidden"><span class="absolute right-3 top-3 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold px-3 rounded shadow-lg rotate-45 select-none">NEW</span>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/adoptme/calculator/",
    class: "bg-yellow-500 text-slate-700 px-4 py-2 rounded-lg flex items-center space-x-2 font-semibold min-w-[13.5rem]"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${_scopeId}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId}><path d="M11.25 16.25h1.5L12 17zM16 14v.5"${_scopeId}></path><path d="M4.42 11.247A13.2 13.2 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.7 11.7 0 0 0-.493-3.309M8 14v.5"${_scopeId}></path><path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5c-1.931.722-3.576-.297-3.656-1c-.113-.994 1.177-6.53 4-7c1.923-.321 3.651.845 3.651 2.235A7.5 7.5 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277c2.823.47 4.113 6.006 4 7c-.08.703-1.725 1.722-3.656 1c-1.261-.472-1.855-1.45-2.239-2.5"${_scopeId}></path></g></svg><span${_scopeId}>Adoptme Calculator</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-6 h-6",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            createVNode("g", {
              fill: "none",
              stroke: "currentColor",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2"
            }, [
              createVNode("path", { d: "M11.25 16.25h1.5L12 17zM16 14v.5" }),
              createVNode("path", { d: "M4.42 11.247A13.2 13.2 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.7 11.7 0 0 0-.493-3.309M8 14v.5" }),
              createVNode("path", { d: "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5c-1.931.722-3.576-.297-3.656-1c-.113-.994 1.177-6.53 4-7c1.923-.321 3.651.845 3.651 2.235A7.5 7.5 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277c2.823.47 4.113 6.006 4 7c-.08.703-1.725 1.722-3.656 1c-1.261-.472-1.855-1.45-2.239-2.5" })
            ])
          ])),
          createVNode("span", null, "Adoptme Calculator")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/growagarden/calculator/",
    class: "discord-btn text-white px-4 py-2 rounded-lg flex items-center space-x-2 font-semibold w-full"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${_scopeId}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId}><path d="M11.25 16.25h1.5L12 17zM16 14v.5"${_scopeId}></path><path d="M4.42 11.247A13.2 13.2 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.7 11.7 0 0 0-.493-3.309M8 14v.5"${_scopeId}></path><path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5c-1.931.722-3.576-.297-3.656-1c-.113-.994 1.177-6.53 4-7c1.923-.321 3.651.845 3.651 2.235A7.5 7.5 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277c2.823.47 4.113 6.006 4 7c-.08.703-1.725 1.722-3.656 1c-1.261-.472-1.855-1.45-2.239-2.5"${_scopeId}></path></g></svg><span${_scopeId}>GAG Calculator</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-6 h-6",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            createVNode("g", {
              fill: "none",
              stroke: "currentColor",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2"
            }, [
              createVNode("path", { d: "M11.25 16.25h1.5L12 17zM16 14v.5" }),
              createVNode("path", { d: "M4.42 11.247A13.2 13.2 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.7 11.7 0 0 0-.493-3.309M8 14v.5" }),
              createVNode("path", { d: "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5c-1.931.722-3.576-.297-3.656-1c-.113-.994 1.177-6.53 4-7c1.923-.321 3.651.845 3.651 2.235A7.5 7.5 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277c2.823.47 4.113 6.006 4 7c-.08.703-1.725 1.722-3.656 1c-1.261-.472-1.855-1.45-2.239-2.5" })
            ])
          ])),
          createVNode("span", null, "GAG Calculator")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "https://discord.gg/dg6Ec6zprT",
    class: "block discord-btn text-white px-4 py-2 rounded-lg flex items-center space-x-2 font-semibold w-full"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"${_scopeId}></path></svg><span${_scopeId}>Join Discord</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-6 h-6",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              fill: "currentColor",
              d: "M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
            })
          ])),
          createVNode("span", null, "Join Discord")
        ];
      }
    }),
    _: 1
  }, _parent));
  if ($data.currentView == "user") {
    _push(`<div class="block cursor-pointer text-white px-4 py-2 rounded-lg flex items-center space-x-2 font-semibold border border-gray-600"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"></path></svg><span>${ssrInterpolate(((_b = $data.user) == null ? void 0 : _b.username) || "User")}</span></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.currentView != "user") {
    _push(`<div class="block discord-btn text-white px-4 py-2 rounded-lg flex items-center space-x-2 font-semibold"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"></path></svg><span>Login</span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></nav>`);
  if ($data.openLogin) {
    _push(`<div class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"><div class="bg-[#1a2332] rounded-2xl shadow-2xl border border-[#2d3748] w-full max-w-md transform transition-all duration-300 scale-100 opacity-100 shadow-[#4fd1c7]/10"><div class="p-6 border-b border-[#2d3748]"><button class="flex items-center text-[#94a3b8] hover:text-[#4fd1c7] transition-colors group" aria-label="Open-toggle"><svg class="w-5 h-5 mr-2 group-hover:translate-x-[-2px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back to Home </button></div><div class="sm:p-8 p-4 text-center"><div class="mb-6"><h1 class="text-3xl font-bold text-[#e2e8f0] mb-2 bg-gradient-to-r from-[#4fd1c7] to-blue-400 bg-clip-text text-transparent">Welcome Back</h1><p class="text-[#94a3b8]">Sign in to your account with Discord</p></div><div class="bg-[#243447] rounded-xl p-6 border border-[#2d3748]/50"><div class="mb-6"><h2 class="text-xl font-bold text-[#e2e8f0] mb-2">Sign In</h2><p class="text-[#94a3b8] text-sm">Connect with Discord to access your account</p></div><button aria-label="Open-toggle"${ssrIncludeBooleanAttr($data.isLoading) ? " disabled" : ""} class="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white py-4 px-6 rounded-xl font-bold transition-all duration-200 flex items-center justify-center mb-6 shadow-lg hover:shadow-[#5865F2]/30 transform hover:scale-[1.02] group"><svg class="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"></path></svg> Continue with Discord </button><div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-[#2d3748]"></div></div><div class="relative flex justify-center text-sm"><span class="px-3 bg-[#243447] text-[#94a3b8]">New to the platform?</span></div></div><div class="text-[#94a3b8] text-sm mt-4"><p class="text-[#4fd1c7] transition-colors font-semibold inline-flex">Sign in with Discord</p> to get started! </div></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.commingSoon) {
    _push(`<div class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"><div class="bg-gray-800 border border-gray-700 rounded-xl p-8 max-w-md mx-4 text-center relative shadow-2xl transform transition-all duration-300 scale-95"><div class="mb-6"><svg class="w-16 h-16 mx-auto text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></div><h3 class="text-2xl font-bold text-white mb-3">Coming Soon</h3><p class="text-gray-300 mb-6 leading-relaxed"> New chatting system is coming soon.<br> Stay tuned for updates! </p><div class="mb-6"><div class="flex justify-center space-x-1"><div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div><div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}"></div><div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style="${ssrRenderStyle({ "animation-delay": "0.4s" })}"></div></div></div><button aria-label="Open-toggle" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold"> Got it </button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showDiscordWidget) {
    _push(`<div class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9998]"><div class="bg-gray-800 rounded-xl shadow-2xl overflow-hidden w-[90vw] max-w-md h-[90vh] max-h-[600px] flex flex-col"><div class="flex-1 relative"><iframe src="https://discord.com/widget?id=1229795664045539368&amp;theme=dark" class="w-full h-full" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe></div><a href="https://discord.gg/dg6Ec6zprT" target="_blank" class="w-full bg-[#5865F2] text-center py-2.5">Join Discord</a></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main-Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _, _imports_1 as a };
//# sourceMappingURL=main-Header-DbHC4O8P.mjs.map
