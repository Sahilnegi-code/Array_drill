const reduce = require('../reduce');
const arr = require('./array');
const cb =( startingValue,value) =>{

    return value;
}
let result = reduce(arr,cb , 0);
console.log(result);