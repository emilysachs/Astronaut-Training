function Astronaut(x, y, heading, instructions){
	this.x = x;
	this.y = y;
	this.heading = heading;
	this.instructions = instructions;

	this.explore = function(){
		var action = this.instructions.charAt(0);
		switch(action) {
				case 'M':
					this.moveForward();
					break;
				case 'L':
					this.turnLeft();
					break;
				case 'R':
					this.turnRight();
					break;
		}
		this.instructions = this.instructions.substring(1);
		return this;
	}

	this.turnLeft = function(){
		var directions = ['N', 'W', 'S', 'E'];
		var index = directions.indexOf(this.heading);
		var facing = directions[(index + 1) % 4];
		this.heading = facing;
		return this;
	}

	this.turnRight = function(){
		var directions = ['N', 'E', 'S', 'W'];
		var index = directions.indexOf(this.heading);
		var facing = directions[(index + 1) % 4];
		this.heading = facing;
		return this;
	}

	this.moveForward = function(){
		switch(this.heading){
			case 'N':
				this.y++;
				break;
			case 'E':
				this.x++;
				break;
			case 'S':
				this.y--;
				break;
			case 'W':
				this.x--;
				break;
		}
		return this;
	}
}

module.exports = Astronaut;