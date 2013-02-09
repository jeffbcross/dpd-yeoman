var util   = require('util'),
    yeoman = require('yeoman'),
    fs = require('fs');
console.log('yeoman', yeoman);
console.log('generators', yeoman.generators);
module.exports = Generator;

function Generator() {
  yeoman.generators.Base.apply(this, arguments);
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.createInitializerFile = function() {
	this.directory('../all/templates/server/', 'server/');
  this.copy('../all/templates/.emptydirectory', 'resources/.emptydirectory');
  
  //TODO: Make deployd accept custom static directory names.
	fs.symlink(fs.realpathSync('./app'), './public', 'dir', function(e) {
		if (e && e.errno !== 47) {
			console.error("Couldn't create symlink");
			console.error(e);
		}
	});
};