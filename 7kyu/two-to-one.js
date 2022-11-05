// CONFUSING INSTRUCTION. MUST TAKE BOTH S1 AND S2 not S1 or S2


// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// My solution

function longest(s1, s2) {
    let newStr = s1+s2
    let newSort = newStr.split('').sort()
    const mySort = (Array.from(new Set(newSort)).join(''))
    return mySort
  }