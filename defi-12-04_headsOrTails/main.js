const myBtn = document.getElementById("myBtn");
var result = document.getElementById("result");

myBtn.addEventListener('click', headsOrTails);

function headsOrTails(){
let random = Math.floor (Math.random() * 100);
console.log(random);
    if (random>=50) {
    result.innerHTML='Heads ' + random;
    }
    else {
    result.innerHTML='Tails ' + random;
     }
}