// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// My solution

function scramble(str1, str2) {
  //Split to work with array and map
  let splitStr1 = str1.split("");
  let splitStr2 = str2.split("");

  //Create a new hashmap because its fast AF
  const map1 = new Map();

  //Loop through first string to have all available letters counted for.
  for (let i = 0; i < splitStr1.length; i++) {
    //If a letter is present then add 1 to the existing count otherwise make it 1
    if (map1.has(splitStr1[i])) {
      map1.set(splitStr1[i], map1.get(splitStr1[i]) + 1);
    } else map1.set(splitStr1[i], 1);
  }

  //Loop through the second list of letters array to compare to our mapped out letters in the first
  for (let i = 0; i < splitStr2.length; i++) {
    //If it hat letter exists and has a count that is greater than 0, then always subtract 1 from it
    if (map1.has(splitStr2[i]) && map1.has(splitStr2[i]) > 0) {
      map1.set(splitStr2[i], map1.get(splitStr2[i]) - 1);
    } else {
      //  Otherwise you want to return false because you'just found that you canot complete the scramble
      return false;
    }

    //This extra if condition here will check for an edgecase where 2nd word has extra repeated letters. This will make our letters count at -1
    //So if it's less than 0 return false
    if (map1.get(splitStr2[i]) < 0) {
      return false;
    }
  }

  //Otherwise everything passed you can return true and know you've got enough letters from the 1st word to scramble the 2nd word
  //Add console log for map1 to see what it is returning to help visualize
  return true;
}
