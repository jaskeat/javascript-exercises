const newString = "";
const reverseString = function (string) {
  //   console.log(string.split(""));
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
    console.log(newString);
  }
};

reverseString("hello");
// Do not edit below this line
module.exports = reverseString;
