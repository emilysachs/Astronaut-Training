'use strict'

var utils =  require('../src/utils.js');
var Astronaut =  require('../src/astronaut.js');

const chai = require('chai')
const expect = chai.expect


describe('utils.readInput', function () {
  it('should read input and return array for each line', function () {
  	var data = utils.readInput('tests/test-input.txt');
    expect(data).to.eql(['10 10', '3 2 N', 'RLMLRRMR', '2 1 E', 'LMRLMRML']);
  });
});

describe('utils.readOutput', function () {
  it('should read output and return line for each astronaut', function () {
  	var astronauts = [];
  	astronauts.push(new Astronaut(4, 3, 'S', ''));
  	astronauts.push(new Astronaut(3, 3, 'N', ''));
  	var data = utils.readOutput(astronauts);
    expect(data).to.eql(['4 3 S', '3 3 N']);
  });
});

describe('utils.parsePoolSize', function () {
  it('should read lines and return object with integers for grid size', function () {
  	var data = utils.parsePoolSize('10 10');
    expect(data).to.eql({'x': 10, 'y': 10});
  });
});

describe('utils.parseAstronautData', function () {
  it('should read lines and return array of astronauts from data', function () {
  	var astronauts = [];
  	astronauts.push(new Astronaut(3, 2, 'N', 'RLMLRRMR'));
  	astronauts.push(new Astronaut(2, 1, 'E', 'LMRLMRML'));
  	var data = utils.parseAstronautData(['3 2 N', 'RLMLRRMR', '2 1 E', 'LMRLMRML']);
    expect(JSON.stringify(data)).to.eql(JSON.stringify(astronauts));
  });
});