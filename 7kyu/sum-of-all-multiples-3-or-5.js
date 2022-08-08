// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

//  My solution

function findSum(n) {
    let i = 1
    let result = 0
    while(i<=n){
      if(i%3 ===0 || i%5 === 0)
      result = result +i
      i++
    }
    return result
  }