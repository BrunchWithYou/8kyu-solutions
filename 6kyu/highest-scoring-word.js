// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
//     assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano'); 
//     assert.strictEqual(high('take me to semynak'), 'semynak');   
//     assert.strictEqual(high('aa b'), 'aa');
//     assert.strictEqual(high('b aa'), 'b');
//     assert.strictEqual(high('bb d'), 'bb');
//     assert.strictEqual(high('d bb'), 'd');
//     assert.strictEqual(high('aaa b'), 'aaa');
//   })
// });

// My solution

function high(x){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let splitWord = x.split(' ')
    let count = 0
    let totalArray = []
    splitWord.forEach(e=>{
      for(let i = 0; i<e.length;i++){
        count+=(alphabet.indexOf(e[i]))+1
        
      }
      totalArray.push(count)
      count=0
    })
    let totalPoints = Math.max(...totalArray)
    console.log(totalPoints)
      
    console.log(splitWord[totalArray.indexOf(totalPoints)])
      console.log(totalArray)
      return (splitWord[totalArray.indexOf(totalPoints)])
    }