const chart = document.getElementById('chart');
let array = [];

for (let i = 0; i <100; i++){
let number = Math.floor(Math.random()*100);
array.push (number);
draw();
sort();
}

function draw() {
   chart.innerHTML =  '';
   array.forEach(function(x) {
       let div = document.createElement('div');
       div.style.height = x+'px';
       chart.appendChild(div);

   })
}

function sort() {
        array.sort(function(a, b){return a-b});
    }

