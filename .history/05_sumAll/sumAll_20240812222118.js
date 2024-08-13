const sumAll = function (number1, number2) {
	let sum = 0;
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
