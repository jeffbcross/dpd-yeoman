var util   = require('util'),
    yeoman = require('yeoman'),
    fs = require('fs');

module.exports = Generator;

function Generator() {
  yeoman.generators.Base.apply(this, arguments);
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.createInitializerFile = function() {
	this.directory('./server/', 'server/');
  this.copy('./.emptydirectory', 'resources/.emptydirectory');
  
  //TODO: Make deployd accept custom static directory names.
	fs.symlink(fs.realpathSync('./app'), './public', 'dir', function(e) {
		if (e) console.error(e);
	});
};