# Astronaut Training

## Installing Dependencies:

```
$ npm install
```

## Running Tests

```
$ npm test
```

## Running the App

```
$ npm start
```

## Changing the Input

The input is read in from the input.txt file.

The first line of input is 2 integers for the x and y dimensions of the pool (starting from 0,0).

After that, each pair of lines represents data for an astronaut. The first of the pair of lines contains 2 integers and a letter representing their x and y coordinates and their heading. The second line in the pair is a string that represents the sequence of instructions for the astronaut.

## Getting the Ouput

The output is set to print to the Terminal via a console.log() in the utils.js file. If you'd rather grab the output and use it somewhere else, it can be accessed as an array via the readOutput function. Each string represents and astronaut and gives their final coordinates and heading once they've completed all movement instructions.
