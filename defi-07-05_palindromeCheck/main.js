const result = document.getElementById('result');
const btn = document.getElementById('submit');

btn.addEventListener('click',palCheck);

function palCheck(){
    let toTest = document.getElementById('totest').value;
    toTest = toTest.toLowerCase();
    toTest = toTest.replace(/ /g, "");
    let i=toTest.length;
    console.log(toTest);
    console.log(i);
/*     let i = toTest.length -1;
    console.log(i); */
    if(toTest == revToTest) {
    result.innerHTML = 'Palindrome réussi';
    }  
    else {
        result.innerHTML = 'Palindrome raté'; 
    }
}

/*     if(toTest){
    result.innerHTML = 'Palindrome réussi';
    }
    else{

    } */

/* function isPalindrome(s,i) {
return (i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&isPalindrome(s,++i);
} */
/*     let revToTest = toTest.split('').reverse().join(''); */


/* function palindrome(mot) {
    mot = mot.toLowerCase().replaceAll(" ", "")
    let fin = mot.length - 1
    for(let i = 0; i < fin / 2; i++) {
    if(mot.charAt(i) !== mot.charAt(fin - i))
    return false
    }
    return true
    } */