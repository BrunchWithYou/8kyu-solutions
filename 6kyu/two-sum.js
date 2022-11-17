
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]



// Optimized solution
function twoSum(array, target) {
    let map = new Map();
    for(i = 0; i < array.length; i++) {
        const diff = target - array[i];
        if (map.has(diff)) {
            return [map.get(diff), i]; // map.get(diff) will get the value for that key, which is the index in this case.
        }
        map.set(array[i], i); // diff not found in Map, add new key/value pair where key = current item, value = index
    }
  }

  // My solution (initial solve)

  function twoSum(numbers, target) {
    let answer = [] //initialize answer array
    
    for(let i = 0;i<numbers.length;i++){
      
      if(numbers.includes(target-numbers[i]) ){ //if result of target - num is present in the numbers array then push current iteration
        answer.push(i)
      }
      
      if(numbers.lastIndexOf(target-numbers[i])>numbers.indexOf(numbers[i])){ // if the last index of the result is greater than the first
        answer.push(numbers.lastIndexOf(target-numbers[i])) // then push the 2nd iteration to the answer array
      } else answer = [] // otherwise reset the array
      
      if(answer.length===2){ //if you get 2 elements inside your array then return the answer
      return answer
      }
    }
  }