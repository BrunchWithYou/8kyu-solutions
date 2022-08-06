// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

// Passed:titleCase("I'm a little tea pot") should return a string.
// Passed:titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
// Passed:titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
// Passed:titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.


// My solution

function titleCase(str) {
    let splitString = str.split(' ')
    let newString = [];
      for(let i = 0; i<splitString.length; i++){
        newString.push(splitString[i][0].toUpperCase()+splitString[i].substring(1).toLowerCase())
      }
    return newString.join(' ')
  }
  
  titleCase("I'm a little tea pot");