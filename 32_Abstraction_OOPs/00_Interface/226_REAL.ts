interface TestConfig{
    brwoser:string;
    headless:boolean;
    baseURL:string;
    timeout? : number;
    retries? : number;

}

let localConfig: TestConfig={
    brwoser:"chrome",
    headless: true,
    baseURL: "http://localhost:3000",

}

let ciConfig: TestConfig={
    brwoser:"chrome",
    headless: false,
    baseURL: "https://staging.app.com",
    timeout: 10000,
    retries: 3
    
}

console.log("CI: "+ciConfig.brwoser," | timeout"+ciConfig.timeout);
console.log("Local: "+localConfig.brwoser, " | timeout"+localConfig.timeout);
