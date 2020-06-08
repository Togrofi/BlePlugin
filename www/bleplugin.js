// Empty constructor
function BlePlugin() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
BlePlugin.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'BlePlugin', 'show', [options]);
}

// Installation constructor that binds ToastyPlugin to window
BlePlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.blePlugin = new BlePlugin();
  return window.plugins.blePlugin;
};
cordova.addConstructor(BlePlugin.install);
