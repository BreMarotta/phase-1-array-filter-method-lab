function findMatching(array, string){
    const match = array.filter( object => object.toLowerCase() === string.toLowerCase());
    return match;  
}

function fuzzyMatch(array, string){
  //  const begin = array.filter( object => object.indexOf([object], 0) === string);
     //   if (begin){
           // return begin;
        //}
       // return begin.name;
    let length = string.length;
    return array.filter(driver => driver.slice(0, length)=== string);
}

function matchName(array, string){
    const same = array.filter( object => object.name.toLowerCase() === string.toLowerCase());
        return same;
}
//name and hometown are 2 known properties for test
