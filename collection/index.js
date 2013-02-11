var util = require('util'),
    yeoman = require('yeoman');

function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.desc('This generator scaffolds a deployd collection');
}

module.exports = Generator;

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.createCollectionResource = function() {
  var name = this.name
  	,	config = require('./templates/collection/config.json')
  	,	properties = {};

  if (this.args.length) {
  	this.args.forEach(function (prop, i) {
  		if (i == 0) return; //Don't care about the name
  		var propName = prop.split(":")[0]
  			,	type = prop.split(":")[1] || "string";


  		properties[propName] = {
  			"name": propName,
				"type": type,
				"typeLabel": type,
				"required": false,
				"id": propName,
				"order": i - 1
  		}
  	});
  	
  }
  config.properties = properties;

  this.write('resources/' + name + '/config.json', JSON.stringify(config));
};