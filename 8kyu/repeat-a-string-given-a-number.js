// Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

// My solution

function repeatStringNumTimes(str, num) {
    let newStr = ''
  if(num>0){
    for(let i=0;i<num;i++){
    newStr +=str
  } return newStr
  }else return ''
  }

//   Using recursion

function repeatStringNumTimes(str, num) {
    if(num<1){
      return ''
    } else return (str+repeatStringNumTimes(str, num-1))
    }
    
  
  repeatStringNumTimes("abc", 3);