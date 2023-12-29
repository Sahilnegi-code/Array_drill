function reduce(elements, cb , startingValue) {
    if(Array.isArray(elements) === false){
        console.log('Not an Array');
        return;
    }
    let sum = 0 ;
    if(startingValue !== 'undefined'){
        sum = startingValue;   
    }
        for( let index = 0 ;index < elements.length ; index++){
          sum +=  cb( startingValue,elements[index]);
        }
    return sum;
    }
    
    
    module.exports= reduce;