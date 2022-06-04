// Write a function

// tripledouble(num1,num2)
// which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

// If this isn't the case, return 0

// Examples
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1

// My solution

function tripledouble(num1, num2) {
    let triple = []
    let double = []
    let num1Arr = num1.toString().split('')
    let num2Arr = num2.toString().split('')
    
    num1Arr.forEach((e,i)=>{ // Loop through to find the triple
      e===num1Arr[i+1] && e===num1Arr[i+2]?triple.push(e):'' //push to array if triple exists
    })
    num2Arr.forEach((e,i)=>{ // Loop through to find the double
      e===num2Arr[i] && e===num2Arr[i+1]?double.push(e):'' //push to array if double exists
    })
    
    
    if(triple.length===0){ //if triple doesnt exist return 0
      return 0
      }
    
    let check = double.filter(e=>{ // returns an array if num of triple exists in double array
      return (triple.includes(e))
    })
  
    if(check.length>0){
      return 1
    } else return 0
}