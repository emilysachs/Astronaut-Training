'use strict'

var Astronaut =  require('../src/astronaut.js');

const chai = require('chai');
const expect = chai.expect;

describe('astronaut.turnLeft', function () {
  it('should update the astronaut after turning to the left', function () {
  	var astronaut = new Astronaut(1, 2, 'N', 'LMLMLMLMM');
  	var turned = new Astronaut(1, 2, 'W', 'LMLMLMLMM');
  	astronaut.turnLeft();
    expect(JSON.stringify(astronaut)).to.eql(JSON.stringify(turned));
  });
});

describe('astronaut.turnRight', function () {
  it('should update the astronaut after turning to the right', function () {
  	var astronaut = new Astronaut(1, 2, 'N', 'LMLMLMLMM');
  	var turned = new Astronaut(1, 2, 'E', 'LMLMLMLMM');
  	astronaut.turnRight();
    expect(JSON.stringify(astronaut)).to.eql(JSON.stringify(turned));
  });
});

describe('astronaut.moveForward', function () {
  it('should update the astronaut after moving forward', function () {
  	var astronaut = new Astronaut(1, 2, 'N', 'LMLMLMLMM');
  	var moved = new Astronaut(1, 3, 'N', 'LMLMLMLMM');
  	astronaut.moveForward();
    expect(JSON.stringify(astronaut)).to.eql(JSON.stringify(moved));
  });
});