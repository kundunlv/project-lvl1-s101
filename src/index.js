import readlineSync from 'readline-sync';

export default func = () = {	
	console.log("Welcome to the Brain Games!");
	const yourName = readlineSync.question('May I have your name? ');
	console.log(`Hi ${yourName}!`);
};