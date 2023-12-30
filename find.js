function find(elements, cb) {
    if(Array.isArray(elements) === false){
        console.log('Not an Array');
        return;
    }
    
        for( let index = 0 ;index < elements.length ; index++){
            if( cb(elements[index]) === true ){
                return elements[index];
            }
        }
return undefined;
    }
    
    
    module.exports= find;