( function() {

module.exports = function() {
	return webkitRequestFileSystem.apply( this, arguments );
};

})();
