//Evaluate these:
//#1
// [2] === [2] 
// {} === {} 

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
    constructor(name,type,color){
        this.name = name,
        this.type = type,
        this.color = color
    }
}

class Mamal extends Animal {
    constructor(name,type,color) {
        super(name,type,color)
    }

    sound(){
        return(`Moo! My name is ${this.name} and I'm a ${this.color} ${this.type}!`);
    }
}

const cow = new Mamal('Betty', 'cow','blue');

console.log(cow.sound());