let responseTime=850;
let sla=1000;
let isResponseTimeAcceptable = responseTime <= sla ? "Yes" : "No";
console.log(`Response Time ${responseTime} ms, SLA ${sla} ms`);
console.log("Is response time acceptable? ", isResponseTimeAcceptable);