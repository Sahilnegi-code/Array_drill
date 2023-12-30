function each(elements, cb) {
if(Array.isArray(elements) === false){
    console.log('Not an Array');
    return;
}

    for( let index = 0 ;index < elements.length ; index++){
        cb(elements[index], index );
    }
return ;
}


module.exports= each;