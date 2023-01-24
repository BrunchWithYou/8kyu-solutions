// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

// My solutions

function decipherThis(str) {
  
    let newArr = str.split(' ').map(e=>{
        return e.replace(/\d+/, num => String.fromCharCode(num))
      })
    
    let answer = newArr.map(e=>{
                    if(e.length>2){
                      return e.slice(0,1)+e.slice(-1)+e.slice(2,-1)+e.slice(1,2)
                    } else return e
                  })
    
    return answer.join(' ')
    }; 

    // OR

function decipherThis(str) {

    let newArr = str.split(' ').map(e=>{
        return String.fromCharCode(+e.match(/\d+/g)) + (e.match(/\D+/g)!==null? e.match(/\D+/g):'')
    })
    
    let answer = newArr.map(e=>{
                    if(e.length>2){
                    return e.slice(0,1)+e.slice(-1)+e.slice(2,-1)+e.slice(1,2)
                    } else return e
                })
    
    return answer.join(' ')
    }; 