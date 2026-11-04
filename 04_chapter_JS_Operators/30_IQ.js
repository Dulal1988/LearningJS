let environment = "staging";
let baseURL = environment === "prod" ? "http://api.example.com" : "http://staging.api.example.com";
console.log(baseURL);
