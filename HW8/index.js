var double = value => 2*value;

class Fighter {

	constructor(name = "", power = 1, health = 100) {
		this.name = name;
		this.power = power;
		this.health = health;
	}

	setDamage(damage) {

		this.health -= damage;

		if (this.health < 0)
			this.health = 0;

		console.log(`${this.name} health: ${this.health}`);
	}

	getName() {
		return this.name;
	}

	getHealth() {
		return this.health;
	}

	hit(enemy, point) {
		console.log(`${enemy.getName()} received ${point * this.power} damages from ${this.name}`);
		enemy.setDamage(point * this.power);
	}
};

class ImprovedFighter extends Fighter {
	
	doubleHit(enemy, point) {
		super.hit(enemy, double(point));
	}

};

function fight(fighter, improvedFighter, ...points) {

	let currPoint = 0;

	console.log(`${fighter.getName()} health: ${fighter.getHealth()}`);
	console.log(`${improvedFighter.getName()} health: ${improvedFighter.getHealth()}`);

	while (fighter.getHealth() > 0 && improvedFighter.getHealth() > 0) {
		
		fighter.hit(improvedFighter, points[currPoint]);
		
		if (improvedFighter.getHealth() === 0)
			break;

		improvedFighter.doubleHit(fighter, points[currPoint]);

		++currPoint;

		if (currPoint > points.length -1 )
			currPoint = 0;

	}

	if (fighter.getHealth() === 0)
		console.log(improvedFighter.getName() + " is winner!");
	else
		console.log(fighter.getName() + " is winner!");

}


//EXAMPLE OF USAGE
let fighter = new Fighter("fighter1", 4, 400);
let improvedFighter = new ImprovedFighter("fighter2", 3, 350);

let points = [23, 13];

fight(fighter, improvedFighter, ...points, 45);