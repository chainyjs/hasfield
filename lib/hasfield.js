module.exports = function(field){
	"use strict";
	this.data = this.data.filter(function(item){
		return item[field] != null
	})
}