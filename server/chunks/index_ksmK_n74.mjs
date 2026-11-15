import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { M as maybeRenderHead, T as renderComponent, j as renderTemplate } from "./sequence_BJTD5713.mjs";
import "./compiler_CC8dBrdY.mjs";
import { d as createComponent, t as $$Layout } from "./Layout_BqYa1hhU.mjs";
import { t as CheckoutForm } from "./CheckoutForm_DzJNBZAk.mjs";
import { N as tx } from "./siteKey_awmhyiUu.mjs";
// src/pages/kasse/index.astro
var kasse_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Kasse",
		"description": "Bestellung abschließen.",
		"lang": "de",
		"noindex": true,
		"altUrl": "/en/checkout"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1 class="shop-title">${tx("de").checkout.heading}</h1>${renderComponent($$result, "CheckoutForm", CheckoutForm, {
		"client:load": true,
		"lang": "de",
		"client:component-hydration": "load",
		"client:component-path": "/home/runner/work/tds-shop-frontend/tds-shop-frontend/src/components/CheckoutForm.tsx",
		"client:component-export": "default"
	})}` })}`;
}, "/home/runner/work/tds-shop-frontend/tds-shop-frontend/src/pages/kasse/index.astro", void 0);
var $$file = "/home/runner/work/tds-shop-frontend/tds-shop-frontend/src/pages/kasse/index.astro";
var $$url = "/kasse";
// \0virtual:astro:page:src/pages/kasse/index@_@astro
var page = () => kasse_exports;
export { page };
