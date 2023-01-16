// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

// My solution

const orderedCount = function (text) {
    let map = {}
    
    for(let i = 0; i<text.length; i++){
      if(map[text[i]]){
        map[text[i]]++
      } else map[text[i]] = 1
    }
    
    return Object.entries(map).sort((a, b) => text.indexOf(a[0]) - text.indexOf(b[0]));
  }

//   include sort if you want the position to be retained, else just return object.entries(map)