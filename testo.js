function calculate(){
  let textInput = document.getElementById("textInput").value;
  let inputArray = textInput.split("");
  console.log(inputArray);
  let encryptedText = encrypt(inputArray, key1, key2);
  console.log(encryptedText);
  return encryptedText;
}

function encrypt(inputArray, key1, key2){
  let encryptedArray = [];
  for (let i = 0; i < inputArray.length; i++){
    let currentCharacter = inputArray[i];
    let indexInKey1 = key1.indexOf(currentCharacter);
    if (indexInKey1 !== -1) {
      encryptedArray.push(key2[indexInKey1]);
    } else {
      // If the character is not in key1, leave it unchanged
      encryptedArray.push(currentCharacter);
    }
  }
  return encryptedArray.join("");
  }

let key1 = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", ",", ":", ";", "'", '"', "<", ".", ">", "/", "?", "`", "~",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

let key2 = [
  "D", "h", "v", "5", "&", "I", "t", "l", "c", "^", "W", "m", "j", "q", "n", "a", "x", "r", "f", "e", "Y", "0", "b", "o", "L",
  "9", "+", "7", "Q", "8", "3", "F", "1", "E", "y", "X", "_", "4", "i", "@", "U", "k", "Z", "(", "2", "V", "p", "g", "s", "z", "K",
  "G", "J", ",", "d", "#", "c", "w", "{", "}", "$", "A", "S", "O", "u", "M", "*", "(", "6", "=", "t", "<", ">", "/", "N", "H", "T", "b", "P", "R", "?", "`", "~"
];

