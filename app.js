var hero = "Scorpius Malfoy";
var gender = "Male";
var age = 17;
var weapon = "Excalibur";
var pronoun;
var xp;

// Conditional to set pronoun
if (gender === "Male"){
	pronoun = "his";
} else if (gender === "Female"){
	pronoun = "her";
}else{
	pronoun = "their";
}

// Conditionals for age
// If age is less than or equal to 18 -> set up xp "is just beginning"
// if age greater than or equal to 21 && less than or equal to 40
	// -> set xp = "has seen a few battles"
	// else set xp = "has lived through many epic battles"
if (age <= 18){
	xp ="is just beginning"
}else if (age >= 21 && age <= 40){
	xp = "has seen a few battles"
}else{
	xp = "has lived through many epic battles"
}
console.log (hero + " is our lovable hero, who " + xp + " with his trusty " + weapon + "!")

// 1 Fish 2 Fish
var count;
var animal = "doggo";
function animalHouse(animal) {
	if (count > 2) {
		console.log ("We have too many " + animal + "s")
	}else{
		console.log ("Welcome to the club")
	}
}
count(4);

//Assemble the Avengers
var hero = "Spiderman";

function avengersAssemble(hero) {
	if (avenger == hero) {
		console.log ("Avengers Assemble!" + avengersAssemble)
	}if (avenger == "ironman") {
		console.log ("")
	}else{
		console.log ("Sorry, you are not needed for this mission")
	}
}
