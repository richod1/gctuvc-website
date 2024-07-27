import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
	site: "https://gctuvc.com",
	integrations: [UnoCSS({ injectReset: true })],
});
