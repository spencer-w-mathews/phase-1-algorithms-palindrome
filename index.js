function isPalindrome(word) {
  // Write your algorithm here
  const reverse= word.split('').reverse().join('')
  if(reverse===word){
    return true;
  }else{
    return false;
  }
}

/* 
  Add your pseudocode here
  split word into characters
  join words in reverse
  check to see if original string matches new string
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
