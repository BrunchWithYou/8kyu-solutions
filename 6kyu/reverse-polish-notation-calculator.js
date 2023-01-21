// Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

// For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

// For your convenience, the input is formatted such that a space is provided between every token.

// Empty expression should evaluate to 0.

// Valid operations are +, -, *, /.

// You may assume that there won't be exceptional situations (like stack underflow or division by zero).

// My solution

function calc(expr) {
    if(expr.length === 0){
      return 0
    }
    
    let operations = ['+','/','-','*']
    let arr = expr.split(' ')
    
    while(arr.length!==1){
      for(let i = 0; i<arr.length; i++){
        if(operations.includes(arr[i])){
          let num = eval(Number(arr.slice(i-2,i-1))+arr[i]+Number(arr.slice(i-1, i)))
          arr.splice(i-2,3,num)
          break
        }
      }
  }
  
    if(arr.length===1){
      return +arr
    }
  }