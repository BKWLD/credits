// Add global app mixin.
function extend (app, mixin) {
	if (!app.mixins) {
		app.mixins = []
	}
	app.mixins.push(mixin)
}

// Log credits to console on app mount.
module.exports = function ({app}) {
	extend(app, {
		mounted: () => console.log(`
%c
      &        .:@@@@@:.
    .@@@.    .x@@@@@@@@%&,
   .@@@@@.  .&@@@@@@@@@@@&.
  :@@@@@@@. .&@@@@@@@@@@@&.
 :@@@@@@@@@: '&@@@@@@@@@&'    Bukwild: Design and technology for innovators.
:@@@@@@@@@@@:  '"@@@@@"'      bukwild.com
`, 'color: #2683cc; font-weight: bold')
	})
}
