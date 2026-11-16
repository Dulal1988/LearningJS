class Animal{
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log(this.name + " is eating");
    }
    sleep(){
        console.log(this.name + " is sleeping");
    }
     foo(){
        console.log("Foo called !");
    }
}

class Dog extends Animal{
    constructor(name, breed){
       super(name);
        this.breed=breed;
    }
    bark(){
        super.foo();
        console.log(this.name + " is barking");
    }

}

let d=new Dog("Rex","Labrador");
d.eat(); // Rex is eating
d.sleep(); // Rex is sleeping
d.bark(); // Foo called ! , Rex is barking
console.log(d.breed);
