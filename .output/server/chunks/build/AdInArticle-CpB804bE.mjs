import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';

const _sfc_main = {
  __name: "AdInArticle",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "min-height": "250px" } }, _attrs))}><ins class="adsbygoogle" style="${ssrRenderStyle({ "display": "block", "text-align": "center" })}" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-2625601725317470" data-ad-slot="5609953627"></ins></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdInArticle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=AdInArticle-CpB804bE.mjs.map
