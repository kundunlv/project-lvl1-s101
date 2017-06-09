import readlineSync from 'readline-sync';

export default func = () = {	
	console.log("$ src/bin/brain-games.js");
	console.log("Welcome to the Brain Games!");
	const actual = readlineSync.question('May I have your name? ');
	console.log('Hi ' + actual + '!');
	
};