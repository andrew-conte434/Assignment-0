function fizzBuzz(start, end) {
  // Insert code here;
  const arr = [];
  let result = ""
  let num = start;
  while(num <= end){
    if(num % 3 === 0)
      result += "Fizz";
    if(num % 5 === 0)
      result += "Buzz";
    
    if(result === "")
      arr.push(num);
    else  
      arr.push(result);

    num++;
    result = "";
  }

  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;