import { I as addAttribute, M as maybeRenderHead, T as renderComponent, j as renderTemplate } from "./sequence_BxFGYTOq.mjs";
import { d as createComponent, t as $$Layout } from "./Layout_BIBTARA7.mjs";
import { t as createAstro } from "./compiler_B9dCHTw5.mjs";
import { D as productPath, E as productCategoryName, O as tx } from "./siteKey_mzq2kLhV.mjs";
import { n as getProduct } from "./content-api_ZdVYfXXu.mjs";
import { t as describe } from "./metaDescription_Cd-ZucT-.mjs";
import { t as CheckoutForm } from "./CheckoutForm_DnI8vJhu.mjs";
// src/components/CheckoutPage.astro
createAstro("https://shop.tracht-digital.de");
var $$CheckoutPage = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CheckoutPage;
	const { lang, slug, sellable } = Astro.props;
	const { product } = sellable;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": product.title,
		"description": describe(product.teaser, productCategoryName(product)),
		"lang": lang,
		"noindex": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<nav class="shop-breadcrumbs"${addAttribute(tx(lang).breadcrumb, "aria-label")}><a${addAttribute(productPath(slug, lang), "href")}>${product.title}</a></nav><h1 class="shop-title">${tx(lang).checkout.heading}</h1>${renderComponent($$result, "CheckoutForm", CheckoutForm, {
		"client:load": true,
		"slug": slug,
		"lang": lang,
		"client:component-hydration": "load",
		"client:component-path": "/home/runner/work/tds-shop-frontend/tds-shop-frontend/src/components/CheckoutForm.tsx",
		"client:component-export": "default"
	})}` })}`;
}, "/home/runner/work/tds-shop-frontend/tds-shop-frontend/src/components/CheckoutPage.astro", void 0);
// src/lib/sellable.ts
async function resolveSellable(slug, lang) {
	const product = await getProduct(slug, lang);
	if (!product) return null;
	const offer = product.offers.find((o) => o.kind === "own" && o.netCents != null);
	if (!offer) return null;
	const netCents = offer.netCents;
	const vatRateBp = offer.vatRateBp ?? 1900;
	const taxCents = Math.round(netCents * vatRateBp / 1e4);
	return {
		product,
		offer,
		netCents,
		vatRateBp,
		taxCents,
		grossCents: netCents + taxCents
	};
}
export { $$CheckoutPage as n, resolveSellable as t };
