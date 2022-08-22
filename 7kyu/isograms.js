// n isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// My solution

function isIsogram(str){
    let count = 0
    let newStr = str.toLowerCase()
    let finalStr=[]
    for(let i = 0; i<newStr.length;i++){
      if(!finalStr.includes(newStr[i])){
        finalStr.push(newStr[i])
      }
    } 
    if(finalStr.join('')===newStr){
      return true
    } else return false
  }