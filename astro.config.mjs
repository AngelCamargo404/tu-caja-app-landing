import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  // Inyecta el CSS propio dentro del HTML para sacarlo de la ruta crítica
  // (evita las solicitudes /_astro/*.css que bloquean el renderizado).
  build: {
    inlineStylesheets: "always",
  },
  integrations: [tailwind(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  })],
});
