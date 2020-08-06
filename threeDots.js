const ages = [21, 22, 23, 20] ;
const ages2 = [20, 23, 25, 21] ;
const ages3 = [19, 23, 24, 22] ;
const allAges = ages.concat(ages2).concat([5]).concat(ages3) ;
const allAges2 = [...ages , ...ages2 , 5 , ...ages3];
//console.log(allAges2) ;

const business = 650 ;
const minister = 450 ;
const shochib = 250 ;
const maximum = Math.max(business , minister , shochib) ;
console.log(maximum) ;
//// for an array, finding the max =>
const total = [65, 450, 250, 700] ;
const max = Math.max(...total) ;
console.log(max) ;
