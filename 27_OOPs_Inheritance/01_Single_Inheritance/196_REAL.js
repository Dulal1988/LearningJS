class BasePage{
    constructor(PageName){
        this.PageName=PageName;
    }

    open(){
        console.log("Opening the page");
    }
    close(){
        console.log("Closing the page");
    }
}

class LoginPage extends BasePage{
    
}

const p=new LoginPage();
p.open();
p.close();
