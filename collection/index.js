var util = require('util'),
    yeoman = require('yeoman');

function Generator() {
  yeoman.generators.Base.apply(this, arguments);
}

module.exports = Generator;

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.createInitializerFile = function() {
  var name = this.args[0] || 'collection';

  this.copy('collection/config.json', 'resources/' + name + '/config.json');
};