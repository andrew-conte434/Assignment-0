function pairSum(nums, target) {
  // Insert code here;
  if(nums.length <= 1){
    throw "Length is less than 1!" 
  }
  for(let i = 0; i < nums.length; i++){
    if(nums.includes(target - nums[i]))
      return true;
  }

  return false;
}

// Do not edit this line;
module.exports = pairSum;