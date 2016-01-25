cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.unarin.cordova.beacon/www/lib/underscore-min-1.6.js",
        "id": "com.unarin.cordova.beacon.underscorejs",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "file": "plugins/com.unarin.cordova.beacon/www/lib/q.min.js",
        "id": "com.unarin.cordova.beacon.Q",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "file": "plugins/com.unarin.cordova.beacon/www/LocationManager.js",
        "id": "com.unarin.cordova.beacon.LocationManager",
        "pluginId": "com.unarin.cordova.beacon",
        "merges": [
            "cordova.plugins"
        ]
    },
    {
        "file": "plugins/com.unarin.cordova.beacon/www/Delegate.js",
        "id": "com.unarin.cordova.beacon.Delegate",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "file": "plugins/com.unarin.cordova.beacon/www/model/Region.js",
        "id": "com.unarin.cordova.beacon.Region",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "file": "plugins/com.unarin.cordova.beacon/www/Regions.js",
        "id": "com.unarin.cordova.beacon.Regions",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "file": "plugins/com.unarin.cordova.beacon/www/model/CircularRegion.js",
        "id": "com.unarin.cordova.beacon.CircularRegion",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "file": "plugins/com.unarin.cordova.beacon/www/model/BeaconRegion.js",
        "id": "com.unarin.cordova.beacon.BeaconRegion",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "file": "plugins/cordova.plugin.boni/www/config.js",
        "id": "cordova.plugin.boni.Config",
        "pluginId": "cordova.plugin.boni",
        "runs": true
    },
    {
        "file": "plugins/cordova.plugin.boni/www/model/Beacon.js",
        "id": "cordova.plugin.boni.Beacon",
        "pluginId": "cordova.plugin.boni",
        "runs": true
    },
    {
        "file": "plugins/cordova.plugin.boni/www/lib/everlive.all.js",
        "id": "cordova.plugin.boni.Everlive",
        "pluginId": "cordova.plugin.boni",
        "runs": true
    },
    {
        "file": "plugins/cordova.plugin.boni/www/lib/lodash.js",
        "id": "cordova.plugin.boni.Lodash",
        "pluginId": "cordova.plugin.boni",
        "runs": true
    },
    {
        "file": "plugins/cordova.plugin.boni/www/lib/async.js",
        "id": "cordova.plugin.boni.Async",
        "pluginId": "cordova.plugin.boni",
        "runs": true
    },
    {
        "file": "plugins/cordova.plugin.boni/www/EverliveProvider.js",
        "id": "cordova.plugin.boni.everliveProvider",
        "pluginId": "cordova.plugin.boni",
        "merges": [
            "cordova.plugins"
        ]
    },
    {
        "file": "plugins/cordova.plugin.boni/www/BeaconRegistry.js",
        "id": "cordova.plugin.boni.beaconRegistry",
        "pluginId": "cordova.plugin.boni",
        "merges": [
            "cordova.plugins"
        ]
    },
    {
        "file": "plugins/cordova.plugin.boni/www/BoniManager.js",
        "id": "cordova.plugin.boni.boniManager",
        "pluginId": "cordova.plugin.boni",
        "merges": [
            "cordova.plugins"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "com.unarin.cordova.beacon": "3.3.0",
    "cordova.plugin.boni": "0.0.1"
}
// BOTTOM OF METADATA
});