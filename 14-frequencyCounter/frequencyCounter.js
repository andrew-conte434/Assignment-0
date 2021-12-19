function frequencyCounter(word) {
  // Insert code here;
  const letters = [];
  const freq = [];
  let letter;

  //create 2 seperate arrays containing the letters and their frequencies
  for(let i = 0; i < word.length; i++){
    letter = word.charAt(i);
    if (!letters.includes(letter)){
      letters.push(letter);
      freq.push(1);
    } else {
      freq[letters.indexOf(letter)]++;
    }
  }

  //create object of key-value pairs from arrays
  const pairs = {}
  for(let i = 0; i < letters.length; i++){
    pairs[letters[i]] = freq[i];
  }

  return pairs;
}

// Do not edit this line;
module.exports = frequencyCounter;