// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// My solution

function toCamelCase(str){
    let array=[]
    let splitStr = (str.split(/[-_]/g))
    splitStr.forEach((e)=>array.push(e.slice(0,1).toUpperCase()+e.slice(1)))
    let answer = (array.join(''))
    if(answer[0]===str[0]){
      return answer
    } else return str.slice(0,1).toLowerCase()+answer.slice(1)
  
  
  }