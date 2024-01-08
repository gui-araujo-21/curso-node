const _ = require('lodash');

const a = [2,5,7,11,23];

const b = [2,7,23,25];

const diff = _.difference(a,b);

console.log(diff);