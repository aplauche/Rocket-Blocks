/**
 * Dependencies
 */
const { join } = require('path');

module.exports = {
	defaultValues: {
		author: 'rktblk',
		dashicon: 'pets',
		description: 'A custom block created by the create-block for the theme',
		namespace: 'rktblk',
		render: 'file:./render.php',
		version: '1.0.0',
		attributes: {
			exampleField: {
				type: "string",
				default: "",
				rktblk: {
					type: "text",
					label: "Example Field"
				}
			}
		},
	},
	pluginTemplatesPath: join(__dirname, 'plugin'),
	blockTemplatesPath: join(__dirname, 'block'),
};
