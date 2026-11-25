import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { T as renderComponent, j as renderTemplate } from "./sequence_BxFGYTOq.mjs";
import { d as createComponent } from "./Layout_DpMKJrK_.mjs";
import { t as createAstro } from "./compiler_B9dCHTw5.mjs";
import { t as $$Catalogue } from "./Catalogue_CsIaG1rS.mjs";
import { t as categoryExists } from "./content-api_BWKm3lJz.mjs";
// src/pages/kategorie/[cat].astro
var _cat__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Cat,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://shop.tracht-digital.de");
var $$Cat = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Cat;
	const category = String(Astro.params.cat ?? "").trim();
	if (!/^[a-z0-9-]{2,60}$/.test(category)) return Astro.rewrite("/404");
	if (!await categoryExists(category, "de")) return Astro.rewrite("/404");
	return renderTemplate`${renderComponent($$result, "Catalogue", $$Catalogue, {
		"lang": "de",
		"category": category
	})}`;
}, "/home/runner/work/tds-shop-frontend/tds-shop-frontend/src/pages/kategorie/[cat].astro", void 0);
var $$file = "/home/runner/work/tds-shop-frontend/tds-shop-frontend/src/pages/kategorie/[cat].astro";
var $$url = "/kategorie/[cat]";
// \0virtual:astro:page:src/pages/kategorie/[cat]@_@astro
var page = () => _cat__exports;
export { page };
