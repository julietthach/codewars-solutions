function removeSmallest(numbers) {
    let numbersCopy = [...numbers];
  
    const smallestNumber = Math.min(...numbers);
    
    const smallestNumberIndex = numbers.findIndex((element) => {
        return smallestNumber === element;
    });
  
    numbersCopy.splice(smallestNumberIndex, 1);
    
    return numbersCopy;
}