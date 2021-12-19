function isPalindrome(word) {
  // Insert code here;
  let reverse = "";
  for(let i = word.length - 1; i >= 0; i--){
    reverse += word.charAt(i);
  }

  return reverse === word;
}

// Do not edit this line;
module.exports = isPalindrome;