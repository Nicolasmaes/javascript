/* for (let counter = 0; counter<2000; counter++){
    console.log(counter);
} */

/* let counter=0;
do{
    counter++;
    console.log(counter);
} while(counter<2000); */

/* let str = '';
loop1:
for (let counter = 0; counter < 2000; counter++) {
  if (counter === 52||counter === 1998) {
    continue loop1;
  } else if (counter === 50){
break;
  }
  str = str + counter;
}
console.log(str); */

let arr = [5, 7];
arr.toto = 'coucou';
for (let i in arr){
  console.log(i); 
}
/* loop2:
for (let i of arr) {
    if(i==7){
        continue loop2;
    }
  console.log(i); 
} */
  