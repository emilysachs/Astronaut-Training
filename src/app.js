function app(){
	var utils =  require('./utils.js');
	var Astronaut =  require('../src/Astronaut.js');	

	const inputFile = 'input.txt';

	var inputLines = utils.readInput(inputFile);

	var pool = utils.parsePoolSize(inputLines.shift());

	var astronauts = utils.parseAstronautData(inputLines);

	for(var i = 0; i < astronauts.length; i++){
		while(astronauts[i].instructions.length > 0){
			astronauts[i].explore();
		}
	}

	var output = utils.readOutput(astronauts);

}

module.exports = app();





