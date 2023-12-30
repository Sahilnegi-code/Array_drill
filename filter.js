function filter(elements, cb) {
    if(Array.isArray(elements) === false){
        console.log('Not an Array');
        return;
    }
    let arr  = [];
        for( let index = 0 ;index < elements.length ; index++){
            if( cb(elements[index]) === true ){
                arr.push(elements[index]);
            }

        }
    return arr;
    }
    
    
    module.exports= filter;