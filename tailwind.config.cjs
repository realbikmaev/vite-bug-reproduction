const plugin = require('tailwindcss/plugin');
const fs = require('fs');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [
		plugin(function ({ addUtilities }) {
			let utils = JSON.parse(fs.readFileSync('./utils.bin', 'utf8'));
			addUtilities(utils);
		})
	]
	// plugins: [require('./index')]
};

module.exports = config;
