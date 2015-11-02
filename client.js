(function (){
	'use strict';

var Socket = window.MozWebSocket || window.WebSocket;
socket = new Socket('ws://' + location.hostname + ':' + location.port + '/', protos);
var Kaca = {
  VERSION:          '0.0.1',
  extend: function(dest, source, overwrite) {
    if (!source) return dest;
    for (var key in source) {
      if (!source.hasOwnProperty(key)) continue;
      if (dest.hasOwnProperty(key) && overwrite === false) continue;
      if (dest[key] !== source[key])
        dest[key] = source[key];
    }
    return dest;
  }

}



Kaca.Client = Kaca.Class({
	DEFAULT_ENDPOINT:   '/ws',
	initialize: function(endpoint, options) {
    	options = options || {};
    	this._endpoint   = endpoint || this.DEFAULT_ENDPOINT;

	},

	broadcast : function(message,callback){

	},
	pub : function(subject,message,callback){

	},
	sub : function(subject,message,callback){

	}
	
});




Kaca.Class = function(parent, methods) {
  if (typeof parent !== 'function') {
    methods = parent;
    parent  = Object;
  }

  var klass = function() {
    if (!this.initialize) return this;
    return this.initialize.apply(this, arguments) || this;
  };

  var bridge = function() {};
  bridge.prototype = parent.prototype;

  klass.prototype = new bridge();
  Kaca.extend(klass.prototype, methods);

  return klass;
};

})();
