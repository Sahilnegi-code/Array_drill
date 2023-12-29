const map = require('../map');
const arr = require('./array');
const cb =(val, index )=>{

    return val*val;
}
let result = map(arr,cb);
console.log(result);