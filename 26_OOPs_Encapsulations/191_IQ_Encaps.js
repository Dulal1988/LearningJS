class TestCases{
    #status= "not run";
    static #count=0;
    constructor(name){
        this.name=name;
        TestCases.#count++;

    }
    run(pass){
        this.#status =pass ? "PASSED":"FAILED";

    }
    getStatus(){
        return this.#status;
    }
    static getCount(){
        return TestCases.#count;
    }
    static setCount(v){
        TestCases.#count=v;
    }

}

const tc=new TestCases("Login");
tc.run(true);
console.log(tc.getStatus());
new TestCases("Login");
new TestCases("Login");
new TestCases("Login");
new TestCases("Login");
console.log(TestCases.getCount());


