class TestRunner{
    static totalTests=0;
    static passCount=0;
    constructor(name,Passed){
        this.name=name;
        TestRunner.totalTests++;
        if(Passed){
            TestRunner.passCount++;
        }

    }
}
let t1=new TestRunner("logingTest", true);
let t2=new TestRunner("SingnInTest", false);
let t3=new TestRunner("DashboardTest", true);
let t4=new TestRunner("SupportTest", true);


console.log(TestRunner.totalTests);
console.log(TestRunner.passCount);

console.log(t1.name);
console.log(t2.name);
console.log(t3.name);
console.log(t4.name);
