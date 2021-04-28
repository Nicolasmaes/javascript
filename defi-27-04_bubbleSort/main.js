const chart = document.getElementById('chart');
let array = [];

for (let i = 0; i <100; i++){
let number = Math.floor(Math.random()*100);
array.push (number);

}

function draw() {
   chart.innerHTML =  '';
   array.forEach(function(x) {
       let div = document.createElement('div');
       div.style.height = x+'px';
       chart.appendChild(div);
   })
}
/* function sort() {
        array.sort(function(a, b){return a-b});
    } */

function bubbleSort () {
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < ( array.length - i -1 ); j++){
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if(array[j] > array[j+1]){
            // If the condition is true then swap them
            let temp = array[j];
            array[j] = array[j + 1];
            array[j+1] = temp;
            }
            draw();
        }
        }
    }

bubbleSort();