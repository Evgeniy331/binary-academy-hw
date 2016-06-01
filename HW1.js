var Animal, Cat, Dog, Woodpecker, myCat, myDog, woodpecker;

function getType() {
	
	if (this.hasOwnProperty("sound")) {
		
		if (this.sound === "meow")
			return "Cat";

		if (this.sound === "Woof woof")
			return "Dog";


		if (this.sound === "knock knock")
			return "Woodpecker";
	}

	return "Something else";
}


function Animal(age, name, region, sound) {
	this.age = age;
	this.name = name;
	this.sound = sound;
	this.region = region;
	return this;
}

Animal.prototype.say = function() {
	console.log(this.sound);
}

Cat = function (age, name, region) {
	arguments[3] = "meow";
	arguments.length++;
	Animal.apply(this, arguments);
	return this;
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
Cat.prototype.goAway =  function() {
	return this.name + " go away!"; 
}

Dog = function (age, name, region) {
	arguments[3] = "Woof woof";
	arguments.length++;
	Animal.apply(this, arguments);
	return this;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.goAway =  function() {
	return this.name + " go away!"; 
}

Woodpecker = function (age, name, region) {
	arguments[3] = "knock knock";
	arguments.length++;
	Animal.apply(this, arguments);
	return this;
}
Woodpecker.prototype = Object.create(Animal.prototype);
Woodpecker.prototype.constructor = Woodpecker;
Woodpecker.prototype.goAway =  function() {
	return this.name + " go away!"; 
}

//Example of Usage
myCat = new Cat(2, "Tyson",  "region1");
myDog = new Dog(3, "Snoop Dogg", "region2");
woodpecker = new Woodpecker(1, "Woody","region3");

myCat.say();
console.log("this is " + getType.call(myCat));
console.log(myCat.goAway());

myDog.say();
console.log("this is " + getType.call(myDog));
console.log(myDog.goAway());

woodpecker.say();
console.log("this is " + getType.call(woodpecker));
console.log(woodpecker.goAway());