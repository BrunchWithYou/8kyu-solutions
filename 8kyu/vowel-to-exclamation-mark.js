// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

// My solution

function replace(s){
    let filter = ['a','e','i','o','u','A','E','I','O','U']
    let answer = []
    for(let i = 0; i<s.length;i++){
      if(filter.includes(s[i])){
        answer.push('!')
      }else answer.push(s[i])
    }
      return answer.join('')
      
    }