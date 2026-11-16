class APIClient{
    constructor(base_url){
        this.base_URL=base_url;
    }

    getPath(path){
        return this.base_URL +path;
    }
}
let staging=new APIClient("https://staging.api.com");
let prod=new APIClient("https://production.api.com");

console.log(staging.getPath("/users"));
console.log(prod.getPath("/prod/users"));

