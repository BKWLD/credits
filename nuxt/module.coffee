# Register the plugin
path = require 'path'

module.exports = ->
	return if process.env.DISABLE_BUKWILD_CREDITS == 'true'

	@addPlugin
		src: path.resolve __dirname, 'plugin.js'
		mode: 'client'

# Export meta for Nuxt
module.exports.meta = require '../package.json'
