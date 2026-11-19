import { createImageCatalog } from "@tracht-digital-labs/tds-shared/site";
import raw from "./imageCatalog.json";

/** The generated editorial image catalogue (tds-shared helper). */
export const { imageInfo, imageHints, imageObject } = createImageCatalog(raw, {
  origin: "https://shop.tracht-digital.de",
  about: "page",
});
