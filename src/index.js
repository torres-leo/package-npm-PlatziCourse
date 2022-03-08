const messages = [
	'¡Good Morning🌞!',
	'Hey, nice to meet you👋🏼',
	'¡Good night honey🥰!',
	"we're going to the park at 8pm🏞",
	'We need to practice english!😉',
	'¡Hi! Im coming for the interview😁',
	"Let's go to eat pizzaaa🍕🍕",
	"Yea, mi phone it's low. We should talk later",
	"Hi, I'm a Web Developer. With solid skills on React, Node, JS andcl Sass",
];

const randomMsg = () => {
	const message = messages[Math.floor(Math.random() * messages.length)];
	console.log(message);
};

module.exports = { randomMsg };
