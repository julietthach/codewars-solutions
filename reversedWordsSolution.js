function reverseWords(str){

    const words = str.split(' '); // turns the string into an array (each word is assigned a position in the array)
  
    let emptyArray = [];
    
    for ( let i = words.length -1; i >=0; i-- ) {
      emptyArray.push(words[i]);
    }
  
    return emptyArray.join(' '); 
  }
  