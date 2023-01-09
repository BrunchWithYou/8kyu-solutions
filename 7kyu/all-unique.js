// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

// My solution trying with new map techniques

function hasUniqueChars(str){
    let map = {}
    
    for(let i = 0; i<str.length; i++){
      if(map[str[i]]){
        return false
      } else{
        map[str[i]] = 1
      } 
    }
    
    return true
  }