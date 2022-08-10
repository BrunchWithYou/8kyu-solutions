// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

// Tests
// Passed:sumAll([1, 4]) should return a number.
// Passed:sumAll([1, 4]) should return 10.
// Passed:sumAll([4, 1]) should return 10.
// Passed:sumAll([5, 10]) should return 45.
// Passed:sumAll([10, 5]) should return 45.


// My solution using reduce

function sumAll(arr) {
    let sortedArr = arr.sort((a,b)=>a-b)
    let newArr = []
    for(let i=sortedArr[0];i<=sortedArr[1];i++){
      newArr.push(sortedArr[0]++)
    }
    return (newArr.reduce((a,b)=>a+b,0))
  
  }
  
  
  sumAll([1, 4]);