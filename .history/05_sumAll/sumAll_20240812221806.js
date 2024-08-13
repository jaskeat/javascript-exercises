const sumAll = function (number1, number2) {
	let sum = 0;
	for (let i = number1; i <= number2; i++) {
		console.log(i);
		sum += i;
	}
	console.log(sum);
};

sumAll(1, 3);

// Do not edit below this line
module.exports = sumAll;
