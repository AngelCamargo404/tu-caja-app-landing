import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: false,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: "es",
        autoDetect: "browser",
        translations: {
            es: {
                consentModal: {
                    title: "Tu privacidad nos importa",
                    description: "Utilizamos cookies analíticas para mejorar tu experiencia. Al continuar, aceptas nuestros <a href=\"/terminos\" class=\"cc-link\">Términos y Condiciones</a> y nuestras <a href=\"/privacidad\" class=\"cc-link\">Políticas de Privacidad</a>.",
                    acceptAllBtn: "Aceptar todo",
                    acceptNecessaryBtn: "Solo esenciales",
                    showPreferencesBtn: "Gestionar preferencias",
                    footer: "<a href=\"/terminos\">Términos y Condiciones</a><a href=\"/privacidad\">Política de Privacidad</a>"
                },
                preferencesModal: {
                    title: "Preferencias de Privacidad",
                    acceptAllBtn: "Aceptar todo",
                    acceptNecessaryBtn: "Solo esenciales",
                    savePreferencesBtn: "Guardar preferencias",
                    closeIconLabel: "Cerrar",
                    serviceCounterLabel: "Servicios",
                    sections: [
                        {
                            title: "Uso de Cookies",
                            description: "Usamos cookies para garantizar el funcionamiento básico del sitio y cookies analíticas para entender cómo interactúas con él y así mejorar nuestros servicios."
                        },
                        {
                            title: "Cookies Estrictamente Necesarias <span class=\"pm__badge\">Siempre Activas</span>",
                            description: "Estas cookies son esenciales para el correcto funcionamiento del sitio y no pueden desactivarse.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Cookies Analíticas",
                            description: "Nos ayudan a entender cómo usas el sitio para mejorar continuamente la experiencia. No se comparten con terceros.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Más información",
                            description: "Para cualquier consulta sobre el uso de tus datos, revisa nuestras <a href=\"/privacidad\" class=\"cc-link\">Políticas de Privacidad</a> o nuestros <a href=\"/terminos\" class=\"cc-link\">Términos y Condiciones</a>."
                        }
                    ]
                }
            }
        }
    }
});
