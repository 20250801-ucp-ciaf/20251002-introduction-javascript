const vowels = ["a", "e", "i", "o", "u"];

const counterVowels = (word) => {
  let counter = 0;
  let wordArray = word.split(""); // "computadora" -> ["c", "o", "m", "p", "u", "t", "a", "d", "o", "r", "a"]
  wordArray.forEach(letter => {
    if(vowels.includes(letter)) {
      counter++;
    }
  });
  return `${word} tiene ${counter} vocales`;
}

console.log(counterVowels("computadora"));
