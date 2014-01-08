( function() {

module.exports = {
	requestFileSystem: function() {
		return webkitRequestFileSystem.apply( window, arguments );
	}
};

require( "cordova/tizen/commandProxy" ).add( "File", module.exports );

})();
