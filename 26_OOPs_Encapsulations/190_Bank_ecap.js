class ICICI{
#balance
    constructor(name, balance){
        this.name=name;
        this.#balance=balance;
    }

    getBalance(){
        return this.#balance;
    }
    setBalance(balance,isChasher){
        if(isChasher){
             this.#balance=balance;
        }else{
            console.log("Not allowed");               
             }
       
    }
}

let promod=new ICICI("Promod",1000);
console.log(promod.getBalance());

promod.setBalance(20000, false);
console.log(promod.getBalance());
promod.setBalance(20000, true);
console.log(promod.getBalance());