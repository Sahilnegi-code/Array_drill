const filter = require('../find');
const arr = require('./array');
const cb =( val )=>{

    return val > 0;
}
let result = filter(arr,cb);
console.log(result);