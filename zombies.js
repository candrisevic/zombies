// First prompt for user
var user = prompt("Zombies are taking over... Which scenario would you like to perform? CITY, SUBURB, or FOREST.").toUpperCase();

switch (user) {
	case 'CITY':
		var city = prompt("You have chose to begin in a city... Do you want TORONTO, NEW YORK, TOKYO or do you want to LEAVE?").toUpperCase();
		if (city === 'TORONTO') {
			alert("You find yourself in Toronto, you are downtown and live on the top floor of a house.");
		}
		else if (city === "NEW YORK") {
			alert("You find yourself in New York, you are downtown and live on the 15th floor of an upscale apartment.");
		}
		else if (city === "TOKYO") {
			alert("You find yourself in Tokyo, you live in a small apartment with your dog.");
		}
		else {
			alert("You entered an incorrect option, please try again.");
		}
	break;

	case 'SUBURB':
	break;

	case 'FOREST':
	break;

	default:
}