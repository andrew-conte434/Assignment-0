class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    let mid = Math.floor(nums.length / 2);
    if(nums[mid] === target)
      return true;
    if(nums.length <= 1)
      return false;

    if(target >= nums[mid])
      return this.binarySearch(nums.slice(mid + 1, nums.length), target);
    if(target < nums[mid])
      return this.binarySearch(nums.slice(0, mid), target);
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;