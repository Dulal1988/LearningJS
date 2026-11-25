enum Browser{
    Chrome = "chrome",
    Firefox = "firefox",
    Safari = "safari",
    Edge = "edge"
}

function launchBrowser(browser:Browser):void{
    switch(browser){
        case Browser.Chrome : console.log("launching chrome browser"); break;
        case Browser.Firefox : console.log("Launching firefox brwoser");break;
        case Browser.Safari : console.log("launching safari browser"); break;
        case Browser.Edge : console.log("Lanuching Edge browser"); break;
        default: console.log("Unknown broser seleted");
    }
}

launchBrowser(Browser.Chrome);