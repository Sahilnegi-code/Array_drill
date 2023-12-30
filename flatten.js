
function helper(elements){


    let arr = [];
    for( let i  = 0 ; i < elements.length ; i++){
  
  
      if( Array.isArray(elements[i]) ){
          helper(elements[i]);
         arr =  arr.concat(helper(elements[i]));
      }
      else{
          arr.push(elements[i]);
      }
    }
  
  
  return arr;
  }
  function flatten(elements) {

          return helper(elements);
  }
      

      
      module.exports= flatten;
  