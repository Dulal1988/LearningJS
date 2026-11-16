class BaseTest{
    constructor(){
        console.log("Parent");
    }
    setup(){
        console.log("Base: Open browser");
    }
    teardown(){
        console.log("Base: Close the browser");
    }
}
class UITest extends BaseTest{
    constructor(){
        super();
    }
    setup(){
        super.setup();
        console.log("UI Maximize the window");
    }
    teardown(){
        console.log("UI: take screenshot");
        super.teardown();

    }

    
}

let uitest=new UITest();
uitest.setup();
uitest.teardown();