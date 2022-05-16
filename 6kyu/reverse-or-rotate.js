// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> "" 
// revrot("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".

// My solution

function revrot(str, sz) {
    if(sz<=0 || str.length==0 || sz>str.length){  // Takes care of incorrect case inputs
      return ''
    }
  
    let answer = [] 
    let newArr = []
    let newStr = str.split('')
    
    
    for(let i = 0 ; i<newStr.length; i+=sz){ //Pushes the split str into an array separated by the sz parameter
      if(newStr.slice(i,i+sz).length===sz){
        newArr.push(newStr.slice(i,i+sz))
      }
    }
  
  
  newArr.forEach(e=>{ 
    if( e.map(elem=>Math.pow(elem,3)).reduce((a,b)=>a+b) % 2 === 0){ // if the sum of all elements of the array raised to the third power is divisible by 2
      answer.push(e.slice(0).reverse().join('')) //reverse and join the array
    } else {
      answer.push(e.slice(1).join('')) //otherwise slice the array excluding the first, join it,
      answer.push(e.slice(0,1)) // then push the first index to the end, completing the rotate left.
    }
  })

  
  return answer.join('') //join all to output a string of num
}