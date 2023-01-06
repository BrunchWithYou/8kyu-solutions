// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
// minSum({12,6,10,26,3,24}) ==> return (342)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
// minSum({9,2,8,7,5,4,0,6}) ==> return (74)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74
// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas


// My solution

function minSum(arr) {
    const sorted = arr.sort((a, b) => a - b);
    return sorted.slice(0, sorted.length / 2).reduce((acc, cur, i) => acc + cur * sorted[sorted.length - i - 1], 0);
    
  }

//   or 

const minSum = arr =>
  arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);