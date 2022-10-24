// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)


// My solution

String.prototype.camelCase=function(){
    return this.split(' ').map(e=>e.slice(0,1).toUpperCase() + e.slice(1)).join('')
  } // important to note use of slice or charAt since there are empty space for first word. Slice will parse and charAt's first letter will be index of 0.