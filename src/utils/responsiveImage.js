// Devuelve los atributos srcSet/sizes para que el navegador elija
// la versión liviana (-900.webp) en pantallas chicas.
// Las variantes se generan a partir de las fotos de /public/images
// y se listan en responsive-images.json.

import sizesMap from "./responsive-images.json";

export const SIZES_FULL = "100vw";
export const SIZES_HALF = "(max-width: 768px) 100vw, 50vw";
export const SIZES_CARD = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

export function responsiveProps(src, sizes = SIZES_HALF) {
    const entry = sizesMap[src];
    if (!entry) return {};
    const [smallWidth, fullWidth] = entry;
    const small = src.replace(/\.webp$/, "-900.webp");
    return {
        srcSet: `${small} ${smallWidth}w, ${src} ${fullWidth}w`,
        sizes,
    };
}
