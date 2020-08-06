const person = {name: 'Ishrat Ara Amin' , age: 23 , job: "student" , address: "Rampura" , phone: '0194083' , bfName:'Rezaul Karim' , friend: 'Naziza Khan'}
//const bfName = person.bfName ;
const { phone , name , bfName} = person ; //// destruture
//const phone = person.phone ;

console.log(phone , name , bfName) ;

const friends = ["Naziza Khan" , "Tahniyat Bushra" , "Sayma Alam" , "Roza Khan" , "Faria Tabassum" , "Farzana Proma" , "Anisha Katha"] ;

const [firstFriend , nextFriend , ...restFriends] = friends ; ///// any var name but will go to the first index of array //// ...restFriends will be all other friends in a different array as ... is given

console.log(firstFriend , nextFriend , restFriends) ;

const complexObject = {
    name: 'ABC' ,
    info: {
        address : 'KolaBagan' ,
        leader : 'DEF' 
    }
}
const { leader } = complexObject.info ; //complexObject er bhitor info er bhitor er leader value
console.log(leader) ;