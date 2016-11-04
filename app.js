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
var count = 2;
var animal = "puppy";

if (count > 2) {
	console.log ("we have too many " + animal + "ies" - "s")
}else{
	console.log ("Welcome to the club")
}