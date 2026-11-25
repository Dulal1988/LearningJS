

interface BasePage{
    url:string,
    title:string
}

interface LoginPage extends BasePage{
    usernameSelector:string;
    passwordSelector:string;
    loginButtonSelector:string;
}

interface FreeTrainPage extends BasePage{
    usernameSelector:string;
    submitButtonSelector:string;
}

const Loginpage:LoginPage={
    url: "/loing",
    title: "Login Page",
    usernameSelector:   "#username",
    passwordSelector:"#password",
    loginButtonSelector:"#login-btn"

}

const freeTrainPage:FreeTrainPage={
     url: "/loing",
    title: "Login Page",
    usernameSelector:   "#username",
    submitButtonSelector:"#password",
}

console.log("Url: "+Loginpage.url);
console.log("Title: "+Loginpage.title);
console.log("User Name fiels: "+Loginpage.usernameSelector);