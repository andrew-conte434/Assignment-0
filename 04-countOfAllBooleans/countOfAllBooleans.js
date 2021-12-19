function countOfAllBooleans(arr) {
  // Insert code here;
  let booleans = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === true || arr[i] === false)
      booleans++;
  }

  return booleans;
}

// Do not edit this line;
module.exports = countOfAllBooleans;