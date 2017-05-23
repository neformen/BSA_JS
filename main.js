class Fighter {
    constructor(name = 'Fighter', power = 5, health = 100) {
        this.name = name;
        this.power = power;
        this.health = health;
    }
    setDemage(damage = 0) {
        this.health -= damage;
        console.log(`name: ${this.name} health: ${this.health}`);
    }
    hit(enemy, point = 1) {
        const damage = this.power * point;
        enemy.setDemage(damage);
    }
}

class ImprovedFighter extends Fighter {
    doubleHit(enemy, point = 1) {
        const doublePoint = point * 2;
        super.hit(enemy, doublePoint);
    }
}

let checkPoints = (points = []) => {
    return points.some((point) => point <= 0);
} 

let fight = (warrior, enemy, ...points) => {
    const isInvalidData = checkPoints(points);
    if (isInvalidData) {
        console.log(`Invalid data`);
        return;
    }
    while (points.length > 0 ) {
        let point = points.pop();
        warrior.hit(enemy, point);
        if (enemy.health <= 0) {
            console.log(`Winner: ${warrior.name}`);
            return;
        } else {
            enemy.doubleHit(warrior, point);
            if (warrior.health <= 0) {
                console.log(`Winner: ${enemy.name}`);
                return;
            }
        }
    }
    console.log(`Draw!!!`);
}


let warriorFighter = new Fighter('Warrior', 2, 100);
let enemyImprovedFighter = new ImprovedFighter('Enemy', 5, 500);

fight(warriorFighter, enemyImprovedFighter, 5, 5, 15, 58, 6);




