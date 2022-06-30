// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// My solution

// write the function isAnagram
var isAnagram = function(test, original) {
    let testStr = test.toLowerCase().split('')
    let originalStr = original.toLowerCase().split('')
    testStr.forEach(e=>{
      originalStr.indexOf(e)!=-1?originalStr.splice(originalStr.indexOf(e),1):originalStr.push('!')
    })
    if(originalStr.length===0){
      return true
    } else return false
  };