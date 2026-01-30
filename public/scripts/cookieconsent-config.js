import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
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
                    title: "Bienvenido a este blog",
                    description: "Al continuar, aceptas el uso de cookies.",
                    acceptAllBtn: "Aceptar todo",
                    acceptNecessaryBtn: "Rechazar todo",
                    showPreferencesBtn: "Gestionar preferencias",
                    footer: "<a href=\"/politica-de-privacidad\">Política de privacidad</a>\n<a href=\"/politica-de-cookies\">Politica de Cookies</a>"
                },
                preferencesModal: {
                    title: "Preferencias de Cookies",
                    acceptAllBtn: "Aceptar todo",
                    acceptNecessaryBtn: "Rechazar todo",
                    savePreferencesBtn: "Guardar preferencias",
                    closeIconLabel: "Cerrar modal",
                    serviceCounterLabel: "Servicios",
                    sections: [
                        {
                            title: "Uso de Cookies",
                            description: "En este blog se utilizan cookies para analizar el tráfico."
                        },
                        {
                            title: "Cookies Estrictamente Necesarias <span class=\"pm__badge\">Siempre Activadas</span>",
                            description: "Estas cookies son esenciales para el funcionamiento del sitio y no se pueden desactivar.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Cookies Analíticas",
                            description: "Estas cookies ayudan a entender cómo interactúas con nuestro sitio para mejorar nuestros servicios continuamente.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Más información",
                            description: "Para cualquier consulta sobre nuestra política de cookies."
                        }
                    ]
                }
            }
        }
    }
});