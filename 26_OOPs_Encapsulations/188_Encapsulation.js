class Person{
    //hide my variables
    //child1 and child2
    #child1
    #child2
    constructor(name, child1,child2){
        this.name=name;
        this.#child1=child1;
        this.#child2=child2;
    }
    getChild(){
        return this.#child1;
    }
    setChild(changed_name){
        this.#child1=changed_name;
    }

    
}

let p=new Person("Promad","Vrad","Jenny");
//console.log(p.child1);
console.log(p.getChild());
p.setChild("VIRAd");
console.log(p.getChild());
