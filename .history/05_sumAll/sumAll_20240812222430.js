const sumAll = function (number1, number2) {
	let sum = 0;
	if (!Number.isInteger(number1) || !Number.isInteger(number2))
		return "ERROR";
	if (number1 < 0 || number2 < 0) return "ERROR";

	largeNum = Math.max(number1, number2);
	smallNum = Math.min(number1, number2);

	for (let i = smallNum; i <= largeNum; i++) {
		console.log(i);
		sum += i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
