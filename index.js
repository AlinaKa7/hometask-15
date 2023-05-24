sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

winterSports = sports.slice(0, 5);
summerSports = sports.slice(5);
fruits = summerSports.splice(2, 2).concat(winterSports.splice(2, 1));

console.log(winterSports, summerSports, fruits);