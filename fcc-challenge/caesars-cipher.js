// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// Tests
// Passed:rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
// Passed:rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
// Passed:rot13("SERR YBIR?") should decode to the string FREE LOVE?
// Passed:rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

// My solution

function rot13(str) {
    let rot13 = 'NOPQRSTUVWXYZABCDEFGHIJKLM'
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let answer = ''
    for(let i = 0; i<str.length; i++){
      let originalStrIndex = alphabet.indexOf((str[i]))
      if(rot13[originalStrIndex]){
        answer+=rot13[originalStrIndex]
      } else {
        answer+=str[i]
      }
    }
  console.log(answer)
  return answer
  }
  
  rot13("SERR PBQR PNZC");