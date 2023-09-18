let plugin = require('tailwindcss/plugin');
let extract = require('./extract');

module.exports = plugin(function ({ addUtilities }) {
	let utilities = extract.createUtilities();
	fs.writeFileSync('./utils.bin', JSON.stringify(utilities));
	console.log('utilities from create');
	addUtilities(utilities);
});
