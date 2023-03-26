class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name){
        super(name)
        this.rabbitname = name;
        // this.created = Date.now();
    }
}

let rabbit = new Rabbit("white Rabbit");
console.log(rabbit.rabbitname);

// -----------------b2------------------

// class Clock {
//     constructor({ template }){
//         this.template = template
//     }
// }
// render(){
//     let date = new Date();

//     let hours = date.getHours();
//         if (hours < 10) hours 
// }