class BaseTest{
    setup(){
        console.log("Base: Open the Browser");
    }
}
class APIPage extends BaseTest{
    setup(){
        console.log("APITest: Open the Browser");
    }
}
let btest=new BaseTest();
let test=new APIPage();
test.setup();
btest.setup();