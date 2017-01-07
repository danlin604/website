function LetterChanges(str) {

  // Increment alphabets
  var replaced = str.replace(/[a-z]/gi, function(char) {
      return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1)
  });

  // Captialize vowels
  var captialized = replaced.replace(/a|e|i|o|u/gi, function(vowel) {
      return vowel.toUpperCase();
  });
  
  return captialized;
}                     

