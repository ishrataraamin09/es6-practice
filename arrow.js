// function doubleIt(num){
//     return num * 2 ;
// }

// const doubleIt = function(num){
//     return num * 2 ;
// }

/// => one parameter
const doubleIt = num => num * 2 ;
const result = doubleIt(50);
console.log(result);

/// => more than one parameter
const add = (x , y) => x + y ;
const total = add (10 , 9) ;
console.log(total) ;

/// => no parameter
const give5 = () => 5 ;
const result2 = give5() ;
console.log(result2) ;

/// => two parameters , more than one logic
const doMath = (a , b) => {
    const sum = a + b ;
    const diff = a - b ;
    const result = sum * diff ;
    return result ;
}
const result3 = doMath (7 , 5) ;
console.log(result3) ; 