// Datos de contacto de la empresa, centralizados.
// Si cambia el número de WhatsApp, se cambia solo acá.

export const WHATSAPP_NUMBER = "5491123601134";

export const PHONE_DISPLAY = "+54 9 11 2360-1134";

export const EMAIL = "Fibrasavellaneda@gmail.com";

export const ADDRESS = "Gral. Deheza 684, Buenos Aires";

export function whatsappLink(message = "") {
    const text = message ? `?text=${encodeURIComponent(message)}` : "";
    return `https://wa.me/${WHATSAPP_NUMBER}${text}`;
}

export function openWhatsApp(message) {
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
}
