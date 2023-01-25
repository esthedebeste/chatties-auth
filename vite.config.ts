import { sveltekit } from "@sveltejs/kit/vite"
import type { UserConfig } from "vite"

const config: UserConfig = {
	plugins: [sveltekit()],
	envPrefix: ["VITE_", "CHATTIES_"],
	build: { sourcemap: true },
}

export default config
