function addLength(str) {
  
    let wordArray = str.split(' ');
    for (let i = 0; i < wordArray.length; i++) {
      const wordLengthString = wordArray[i].length.toString();
      wordArray[i] = wordArray[i] + ' ' + wordLengthString;
    };
    
    return wordArray;
  }