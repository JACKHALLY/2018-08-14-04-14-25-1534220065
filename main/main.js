module.exports = function main(s) {
  digitSymbols = [["._.", "...", "._.", "._.", "...", "._.", "._.", "._.", "._.", "._."],
            ["|.|", "..|", "._|", "._|", "|_|", "|_.", "|_.", "..|", "|_|", "|_|"],
            ["|_|", "..|", "|_.", "._|", "..|", "._|", "|_|", "..|", "|_|", "..|"]];

  digits = [];
  for(i = 0; i < s.length; ++i) {
    digits.push(parseInt(s[i]));
  }

  result = "";
  for(i = 0; i < digitSymbols.length; ++i) {
    for(j = 0; j < digits.length; ++j) {
      result += digitSymbols[i][digits[j]];
      if(j != digits.length - 1) {
        result += " ";
      }
      else {
        result += "\n";
      }
    }
  }

  return result;
};
