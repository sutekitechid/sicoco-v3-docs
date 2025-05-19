/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: [
		...'../../node_modules/@sutekitechid/sicoco-v3-next/**/*.{js,ts,jsx,tsx,vue}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
	presets: [
		require('@sutekitechid/sicoco-v3-next/dist/config/configPreset.js'),
	],
}
