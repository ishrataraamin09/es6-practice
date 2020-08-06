class Parent{
    constructor(){
        this.fatherName = "Rezaul Karim"
    }
}

class Child extends Parent{
    constructor(name){
    super() ; 
    this.name = name ;
    }
    getFullName(){
        return this.name + " " + this.fatherName ;
    }
}

const baby = new Child("Rezan");
const baby2 = new Child("Inshirah");
console.log(baby.getFullName()) ;
console.log(baby2.getFullName()) ;