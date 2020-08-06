class Student{
    constructor(sId , sName){
        this.id = sId ;
        this.name = sName ;
        this.school = "Manarat Int College" ;
    }
}

const student1 = new Student(123 , "Ishrat") ;
const student2 = new Student(456 , "Reza") ;
console.log(student1 , student2) ;

/// to specifically call a property of a student
console.log(student1.name , student2.name) ;