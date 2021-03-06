cordova.define("cordova.plugin.boni.Config", function(require, exports, module) { "use strict()";

module.exports = {
	uuid: ['fda50693-a4e2-4fb1-afcf-c6eb07647825',
		'a32773da-fd5d-11e4-a322-1697f925ec7b'
	],
	identifier: 'BoniBeacon',
	apikey: 'bmtnzdda16k2wled',
	proximity: {
		immediate: {
			name: 'ProximityImmediate',
			factor: 105
		},
		near: {
			name: 'ProximityNear',
			factor: 200
		},
		far: {
			name: 'ProximityFar'
		},
		buffer: 10
	}
};

});
