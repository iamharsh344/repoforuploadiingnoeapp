import { hasInjectionContext, inject } from 'vue';
import { t as tryUseNuxtApp } from './server.mjs';
import { Q as headSymbol, R as useHead$1 } from '../_/nitro.mjs';

function injectHead(nuxtApp) {
  var _a;
  const nuxt = nuxtApp || tryUseNuxtApp();
  return ((_a = nuxt == null ? void 0 : nuxt.ssrContext) == null ? void 0 : _a.head) || (nuxt == null ? void 0 : nuxt.runWithContext(() => {
    if (hasInjectionContext()) {
      return inject(headSymbol);
    }
  }));
}
function useHead(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useHead$1(input, { head, ...options });
  }
}

export { injectHead as i, useHead as u };
//# sourceMappingURL=v3-Dm0nbuqa.mjs.map
