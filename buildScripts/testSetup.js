// This file isnt transpiled, so must use CommonJS and ES5

// Register bablel to transpile before our tests run
require('babel-register')();

// Disable webpack features which Mocha wont understand (say to treat it like an empty function)
require.extensions['.css'] = function() {};

