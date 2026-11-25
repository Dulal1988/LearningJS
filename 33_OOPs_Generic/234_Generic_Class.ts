class TestDataStores<T>{
    private items:T[]=[];

    add(item:T):void{
        this.items.push(item);
    }
    getFirst():T{
        return this.items[0]!;
    }

    getAll():T[]{
        return this.items;
    }

    count():number{
        return this.items.length;
    }
}

let statuscodeStroe=new TestDataStores<number>;
let testNamesStroe= new TestDataStores<string>;


statuscodeStroe.add(200);
statuscodeStroe.add(400);
statuscodeStroe.add(500);

testNamesStroe.add("Login Test");
testNamesStroe.add("Checkout Test");

console.log("Codes: " + statuscodeStroe.getAll());
console.log("First Code: "+ statuscodeStroe.getFirst());
console.log("Tests: "+testNamesStroe.getAll());
console.log("Test Count: "+ testNamesStroe.count());

