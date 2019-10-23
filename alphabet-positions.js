function alphabetPosition(text) {
  text = text.toUpperCase();
  var position = "";
  var alphabet = [
    " ",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  for (var i = 0; i < text.length; i++) {
    if (alphabet.indexOf(text[i]) > 0) {
      position += alphabet.indexOf(text[i]) + " ";
    } else {
      continue;
    }
  }
  return position.slice(0, position.length - 1);
}

alphabetPosition("The sunset sets at twelve o' clock.");
alphabetPosition("The narwhal bacons at midnight.");
