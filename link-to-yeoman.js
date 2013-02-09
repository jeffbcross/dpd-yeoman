var path = require('path')
	,	fs = require('fs')
	, npm = require.resolve('npm')
	,	generators;

// In the absence of generator management
// in yeoman, let's add ourselves to the
// generators.

//Find path to yeoman.
yeoman = path.resolve(npm, '../../../', 'yeoman');

//Get path to Yeoman generators
generators = path.resolve(yeoman, 'node_modules', 'yeoman-generators', 'lib', 'generators');

if (fs.existsSync(generators)) {
	console.log("Applying symlink to ", generators);
	fs.symlink(__dirname, path.resolve(generators, 'deployd'), 'dir', function (e) {
		if (e) {
			console.error("Error creating symlink");
			if (e.errno === 47) {
				console.info("Symlink already exists");
			}
		}
		else {
			console.info("Successfully added the deployd generator to yeoman");
		}
	});
}
else {
	console.error("Couldn't find the Yeoman generators path to symlink.");
	console.info("I tried at this path", path.resolve(yeoman, 'node_modules', 'yeoman-generators', 'lib', 'generators'));
	console.info("You can manually symlink to this directory, or copy this directory into the Yeoman generators");
}