var input = document.getElementById("input");
var text = document.getElementById("warning");

input.addEventListener("keyup", function(event) {
  if (event.getModifierState("CapsLock") & event.getModifierState("NumLock")) {
    text.style.display = "block";
    text.innerHTML = '⚠️ Both lock are activated...';
  }
  else if (event.getModifierState("CapsLock")) {
    text.style.display = "block";
    text.innerHTML = '⚠️ Caps lock is activated...';
  }
  else if (event.getModifierState("NumLock")) {
    text.style.display = "block";
    text.innerHTML = '⚠️ Num lock is activated...';
  } 
  else {
    text.style.display = "none";
    text.innerHTML = '⚠️ Caps lock is activated...';
  }
});

let x = 100 % 2;
console.log(x);