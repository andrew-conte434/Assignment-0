function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  const set = new Set();
  for(let i = 0; i < args.length; i++){
    const arr = [...args[i]];
    for(let j = 0; j < arr.length; j++){
      if(!set.has(arr[j]))
        set.add(arr[j]);
    }
  }

  return set;

}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;