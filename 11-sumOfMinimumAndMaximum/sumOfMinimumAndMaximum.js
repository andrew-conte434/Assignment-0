function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  let min, max;
  min = nums[0]; 
  max = nums[0];
  for(let i = 1; i < nums.length; i++){
    if(nums[i] < min)
      min = nums[i];
    if(nums[i] > max)
      max = nums[i];
  }
  return min + max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;