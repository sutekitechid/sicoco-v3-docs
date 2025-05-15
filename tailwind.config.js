/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['selector', '[data-theme="dark"]'],
	theme: {
		extend: {},
	},
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./public/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@sutekitechid/sicoco-v3-next/dist/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	presets: [
		require('./node_modules/@sutekitechid/sicoco-v3-next/dist/config/configPreset.js'),
	],
}
