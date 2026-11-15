import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { M as maybeRenderHead, T as renderComponent, j as renderTemplate } from "./sequence_BJTD5713.mjs";
import "./compiler_CC8dBrdY.mjs";
import { d as createComponent, t as $$Layout } from "./Layout_BqYa1hhU.mjs";
import { t as CheckoutForm } from "./CheckoutForm_DzJNBZAk.mjs";
import { N as tx } from "./siteKey_awmhyiUu.mjs";
// src/pages/en/checkout/index.astro
var checkout_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Checkout",
		"description": "Complete your order.",
		"lang": "en",
		"noindex": true,
		"altUrl": "/kasse"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1 class="shop-title">${tx("en").checkout.heading}</h1>${renderComponent($$result, "CheckoutForm", CheckoutForm, {
		"client:load": true,
		"lang": "en",
		"client:component-hydration": "load",
		"client:component-path": "/home/runner/work/tds-shop-frontend/tds-shop-frontend/src/components/CheckoutForm.tsx",
		"client:component-export": "default"
	})}` })}`;
}, "/home/runner/work/tds-shop-frontend/tds-shop-frontend/src/pages/en/checkout/index.astro", void 0);
var $$file = "/home/runner/work/tds-shop-frontend/tds-shop-frontend/src/pages/en/checkout/index.astro";
var $$url = "/en/checkout";
// \0virtual:astro:page:src/pages/en/checkout/index@_@astro
var page = () => checkout_exports;
export { page };
