// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s

// My solution

function pyramid(n) {
    if(n===0){
      return []
    }
    
    let answer = []
    
    for(let i = 1; i<=n; i++){
      answer.push('1'.repeat(i).split('').map(e=>+e))
    }
    
    return answer
  }