// node_modules/@tracht-digital-labs/tds-shared/dist/chunk-KFV6H645.js
function escapeXml(value) {
	return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function renderSectionedSitemapIndex(entries) {
	return "<?xml version=\"1.0\" encoding=\"UTF-8\"?><sitemapindex xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">" + entries.map((e) => `<sitemap><loc>${escapeXml(e.loc)}</loc>${e.lastmod ? `<lastmod>${escapeXml(e.lastmod)}</lastmod>` : ""}</sitemap>`).join("") + "</sitemapindex>";
}
function newestDay(dates) {
	let newest;
	for (const raw of dates) {
		const day = (raw ?? "").slice(0, 10);
		if (!/^\d{4}-\d{2}-\d{2}$/.test(day)) continue;
		if (!newest || day > newest) newest = day;
	}
	return newest;
}
function serializeJsonLd(data) {
	return JSON.stringify(data).replace(/</g, "\\u003c").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}
function defineSitemapSections(sections) {
	const sectionPath = (section) => `/sitemap-${section}.xml`;
	return {
		sections,
		isSection: (value) => sections.includes(value ?? ""),
		sectionPath,
		paths: [
			"/sitemap-index.xml",
			"/sitemap-0.xml",
			...sections.map(sectionPath)
		]
	};
}
var NAVY = "#050f68";
var BORDEAUX = "#820933";
var CORAL = "#ff7a9c";
var SAND = "#f4efe6";
var SCHEMES = [
	[
		NAVY,
		CORAL,
		BORDEAUX,
		"#ffffff"
	],
	[
		SAND,
		NAVY,
		CORAL,
		NAVY
	],
	[
		BORDEAUX,
		CORAL,
		NAVY,
		"#ffffff"
	],
	[
		"#0b0a07",
		CORAL,
		NAVY,
		"#ffffff"
	],
	[
		SAND,
		BORDEAUX,
		NAVY,
		BORDEAUX
	],
	[
		NAVY,
		"#ffffff",
		CORAL,
		CORAL
	]
];
function placeholderHash(seed) {
	const text = String(seed);
	let h = 2166136261;
	for (let i = 0; i < text.length; i++) {
		h ^= text.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return h >>> 0;
}
function tdsPlaceholderSvg({ seed, width = 1200, height = 750, monogram }) {
	const h = placeholderHash(seed);
	const [ground, main, second, line] = SCHEMES[h % SCHEMES.length];
	const u = Math.min(width, height);
	const flipX = h >> 3 & 1;
	const flipY = h >> 4 & 1;
	const x = (value) => flipX ? width - value : value;
	const y = (value) => flipY ? height - value : value;
	const capW = u * .95;
	const capH = u * .36;
	const capX = x(width * .72) - capW / 2;
	const capY = y(height * .78) - capH / 2;
	const rings = [
		1,
		2,
		3,
		4
	].map((step) => {
		const off = step * u * .022;
		return `<rect x="${(capX - off).toFixed(1)}" y="${(capY - off).toFixed(1)}" width="${capW.toFixed(1)}" height="${capH.toFixed(1)}" rx="${(capH / 2).toFixed(1)}" fill="none" stroke="${line}" stroke-opacity="${(.42 - step * .07).toFixed(2)}" stroke-width="${(u * .004).toFixed(1)}"/>`;
	}).join("");
	const capsule = `<rect x="${capX.toFixed(1)}" y="${capY.toFixed(1)}" width="${capW.toFixed(1)}" height="${capH.toFixed(1)}" rx="${(capH / 2).toFixed(1)}" fill="${main}"/>`;
	const r = u * (.32 + (h >> 6) % 12 / 100);
	const cx = x(0);
	const cy = y(0);
	const quarter = `<circle cx="${cx}" cy="${cy}" r="${r.toFixed(1)}" fill="${second}"/><circle cx="${cx}" cy="${cy}" r="${(r * 1.28).toFixed(1)}" fill="none" stroke="${line}" stroke-opacity="0.3" stroke-width="${(u * .004).toFixed(1)}"/>`;
	const barH = u * .022;
	const barLeft = flipX ? width * .08 : width * .6;
	const barTop = flipY ? height * .84 : height * .14;
	const bars = [
		[
			0,
			u * .2,
			line
		],
		[
			u * .225,
			u * .09,
			main
		],
		[
			u * .34,
			u * .045,
			second
		]
	].map(([offset, w, colour]) => `<rect x="${(barLeft + offset).toFixed(1)}" y="${barTop.toFixed(1)}" width="${w.toFixed(1)}" height="${barH.toFixed(1)}" rx="${(barH / 2).toFixed(1)}" fill="${colour}"/>`).join("");
	const letters = monogram?.trim().slice(0, 2);
	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid slice"><rect width="${width}" height="${height}" fill="${ground}"/>${quarter}${rings}${capsule}${bars}${letters ? `<text x="${width / 2}" y="${height / 2}" dy=".35em" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="${(u * .34).toFixed(1)}" fill="${line}" fill-opacity="0.9">${escapeXml(letters)}</text>` : ""}</svg>`;
}
function tdsPlaceholder(options) {
	return `data:image/svg+xml,${encodeURIComponent(tdsPlaceholderSvg(options))}`;
}
export { serializeJsonLd as a, renderSectionedSitemapIndex as i, escapeXml as n, tdsPlaceholder as o, newestDay as r, defineSitemapSections as t };
