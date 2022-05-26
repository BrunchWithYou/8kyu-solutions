// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"


// My solution

var encryptThis = function(text) {
    let newStr = text.split(' ')
    
    return newStr.map((e,i)=>{
      if(newStr[i].length>2){ //if two or more letters return charcode + last letter + rest of letters excluding first two + 2nd letter
        return newStr[i][0]=newStr[i].charCodeAt(0) + newStr[i].split('').pop() + newStr[i].slice(2,newStr[i].length-1) + newStr[i].slice(1,2)
      } else return newStr[i][0]=newStr[i].charCodeAt(0) + newStr[i].slice(1) // else return charcode and 2nd letter
      
    }).join(' ') //make sure to join since map returns array
    
  }