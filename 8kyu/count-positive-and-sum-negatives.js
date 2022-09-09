// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// my solution

function countPositivesSumNegatives(input) {
    let positive = []
    let negative = []
    let answer = []
    if(input === null || input.length===0){
      return []
    } else if(input.length>0){
      for(let i = 0; i<input.length;i++){
        if(input[i]>0){
          positive.push(input[i])
        }
            if(input[i]<0){
          negative.push(input[i])
        }
    
      }
    }
      if(positive.length>0 && positive.length!=null){
    answer.push(positive.length)
        }
    if(negative.length>0 ){
      answer.push(negative.reduce((a,b)=>a+b))
    } else answer.push(0)
    return answer
    }