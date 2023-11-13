function calculate(){
  let textInput = document.getElementById("textInput").value;
  let inputArray = textInput.split("");
  console.log(inputArray);
  let encryptedText = encrypt(inputArray, key1, key2);
  console.log(encryptedText);
  document.getElementById("output").innerHTML = encryptedText;
  return encryptedText;
}
//key1 on aakkosjärjesteksysessä. Ohjelma etsii aina key1 kunkin merkin kaverin, ja sille vastaavan parin jostain muusta avaimesta. Toistaiseksi vain key2 käytössä.
//täytyy kirjoittaa useampia avaimia, tehdä functio joka randomoi sen mitä niistä käytetään ja korvata näissä käytetty key2 sillä randomoidulla vaihtoehdolla. Muuten se pumppaa aina key2 vastaukseksi.
//täytyy pohtia miten decryptaus onnistuu, jotenkin samalla tavalla kuin tämä, mutta toisinpäin.
function encrypt(inputArray, key1, key2){
  let encryptedArray = [];
  for (let i = 0; i < inputArray.length; i++){
    let currentCharacter = inputArray[i];
    let indexInKey1 = key1.indexOf(currentCharacter);
    //katsoo onko merkki key1 ja korvaa sen
    if (indexInKey1 !== -1) {
      encryptedArray.push(key2[indexInKey1]);
    } else {
      //jos merkki ei ole key1 se ei muutu
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
  "1", "q", "L", "&", "z", "F", "=", "]", "h", "@", "U", "a", ")", "*", "8", ":", "S", "I", "^", "_", "G", "O", "d", "9", "<", "4", "X",
  "Y", "j", "0", "n", "}", ")", "t", "V", "e", "P", "A", "b", "W", "K", "]", "]", "s", "c", "Q", "r", "!", "C", "`", "D", "l", "#", "v",
  "i", "p", "N", "E", "{", "o", "T", "J", "3", "y", "7", "x", "a", "w", "k", "(", "Z", ".", "m", "2", "/", "5", "M", "B", "+", "-", "u",
  "6", ";", "'", "H", ",", "f", "$", "g"
];

