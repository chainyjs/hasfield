"use strict";
module.exports = function(value, field){
	return value.filter(function(item){
		return item[field] != null
	})
}
module.exports.extensionType = 'action'
module.exports.extensionOptions = {
	aliases: ['hasField']
}