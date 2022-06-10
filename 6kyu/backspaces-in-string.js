// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""


// My solution

function cleanString(s) {
    let str = s.split('')
    
    let answer = []
    
    str.forEach((element,index)=>{
      if(element === '#'){
        return answer.pop()
      } else return answer.push(element)
    })
    
    return answer.join('')
  }

// Refactor

  function cleanString(s) {
    let strArr = s.split('')
    
    let answer = []
    
    strArr.forEach((element,index)=>{
      return element === '#' ? answer.pop() : answer.push(element)
    })
    
    return answer.join('')
  }