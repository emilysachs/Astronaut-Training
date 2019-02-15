var Astronaut = require('./Astronaut.js');

function utils (){
	
	function readInput(file){
		var fs = require('fs');
		var lines = fs.readFileSync(file, 'utf8').split('\n');
		return lines;
	}

	function readOutput(astronaut){
		var output = [];
		for(var i = 0; i < astronaut.length; i++){
			var position = astronaut[i].x + ' ' + astronaut[i].y + ' ' + astronaut[i].heading;
			output.push(position);
			console.log(position);
		}
		return output;
	}

	function parsePoolSize(input){
		var size = input.split(' ');
		return {
			'x': parseInt(size[0]),
			'y': parseInt(size[1])
		}
	}

	function parseAstronautData(input){
		var astronaut = [];
		for(var line in input){
			var position = input.shift().split(' ');
			var instructions = input.shift();
			astronaut.push(new Astronaut(parseInt(position[0]), parseInt(position[1]), position[2], instructions));
		}
		return astronaut;
	}

	return {
		readInput,
		readOutput,
		parsePoolSize,
		parseAstronautData
	}
}

module.exports = utils();