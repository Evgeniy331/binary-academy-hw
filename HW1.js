var Animal, Cat, Dog, Woodpecker, myCat, myDog, woodpecker;

function getType(){

	if (this.__proto__ === Animal.prototype)
		return "Animal";

	if (this.__proto__ === Cat.prototype)
		return "Cat";

	if (this.__proto__ === Dog.prototype)
		return "Dog";

	if (this.__proto__ === Woodpecker.prototype)
		return "Woodpecker";

	return "Something else";
}


function Animal(age, name, sound, region) {
	this.age = age;
	this.name = name;
	this.sound = sound;
	this.region = region;
	return this;
}

Animal.prototype.say = function() {
	console.log(this.sound);
}

Cat = function (age, name, sound, region) {
	Animal.apply(this, arguments);
	return this;
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
Cat.prototype.goAway =  function() {
	return this.name + " go away!"; 
}

Dog = function (age, name, sound, region) {
	Animal.apply(this, arguments);
	return this;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.goAway =  function() {
	return this.name + " go away!"; 
}

Woodpecker = function (age, name, sound, region) {
	Animal.apply(this, arguments);
	return this;
}
Woodpecker.prototype = Object.create(Animal.prototype);
Woodpecker.prototype.constructor = Woodpecker;
Woodpecker.prototype.goAway =  function() {
	return this.name + " go away!"; 
}

//Example of Usage
myCat = new Cat(2, "Tyson", "meow", "region1");
myDog = new Dog(3, "Snoop Dogg", "Woof woof", "region2");
woodpecker = new Dog(3, "Woody", "knock knock", "region3");

myCat.say();
console.log("this is " + getType.call(myCat));
console.log(myCat.goAway());

myDog.say();
console.log("this is " + getType.call(myDog));
console.log(myDog.goAway());

woodpecker.say();
console.log("this is " + getType.call(woodpecker));
console.log(woodpecker.goAway());