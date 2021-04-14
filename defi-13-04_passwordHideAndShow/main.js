const input = document.getElementById("input") ;
const display = document.getElementById("display");

document.getElementById("checkbox").onmousedown = function() {mouseDown()};
document.getElementById("checkbox").onmouseup = function() {mouseUp()};

function mouseDown() {
     input.type = 'text';
     display.innerHTML = 'Hide';
     checkbox.checked=true;
}
function mouseUp() {
     input.type = 'password';
     display.innerHTML = 'Show';
};

// manière avec simple clic sur la checkbox 

/* document.getElementById('checkbox').addEventListener('click', function() {
     if(checkbox.checked){
     input.type = 'text';
     display.innerHTML = 'Hide';
     }
     else{
     input.type = 'password';
     display.innerHTML = 'Show';
     }
     }) */