// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// My solutions


  function areYouPlayingBanjo(name) {
    let splitName = name.split('')
    if(splitName[0]=== 'r' || splitName[0]==='R'){
      return splitName.join('') + ' plays banjo'
    } else return splitName.join('') + ' does not play banjo'
  }
  // refactor

  function areYouPlayingBanjo(name) {
    if(name.charAt(0) === 'R' || name.charAt(0) === 'r'){
      return name + ' plays banjo'
    } else return name+ ' does not play banjo'
  }