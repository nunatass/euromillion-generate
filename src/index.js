#!/usr/bin/env node
const inquirer = require("inquirer");

const generateRandomNumbers = (min, max, amount) => {
	const result = [];

	for (let i = 0; i < amount; i++) {
		const value = Math.floor(Math.random() * (max - min + 1)) + min;
		result.push(value);
	}

	return result;
};

inquirer
	.prompt({
		type: "list",
		message: "What do you want to generate?",
		name: "choice",
		choices: ["Main numbers", "Lucky star numbers", "Both"],
	})
	.then((answers) => {
		if (answers.choice === "Main numbers")
			console.log("Main numbers", generateRandomNumbers(1, 50, 5));
		else if (answers.choice === "Lucky star numbers")
			console.log("Lucky star numbers", generateRandomNumbers(1, 12, 2));
		else {
			console.log("Main numbers", generateRandomNumbers(1, 50, 5));
			console.log("Lucky star numbers", generateRandomNumbers(1, 12, 2));
		}
		console.log("Good Lucky!!!");
	});
