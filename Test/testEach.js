const each = require('../each');
const arr = require('./array');
const cb =(val, index )=>{
    console.log(` Index of  ${val} is ${index} ` )
}
each(arr,cb);