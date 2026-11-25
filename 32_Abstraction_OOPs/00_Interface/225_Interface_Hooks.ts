interface TestHook{
(testName:string):void;
}

let beforeEachHook: TestHook= function(testname:string): void{
    console.log("Before....."+testname);
}
let afterEachHook: TestHook= function(testname:string): void{
    console.log("[After] Tearing down....."+testname);
}
beforeEachHook("Login Test");

