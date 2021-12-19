function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  let result = 0;
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'boolean' || typeof arr[i] === 'string')
      result++;
  }

  return result;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;