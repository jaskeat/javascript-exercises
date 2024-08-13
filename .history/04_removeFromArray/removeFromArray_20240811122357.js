const removeFromArray = function (array, ...args) {
  let newArray = [];
  for (let i = args.length; i >= 0; i--) {
    newArray = array.filter((item) => item !== args[i]);
    return newArray;
  }
};

removeFromArray([1, 2, 3, 4, 5], 5);
// Do not edit below this line
module.exports = removeFromArray;
