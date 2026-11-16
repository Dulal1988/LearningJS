class Users{
    constructor(name){
        this.name=name;
    }
    greet(){
        return "Hi I am "+ this.name;
    }

}
let user1=new Users("Alice");
let user2=new Users("Bob");

console.log(user1.greet());
console.log(user2.greet());

