function titleCaseEdit(title) {
  // Insert code here;
  const words = title.split(" ");
  let result = "";
  for(let i = 0; i < words.length; i++){
    result += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
  }

  //removes last space
  result = result.slice(0, result.length - 1);
  return result;
}

// Do not edit this line;
module.exports = titleCaseEdit;