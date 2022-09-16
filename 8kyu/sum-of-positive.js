// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// My solution

function positiveSum(arr) {
    let total = 0
    if(arr===[]){
      return 0
    } else for(let i = 0 ; i<arr.length;i++){
      if(arr[i]>0){
        total+=arr[i]
      }
      
    }return total
  }