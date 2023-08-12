// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// My solution

function pigIt(str) {
  let splitStr = str.split(" ");
  let answer = splitStr.map((e) => {
    let splitWord = e.split("");

    if (splitWord[0] === "!" || splitWord[0] === "?") {
      return splitWord.join("");
    } else {
      let firstLetter = splitWord.shift();
      splitWord.push(firstLetter);
      splitWord.push("ay");
      return splitWord.join("");
    }
  });

  return answer.join(" ");
}
