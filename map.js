function map(elements, cb) {
    if(Array.isArray(elements) === false){
        console.log('Not an Array');
        return;
    }
    let arr = [];
        for( let index = 0 ;index < elements.length ; index++){
           arr.push( cb( elements[index],index));
        }
    return arr;
    }
    
    
    module.exports= map;