class BasePage{
    verify(){
        console.log("Verifying the base page");
    }
}
class LoginPage extends BasePage{
    verify(){
        console.log("verify user name filed is exist");
        console.log("verify passworde filed is exist");
        console.log("verify login button is exist");
    }
}
class Dashboard extends BasePage{
    verify(){
        console.log("Verify: welcome message is showing");
        console.log("Veryfy : sidebar menu is loaded");
    }
}

let pages =[new BasePage(),new LoginPage(),new Dashboard()];
pages.forEach(function (page){
    page.verify();
    console.log("-------")
})