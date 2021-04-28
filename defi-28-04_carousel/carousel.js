const carrousel = document.getElementById('carrousel');
const btnRight = document.getElementById('btn-right');
const btnLeft = document.getElementById('btn-left');
let counter = 0;
carrousel.innerHTML = '0';

btnRight.addEventListener('click', rightClick);
function rightClick() {
     
    if (counter == 0) {
        carrousel.innerHTML = '1';
        carrousel.style.backgroundImage = "url('1.jfif')";
        carrousel.style.color = 'white';
        counter = 1;
        console.log(counter);
    }else if (counter == 1){
        carrousel.innerHTML = '2';
        carrousel.style.backgroundImage = "url('2.jpg')";
        carrousel.style.color = 'black';
        counter = 2;
        console.log(counter);
    }else if (counter == 2){
        carrousel.innerHTML = '3';
        carrousel.style.backgroundImage = "url('3.jpg')";

        counter = 3;
        console.log(counter);
    }else if (counter == 3){
        carrousel.innerHTML = '4';
        carrousel.style.backgroundColor = 'green';
        carrousel.style.backgroundImage = "";
        counter = 4;
        console.log(counter);
    }else {
        carrousel.innerHTML = '0';
        carrousel.style.backgroundColor = 'cornflowerblue';
        counter = 0;
        console.log(counter);
    }
}

btnLeft.addEventListener('click', leftClick);
function leftClick() {
     
    if (counter == 0) {
        carrousel.innerHTML = '4';
        carrousel.style.backgroundColor = 'green';
        counter = 4;
        console.log(counter);
    }else if (counter == 4){
        carrousel.innerHTML = '3';
        carrousel.style.backgroundImage = "url('3.jpg')";
        counter = 3;
        console.log(counter);
    }else if (counter == 3){
        carrousel.innerHTML = '2';
        carrousel.style.backgroundImage = "url('2.jpg')";
        counter = 2;
        console.log(counter);
    }else if (counter == 2){
        carrousel.innerHTML = '1';
        carrousel.style.backgroundImage = "url('1.jfif')";
        carrousel.style.color = 'white';
        counter = 1;
        console.log(counter);
    }else {
        carrousel.innerHTML = '0';
        carrousel.style.backgroundColor = 'cornflowerblue';
        carrousel.style.backgroundImage = "";
        carrousel.style.color = 'black';
        counter = 0;
        console.log(counter);
    }
}
/* setInterval(rightClick, 500); */
