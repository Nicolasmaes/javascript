const result = document.getElementById('result');
const btn = document.getElementById('submit');

btn.addEventListener('click',palCheck);

function palCheck(){
    let toTest = document.getElementById('totest').value;
    var re = /[^A-Za-z0-9]/g;
    toTest = toTest.toLowerCase().replace(re, "");
    let length = toTest.length;
    console.log(toTest);
    for (i = 0; i < length/2; i++) {
        if (toTest[i] !== toTest[length - 1 - i]) {
            console.log('bla');
            result.innerHTML = 'Palindrome raté'; 
            return false;
        }
    }
    result.innerHTML = 'Palindrome réussi'; 
}