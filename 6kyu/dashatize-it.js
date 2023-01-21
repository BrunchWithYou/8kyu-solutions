// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

// My solution

function dashatize(num) {
    if(isNaN(num)){
      return "NaN"
    }
    
    let numArr = Math.abs(num).toString().split('')
    
    let mapped = numArr.map((e,i)=>{
      if(e%2===0){
        return e
      } else return `-${e}-`
    })
    
    return mapped.join('').replace(/--/g, "-").replace(/^-|-$/g, "")
    
  }