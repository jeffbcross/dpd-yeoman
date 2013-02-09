var path = require('path'),
  util = require('util'),
  ScriptBase = require('../script-base.js'),
  grunt = require('grunt'),
  angularUtils = require('../util.js');

module.exports = Generator;

function Generator() {
  ScriptBase.apply(this, arguments);
}

util.inherits(Generator, ScriptBase);

Generator.prototype.createRoutesFile = function createRoutesFile() {
	// this.template('spec/routes/routes', 'test/spec/routes/' + this.routeFile);
};

Generator.prototype.rewriteIndexHtml = function() {
	var config = {
		"type": "collection"
	};
  grunt.file.mkdir('server/resources/' + this.name);
  grunt.file.write('server/resources/' + this.name, JSON.stringify(config));
};

