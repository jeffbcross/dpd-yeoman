var path = require('path')
	,	fs = require('fs');

// In the absence of generator management
// in yeoman, let's add ourselves to the
// generators.
console.info("No op for now.");

//Find path to yeoman.
var yeoman = require.resolve("yeoman");
yeoman = path.resolve(yeoman, '../../');
console.info('yeoman', yeoman);
//Add symlink to the project root in yeoman

var generators = path.resolve(yeoman, 'node_modules', 'yeoman-generators', 'lib', 'generators');
if (fs.existsSync(generators)) {
	console.log("Applying symlink to ", generators);
	/*fs.symlink('./', path.resolve(generators, 'deployd'), 'dir', function (e) {
		if (e) {
			console.error(e);
		}
		else {
			console.info("Successfully added the deployd generator to yeoman");
		}
	});*/
}
else {
	console.error("Couldn't find the Yeoman generators path to symlink.");
	console.info("I tried at this path", path.resolve(yeoman, 'node_modules', 'yeoman-generators', 'lib', 'generators'));
	console.info("You can manually symlink to this directory, or copy this directory into the Yeoman generators");
}