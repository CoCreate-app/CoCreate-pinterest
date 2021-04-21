(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(["./client"], function(CoCreatePinterest) {
        	return factory(CoCreatePinterest)
        });
    } else if (typeof module === 'object' && module.exports) {
      const CoCreatePinterest = require("./server.js")
      module.exports = factory(CoCreatePinterest);
    } else {
        root.returnExports = factory(root["./client.js"]);
  }
}(typeof self !== 'undefined' ? self : this, function (CoCreatePinterest) {
  return CoCreatePinterest;
}));