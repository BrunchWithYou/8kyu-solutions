// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

// Tests
// Passed:translatePigLatin("california") should return the string aliforniacay.
// Passed:translatePigLatin("paragraphs") should return the string aragraphspay.
// Passed:translatePigLatin("glove") should return the string oveglay.
// Passed:translatePigLatin("algorithm") should return the string algorithmway.
// Passed:translatePigLatin("eight") should return the string eightway.
// Passed:Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.
// Passed:Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.

// My solution

function translatePigLatin(str) {
    let beginStr= str.match(/^[^aeiou]+/)
    if(str[0] === 'a' || str[0] ==='e' || str[0] ==='i' || str[0] ==='o' ||str[0] ==='u'){
      return(str.concat('way'))
    } else return(str.replace(/^[^aeiou]+/,'').concat(beginStr+'ay'))
  }
  translatePigLatin("paragraphs");