// Story
// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

// But some of the rats are deaf and are going the wrong way!

// Kata Task
// How many deaf rats are there?

// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right
// Example
// ex1 ~O~O~O~O P has 0 deaf rats

// ex2 P O~ O~ ~O O~ has 1 deaf rat

// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats




// My solution

var countDeafRats = function(town) {
    let left = "O~"
    let right = "~O"
    let foundP = false //found and count will help our logic determine if a left or right rat is deaf.
    let count = 0
    
    
    let townArr = town.match(/O~|~O|P/g) //match all O~,~O, or P (g)lobally and set it as a new array
    
    
    
    for(let i = 0; i<townArr.length; i++){ //loop starts with found as false because we do not know where P is.
      if(townArr[i]==='P'){ 
        foundP = true // once P has been found set found to true
      }
      if(foundP === false && townArr[i]===left){
        count++ // if you have not found P, it means that all rats O~ are deaf, so increment your count when index is O~ 
      }
      if(foundP === true && townArr[i]===right){
        count++ // if you have found P, it means that all rats ~O are deaf, so increment your count when index is ~O 
      }
    }
    
    return count
  }