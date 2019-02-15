'use strict'

var utils =  require('../src/utils.js');
var Astronaut =  require('../src/astronaut.js');

const chai = require('chai')
const expect = chai.expect


describe('utils.readInput', function () {
  it('should read input and return array for each line', function () {
  	var data = utils.readInput('test-input.txt');
    expect(data).to.eql(['5 5', '1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM']);
  });
});

describe('utils.readOutput', function () {
  it('should read output and return line for each astronaut', function () {
  	var astronauts = [];
  	astronauts.push(new Astronaut(1, 2, 'N', 'LMLMLMLMM'));
  	astronauts.push(new Astronaut(3, 3, 'E', 'MMRMMRMRRM'));
  	var data = utils.readOutput(astronauts);
    expect(data).to.eql(['1 2 N', '3 3 E']);
  });
});

describe('utils.parsePoolSize', function () {
  it('should read lines and return object with integers for grid size', function () {
  	var data = utils.parsePoolSize('5 5');
    expect(data).to.eql({'x': 5, 'y': 5});
  });
});

describe('utils.parseAstronautData', function () {
  it('should read lines and return array of astronauts from data', function () {
  	var astronauts = [];
  	astronauts.push(new Astronaut(1, 2, 'N', 'LMLMLMLMM'));
  	astronauts.push(new Astronaut(3, 3, 'E', 'MMRMMRMRRM'));
  	var data = utils.parseAstronautData(['1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM']);
    expect(JSON.stringify(data)).to.eql(JSON.stringify(astronauts));
  });
});